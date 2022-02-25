import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    
    //Adding Task
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove Task
    removeTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
    //update Task
    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            el: action.payload.el,
          };
        }
        return task;
      });
    },
    //change the task state to completed
    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed:true,
          };
        }
        return task;
      });
    },
    //change the task state to uncompleted
    uncompleteTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed:false,
          };
        }
        return task;
      });
    },
  },
});

export const { filterTask, addTask, removeTask, updateTask, completeTask, uncompleteTask } =
  addTaskReducer.actions;

export const reducer = addTaskReducer.reducer;
