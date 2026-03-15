import { useEffect } from 'react'
import { createPortal } from 'react-dom'

function Dialog({ open, title, description, onClose, children, footer, size = 'default' }) {
  useEffect(() => {
    if (!open) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, open])

  if (!open) {
    return null
  }

  return createPortal(
    <div className="dialog-overlay" role="presentation" onClick={onClose}>
      <div
        aria-modal="true"
        className={`dialog-panel dialog-panel--${size}`}
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="dialog-panel__header">
          <div>
            <h2>{title}</h2>
            {description ? <p>{description}</p> : null}
          </div>
          <button className="dialog-panel__close" onClick={onClose} type="button">
            关闭
          </button>
        </div>
        <div className="dialog-panel__body">{children}</div>
        {footer ? <div className="dialog-panel__footer">{footer}</div> : null}
      </div>
    </div>,
    document.body,
  )
}

export default Dialog
