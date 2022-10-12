import React from 'react'
import Swal from 'sweetalert2';

const QuizCard = (props) => {

    const { options, question, correctAnswer } = props.quiz;
    let count = props.count;

    const validateAnswer = (ans) => {
        ans === correctAnswer ?
            Swal.fire({
                title: "Good job!",
                text: "You clicked the correct answer!",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Okay",
                customClass: {
                    confirmButton: "btn btn-success"
                }
            }) : Swal.fire({
                title: "Opps!",
                text: "You clicked the wrong answer!",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Okay",
                customClass: {
                    confirmButton: "btn btn-danger"
                }
            });
    }

    const checkAnswer = () => {
        Swal.fire({
            title: "Correct Answer:",
            text: correctAnswer,
            icon: "info",
            buttonsStyling: false,
            confirmButtonText: "Okay",
            customClass: {
                confirmButton: "btn btn-info"
            }
        })
    }


    return (
        <div className='card my-5 mx-0 mx-md-5 p-3'>

            <div className='text-end'>
                <i onClick={checkAnswer} className="fas fa-eye fs-3"></i>
            </div>


            <h3>{count}. {question}?</h3>

            <hr />

            {
                options.map(option => (
                    <button
                        key={option}
                        onClick={() => {
                            validateAnswer(option)
                        }}
                        className='btn btn-outline-success mx-0 mx-md-5 my-3'>{option}</button>
                ))
            }


        </div >
    )
}

export default QuizCard