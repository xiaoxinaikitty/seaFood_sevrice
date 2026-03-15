import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="page app-container not-found-page">
      <span className="empty-state__badge">404</span>
      <h1>页面不存在</h1>
      <p>当前地址没有匹配到对应页面，请返回首页继续浏览海产品平台内容。</p>
      <Link className="primary-button" to="/">
        返回首页
      </Link>
    </div>
  )
}

export default NotFoundPage
