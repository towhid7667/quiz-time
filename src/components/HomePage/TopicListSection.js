import React from 'react'
import TopicListAPI from '../../CustomHooks/TopicListAPI';
import TopicCard from './TopicCard'

const TopicListSection = () => {

    const [topicLists] = TopicListAPI();

    return (

        <div className="row g-4">
            {
                topicLists.map(topicList => <TopicCard

                    key={topicList.id}
                    topicList={topicList}
                >
                </TopicCard>)
            }
        </div >
    )
}

export default TopicListSection