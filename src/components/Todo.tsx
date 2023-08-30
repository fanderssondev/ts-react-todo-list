import { TTodo } from '../App';

interface TodoProps {
  todo: TTodo;
  onComplete: (id: string) => void;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
}

const Todo = ({ todo, onComplete, onUpdate, onDelete }: TodoProps) => {
  return (
    <>
      <div
        key={todo.id}
        className={`card ${todo.completed ? 'completed' : ''}`}
        onClick={() => onComplete(todo.id)}
      >
        <div className='card-text'>
          <h2 className='card-text-title'>{todo.title}</h2>
          <p className='card-text-info'>{todo.info}</p>
        </div>
        <div className='card-buttons'>
          <button
            className='card-buttons-delete'
            onClick={() => onDelete(todo.id)}
          >
            &#x2716;
          </button>
          <button
            className='card-buttons-edit'
            onClick={() => onUpdate(todo.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
