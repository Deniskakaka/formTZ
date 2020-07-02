import React from "react";
import "./style/main.scss";
import Form from "./form/Form.jsx";

function App() {
    return (
        <div className="page">
            <div className="tableOfContents">
                <h1>Your first project</h1>
                <div className="tableOfContents-choice">
                    <div>1</div>
                    <p></p>
                    <div>2</div>
                    <p></p>
                    <div>3</div>
                </div>
            </div>
            <Form/>
        </div>
    );
}

export default App;