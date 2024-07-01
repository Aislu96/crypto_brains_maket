import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useFormValidation from '../../hooks/useFormValidation';
import './Auth.scss';
import '../Footer/Footer.scss';
import eye from "../../images/eye.svg";
import Auth from "../Auth/Auth";

const Register = ({onSignup}) => {
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});

    const [isChecked, setIsChecked] = useState(false);

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

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    return (
        <Auth title={"Sign Up"} name={"form-register"} buttonText={'Sign Up'} textLinkOne={'Have an Account?'} textLinkTwo={'Login Here'} isValid={isValid} handleSubmit={handleSubmit} linkTo={"/login"}  classPassword={"auth__password"}>
            <>
            <div className="auth__group">
            <div className="auth__label">
                <label className="p16d" htmlFor="name">First Name</label>
                <input
                    id="name"
                    name="name"
                    className={`auth__input p16d ${errors.name ? 'auth__input_error' : ''}`}
                    type="text"
                    placeholder="Type Here"
                    minLength="2"
                    maxLength="40"
                    onChange={handleChange}
                    value={values.name || ''}
                    required
                />
                <span className="auth__text-error p16c">{errors.name}</span>
            </div>
            <div className="auth__label">
                <label className="p16d" htmlFor="surname">Last Name</label>
                <input
                    id="surname"
                    name="surname"
                    className={`auth__input p16d ${errors.surname ? 'auth__input_error' : ''}`}
                    type="text"
                    placeholder="Type Here"
                    minLength="2"
                    maxLength="40"
                    onChange={handleChange}
                    value={values.surname || ''}
                    required
                />
                <span className="auth__text-error p16c">{errors.surname}</span>
            </div>
            </div>
            <div className="auth__label">
                <label className="p16d" htmlFor="name">Phone</label>
                <input
                    id="phone"
                    name="phone"
                    className={`auth__input p16d ${errors.name ? 'auth__input_error' : ''}`}
                    type="tel"
                    placeholder="Type Here"
                    onChange={handleChange}
                    value={values.name || ''}
                    required
                />
                <span className="auth__text-error p16d">{errors.name}</span>
            </div>
            <div className="auth__label">
                <label className="p16d" htmlFor="email">Email Address</label>
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
            <div className="auth__label">
                <div className="auth__checkbox">
                    <input
                        type="checkbox"
                        id="scales"
                        name="scales"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        required
                    />
                    <label className="p14b" htmlFor="scales" id="checkboxLabel">
                        I Agree To This Website {' '}
                        <Link to="/signin" className="auth__text-link">
                            Terms & Conditions.
                        </Link>
                    </label>
                </div>
            </div>
            </>
        </Auth>

    );
};

export default Register;
