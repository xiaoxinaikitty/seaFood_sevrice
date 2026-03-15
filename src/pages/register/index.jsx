import { Link } from 'react-router-dom'

function RegisterPage() {
  return (
    <div className="auth-page app-container">
      <section className="auth-card auth-card--visual auth-card--register">
        <span className="section-heading__eyebrow">Create Account</span>
        <h1>注册统一用户账号</h1>
        <p>普通用户默认具备买家能力，审核通过后可扩展为供应者。</p>
      </section>
      <section className="auth-card auth-card--form">
        <div className="auth-card__header">
          <h2>创建账号</h2>
          <p>注册后即可浏览商品、收藏、发布求购与提交模拟订单。</p>
        </div>
        <form className="form-grid form-grid--double">
          <label>
            <span>用户名</span>
            <input placeholder="请输入用户名" type="text" />
          </label>
          <label>
            <span>手机号</span>
            <input placeholder="请输入手机号" type="text" />
          </label>
          <label>
            <span>密码</span>
            <input placeholder="请输入密码" type="password" />
          </label>
          <label>
            <span>确认密码</span>
            <input placeholder="请再次输入密码" type="password" />
          </label>
          <label className="form-grid__full">
            <span>验证码</span>
            <input placeholder="输入短信或邮箱验证码" type="text" />
          </label>
          <button className="primary-button primary-button--block form-grid__full" type="button">
            提交注册
          </button>
          <div className="form-grid__full auth-card__footer">
            已有账号？
            <Link className="text-link" to="/login">
              立即登录
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RegisterPage
