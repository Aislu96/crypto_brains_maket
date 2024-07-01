import './CardTrends.scss';

function CardTrends({card}) {
    return (
        <div className="card-trends">
            <img className="card-trends__img-one" src={card.src} alt="card"/>
            <span>{card.name}</span>
            <div className="card-trends__item">
                <img src={card.srcArrow} alt="icon arrow" />
                <span className="p14" style={{color: card.colorText}}>{card.interest}</span>
            </div>
            <span className="p20">{card.value}</span>
            <img className="card-trends__img-two" src={card.srcSchedule} alt="schedule"/>
        </div>
    );
}

export default CardTrends;
