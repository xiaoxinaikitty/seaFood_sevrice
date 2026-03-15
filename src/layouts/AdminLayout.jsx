import AppHeader from '../components/layout/AppHeader.jsx'
import AppSidebar from '../components/layout/AppSidebar.jsx'
import PageContainer from '../components/layout/PageContainer.jsx'

function AdminLayout({ children }) {
  return (
    <div className="app-shell">
      <AppSidebar />
      <div className="app-shell__main">
        <AppHeader />
        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  )
}

export default AdminLayout
