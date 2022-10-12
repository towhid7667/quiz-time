import { useEffect } from "react";
import { useState } from "react"

const QuizAPI = (id) => {
    const [quizes, setQuiz] = useState([]);
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
            .then(res => res.json())
            .then(data => setQuiz(data.data));
    }, [quizes, id]);
    return [quizes, setQuiz];
}

export default QuizAPI;