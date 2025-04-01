import './Modal.css';

const Modal = (props) => {
  return (
    <div className="modal-backdrop" onClick={props.onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {props.children}
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
