import {
  Briefcase,
  MapPin,
  CreditCard,
  Gift,
  Settings,
  Tag
} from 'react-feather'

export default [
  {
    id: 'studio',
    title: 'Studio',
    icon: <Briefcase size={20} />,
    children: [
      {
        id: 'studioLocation',
        title: 'Location',
        icon: <MapPin size={16} />,
        navLink: '/studios/add-location'
      },
      {
        id: 'accessCard',
        title: 'Access Card',
        icon: <CreditCard size={16} />,
        navLink: '/studios/add-access-card'
      },
      {
        id: 'giftCardList',
        title: 'Gift Card List',
        icon: <Gift size={16} />,
        navLink: '/studios/list-gift-card'
      },
      {
        id: 'studioIntegration',
        title: 'Integration',
        icon: <Settings size={16} />,
        navLink: '/studios/integration'
      },
      {
        id: 'promoCode',
        title: 'Promo Code',
        icon: <Tag size={16} />,
        navLink: '/studios/list-promo-code'
      }
    ]
  }
]
