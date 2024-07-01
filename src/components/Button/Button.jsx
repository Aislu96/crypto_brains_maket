import {Link} from "react-router-dom";

function Button({text, classButton, link}) {
    return (
        <button className={`button h20 ${classButton}`}>
            <Link to={link}>{text}</Link>
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
    );
}

export default Button;
