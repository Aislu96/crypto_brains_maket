import '../Main/Main.jsx';
import Banner from "../Banner/Banner";
import Trends from "../Trends/Trends";
import Trade from "../Trade/Trade";
import Questions from "../Questions/Questions";
import Choose from "../Choose/Choose";
import Commerce from "../Commerce/Commerce";
import AboutUs from "../AboutUs/AboutUs";

function Main() {
    return (
        <div className="main">
            <Banner/>
            <Trends/>
            <Commerce />
            <Choose />
            <AboutUs />
            <Trade/>
            <Questions />
        </div>
    );
}

export default Main;
