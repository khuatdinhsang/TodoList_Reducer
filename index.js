import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
export default function App() {

    const [state, ditpatch] = useReducer(reducer, initState);
    const { list, todo } = state;
    const [checked, setChecked] = useState(false);
    const [id, setId] = useState("");

    const handleSetItem = (e) => {
        ditpatch(setTodo(e.target.value));
    };
    const handleADD = () => {
        if (checked) {
            ditpatch(
                editTodo({
                    id,
                    todo
                })
            );
            setChecked(false);
        } else {
            ditpatch(
                addTodo({
                    id: uuidv4(),
                    name: todo,
                    completed: false
                })
            );
        }
        ditpatch(setTodo(""));
    };
    const handleDelete = (id) => {
        ditpatch(deleteTodo(id));
    };
    const handleToggle = (id) => {
        ditpatch(toggleTodo(id));
    };

    const handleEdit = (id) => {
        setChecked(true);
        const editItem = list.find((item) => item.id === id);
        ditpatch(setTodo(editItem.name));
        setId(id);
    };
    return (
        <div className="App">
            <h1>TodoList</h1>
            <input type="text" value={todo} onChange={handleSetItem} />
            <button onClick={handleADD}>ADD</button>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        <li
                            className={item.completed ? "active" : ""}
                            onClick={() => handleToggle(item.id)}
                        >
                            {item.name}
                        </li>
                        <button onClick={() => handleDelete(item.id)}>Xoa</button>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                    </div>
                );
            })}
        </div>
    );
}
