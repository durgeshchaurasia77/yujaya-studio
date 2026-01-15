import { Home, Circle, PlusSquare } from 'react-feather'

export default [
  {
    id: 'studios',
    title: 'Studio',
    icon: <Home />,
    children: [
      {
        id: 'analyticsDash',
        title: 'Location',
        icon: <PlusSquare />,
        navLink: '/studios/add-location'
      },
      {
        id: 'analyticsDash',
        title: 'Access Card',
        icon: <PlusSquare />,
        navLink: '/studios/add-access-card'
      },
      {
        id: 'analyticsDash',
        title: 'Gift Card List',
        icon: <PlusSquare />,
        navLink: '/studios/list-gift-card'
      },
      {
        id: 'analyticsDash',
        title: 'Integration',
        icon: <PlusSquare />,
        navLink: '/studios/integration'
      },
      {
        id: 'analyticsDash',
        title: 'Promo Code',
        icon: <PlusSquare />,
        navLink: '/studios/list-promo-code'
      }
    ]
  }
]
