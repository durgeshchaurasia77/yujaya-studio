import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'settings',
    title: 'Settings',
    icon: <Home />,
    children: [
      // {
      //   id: 'analyticsDash',
      //   title: 'Studio Information',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      {
        id: 'analyticsDash',
        title: 'Location',
        icon: <PlusSquare />,
        navLink: '/settings/add-location'
      },
      {
        id: 'analyticsDash',
        title: 'Access Card',
        icon: <PlusSquare />,
        navLink: '/settings/add-access-card'
      },
      // {
      //   id: 'analyticsDash',
      //   title: 'Gift Card',
      //   icon: <PlusSquare />,
      //   navLink: '/settings/add-gift-card'
      // },
      {
        id: 'analyticsDash',
        title: 'Gift Card List',
        icon: <PlusSquare />,
        navLink: '/settings/list-gift-card'
      }
      // ,
      // {
      //   id: 'analyticsDash',
      //   title: 'Yujaya Pay',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Integration',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Promo Code',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Notification',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Policy & Rules',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Import Members',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Membership Agrement',
      //   icon: <Circle />,
      //   navLink: '#'
      // },
      // {
      //   id: 'analyticsDash',
      //   title: 'Receipt Customization',
      //   icon: <Circle />,
      //   navLink: '#'
      // }
    ]
  }
]
