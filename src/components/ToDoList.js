import { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import ToDoItem from './ToDoItem'

export default function ToDoList()
{
    const k = [
        { id: makeId(5), content: 'Xin chao 1' },
        { id: makeId(5), content: 'Xin chao 2' },
        { id: makeId(5), content: 'Xin chao 3' },
        { id: makeId(5), content: 'Xin chao 4' },
    ]
    const [todos, setTodos] = useState([])
    useEffect(() => {
        console.log("re-render")
        setTodos(k)
    }, [])

    const [inputValue, setInputValue] = useState('')

    function addTodos()
    {
        setTodos([...todos, { id: makeId(5), content: inputValue }])
        setInputValue('')
    }

    function deleteItem(id)
    {
        setTodos(todos.filter(todo => id !== todo.id))
    }

    function makeId(length)
    {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }

    return (
        <div>
            <h1 className="text-center">To Do List</h1>

            <div className="row">
                <div className="col-11">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleFormControlInput1"
                        placeholder="Enter a job"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-info" onClick={addTodos}>Add</button>
                </div>
            </div>

            <div className="list-group mt-3">
                {todos.map((todo) =>
                    <ToDoItem item={todo} key={todo.id} onDeleteItem={deleteItem}/>
                )}
            </div>
        </div>
    )
}
