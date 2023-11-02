import React, { useState} from "react";

function Contact () {
    const [fromData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const [ validationMessage, setValidationMessages] = useState ({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, Value } = e.target;
        setFormData({
            ...fromData,
            [name]: Value,
        });
//  clearing message after user types
        setValidationMessages((prevMessages) => ({
            ...prevMessages,
            [name]: '',
        }));
    };

    
}