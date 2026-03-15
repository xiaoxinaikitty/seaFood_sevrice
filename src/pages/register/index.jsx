import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppState } from '../../store/AppStateProvider.jsx'

function RegisterPage() {
  const navigate = useNavigate()
  const { register } = useAppState()
  const [form, setForm] = useState({ username: '', phone: '', password: '', confirmPassword: '', code: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    register(form)
    navigate('/profile')
  }

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
        <form className="form-grid form-grid--double" onSubmit={handleSubmit}>
          <label>
            <span>用户名</span>
            <input name="username" onChange={handleChange} placeholder="请输入用户名" type="text" value={form.username} />
          </label>
          <label>
            <span>手机号</span>
            <input name="phone" onChange={handleChange} placeholder="请输入手机号" type="text" value={form.phone} />
          </label>
          <label>
            <span>密码</span>
            <input name="password" onChange={handleChange} placeholder="请输入密码" type="password" value={form.password} />
          </label>
          <label>
            <span>确认密码</span>
            <input name="confirmPassword" onChange={handleChange} placeholder="请再次输入密码" type="password" value={form.confirmPassword} />
          </label>
          <label className="form-grid__full">
            <span>验证码</span>
            <input name="code" onChange={handleChange} placeholder="输入短信或邮箱验证码" type="text" value={form.code} />
          </label>
          <button className="primary-button primary-button--block form-grid__full" type="submit">
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
