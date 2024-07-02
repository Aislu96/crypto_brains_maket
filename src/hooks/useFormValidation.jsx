import React from "react";
import {
    EMAIL_PATTERN,
    ERROR, ERROR__CONFIRM_PASSWORD, ERROR_EMAIL, ERROR_EMAIL_MIN_LENGTH,
    ERROR_MAX_LENGTH,
    ERROR_MIN_LENGTH,
    ERROR_PASSWORD_MIN_LENGTH,
    ERROR_TEXT,
    NAME_PATTERN, NUMBER_MAX_LENGTH, NUMBER_MIN_LENGTH, NUMBER_MIN_LENGTH_MAIL, NUMBER_MIN_LENGTH_PASSWORD
} from "../utils/constants";

function useFormValidation() {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        let error = '';

        if (value.trim() === '') {
            error = ERROR;
        } else if (name.length >= NUMBER_MAX_LENGTH) {
            error = ERROR_MAX_LENGTH;
        } else {
            switch (name) {
                case 'name':
                case 'surname':
                    if (value.length < NUMBER_MIN_LENGTH) {
                        error = ERROR_MIN_LENGTH;
                    } else if (!NAME_PATTERN.test(value)) {
                        error = ERROR_TEXT;
                    }
                    break;
                case 'password':
                    if (value.length < NUMBER_MIN_LENGTH_PASSWORD) {
                        error = ERROR_PASSWORD_MIN_LENGTH;
                    }
                    // Reset confirmPassword error when password changes
                    if (values.confirmPassword && value !== values.confirmPassword) {
                        setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
                    }
                    break;
                case 'confirmPassword':
                    if (value !== values.password) {
                        error = ERROR__CONFIRM_PASSWORD;
                    }
                    break;
                case 'email':
                    if (value.length < NUMBER_MIN_LENGTH_MAIL) {
                        error = ERROR_EMAIL_MIN_LENGTH;
                    } else if (!EMAIL_PATTERN.test(value)) {
                        error = ERROR_EMAIL; // Исправлено на ERROR_TEXT для несоответствия шаблону email
                    }
                    break;
                default:
                    break;
            }
        }

        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));

        // Проверка общей валидности формы
        const form = e.target.closest('form');
        if (form) {
            setIsValid(form.checkValidity());
        }
    };

    const resetValidation = React.useCallback(
        (values = {}, errors = {}, isValid = false) => {
            setValues(values);
            setErrors(errors);
            setIsValid(isValid);
        }, [setValues, setErrors, setIsValid]);

    return {
        values, errors, handleChange, setValues, setErrors, resetValidation, isValid, setIsValid
    };
}

export default useFormValidation;
