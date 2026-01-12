// ** Routes Imports
import AppRoutes from './Apps'
import StudioRoutes from './Studio'
import ClassRoutes from './Classes'
import AnnoucementRoutes from './Annoucement'
import MembershipRoutes from './Membership'
import UserRoutes from './User'
import SettingsRoutes from './Settings'
import PackageRoutes from './Package'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'

// ** Document title
const TemplateTitle = '%s - Yujaya Admin'

// ** Default Route
const DefaultRoute = '/dashboard/ecommerce'

// ** Merge Routes
const Routes = [
  ...DashboardRoutes,
  ...AppRoutes,
  ...StudioRoutes,
  ...ClassRoutes,
  ...AnnoucementRoutes,
  ...PackageRoutes,
  ...MembershipRoutes,
  ...UserRoutes,
  ...SettingsRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
