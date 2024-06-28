import logo from '../../images/header/logo.svg';
import arrow from '../../images/header/arrow.svg';
import menu from '../../images/header/menu.svg';
import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="container header__container container-color">
                <div className="header__inner">
                    <a href="#" className="logo header__line">
                        <img src={logo} alt="cripto brains"/>
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <p className="menu__text p18">Market</p>
                                <img src={arrow} alt="icon arrow"/>
                            </li>
                            <li className="menu__item">
                                <p className="menu__text p18">Trade</p>
                                <img src={arrow} alt="icon arrow"/>
                            </li>
                            <li className="menu__item">
                                <p className="menu__text p18">Earn</p>
                                <img src={arrow} alt="icon arrow"/>
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
                            <a href="#" className="button button_link">Log In</a>
                        </li>
                        <li className="user-actions__item">
                            <a href="#" className="button button_link-two">Sign Up</a>
                        </li>
                        <li className="header__img">
                            <img src={menu} alt="icon menu"/>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
