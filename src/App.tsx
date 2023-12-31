import { useState } from 'react';
import '../dist/css/main.css';
import { v4 as uuid } from 'uuid';
import Modal from './components/Modal';
import Todo from './components/Todo';

export type TTodo = {
  id: string;
  title: string;
  info: string;
  completed: boolean;
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoId, setTodoId] = useState('');
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [todos, setTodos] = useState<TTodo[]>([
    {
      id: uuid(),
      title: 'Clean the plates',
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      completed: false,
    },
    {
      id: uuid(),
      title: 'Study React',
      info: "Here's some info about what you need to know when studying",
      completed: false,
    },
    {
      id: uuid(),
      title: 'Shopping',
      info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur',
      completed: false,
    },
  ]);

  const handleCompleted = (id: string) => {
    setTodos(previousTodos =>
      previousTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos(previousTodos =>
      previousTodos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, title, info };
        } else {
          return todo;
        }
      })
    );

    console.log('handleUpdate');

    setTitle('');
    setInfo('');
    setTodoId('');
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setTodos(previousTodos => previousTodos.filter(todo => todo.id !== id));
  };

  const handleCreateNew = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        id: uuid(),
        title,
        info,
        completed: false,
      },
    ]);

    console.log('hadleCreateNew');

    setTitle('');
    setInfo('');
    setIsModalOpen(false);
  };

  const handleEditTodo = (id: string) => {
    const todo = todos.find(todo => todo.id === id);
    if (!todo) return;

    setTitle(todo?.title ?? '');
    setInfo(todo?.info ?? '');
    setTodoId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      {todoId ? (
        <Modal
          isOpen={isModalOpen}
          title={title}
          info={info}
          todoId={todoId}
          onSetIsOpen={setIsModalOpen}
          onUpdate={handleUpdate}
          onSetTitle={setTitle}
          onSetInfo={setInfo}
        />
      ) : (
        <Modal
          isOpen={isModalOpen}
          title={title}
          info={info}
          onSetIsOpen={setIsModalOpen}
          onSubmit={handleCreateNew}
          onSetTitle={setTitle}
          onSetInfo={setInfo}
        />
      )}

      <div className='container'>
        <h1 className='header'>Todo List</h1>

        <button className='btn-create' onClick={() => setIsModalOpen(true)}>
          Create Todo
        </button>
        <div className='todo-list'>
          {todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onComplete={handleCompleted}
                onEdit={handleEditTodo}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
