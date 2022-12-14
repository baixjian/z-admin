<template>
    <div class="x-upload x-upload-image"
         :class="{
             'x-upload--round': round,
             'x-upload--disabled': disabled
         }"
         ref="uploadImageRef">
        <a-upload v-if="showUploadBtn"
                  :show-upload-list="false"
                  :multiple="multiple"
                  :before-upload="onBeforeUpload"
                  :custom-request="({ file }) => customRequest(file)"
                  :accept="accept"
                  :disabled="disabled">
            <slot v-if="$slots.default"></slot>
            <template v-else>
                <div class="x-upload-btn"
                     :class="{
                         'x-upload-btn--hover': !disabled
                     }"
                     :style="{
                         width: `${width}px`,
                         height: `${height}px`
                     }">
                    <component :is="icon"
                               class="x-upload-btn__icon" />
                    <div v-if="text"
                         class="x-upload-btn__txt">
                        {{ text }}
                    </div>
                </div>
            </template>
        </a-upload>
        <div v-for="(item, index) in fileList"
             :key="item.key"
             class="x-upload-item j-upload-item"
             :class="{
                 'x-upload-item--error': STATUS_ENUM.is('error', item.status),
             }"
             :style="{
                 width: `${width}px`,
                 height: `${height}px`
             }">
            <img :src="item.src">
            <template v-if="['error', 'done'].includes(STATUS_ENUM.getKey(item.status))">
                <div class="x-upload-actions">
                    <div v-if="STATUS_ENUM.is('done', item.status)"
                         class="x-upload-action"
                         @click="handlePreview(item)">
                        <icon-eye-outlined />
                    </div>
                    <div v-if="!disabled"
                         class="x-upload-action"
                         @click="handleRemove(index)">
                        <icon-delete-outlined />
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="x-upload-status">
                    <template v-if="STATUS_ENUM.is('uploading', item.status)">
                        <div>{{ item.percent }}%</div>
                        <a-progress :show-info="false"
                                    :stroke-width="4"
                                    :percent="item.percent" />
                    </template>
                    <template v-if="STATUS_ENUM.is('wait', item.status)">
                        <div>{{ STATUS_ENUM.getDesc(item.status) }}</div>
                        <span class="x-upload-action"
                              @click="handleCancel(item)">????????????</span>
                    </template>
                </div>
            </template>
        </div>
    </div>

    <!--??????-->
    <cropper-modal v-if="cropper && !multiple"
                   ref="cropperModalRef"
                   :aspect-ratio="aspectRatio"
                   :quality="quality"
                   @ok="(file) => customRequest(file)" />
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from 'vue'
import { nanoid } from 'nanoid'
import { Form, message } from 'ant-design-vue'
import { mergeDeep } from '@/utils'
import { STATUS_ENUM } from './config'

import Sortable from 'sortablejs'
import filesizeParser from 'filesize-parser'
import filesize from 'filesize'
import some from 'lodash/some'
import findIndex from 'lodash/findIndex'
import includes from 'lodash/includes'
import api from '@/api'

import Preview from '../Preview'
import CropperModal from '../CropperModal.vue'

/**
 * ????????????
 * @property {string | array} modelValue v-model
 * @property {boolean} multiple ????????????????????????false
 * @property {number} width ???????????????120????????????px
 * @property {number} height ???????????????120????????????px
 * @property {string} icon ??????
 * @property {string} text ??????
 * @property {string | number} maxSize ????????????????????????2M
 * @property {string} accept ????????????????????????????????????image/*
 * @property {boolean} disabled ??????????????????false
 * @property {boolean} round ??????
 * @property {boolean} cropper ?????????????????????????????????????????????false???
 * @property {number} aspectRatio ??????????????????????????????
 * @property {number} quality ??????????????????????????????0-1????????????1
 * @property {boolean} dragsort ????????????????????????false
 */
export default {
    name: 'XUploadImage',
    components: { CropperModal },
    props: {
        modelValue: {
            type: [String, Array],
            default: '',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        width: {
            type: Number,
            default: 120,
        },
        height: {
            type: Number,
            default: 120,
        },
        icon: {
            type: String,
            default: 'icon-plus-outlined',
        },
        text: {
            type: String,
            default: '',
        },
        maxSize: {
            type: [String, Number],
            default: '2M',
        },
        accept: {
            type: String,
            default: 'image/*',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        round: {
            type: Boolean,
            default: false,
        },
        cropper: {
            type: Boolean,
            default: false,
        },
        aspectRatio: {
            type: Number,
            default: 0,
        },
        quality: {
            type: Number,
            default: 1,
        },
        dragsort: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const { onFieldChange } = Form.useInjectFormItemContext()

        const { multiple, maxSize, modelValue, cropper, dragsort, disabled } = toRefs(props)

        const fileList = ref([])
        const cropperModalRef = ref()
        const uploadImageRef = ref()
        const sortable = ref(null)

        const loading = computed(() => fileList.value.some(o => STATUS_ENUM.is('uploading', o.status)))
        const showUploadBtn = computed(() => multiple.value || !fileList.value.length)
        const dragsortDisabled = computed(() => (dragsort.value && !disabled.value) ? false : true)

        watch(() => modelValue.value, () => {
            init()
        })


        watch(() => dragsortDisabled.value, (val) => {
            initDragSort()
        })

        onMounted(() => {
            init()
            initDragSort()
        })

        function init() {
            const currentValue = modelValue.value
                ? modelValue.value instanceof Array
                    ? modelValue.value
                    : [modelValue.value]
                : []
            if (currentValue.length) {
                // ????????????????????????
                fileList.value.forEach((item, index) => {
                    // ????????? && ???????????? modelValue ???
                    if (STATUS_ENUM.is('done', item.status) && !includes(currentValue, item.src)) {
                        fileList.value.splice(index, 1)
                    }
                })
                // ?????????????????? modelValue ????????????
                currentValue.forEach(item => {
                    if (!some(fileList.value, { src: item })) {
                        fileList.value.push(getItem({ src: item }))
                    }
                })
            } else {
                fileList.value = []
            }
        }

        /**
         * ?????????????????????
         */
        function initDragSort() {
            if (sortable.value) {
                sortable.value.destroy()
                sortable.value = null
            }
            sortable.value = Sortable.create(uploadImageRef.value, {
                handle: '.j-upload-item',
                animation: 200,
                disabled: dragsortDisabled.value,
                onEnd: ({ newIndex, oldIndex }) => {
                    const dragData = fileList.value.splice(oldIndex - 1, 1)[0]
                    fileList.value.splice(newIndex - 1, 0, dragData)
                    trigger()
                }
            })
        }

        /**
         * ??????
         * @param {*} record 
         */
        function handlePreview(record) {
            Preview({
                urls: [record.src],
            })
        }

        /**
         * ??????
         * @param index
         */
        function handleRemove(index) {
            fileList.value.splice(index, 1)
            trigger()
        }

        /**
         * ????????????
         */
        function handleCancel({ key }) {
            const index = fileList.value.findIndex(o => o.key === key)
            fileList.value.splice(index, 1)
        }

        /**
         * ?????????
         */
        function onBeforeUpload(file) {
            const maxFileSize = maxSize.value instanceof Number ? maxSize.value : filesizeParser(maxSize.value, { base: 10.24 })
            const checkFileSize = file?.size < maxFileSize
            if (!checkFileSize) {
                message.warning(`??????????????? ${filesize(maxFileSize, { base: 10.24 })} ?????????`)
            }
            const checkCropper = cropper.value
                ? multiple.value ? true : false
                : true
            if (cropper.value && !multiple.value) {
                const fileReader = new FileReader()
                fileReader.readAsDataURL(file)
                fileReader.onload = (e) => {
                    cropperModalRef.value?.handleOpen(e.target.result)
                }
            }
            return checkFileSize && checkCropper
        }

        /**
         * ????????????
         */
        function onDragEnd() {
            trigger()
        }

        /**
         * ???????????????
         */
        function customRequest(file) {
            const record = getItem({
                key: file.uid,
                src: URL.createObjectURL(file),
                status: STATUS_ENUM.getValue('wait'),
                percent: 0,
                file,
            })
            // ????????????????????????
            if (multiple.value) {
                // ????????????
                fileList.value.push(record)
            } else {
                // ???????????????
                fileList.value = [record]
            }
            if (!loading.value) {
                doUpload()
            }
        }

        /**
         * ????????????
         */
        async function doUpload() {
            // ?????????????????????????????????
            if (!some(fileList.value, { status: STATUS_ENUM.getValue('wait') })) {
                return
            }
            const index = findIndex(fileList.value, { status: STATUS_ENUM.getValue('wait') })
            const record = fileList.value[index]
            record.status = STATUS_ENUM.getValue('uploading')
            const { code, data } = await api.common.upload({
                file: record?.file,
            })
            if (200 === code) {
                // ????????????????????????????????????????????????
                record.percent = 100
                record.status = STATUS_ENUM.getValue('done')
                // record.src = data?.src
                trigger()
                await doUpload()
            }
        }

        /**
         * ????????????
         * @return {{}}
         */
        function getItem(obj) {
            return mergeDeep({
                key: nanoid(),
                src: '',
                status: STATUS_ENUM.getValue('done'),
                percent: 100,
            }, obj)
        }

        /**
         * ??????
         */
        function trigger() {
            let value = ''
            // ??????????????????
            if (multiple.value) {
                // ??????
                value = fileList.value
                    .filter(item => STATUS_ENUM.is('done', item.status))
                    .map(item => item?.src ?? item)
            } else {
                // ??????
                value = (fileList.value.length ? fileList.value[0]?.src : fileList.value[0]) ?? ''
            }
            emit('update:modelValue', value)
            onFieldChange()
        }

        return {
            STATUS_ENUM,
            fileList,
            showUploadBtn,
            cropperModalRef,
            uploadImageRef,
            multiple,
            handlePreview,
            handleRemove,
            handleCancel,
            onBeforeUpload,
            onDragEnd,
            customRequest,
        }
    },
}
</script>

<style lang="less"
       scoped>
       .x-upload {
           display: flex;
           flex-wrap: wrap;
           gap: @margin-sm;
       
           // ??????
           &--round {
       
               .x-upload-btn,
               .x-upload-item {
                   border-radius: @border-radius-round;
               }
           }
       
           // ??????
           &--disabled {
               .x-upload-btn {
                   opacity: .5;
                   cursor: not-allowed;
               }
           }
       
           &-btn {
               border: @border-color-base dashed 1px;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               cursor: pointer;
               transition: all .2s;
       
               &--hover {
                   &:hover {
                       border-color: @primary-color;
                       color: @primary-color;
                   }
               }
       
               &__icon {
                   font-size: 20px;
               }
       
               &__txt {
                   margin: @margin-xss 0 0;
               }
           }
       
           &-item {
               display: flex;
               align-items: center;
               justify-content: center;
               position: relative;
               overflow: hidden;
               background: @background-color-base;
               border-radius: @border-radius-base;
       
               img {
                   width: 100%;
                   height: 100%;
                   object-fit: cover;
               }
       
               &:hover {
                   .x-upload-actions {
                       opacity: 1;
                   }
               }
       
               &--error {
                   &::before {
                       position: absolute;
                       content: '';
                       width: 100%;
                       height: 100%;
                       border: @error-color dashed 1px;
                       z-index: 2;
                       pointer-events: none;
                   }
               }
           }
       
           &-actions {
               position: absolute;
               display: flex;
               align-items: center;
               justify-content: center;
               gap: 4px;
               width: 100%;
               height: 100%;
               left: 0;
               top: 0;
               background: rgba(0, 0, 0, .25);
               opacity: 0;
               transition: all .15s;
           }
       
           &-action {
               min-width: 24px;
               height: 24px;
               display: flex;
               align-items: center;
               justify-content: center;
               color: #fff;
               border-radius: 2px;
               cursor: pointer;
               background: rgba(0, 0, 0, .25);
               transition: all .15s;
               font-size: 12px;
               padding: 0 4px;
       
               &:hover {
                   background: rgba(0, 0, 0, .5);
               }
           }
       
           &-status {
               position: absolute;
               width: 100%;
               height: 100%;
               left: 0;
               top: 0;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               background: rgba(0, 0, 0, .25);
               padding: 0 16px;
               color: #fff;
       
               &--error {
                   color: @error-color;
               }
       
               &--done {
                   color: @success-color;
               }
           }
       }
       </style>
