import laptop from '../../images/banner/laptop.png';


function Banner() {
    return (
        <section className="banner">
            <div className="container banner__container">
                <div className="banner__block">
                    <div className="banner__groups">
                        <div className="banner__group">
                            <div className="banner__line-one"/>
                            <h5>Crypto Brains</h5>
                        </div>
                        <h1 className="banner__title">Buy & Sell Crypto Easy With Crypto Brains</h1>
                        <div className="banner__line-two"/>
                        <h6>It is a long established fact that a reader will be distracted by the readable content
                            of a page
                            when looking at its layout.</h6>
                        <div className="button__group">
                            <button className="button">
                                <a href="#">Start Now</a>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M14.3977 4.10225C14.6174 4.32192 14.6174 4.67808 14.3977 4.89775L5.39775 13.8977C5.17808 14.1174 4.82192 14.1174 4.60225 13.8977C4.38258 13.6781 4.38258 13.3219 4.60225 13.1023L13.6023 4.10225C13.8219 3.88258 14.1781 3.88258 14.3977 4.10225Z"
                                          fill="white"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M6.125 4.5C6.125 4.18934 6.37684 3.9375 6.6875 3.9375H14C14.3107 3.9375 14.5625 4.18934 14.5625 4.5V11.8125C14.5625 12.1232 14.3107 12.375 14 12.375C13.6893 12.375 13.4375 12.1232 13.4375 11.8125V5.0625H6.6875C6.37684 5.0625 6.125 4.81066 6.125 4.5Z"
                                          fill="white"/>
                                </svg>
                            </button>
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
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
                                <span className="p14">5.76%</span>
                            </div>
                        </div>
                        <h6 className="p20">₹ 28,214,25.341</h6>
                    </div>
                    <div className="banner__crisper">
                        <div className="banner__list">
                            <span className="p16">BTC/INR</span>
                            <div className="banner__item">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M16.7102 3.53975C16.9299 3.75942 16.9299 4.11558 16.7102 4.33525L9.96025 11.0852C9.74058 11.3049 9.38442 11.3049 9.16475 11.0852L6.75 8.6705L2.08525 13.3352C1.86558 13.5549 1.50942 13.5549 1.28975 13.3352C1.07008 13.1156 1.07008 12.7594 1.28975 12.5398L6.35225 7.47725C6.57192 7.25758 6.92808 7.25758 7.14775 7.47725L9.5625 9.892L15.9148 3.53975C16.1344 3.32008 16.4906 3.32008 16.7102 3.53975Z"
                                          fill="#06B470"/>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M11.25 3.9375C11.25 3.62684 11.5018 3.375 11.8125 3.375H16.3125C16.6232 3.375 16.875 3.62684 16.875 3.9375V8.4375C16.875 8.74816 16.6232 9 16.3125 9C16.0018 9 15.75 8.74816 15.75 8.4375V4.5H11.8125C11.5018 4.5 11.25 4.24816 11.25 3.9375Z"
                                          fill="#06B470"/>
                                </svg>
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
