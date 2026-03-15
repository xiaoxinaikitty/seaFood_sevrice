function EmptyState({ title, description }) {
  return (
    <div className="empty-state">
      <span className="empty-state__badge">EMPTY</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default EmptyState
