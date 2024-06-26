import Button from "../Button/Button";

function Trends() {
    return (
        <section className="trends">
            <div className="container trends__container">
                <div className="trends__group">
                    <h2 className="p58">Market Trends</h2>
                    <ul className="trends__list">
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">All</a>
                        </li>
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">Top Gainers</a>
                        </li>
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">Top Losers</a>
                        </li>
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">New Listing</a>
                        </li>
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">Defi</a>
                        </li>
                        <li className="trends__item">
                            <a href="#" className="trends__link p20b">Metaverse</a>
                        </li>
                    </ul>
                </div>
                <div className="trends__line"></div>
                <div className="trends__button">
                    <Button text="See All Market" />
                </div>

            </div>
        </section>
    );
}

export default Trends;
