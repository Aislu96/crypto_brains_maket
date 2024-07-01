import React from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import '../Footer/Footer.scss';
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
        <Auth title={"Forgot Password"} name={"form-forgot-password"} buttonText={'Submit Code'} textLinkOne={''} textLinkTwo={''} isValid={isValid} handleSubmit={handleSubmit}   classPassword={"auth__password"}>
            <>
                <div className="auth__label">
                    <label className="p16d" htmlFor="name">Phone</label>
                    <div className="password-input-container auth__input">
                    <input
                        id="phone"
                        name="phone"
                        className={` p16d ${errors.name ? 'auth__input_error' : ''}`}
                        type="tel"
                        placeholder="Type Here"
                        onChange={handleChange}
                        value={values.name || ''}
                        required
                    />
                        <button type={"submit"} className="p16d button__password">Send Code</button>
                    </div>
                    <span className="auth__text-error p16d">{errors.name}</span>
                </div>
                <div className="auth__label">
                    <label className="p16d" htmlFor="code">Verification Code</label>
                    <div className="password-input-container auth__input">
                        <input
                            id="code"
                            name="code"
                            className={`p16d ${errors.password ? 'auth__input_error' : ''}`}
                            type="number"
                            placeholder="Type Here"
                            minLength="8"
                            maxLength="40"
                            onChange={handleChange}
                            value={values.password || ''}
                            required
                        />
                    </div>
                    <span className="auth__text-error p16d">{errors.password}</span>
                </div>
            </>
        </Auth>

    );
};

export default Register;
