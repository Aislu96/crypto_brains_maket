import React, {useState} from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import '../Footer/Footer.scss';
import Auth from "../Auth/Auth";
import eye from "../../images/eye.svg";
import eyeTwo from "../../images/eyeTwo.svg";

const NewPassword = ({ onSignup }) => {
    const [password, setIsPassword] = useState(false);
    const [confirmPassword, setIsConfirmPassword] = useState(false);
    const { values, errors, handleChange, setValues, resetValidation, isValid } = useFormValidation({});

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
    function clickEye() {
        setIsPassword(!password);
    }
    function clickEyeTwo() {
        setIsConfirmPassword(!confirmPassword);
    }

    return (
        <Auth
            title={"New Password"}
            name={"form-new-password"}
            buttonText={'Save New Password'}
            textLinkOne={''}
            textLinkTwo={''}
            isValid={isValid}
            handleSubmit={handleSubmit}
            classPassword={"auth__password"}
        >
            <>
                <div className="auth__label">
                    <label className="p16d" htmlFor="password">New Password</label>
                    <div className={`password-input-container auth__input ${errors.password ? 'auth__input_error' : ''}`}>
                        <input
                            id="password"
                            name="password"
                            className="p16d"
                            type={password ? "text":"password"}
                            placeholder="Type Here"
                            minLength="8"
                            maxLength="40"
                            onChange={handleChange}
                            value={values.password || ''}
                            required
                        />
                        <img src={password? eyeTwo : eye} alt="Show Password" className="show-password-icon" onClick={clickEye}/>
                    </div>
                    <span className="auth__text-error p16d">{errors.password}</span>
                </div>
                <div className="auth__label">
                    <label className="p16d" htmlFor="confirmPassword">Confirm New Password</label>
                    <div className={`password-input-container auth__input ${errors.confirmPassword ? 'auth__input_error' : ''}`}>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            className='p16d'
                            type={confirmPassword ? "text":"password"}
                            placeholder="Type Here"
                            minLength="8"
                            maxLength="40"
                            onChange={handleChange}
                            value={values.confirmPassword || ''}
                            required
                        />
                        <img src={confirmPassword? eyeTwo : eye} alt="Show Password" className="show-password-icon" onClick={clickEyeTwo}/>
                    </div>
                    <span className="auth__text-error p16d">{errors.confirmPassword}</span>
                </div>
            </>
        </Auth>
    );
};

export default NewPassword;
