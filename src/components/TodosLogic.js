import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
    const todos = [
        {
            id:1,
            title: 'Setup development enviroment',
            completed: true,
        },

        {
            id:2,
            title: 'Develop website and add content',
            completed: false,
        },

        {
            id:3,
            title: 'Deploy to live server',
            completed: true,
        },
    ]
    return (
        <div>
            <InputTodo />
            <TodosList todosProps = {todos}/>
        </div>

    );
  };
  export default TodosLogic;
