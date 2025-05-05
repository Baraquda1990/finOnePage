import { useState } from "react"
import { Modal,Button,Form } from "react-bootstrap"
export default function ModalSendEmail({show,setShow}){
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const handleClose = () => {
    setShow(false)
    setEmail('')
    setPhone('')
    setMessage('')
    setPhoneError('')
  }

  const validatePhone = () => {
    const digitsOnly = phone.replace(/\D/g, '')
    if (digitsOnly.length !== 11) {
      setPhoneError('Введите корректный номер (11 цифр)')
      return false;
    }
    setPhoneError('')
    return true
  }

  const handleSubmit = async () => {
    if (!validatePhone()) {
      return;
    }
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phone, message })
      });
      if (response.ok) {
        alert('Сообщение успешно отправлено!')
        handleClose()
      } else {
        alert('Ошибка при отправке сообщения.')
      }
    } catch (error) {
      console.error('Ошибка:', error)
      alert('Ошибка при отправке сообщения.')
    }
  }
  return(
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Оставить заявку</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Введите почту"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mt-3">
              <Form.Label>Телефон</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ваш телефон"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                isInvalid={!!phoneError}
              />
              <Form.Control.Feedback type="invalid">
                {phoneError}
              </Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Сообщение</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ваше сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
  )
}