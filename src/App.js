import "./App.css";
import useLocalStorage from "use-local-storage";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

function App() {
  const [text, setText] = useLocalStorage("text", "");
  const [todos, setTodo] = useLocalStorage("todos", []);

  function addItem(e) {
    e.preventDefault();
    setTodo([...todos, text]);
    setText("");
  }

  function handleRemove(id) {
    setTodo((todos) => {
      return todos.filter((todo, index) => {
        return index !== id;
      });
    });
  }

  function handleEdit(id) {
    var arr = todos.slice();
    const edit = prompt("enter the new value");
    arr[id] = edit;
    setTodo(arr);
  }

  return (
    <div className="TodoList">
      <h1>
        TODO LIST<span> Created By Shubham Singh</span>
      </h1>
     

      <ul>
        {todos.map((todo, index) => (
          <TodoList
            index={index}
            todo={todo}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
      <NewTodoForm addItem={addItem} setText={setText} text={text} />
    </div>
  );
}

export default App;
