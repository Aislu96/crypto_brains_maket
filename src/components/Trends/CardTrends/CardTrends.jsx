import './CardTrends.scss';

function CardTrends({card}) {
    return (
        <div className="card-trends">
            <img className="card-trends__img-one" src={card.src} align="icon"/>
            <span>{card.name}</span>
            <div className="card-trends__item">
                <img src={card.srcArrow} alt="icon arrow" />
                <span className="p14">{card.interest}</span>
            </div>
            <h6 className="p20">{card.value}</h6>
            <img className="card-trends__img-two" src={card.srcSchedule} alt="schedule"/>
        </div>
    );
}

export default CardTrends;
