import scheduleChoose from '../../images/choose/scheduleChoose.png';
import Button from "../Button/Button";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useResize} from "../../hooks/useResize";
import './Choose.scss';
import RepeatingBlock from "../RepeatingBlock/RepeatingBlock";

function Choose() {
    const {isScreenMdx} = useResize();
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <RepeatingBlock classSection={"choose"} classBlock={''} title={"Why Choose Crypto Brains!"} text={"When an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
            <div className="choose__blocks">
                {isScreenMdx &&
                    <Slider {...settings}>
                        <div className="choose__groups">
                            <h2 className='p58f'>01</h2>
                            <div className="choose__group">
                                <p className='h24'>Easy Trading</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="choose__groups">
                            <h2 className='p58f'>02</h2>
                            <div className="choose__group">
                                <p className='h24'>24/7 Help Service</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="choose__groups">
                            <h2 className='p58f'>03</h2>
                            <div className="choose__group">
                                <p className='h24'>Fast Service</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="choose__groups">
                            <h2 className='p58f'>04</h2>
                            <div className="choose__group">
                                <p className='h24'>Low Charges</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                    </Slider>
                }
                {!isScreenMdx &&
                    <div className="choose__block">
                        <div className="choose__groups">
                            <h2 className='p58f'>01</h2>
                            <div className="choose__group">
                                <p className='h24'>Easy Trading</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets
                                    containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="line line__two"></div>
                        <div className="choose__groups">
                            <h2 className='p58f'>02</h2>
                            <div className="choose__group">
                                <p className='h24'>24/7 Help Service</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets
                                    containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="line line__two"></div>
                        <div className="choose__groups">
                            <h2 className='p58f'>03</h2>
                            <div className="choose__group">
                                <p className='h24'>Fast Service</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets
                                    containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                        <div className="line line__two"></div>
                        <div className="choose__groups">
                            <h2 className='p58f'>04</h2>
                            <div className="choose__group">
                                <p className='h24'>Low Charges</p>
                                <p className='p16b'>It was popularised in the 1960s with the release of Letraset
                                    sheets
                                    containing Lorem Ipsum passages.</p>
                            </div>
                            <Button text="Start Now" classButton="button_choose"/>
                        </div>
                    </div>}
                <div className="choose__img">
                    <img src={scheduleChoose} alt="schedule"/>
                </div>
            </div>
        </RepeatingBlock>

    );
}

export default Choose;
