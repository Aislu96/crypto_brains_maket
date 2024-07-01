import Button from "../Button/Button";
import cards from "../../utils/cards";
import CardTrends from "./CardTrends/CardTrends";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useResize} from "../../hooks/useResize";
import "./Trends.scss";

function Trends() {
    const {isScreenMd} = useResize();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 750,  // Если ширина экрана >= 750px
                settings: {
                    slidesToShow: 2.3,
                }
            },
            {
                breakpoint: 500,  // Если ширина экрана >= 500px
                settings: {
                    slidesToShow: 1.5,
                }
            }
        ]
    };
    const settingsTwo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        initialSlide: 0
    };


    return (
        <section className="trends">
            <div className="container container-flex">
                <div className="trends__group">
                    <h2 className="p58">Market Trends</h2>
                    {isScreenMd &&
                        <Slider {...settingsTwo}>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">All</a>
                            </div>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">Top Gainers</a>
                            </div>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">Top Losers</a>
                            </div>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">New Listing</a>
                            </div>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">Defi</a>
                            </div>
                            <div className="trends__item">
                                <a href="#" className="trends__link p20b">Metaverse</a>
                            </div>
                        </Slider>
                    }
                    {!isScreenMd &&  <div className="trends__list">
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">All</a>
                        </div>
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">Top Gainers</a>
                        </div>
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">Top Losers</a>
                        </div>
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">New Listing</a>
                        </div>
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">Defi</a>
                        </div>
                        <div className="trends__item">
                            <a href="#" className="trends__link p20b">Metaverse</a>
                        </div>
                    </div>}

                </div>
                <div className="line"></div>
                {isScreenMd &&
                    <Slider {...settings}>
                        {cards.map((card, id) => {
                            return (<CardTrends key={id} card={card}/>)
                        })}
                    </Slider>
                }
                {!isScreenMd &&
                    <div className="trends__cards">
                        {cards.map((card, id) => {
                            return (<CardTrends key={id} card={card}/>)
                        })}
                    </div>
                }
                <div className="trends__button">
                    <Button text="See All Market"/>
                </div>
            </div>
        </section>
    );
}

export default Trends;
