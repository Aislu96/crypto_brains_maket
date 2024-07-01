import questions from "../../utils/questions";
import "./Questions.scss";
import RepeatingBlock from "../RepeatingBlock/RepeatingBlock";

function Questions() {
    return (
        <RepeatingBlock classSection={"questions"} classBlock={''} title={"Frequently Asked Questions"} text={"When an unknown printer took a galley of type and scrambled it to make a type specimen book."}>
            <div className="questions__blocks">
            {questions.map((question, id) => {
                return (
                    <div className="questions__block" key={id}>
                        <input className="question-input" id={question.id} type='checkbox'/>
                        <label className="question-label h24b" htmlFor={question.id}>{question.title}</label>
                        <label className="questions__text answer p18">{question.text}</label>
                        <label className="question-img" htmlFor={question.id}></label>
                    </div>
                )
            })}
        </div>
        </RepeatingBlock>
    );
}

export default Questions;
