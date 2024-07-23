import ReactDOM from 'react-dom'
import './modalContainer.scss'
const ModalContainer = ({ children }) => {
	return ReactDOM.createPortal(
		<div className='modal-container'>{children}</div>,
		document.body
	)
}

export default ModalContainer
