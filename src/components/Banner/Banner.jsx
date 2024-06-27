import laptop from '../../images/banner/laptop.png';
import Button from "../Button/Button";
import arrowUp from '../../images/arrowUp.svg';
import './Banner.scss';


function Banner() {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__block">
                    <div className="banner__groups">
                        <div className="banner__group group">
                            <div className="banner__line-one"/>
                            <h5>Crypto Brains</h5>
                        </div>
                        <h1 className="banner__title">Buy & Sell Crypto Easy With Crypto Brains</h1>
                        <div className="banner__line-two"/>
                        <h6>It is a long established fact that a reader will be distracted by the readable content
                            of a page
                            when looking at its layout.</h6>
                        <div className="button__group">
                            <Button text="Start Now"/>
                            <button className="button button__style">
                                <a href="#">Beginner’s Guide</a>
                            </button>
                        </div>
                    </div>
                    <div className="banner__img">
                        <img src={laptop} alt="picture laptop"/>
                    </div>
                </div>
                <div className="banner__crispers">
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="group">
                                <img src={arrowUp} alt="icon arrow" />
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
