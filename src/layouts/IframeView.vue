<template>
    <div v-show="'iframe' === $route.meta.type"
         class="iframe-view">
        <iframe v-for="(item) in iframeList"
                v-show="$route.meta.url === item.meta.url"
                :src="item.meta.url"
                :key="item.meta.url"
                class="iframe"></iframe>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useMultiTabStore } from '@/store'

export default {
    name: 'IframeView',
    setup() {
        const multiTabStore = useMultiTabStore()
        const iframeList = computed(() => multiTabStore.iframeList)
        return {
            iframeList,
        }
    },
}
</script>

<style lang="less" scoped>
.iframe {
    width: 100%;
    height: 100%;
    border: none;


    &-view {
        position: absolute;
        left: -@margin-md;
        right: -@margin-md;
        top: -@margin-md;
        bottom: -@margin-md;
    }
}
</style>
