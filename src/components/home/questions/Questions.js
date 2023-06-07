import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Questions = () => {
    const [questionArrows, setQuestionArrows] = useState({
        question1: false,
        question2: false,
        question3: false
    });

    const changeArrow = (clickedElement) => {

        setQuestionArrows(prevArrows => ({
            ...prevArrows,    //lemasoltuk az elozo objektumot
            [clickedElement]: !prevArrows[clickedElement] // majd a klikelt element erteket atirtuk
        }));

    };
    //   console.log(questionArrows);
    return (
        <div className='questionContainer'>
            <h3 className='questionPrincipalTitle'>Questions about Golden Movies</h3>
            <div>
                <div>
                    <div className='question'>
                        <span>What is Golden Movies?</span>
                        {questionArrows.question1 ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => changeArrow('question1')} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => changeArrow('question1')} />
                        )}
                    </div>
                    {questionArrows.question1 ? (
                        <div className='answer'>Golden Movies is my movie project where everyone can watch movie trailers.</div>
                    ) : null}
                </div>
                <div>
                    <div className='question'>
                        <span>How do I proceed if I encounter issues?</span>
                        {questionArrows.question2 ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => changeArrow('question2')} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => changeArrow('question2')} />
                        )}
                    </div>
                    {questionArrows.question2 ? (
                        <div className='answer'>You can write to me :)</div>
                    ) : null}
                </div>
                <div>
                    <div className='question'>
                        <span>What movies can I see here?</span>
                        {questionArrows.question3 ? (
                            <FontAwesomeIcon icon={faChevronUp} onClick={() => changeArrow('question3')} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} onClick={() => changeArrow('question3')} />
                        )}
                    </div>
                    {questionArrows.question3 ? (
                        <div className='answer'>
                            I use an API in my project, so you can see trailers that the API transfers to the website.
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Questions;