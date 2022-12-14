/**
 * 动态路由
 */
export const asyncRouterMap = [
    {
        path: 'welcome',
        name: 'welcome',
        component: 'welcome/index.vue',
        meta: {
            icon: 'IconSmileOutlined',
            title: '欢迎页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
    },
    {
        path: 'form',
        name: 'form',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconFormOutlined',
            title: '表单页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'basic',
                name: 'formBasic',
                component: 'form/basic/index.vue',
                meta: {
                    title: '基础表单',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'step',
                name: 'formStep',
                component: 'form/step/index.vue',
                meta: {
                    title: '分步表单',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'list',
        name: 'list',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconTableOutlined',
            title: '列表页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'basic',
                name: 'listBasic',
                component: 'list/basic/index.vue',
                meta: {
                    title: '基础列表',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'card',
                name: 'listCard',
                component: 'list/card/index.vue',
                meta: {
                    title: '卡片列表',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'search',
                name: 'listSearch',
                component: 'list/search/index.vue',
                meta: {
                    title: '搜索列表',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'exception',
        name: 'exception',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconWarningOutlined',
            title: '异常页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: '403',
                name: '403',
                component: 'exception/403.vue',
                meta: {
                    title: '403',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: '404',
                name: '404',
                component: 'exception/404.vue',
                meta: {
                    title: '404',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: '500',
                name: '500',
                component: 'exception/500.vue',
                meta: {
                    title: '500',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'result',
        name: 'result',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconCheckCircleOutlined',
            title: '结果页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'success',
                name: 'resultSuccess',
                component: 'result/success/index.vue',
                meta: {
                    title: '成功页',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'fail',
                name: 'resultFail',
                component: 'result/fail/index.vue',
                meta: {
                    title: '失败页',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'user',
        name: 'user',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconUserOutlined',
            title: '个人页',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'setting',
                name: 'userSetting',
                component: 'user/setting/index.vue',
                meta: {
                    title: '个人设置',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'system',
        name: 'system',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconSettingOutlined',
            title: '系统管理',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'user',
                name: 'systemUser',
                component: 'system/user/index.vue',
                meta: {
                    title: '用户管理',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'role',
                name: 'systemRole',
                component: 'system/role/index.vue',
                meta: {
                    title: '角色管理',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'menu',
                name: 'systemMenu',
                component: 'system/menu/index.vue',
                meta: {
                    title: '菜单管理',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'newMenu',
                name: 'systemNewMenu',
                component: 'system/newMenu/index.vue',
                meta: {
                    title: '新版菜单管理',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'dict',
                name: 'systemDict',
                component: 'system/dict/index.vue',
                meta: {
                    title: '字典管理',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'component',
        name: 'component',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconAppstoreAddOutlined',
            title: '组件',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'chart',
                name: 'componentChart',
                component: 'component/chart/index.vue',
                meta: {
                    title: '图表 Echarts',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'editor',
                name: 'componentEditor',
                component: 'component/editor/index.vue',
                meta: {
                    title: '富文本编辑器',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'cropper',
                name: 'componentCropper',
                component: 'component/cropper/index.vue',
                meta: {
                    title: '裁剪图片',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'upload',
                name: 'componentUpload',
                component: 'component/upload/index.vue',
                meta: {
                    title: '上传',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'filter',
                name: 'componentFilter',
                component: 'component/filter/index.vue',
                meta: {
                    title: '筛选',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'formTable',
                name: 'componentFormTable',
                component: 'component/formTable/index.vue',
                meta: {
                    title: '表单表格',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'qrCode',
                name: 'componentQrCode',
                component: 'component/qrCode/index.vue',
                meta: {
                    title: '二维码',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'region',
                name: 'componentRegion',
                component: 'component/region/index.vue',
                meta: {
                    title: '地区联动',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: '',
        name: 'link',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconLinkOutlined',
            title: '外部链接',
            isMenu: true,
            keepAlive: false,
            permission: '*',
        },
        children: [
            {
                path: 'https://github.com/mengxianghan/xy-admin',
                name: 'linkBaidu',
                meta: {
                    type: 'link',
                    title: 'Github',
                    target: '_blank',
                    isMenu: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'iframe',
        name: 'iframe',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconLayoutOutlined',
            title: 'Iframe',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'vue',
                name: 'iframeVue',
                component: 'RouteViewLayout',
                meta: {
                    type: 'iframe',
                    url: 'https://vuejs.org',
                    title: 'Vue',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'antd',
                name: 'iframeAntd',
                component: 'RouteViewLayout',
                meta: {
                    type: 'iframe',
                    url: 'https://www.antdv.com/docs/vue/introduce-cn',
                    title: 'Ant Design Vue',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
    {
        path: 'other',
        name: 'other',
        component: 'RouteViewLayout',
        meta: {
            icon: 'IconEllipsisOutlined',
            title: '其他',
            isMenu: true,
            keepAlive: true,
            permission: '*',
        },
        children: [
            {
                path: 'customLayout',
                name: 'otherCustomLayout',
                component: 'list/basic/index.vue',
                meta: {
                    layout: 'CustomLayout',
                    title: '自定义框架',
                    isMenu: true,
                    target: '_blank',
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'multiTab',
                name: 'otherMultiTab',
                component: 'other/multiTab/index.vue',
                meta: {
                    title: '多标签操作',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
            {
                path: 'badge',
                name: 'otherBadge',
                component: 'other/badge/index.vue',
                meta: {
                    title: '菜单徽标',
                    isMenu: true,
                    keepAlive: true,
                    permission: '*',
                },
            },
        ],
    },
]
