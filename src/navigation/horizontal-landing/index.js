import classes from './classes'
import workshop from './workshop'
import courses from './courses'
import teacher from './teacher'
import training from './training'
import packages from './packages'
import membership from './membership'
import retreat from './retreat'

export default [
  {
    header: 'Landing'
  },
  ...classes,
  ...workshop,
  ...courses,
  ...teacher,
  ...training,
  ...packages,
  ...membership,
  ...retreat
]