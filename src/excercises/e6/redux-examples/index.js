import React from "react";
import HelloReduxExampleComponent from "./hello-redux-exaple-component";
import hello from "./reducers/hello";
import { legacy_createStore as createStore } from 'redux';
import {Provider} from "react-redux";
import todos from "./reducers/todos-reducer";
import {configureStore} from "@reduxjs/toolkit";
import Todos from "./todos-component";


// const store = createStore(hello);

const store2 = configureStore({
    reducer: {hello, todos
    }
});

const ReduxExamples = () => {
    return (
        <Provider store={store2}>
        <div>
        <h1>Redux Examples</h1>
        <Todos/>
        <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
    };

export default ReduxExamples;