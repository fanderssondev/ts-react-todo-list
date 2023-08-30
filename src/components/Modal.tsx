type TProps = {
  onOpen: boolean;
  onClose: () => void;
  children: any;
};

const Modal = ({ onOpen, onClose, children }: TProps) => {
  if (!onOpen) return null;

  return (
    <>
      <div className='modal-overlay' />
      <div className='modal'>
        {children}
        <button onClick={onClose}>Close Modal</button>
        {/* <form className='form' onSubmit={handleCreateNew}>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            className='form-field'
            type='text'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='info'>Info</label>
          <textarea
            className='form-field'
            id='info'
            value={info}
            onChange={e => setInfo(e.target.value)}
          ></textarea>
        </div>
        <button className='form-button' type='submit'>
          Create Todo
        </button>
      </form> */}
      </div>
    </>
  );
};

export default Modal;
