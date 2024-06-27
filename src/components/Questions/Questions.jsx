import questions from "../../utils/questions";
import "./Questions.scss";

function Questions() {
    return (
        <section className="questions">
            <div className="container  container-flex">
                <div className="content">
                    <h1 className="p58">Frequently Asked Questions</h1>
                    <p className="p18b">When an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.</p>
                </div>
                <div className="line"></div>
                <div className="questions__blocks">
                    {questions.map((question, id) => {
                        return (
                            <div className="questions__block" key={id}>
                                <input className="question-input" id={question.id} type='checkbox'/>
                                <label className="question-label h36" htmlFor={question.id}>{question.title}</label>
                                <label className="questions__text answer p18">{question.text}</label>
                                <label className="question-img" htmlFor={question.id}></label>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Questions;
