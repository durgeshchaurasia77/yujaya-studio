// ** Routes Imports
import AppRoutes from './Apps'
import StudioRoutes from './Studio'
import ClassRoutes from './Classes'
import AnnoucementRoutes from './Annoucement'
import MembershipRoutes from './Membership'
import UserRoutes from './User'
import StudiosRoutes from './Studios'
import PackageRoutes from './Package'
import SettingsRoutes from './Settings'
import FormRoutes from './Forms'
import PagesRoutes from './Pages'
import TablesRoutes from './Tables'
import ChartMapsRoutes from './ChartsMaps'
import DashboardRoutes from './Dashboards'
import UiElementRoutes from './UiElements'
import ExtensionsRoutes from './Extensions'
import PageLayoutsRoutes from './PageLayouts'
import StudentRoutes from './StudentRoutes'
import PostureRoutes from './Posture'
import InstructorRoutes from './InstructorRoutes'
import TherapistRoutes from './TherapistRoutes'
import ClientRoutes from './ClientRoutes'
import StaffRoutes from './StaffRoutes'
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
  ...StudiosRoutes,
  ...SettingsRoutes,
  ...PostureRoutes,
  ...PagesRoutes,
  ...UiElementRoutes,
  ...ExtensionsRoutes,
  ...PageLayoutsRoutes,
  ...FormRoutes,
  ...TablesRoutes,
  ...ChartMapsRoutes,
  ...StudentRoutes,
  ...InstructorRoutes,
  ...TherapistRoutes,
  ...ClientRoutes,
  ...StaffRoutes
]

export { DefaultRoute, TemplateTitle, Routes }
