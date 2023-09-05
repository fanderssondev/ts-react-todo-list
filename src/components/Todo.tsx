import { TTodo } from '../App';

interface TodoProps {
  todo: TTodo;
  onComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const Todo = ({ todo, onComplete, onEdit, onDelete }: TodoProps) => {
  return (
    <>
      {/* BUG: Clicking a button toggles the Complete state */}
      <div
        className={`card ${todo.completed ? 'completed' : ''}`}
        onClick={() => onComplete(todo.id)}
      >
        <div className='card-text'>
          <h2 className='card-text-title'>{todo.title}</h2>
          <p className='card-text-info'>{todo.info}</p>
        </div>
        <div className='card-btn'>
          <button className='card-btn-delete' onClick={() => onDelete(todo.id)}>
            &#x2716;
          </button>
          <button className='card-btn-edit' onClick={() => onEdit(todo.id)}>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
