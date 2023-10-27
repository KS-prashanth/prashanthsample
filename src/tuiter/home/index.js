import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h3>Home</h3>
            <br/>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};

export default HomeComponent;