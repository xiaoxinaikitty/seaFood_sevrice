import appConfig from '../../config/app.config.js'

function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <span className="app-header__eyebrow">Project Scaffold</span>
        <h1>{appConfig.appName}</h1>
      </div>
      <div className="app-header__meta">
        <span className="app-header__badge">React</span>
        <span className="app-header__badge">Vite</span>
        <span className="app-header__badge">Admin Architecture</span>
      </div>
    </header>
  )
}

export default AppHeader
