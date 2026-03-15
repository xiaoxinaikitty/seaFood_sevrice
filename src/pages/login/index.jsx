import { Link } from 'react-router-dom'

function LoginPage() {
  return (
    <div className="auth-page app-container">
      <section className="auth-card auth-card--visual">
        <span className="section-heading__eyebrow">Welcome Back</span>
        <h1>登录海产品服务平台</h1>
        <p>继续查看收藏商品、学习订单、供需信息和消息通知。</p>
        <ul className="auth-highlights">
          <li>统一账号体系，兼容普通用户与供应者</li>
          <li>模拟订单流程，适合课程答辩展示</li>
          <li>资讯、供需、商品三类内容统一整合</li>
        </ul>
      </section>
      <section className="auth-card auth-card--form">
        <div className="auth-card__header">
          <h2>账号登录</h2>
          <p>演示页数据为静态模拟，后续可直接接入认证接口。</p>
        </div>
        <form className="form-grid">
          <label>
            <span>用户名 / 手机号 / 邮箱</span>
            <input placeholder="请输入登录账号" type="text" />
          </label>
          <label>
            <span>密码</span>
            <input placeholder="请输入密码" type="password" />
          </label>
          <div className="form-row form-row--between">
            <label className="checkbox-field">
              <input type="checkbox" />
              <span>记住登录</span>
            </label>
            <Link className="text-link" to="/register">
              去注册
            </Link>
          </div>
          <button className="primary-button primary-button--block" type="button">
            登录平台
          </button>
        </form>
      </section>
    </div>
  )
}

export default LoginPage
