import '../../dist/css/main.css';

interface ModalProps {
  onOpen: boolean;
  title: string;
  info: string;
  todoId?: string;
  onSubmit?: (e: React.FormEvent) => void;
  onUpdate?: (e: React.FormEvent) => void;
  onSetTitle: (e: string) => void;
  onSetInfo: (e: string) => void;
}

const Modal = ({
  onOpen,
  title,
  info,
  todoId,
  onSubmit,
  onUpdate,
  onSetTitle,
  onSetInfo,
}: ModalProps) => {
  if (!onOpen) return null;

  return (
    <>
      <div className='modal-overlay' />
      <div className='modal'>
        <form className='form' onSubmit={todoId ? onUpdate : onSubmit}>
          <div>
            <label className='form-label' htmlFor='title'>
              Title
            </label>
            <input
              className='form-field'
              type='text'
              id='title'
              placeholder='Title'
              value={title}
              onChange={e => onSetTitle(e.target.value)}
            />
          </div>
          <div>
            <label className='form-label' htmlFor='info'>
              Info
            </label>
            <textarea
              className='form-field'
              id='info'
              placeholder='Write information here'
              value={info}
              onChange={e => onSetInfo(e.target.value)}
            />
          </div>
          <button className='form-button' type='submit'>
            {todoId ? 'Update Todo' : 'Create Todo'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
