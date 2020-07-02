import React, { useState } from "react";

function FirstPart
    ({ name,
        setName,
        emptyName,
        setEmptyName,
        number,
        setNumberPeople,
        checkNumber,
        setCheckNumber
    }) {

    function onChancheName(event) {
        setName(event.target.value);
    };

    function focusName() {
        setEmptyName("")
    };

    function onChangeNumberPeople(event) {
        setNumberPeople(event.target.value)
    };

    function onBlurNumberPeople(event) {
        if (+event.target.value < 1 || +event.target.value > 99) {
            setCheckNumber("Please enter number from 1 to 99")
        }
        if (event.target.value === "") {
            setCheckNumber("This field in required")
        }
    };

    function focusNumberPeople() {
        setCheckNumber("")
    };

    return (
        <div className="form-firstPart">
            <label onFocus={focusName}>
                Your company name
                <input
                    type="text"
                    className={!emptyName ? "form-firstPart__nameCompany" : "form-firstPart__nameCompany red"}
                    placeholder="Type text"
                    value={name}
                    onChange={onChancheName}>
                </input>
                <p>{emptyName}</p>
            </label>
            <label onBlur={onBlurNumberPeople} onFocus={focusNumberPeople}>
                Number of people <span>*</span>
                <input
                    type="number"
                    className={!checkNumber ? "form-firstPart__NumberOfPeople" : "form-firstPart__NumberOfPeople red"}
                    placeholder="1-99"
                    value={number}
                    onChange={onChangeNumberPeople}></input>
                <p>{checkNumber}</p>
            </label>
        </div>
    )
};

export default FirstPart;