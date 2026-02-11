import {
  Activity,
  Layers,
  Move,
  Link,
  Shuffle,
  Sliders
} from 'react-feather'

export default [
  {
    id: 'posture',
    title: 'Posture',
    icon: <Activity size={20} />,
    children: [
      {
        id: 'practiceCategory',
        title: 'Practice Category',
        icon: <Layers size={16} />,
        navLink: '/posture/practice-category/list'
      },
      {
        id: 'postureList',
        title: 'Posture',
        icon: <Move size={16} />,
        navLink: '/posture/posture/list'
      },
      {
        id: 'assignPosturePractice',
        title: 'Assign Posture Practice',
        icon: <Link size={16} />,
        navLink: '/posture/assign-posture-practice/list'
      },
      {
        id: 'postureSequence',
        title: 'Posture Sequence',
        icon: <Shuffle size={16} />,
        navLink: '/posture/posture-sequence/list'
      },
      {
        id: 'clientParameters',
        title: 'Client Parameters',
        icon: <Sliders size={16} />,
        navLink: '/posture/client-parameters/list'
      }
    ]
  }
]
