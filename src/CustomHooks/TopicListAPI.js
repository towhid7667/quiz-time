import { useEffect } from "react";
import { useState } from "react"

const TopicListAPI = () => {
    const [topicLists, setTopicLists] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
            .then(res => res.json())
            .then(data => setTopicLists(data.data));
    }, [topicLists]);
    return [topicLists, setTopicLists];
}

export default TopicListAPI;