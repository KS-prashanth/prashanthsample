import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

const templateTuit = {
    "image": "mark.png.jpg",
    "userName": "Mark",
    "handle": "@mark",
    "time": "7h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0
}

const tuitsSlice = createSlice({
    name: 'tuitsReducer',
    initialState: tuits,
    reducers: {
        createTuit(state, action) {
            state.unshift({
                _id: (new Date()).getTime(),
                ...templateTuit,
                tuit: action.payload.tuit
            })
        },
        deletetweet(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        },
        updatecou(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            
            if (state[index].liked){
                state[index].likes -= 1;
                state[index].liked = false;
            } else {
                state[index].likes += 1;
                state[index].liked = true;
            }
        },
    }
});

export const { createTuit, deletetweet, updatecou } = tuitsSlice.actions;
export default tuitsSlice.reducer;