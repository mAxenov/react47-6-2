import react, { useState } from "react";
import MyButton from "./UI/button/MyButton";

function CreateNode({ create }) {
    const [data, setData] = useState('');
    const CreateHandler = (e) => {
        create(data);
        setData('');
    }
    return (
        <div className="create-wrapper">
            <p style={{ fontSize: "20px" }}>new Notes </p>
            <textarea style={{ resize: "none", padding: "10px" }} name="create" cols="30" rows="10" value={data} onChange={(e) => setData(e.target.value)}></textarea>
            <MyButton className="circle-button circle-button-create" onClick={CreateHandler}>+</MyButton>
        </div>

    );
}



export default CreateNode;