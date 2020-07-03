import React from "react";

function InputFile({quantity, setQuantity}) {
    
    function count(event) {
        setQuantity(event.target.files.length);
    }

    return (
        <label>
            <div><i className="fas fa-folder-plus icon"></i> <span>Add file as attachment</span></div>
            <input type="file" multiple onChange={count} className="form-quantityFiles"></input>
            <p>{`${quantity} files attached`}</p>
        </label>
    );
}

export default InputFile;