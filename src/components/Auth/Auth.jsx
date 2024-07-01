import {Link} from 'react-router-dom';
import fonSign from "../../images/imgSignUp.svg";
import '../Footer/Footer.scss';


const Auth = ({title, handleSubmit, buttonText, textLinkOne, textLinkTwo, children, name, isValid, linkTo, classPassword}) => {

    return (
        <>
            <main className="main">
                <section className="auth">
                    <div className="container auth__container">
                        <div className="auth__inner">
                            <h3 className="auth__title p36">{title}</h3>
                            <form className="auth__form" name={name} onSubmit={handleSubmit}>
                                {children}
                            </form>
                            <button type="submit" className={`button h20 ${!isValid && 'auth__button_text'}`}>
                                {buttonText}
                            </button>
                            <Link to={"/forgot-password"} className={`p16d ${classPassword}`}>Forgot Password?</Link>
                            <p className="auth__text p16d">{textLinkOne} <Link to={linkTo} className="auth__text-link">{textLinkTwo}</Link></p>
                        </div>
                        <div className="auth__img">
                            <img src={fonSign} alt="computer behind the boy"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Auth;
