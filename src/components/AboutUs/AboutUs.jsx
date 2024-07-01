import './AboutUs.scss';
import user from '../../images/aboutUs/user.png';
import number from '../../images/aboutUs/number.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,  // Если ширина экрана >= 750px
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,  // Если ширина экрана >= 500px
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="about-us">
            <div className="container container-flex container-color">
                <div className="content content__about-us">
                    <h1 className="p58">What Traders Saying About Us!</h1>
                    <p className="p18b">Lorem Ipsum has been the industry's standard dummy text since the 1500s, when an
                        unknown printer took a galley of type and scrambled type specimen book.</p>
                </div>
                <div className="line"></div>
                <Slider {...settings}>
                    <div className="about-us__block">
                        <div className="about-us__groups">
                            <img src={user} alt="icon human"/>
                            <div className="about-us__group">
                                <h2 className="p20b">John Doe</h2>
                                <h3 className="p14b">USA, America</h3>
                            </div>
                            <div className="about-us__img">
                                <img src={number} alt="icon number"/>
                            </div>
                        </div>
                        <p className="h24b">“ Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. ”</p>
                    </div>
                    <div className="about-us__block">
                        <div className="about-us__groups">
                            <img src={user} alt="icon human"/>
                            <div className="about-us__group">
                                <h2 className="p20b">John Doe</h2>
                                <h3 className="p14b">USA, America</h3>
                            </div>
                            <div className="about-us__img">
                                <img src={number} alt="icon number"/>
                            </div>
                        </div>
                        <p className="h24b">“ Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. ”</p>
                    </div>
                    <div className="about-us__block">
                        <div className="about-us__groups">
                            <img src={user} alt="icon human"/>
                            <div className="about-us__group">
                                <h2 className="p20b">John Doe</h2>
                                <h3 className="p14b">USA, America</h3>
                            </div>
                            <div className="about-us__img">
                                <img src={number} alt="icon number"/>
                            </div>
                        </div>
                        <p className="h24b">“ Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. ”</p>
                    </div>
                    <div className="about-us__block">
                        <div className="about-us__groups">
                            <img src={user} alt="icon human"/>
                            <div className="about-us__group">
                                <h2 className="p20b">John Doe</h2>
                                <h3 className="p14b">USA, America</h3>
                            </div>
                            <div className="about-us__img">
                                <img src={number} alt="icon number"/>
                            </div>
                        </div>
                        <p className="h24b">“ Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. ”</p>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default AboutUs;
