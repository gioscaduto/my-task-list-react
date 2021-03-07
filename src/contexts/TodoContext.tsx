import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { Todo } from '../models/Todo';
import { get, save } from '../services/TodoService';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({

    todos: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggle: () => {}

});

const TodoProvider = (props : any) =>
{
    const [todos, setTodo] = useState<Todo[]>(get);

    useEffect(() => {
        save(todos);
    }, [todos]);

    const addTodo = (title: string) => {
        const todo: Todo = { id: todos.length + 1, title: title, done: false };
        setTodo([...todos, todo]);
    }
    
    const removeTodo = (todo : Todo) => {
        const index = todos.indexOf(todo);
        console.log(todos);
        console.log(index);
        setTodo(todos.filter((_, i) => i !== index));    
    }
    
    const toggle = (todo : Todo) => {
        const index = todos.indexOf(todo);
        todos[index].done =  !todo.done;
        setTodo([...todos]);
    }

    return(
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;