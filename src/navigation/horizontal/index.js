// ** Navigation sections imports
import apps from './apps'
import studio from './studio'
import pages from './pages'
import others from './others'
import dashboards from './dashboards'
import classes from './classes'
import schedule from './schedule'
import packages from './packages'
import membership from './membership'
import user from './user'
import settings from './settings'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import chartsAndMaps from './charts-maps'

// ** Merge & Export
export default [...dashboards, ...classes, ...schedule, ...packages, ...membership, ...user, ...settings]
// export default [...dashboards, ...studio, ...apps, ...uiElements, ...formsAndTables, ...pages, ...chartsAndMaps, ...others]
