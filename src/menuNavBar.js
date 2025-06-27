import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
  mdiReact
} from '@mdi/js'

export default [
  {
    icon: mdiMenu,
    label: '菜单示例',
    menu: [
      {
        icon: mdiClockOutline,
        label: '选项一'
      },
      {
        icon: mdiCloud,
        label: '选项二'
      },
      {
        isDivider: true
      },
      {
        icon: mdiCrop,
        label: '最后选项'
      }
    ]
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: '我的资料',
        to: '/profile'
      },
      {
        icon: mdiCogOutline,
        label: '设置'
      },
      {
        icon: mdiEmail,
        label: '消息'
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: '退出登录',
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: '明暗主题',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiGithub,
    label: 'GitHub',
    isDesktopNoLabel: true,
    href: 'https://github.com/justboil/admin-one-vue-tailwind',
    target: '_blank'
  },
  {
    icon: mdiReact,
    label: 'React版本',
    isDesktopNoLabel: true,
    href: 'https://github.com/justboil/admin-one-react-tailwind',
    target: '_blank'
  },
  {
    icon: mdiLogout,
    label: '退出登录',
    isDesktopNoLabel: true,
    isLogout: true
  }
]
