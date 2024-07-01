import Button from "../Button/Button";
import '../Banner/Banner.scss';
import {Link} from "react-router-dom";


function BannerBlock({title, text, textButtonOne,textButtonTwo, children, img, linkOne, linkTwo, classBtn, classLine}) {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__block">
                    <div className="banner__groups">
                        <div className="banner__group group">
                            <div className="banner__line-one"/>
                            <p className='h24'>Crypto Brains</p>
                        </div>
                        <h1 className="banner__title">{title}</h1>
                        <div className={`banner__line-two ${classLine}`}/>
                        <p className="h20">{text}</p>
                        <div className={classBtn}>
                            <Button text={textButtonOne} link={linkOne} classButton={""}/>
                            <button className="button button_style">
                                <Link to={linkTwo} className="h20">{textButtonTwo}</Link>
                            </button>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src={img} alt="picture laptop"/>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
}

export default BannerBlock;
