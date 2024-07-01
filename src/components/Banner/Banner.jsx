import './Banner.scss';
import BannerBlock from "../BannerBlock/BannerBlock";
import arrowUp from "../../images/arrowUp.svg";
import laptop from '../../images/banner/laptop.png';

function Banner() {
    return (
        <BannerBlock img={laptop} title={"Buy & Sell Crypto Easy With Crypto Brains"}
                     text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                     textButtonOne={"Start Now"} textButtonTwo={"Beginner’s Guide"} linkOne={'/'} linkTwo={'/'} classBtn={'button_group'} classLine={''}>
            <div className="banner__crispers">
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
                <div className="banner__crisper">
                    <div className="banner__list">
                        <span className="p16">BTC/INR</span>
                        <div className="group">
                            <img src={arrowUp} alt="icon arrow"/>
                            <span className="p14">5.76%</span>
                        </div>
                    </div>
                    <span className="p20">₹ 28,214,25.341</span>
                </div>
            </div>
        </BannerBlock>
    );
}

export default Banner;
