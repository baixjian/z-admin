<template>
    <a-row :gutter="12">
        <a-col :span="12">
            <a-card>
                <x-cropper :src="cropperImg"
                           :aspect-ratio="aspectRatio"
                           :quality="quality"
                           ref="cropperRef"/>
            </a-card>

            <a-card title="参数和方法"
                    class="mt-8-2">
                <a-form layout="vertical">
                    <a-row :gutter="16">
                        <a-col :span="12">
                            <a-form-item label="缩放比例">
                                <a-select v-model:value="aspectRatio">
                                    <a-select-option :key="0">自由</a-select-option>
                                    <a-select-option :key="1/1">1:1</a-select-option>
                                    <a-select-option :key="4/3">4:3</a-select-option>
                                    <a-select-option :key="16/9">16:9</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="图像压缩率"
                                         extra="取值范围 0~1">
                                <a-select v-model:value="quality">
                                    <a-select-option :key="0.1">0.1</a-select-option>
                                    <a-select-option :key="0.5">0.5</a-select-option>
                                    <a-select-option :key="1">1</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="24">
                            <a-space>
                                <a-button @click="handleBase64">Base64</a-button>
                                <a-button @click="handleBlob">Blob</a-button>
                                <a-button @click="handleFile">File</a-button>
                            </a-space>
                        </a-col>
                    </a-row>
                </a-form>
            </a-card>
        </a-col>

        <a-col v-if="src"
               :span="12">
            <a-spin :spinning="loading">
                <a-card title="结果">
                    <template #extra>类型：{{ type }}</template>
                    <img :src="src">
                </a-card>
            </a-spin>
        </a-col>
    </a-row>
</template>

<script>
import {ref} from 'vue'

import cropperImg from './images/cropper.png'

export default {
    name: 'componentCropper',
    setup() {
        const aspectRatio = ref(0)
        const quality = ref(1)
        const cropperRef = ref()
        const src = ref('')
        const type = ref('')
        const loading = ref(false)

        function handleBase64() {
            type.value = 'Base64'
            _setLoading()
            cropperRef.value.getBase64()
                      .then((data) => {
                          src.value = data
                      })
        }

        function handleBlob() {
            type.value = 'Blob'
            _setLoading()
            cropperRef.value.getBlob()
                      .then((data) => {
                          src.value = URL.createObjectURL(data)
                      })
        }

        function handleFile() {
            type.value = 'File'
            _setLoading()
            cropperRef.value.getFile('test.jpg')
                      .then(data => {
                          src.value = URL.createObjectURL(data)
                      })
        }

        function _setLoading() {
            loading.value = true
            setTimeout(() => {
                loading.value = false
            }, 500)
        }

        return {
            cropperImg,
            aspectRatio,
            quality,
            cropperRef,
            src,
            type,
            loading,
            handleBase64,
            handleBlob,
            handleFile,
        }
    },
}
</script>

<style scoped>

</style>
