import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';

import '../Footer/Footer.scss';
import eye from "../../images/eye.svg";
import Auth from "../Auth/Auth";

const Register = ({onSignup}) => {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});


    React.useEffect(() => {
        resetValidation();
        setValues({});
    }, [setValues, resetValidation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            onSignup(values);
        }
    };


    return (
        <Auth title={"Login"} name={"form-login"} buttonText={'Login'} textLinkOne={'Don’t Have an Account?'}
              textLinkTwo={'Sign Up Here'} isValid={isValid} handleSubmit={handleSubmit} linkTo={"/signUp"} classPassword={"auth__password-text"}>
            <>
                <div className="auth__label">
                    <label className="p16d" htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        className={`auth__input p16d ${errors.email ? 'auth__input_error' : ''}`}
                        type="email"
                        placeholder="Type Here"
                        minLength="6"
                        onChange={handleChange}
                        value={values.email || ''}
                        required
                    />
                    <span className="auth__text-error p16d">{errors.email}</span>
                </div>
                <div className="auth__label">
                    <label className="p16d" htmlFor="password">Password</label>
                    <div className="password-input-container auth__input">
                        <input
                            id="password"
                            name="password"
                            className={`p16d ${errors.password ? 'auth__input_error' : ''}`}
                            type="password"
                            placeholder="Type Here"
                            minLength="8"
                            maxLength="40"
                            onChange={handleChange}
                            value={values.password || ''}
                            required
                        />
                        <img src={eye} alt="Show Password" className="show-password-icon"/>
                    </div>
                    <span className="auth__text-error p16d">{errors.password}</span>
                </div>
            </>
        </Auth>

    );
};

export default Register;
