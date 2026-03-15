function StatCard({ label, value, help }) {
  return (
    <article className="stat-card">
      <span className="stat-card__label">{label}</span>
      <strong className="stat-card__value">{value}</strong>
      <span className="stat-card__help">{help}</span>
    </article>
  )
}

export default StatCard
