import logo from '../../images/header/logo.svg';
import menu from '../../images/header/menu.svg';
import './Header.scss';
import {Link} from "react-router-dom";

function Header({classAuth}) {
    return (
        <>
            <header className="header">
                <div className={`container header__container container-color ${classAuth}`}>
                    <div className="header__inner">
                        <Link to="/" href="#" className="logo header__line">
                            <img src={logo} alt="cripto brains"/>
                        </Link>
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <p className="menu__text p18">Market</p>
                                    <div className="menu__arrow"></div>
                                </li>
                                <li className="menu__item">
                                    <p className="menu__text p18">Trade</p>
                                    <div className="menu__arrow"></div>
                                </li>
                                <li className="menu__item">
                                    <p className="menu__text p18">Earn</p>
                                    <div className="menu__arrow"></div>
                                </li>
                                <li className="menu__item">
                                    <p className="menu__text p18">About</p>
                                </li>
                                <li className="menu__item">
                                    <p className="menu__text p18">Career</p>
                                </li>
                            </ul>
                        </nav>
                        <ul className="user-actions group">
                            <li className="user-actions__item">
                                <Link to="/login" className="button button_link">Log In</Link>
                            </li>
                            <li className="user-actions__item">
                                <Link to="/signUp" className="button button_link-two">Sign Up</Link>
                            </li>
                            <li className="header__img">
                                <img src={menu} alt="icon menu"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            {/*<div className="popup popup_opened">*/}
            {/*    <div className="popup__container">*/}
            {/*    <nav className="menu menu__active">*/}
            {/*        <ul className="menu__list">*/}
            {/*            <li className="menu__item">*/}
            {/*                <p className="menu__text p18">Market</p>*/}
            {/*                <div className="menu__arrow"></div>*/}
            {/*            </li>*/}
            {/*            <li className="menu__item">*/}
            {/*                <p className="menu__text p18">Trade</p>*/}
            {/*                <div className="menu__arrow"></div>*/}
            {/*            </li>*/}
            {/*            <li className="menu__item">*/}
            {/*                <p className="menu__text p18">Earn</p>*/}
            {/*                <div className="menu__arrow"></div>*/}
            {/*            </li>*/}
            {/*            <li className="menu__item">*/}
            {/*                <p className="menu__text p18">About</p>*/}
            {/*            </li>*/}
            {/*            <li className="menu__item">*/}
            {/*                <p className="menu__text p18">Career</p>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*        <li className="user-actions__item">*/}
            {/*            <Link to="/login" className="button button_link">Log In</Link>*/}
            {/*        </li>*/}
            {/*    </nav>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Header;
