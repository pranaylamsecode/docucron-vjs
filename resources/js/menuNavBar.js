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
  mdiGithub
} from '@mdi/js'

export default [
  /* {
    icon: mdiMenu,
    label: 'Sample menu',
    menu: [
      {
        icon: mdiClockOutline,
        label: 'Item One'
      },
      {
        icon: mdiCloud,
        label: 'Item Two'
      },
      {
        isDivider: true
      },
      {
        icon: mdiCrop,
        label: 'Item Last'
      }
    ]
  }, */
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'My Profile',
        to: '/admin/edit-account-info'
      },
      {
        icon: mdiCogOutline,
        label: 'Settings'
      },
      {
        icon: mdiEmail,
        label: 'Messages'
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: 'Log Out',
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiGithub,
    label: 'GitHub',
    isDesktopNoLabel: true,
    href: 'https://github.com/balajidharma/laravel-vue-admin-panel',
    target: '_blank'
  },
  {
    icon: mdiLogout,
    label: 'Log out',
    isDesktopNoLabel: true,
    isLogout: true
  }
]
