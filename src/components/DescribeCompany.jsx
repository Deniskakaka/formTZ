import React from "react";
import PropTypes from "prop-types";

function DescribeCompany
    ({ business,
        setBusiness,
        emptyBusiness,
        setEmptyBusiness,
        description,
        setDescription,
        checkDescription,
        setCheckDescription
    }) {

    function onChangeBusiness(event) {
        setBusiness(event.target.value);
    }

    function onBlurBusiness(event) {
        if (event.target.value === "") {
            setEmptyBusiness("This field in required");
        }
    }

    function onFocusBusiness() {
        setEmptyBusiness("");
    }

    function onChangeDescription(event) {
        setDescription(event.target.value);
    }

    function onBlurDescription(event) {
        if (event.target.value === "") {
            setCheckDescription("This field in required");
        }
    }

    function onFocusDescription() {
        setCheckDescription("");
    }

    return (
        <div className="form-secondPart">
            <label onBlur={onBlurBusiness} onFocus={onFocusBusiness}>
                Business area <span>*</span>
                <input
                    type="text"
                    className={!emptyBusiness ? "form-secondPart__business" : "form-secondPart__business red"}
                    placeholder="Design, Marketing, Development, etc."
                    onChange={onChangeBusiness}
                    value={business}>
                </input>
                <p>{emptyBusiness}</p>
            </label>
            <label onBlur={onBlurDescription} onFocus={onFocusDescription}>
                Description <span>*</span>
                <textarea
                    className={!checkDescription ? "form-secondPart__description" : "form-secondPart__description red"}
                    placeholder="Type text"
                    onChange={onChangeDescription}
                    value={description}>
                </textarea>
                <p>{checkDescription}</p>
            </label>
        </div>
    );
}

DescribeCompany.propTypes = {
    business: PropTypes.string,
    setBusiness: PropTypes.func,
    emptyBusiness: PropTypes.string,
    setEmptyBusiness: PropTypes.func,
    description: PropTypes.string,
    setDescription: PropTypes.func,
    checkDescription: PropTypes.string,
    setCheckDescription: PropTypes.func
};

export default DescribeCompany;