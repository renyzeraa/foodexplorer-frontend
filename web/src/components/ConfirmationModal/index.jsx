import { Container } from './style'
import { useState } from 'react'

export const ConfirmationModal = ({ message = '', onConfirm = false }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleConfirm = () => {
    handleClose()
    onConfirm && onConfirm()
    return true
  }

  const handleCancel = () => {
    handleClose()
    return false
  }

  return (
    <div>
      <button onClick={handleOpen}>Abrir Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>{message}</p>
            <button onClick={handleConfirm}>Confirmar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  )
}
