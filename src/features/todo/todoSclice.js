import { createSlice, nanoid } from "@reduxjs/toolkit";
//nanoid is only used for generating the unique ID's

const initialState  = {
    todos:[{
        id:1,
        text:"Hello world",
    }]
}

// function sayHeloo{

// }

//SYNTAX OF SLICE      =>   createSlice is a method

//for sclice we need a name , initial State and a reducer 
export const todoSclice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //you always going to have a parameters state and action
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload ,
                //payload is a object you can access its prop using dot(.)
            }
            //pushing the todo in the initialState(todos) 
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            /* we are checking the state that is todos and using filter method
            we are checking if todo.id not equal to the we are giving to it so 
            take all other excepting the one */

            //using filtr bcz filtr always gives the ture value
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSclice.actions

export default todoSclice.reducer