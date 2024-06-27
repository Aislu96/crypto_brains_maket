import '../Main/Main.jsx';
import Banner from "../Banner/Banner";
import Trends from "../Trends/Trends";
import Trade from "../Trade/Trade";
import Questions from "../Questions/Questions";
import Choose from "../Choose/Choose";

function Main() {
    return (
        <div className="main">
            <Banner/>
            <Trends/>
            <Choose />
            <Trade/>
            <Questions />
        </div>
    );
}

export default Main;
