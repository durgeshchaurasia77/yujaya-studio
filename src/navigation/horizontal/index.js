// ** Navigation sections imports
import apps from './apps'
import studio from './studio'
import pages from './pages'
import others from './others'
import dashboards from './dashboards'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import chartsAndMaps from './charts-maps'

// ** Merge & Export
export default [...dashboards, ...studio, ...apps]
// export default [...dashboards, ...studio, ...apps, ...uiElements, ...formsAndTables, ...pages, ...chartsAndMaps, ...others]
