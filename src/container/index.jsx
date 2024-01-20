import React, { useState } from "react";
import './container.css'


function Todo({todo,index,completeTodos,removeTodos}){
   // console.log(todo.complete)      
        return <ul className="todoItem" style={{textDecoration: todo.complete ? 'line-through' : ''}}>
                <li>
                    {todo.text}
                    <button className='completedBtn' onClick={() =>completeTodos(index) }>完成</button>
                    <button className='deleteBtn' onClick={() =>removeTodos(index)}>删除</button>
                </li>
            </ul>         
    }
function FilterTodo(setFilter){
    return <div>
        <button onClick={()=>setFilter('all')}>全部</button>
        <button onClick={()=>setFilter('active')}>已完成</button>
        <button onClick={()=>setFilter('completed')}>未完成</button>
    </div>
}
function AddTodoForm({addTodos}){
    const [value,setValue] =useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return
        addTodos(value)
        setValue('')
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="肝起来吧~~~~~~"
         value={value} onChange={e=>setValue(e.target.value)}/>
        <button onClick={handleSubmit}>添加</button>
    </form>
}
function Container (){
    const [todos,setTodos] = useState([
        {text:'刷凤凰',complete:false},
        {text:'刷风剑',complete:false},
        {text:'20层低保',complete:false}
    ])
    const [filter,setFilter] = useState('all')
   
    const addTodos = (text)=>{
        const newTodos = [...todos,{text}]
        setTodos(newTodos)
    }
    const completeTodos = (index) =>{
        const newTodos = [...todos]
        newTodos[index].complete = !newTodos[index].complete        
        setTodos(newTodos)
        
    }     
    const removeTodos = (index) =>{        
        const newTodos = [...todos]
        newTodos.splice(index,1);
        setTodos(newTodos)
    }     
    const getFilterTodos = () =>{
        switch(filter){
            case 'active':
                return todos.filter(todo => !todo.complete)  
            case 'completed':
                return todos.filter(todo => todo.complete)   
            default:
                return todos
        }
    }
    const todosList =todos.map((todo,index) =>{
        return <Todo key={index} todo={todo} index={index} completeTodos={completeTodos} removeTodos={removeTodos}></Todo>              
    })
    return <div className="container">
        <h1>每日必刷</h1>
        <AddTodoForm addTodos={addTodos}></AddTodoForm>
        <div className="todoList">
            {todosList}           
        </div>
        <FilterTodo setFilter={setFilter}></FilterTodo>
        
    </div>
}
export default Container;