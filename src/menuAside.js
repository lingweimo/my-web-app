import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: '仪表盘'
  },
  {
    to: '/tables',
    label: '表格',
    icon: mdiTable
  },
  {
    to: '/forms',
    label: '表单',
    icon: mdiSquareEditOutline
  },
  {
    to: '/ui',
    label: '界面组件',
    icon: mdiTelevisionGuide
  },
  {
    to: '/responsive',
    label: '响应式布局',
    icon: mdiResponsive
  },
  {
    to: '/',
    label: '样式',
    icon: mdiPalette
  },
  {
    to: '/profile',
    label: '个人资料',
    icon: mdiAccountCircle
  },
  {
    to: '/login',
    label: '登录',
    icon: mdiLock
  },
  {
    to: '/error',
    label: '错误页面',
    icon: mdiAlertCircle
  },
  {
    label: '下拉菜单',
    icon: mdiViewList,
    menu: [
      {
        label: '选项一'
      },
      {
        label: '选项二'
      }
    ]
  },
  {
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    label: 'GitHub',
    icon: mdiGithub,
    target: '_blank'
  },
  {
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    label: 'React版本',
    icon: mdiReact,
    target: '_blank'
  }
]
