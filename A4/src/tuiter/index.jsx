import Nav from "../nav.jsx";
import NavigationSidebar from "./navigation-sidebar/index.jsx";
import WhoToFollowList from "./who-to-follow-list/index.jsx";
import ExploreComponent from "./explore/index.jsx";
import HomeComponent from "./home/index.jsx";

import {Route, Routes} from "react-router-dom";

function Tuiter() {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter