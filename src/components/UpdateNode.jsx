import React from "react";
import MyButton from "./UI/button/MyButton";
import logo from "../img/update-icon.png";

function UpdateNode({ update }) {
    const updateHandler = (e) => {
        update();
    }
    return (
        <div className="update-wrapper">
            <p style={{ fontSize: "20px", marginRight: "10px" }}>Notes </p>
            <MyButton className="circle-button" onClick={updateHandler}><img src={logo} alt="" /></MyButton>
        </div>
    );
}



export default UpdateNode;