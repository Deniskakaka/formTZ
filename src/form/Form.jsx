import React, { useState } from "react";
import FirstPart from "./FirstPart.jsx";
import SecondPart from "./SecondPart.jsx";
import "../style/form.scss";

function Form() {
    const [nameCompany, setNameCompany] = useState("");
    const [emptyName, setEmptyName] = useState("");
    const [numberPeople, setNumberPeople] = useState("");
    const [checkNumber, setCheckNumber] = useState("");
    const [business, setBusiness] = useState("");
    const [emptyBusiness, setEmptyBusiness] = useState("");
    const [description, setDescription] = useState("");
    const [checkDescription, setCheckDescription] = useState("");
    const [quantity, setQuantity] = useState(0);

    function submit(event) {
        event.preventDefault();
        if (nameCompany !== "" && +numberPeople >= 1 && +numberPeople < 99 && business !== "" && description !== "") {
            console.log({
                nameCompany: nameCompany,
                numberPeople: numberPeople,
                business: business,
                description: description
            })
            setNameCompany("");
            setNumberPeople("");
            setBusiness("");
            setDescription("");
            setQuantity(0);
            document.querySelector(".form-quantityFiles").value = ""
        }
        if (+numberPeople < 1 || +numberPeople > 99) setCheckNumber("Please enter number from 1 to 99");
        if (numberPeople === "") setCheckNumber("This field in required");
        if (business === "") setEmptyBusiness("This field in required");
        if (nameCompany === "") setEmptyName("This field empty");
        if (description === "") setCheckDescription("This field in required");
    };

    function count (event) {
        setQuantity(event.target.files.length)
    }

    return (
        <form onSubmit={submit} className="form">
            <FirstPart
                name={nameCompany}
                setName={setNameCompany}
                emptyName={emptyName}
                setEmptyName={setEmptyName}
                number={numberPeople}
                setNumberPeople={setNumberPeople}
                checkNumber={checkNumber}
                setCheckNumber={setCheckNumber}
            />
            <SecondPart
                business={business}
                setBusiness={setBusiness}
                emptyBusiness={emptyBusiness}
                setEmptyBusiness={setEmptyBusiness}
                description={description}
                setDescription={setDescription}
                checkDescription={checkDescription}
                setCheckDescription={setCheckDescription}
            />
            <label>
            <div><i className="fas fa-folder-plus icon"></i> <span>Add file as attachment</span></div>
                <input type="file" multiple onChange={count} className="form-quantityFiles"></input>
                <p>{`${quantity} files attached`}</p>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Form;