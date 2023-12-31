import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import React from "react";
import HomeComponent from "./home";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-3 col-lg-2 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-9 col-lg-6 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter;