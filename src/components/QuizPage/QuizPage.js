import { useParams } from 'react-router-dom';
import QuizAPI from '../../Hooks/QuizAPI';
import QuizCard from './QuizCard';

const QuizPage = () => {

    const { id } = useParams();
    const [quizes] = QuizAPI(id);
    let count = 0;

    return (
        <div className='container'>

            <h3 className="m-3">Quiz of <span className="text-info">{quizes.name}</span></h3>


            <div className="container">
                {
                    quizes.questions?.map(quiz => {
                        count++;
                        return <QuizCard

                            key={quiz.id}
                            quiz={quiz}
                            count={count}
                        >
                        </QuizCard>
                    })
                }
            </div>

        </div>
    )
}

export default QuizPage