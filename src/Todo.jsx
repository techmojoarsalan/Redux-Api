import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./Redux/action"
function Todo() {
    const todo = useSelector((state) => state.todo);
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    console.log(todo)

    return (
        <>Todo list
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => input && dispatch(addTodo(input)) && setInput("")}>Add todo</button>
            <ul>

                {
                    todo.map((item) => <li style={{
                        textDecoration: item.completed ? 'line-through' : 'none'
                    }} key={item.id} onClick={() => dispatch(toggleTodo(item.id))}> {item.text}</li>)
                }

            </ul>
            Show  :<button>ALL</button>

            <button>Active</button>
            <button>Compeleted</button>


        </>
)
}
export default Todo