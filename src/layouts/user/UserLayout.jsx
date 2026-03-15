import { Outlet } from 'react-router-dom'
import SiteHeader from '../../components/layout/SiteHeader.jsx'
import SiteFooter from '../../components/layout/SiteFooter.jsx'

function UserLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <div className="site-shell__content">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}

export default UserLayout
