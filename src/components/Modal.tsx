import '../../dist/css/main.css';

interface ModalProps {
  onOpen: boolean;
  title: string;
  info: string;
  onCreateNew: (e: React.FormEvent) => void;
  onSetTitle: (e: string) => void;
  onSetInfo: (e: string) => void;
}

const Modal = ({
  onOpen,
  title,
  info,
  onCreateNew,
  onSetTitle,
  onSetInfo,
}: ModalProps) => {
  if (!onOpen) return null;

  return (
    <>
      <div className='modal-overlay' />
      <div className='modal'>
        <form className='form' onSubmit={onCreateNew}>
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
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
