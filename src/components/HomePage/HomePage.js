import React from 'react'
import Banner from '../../Assets/Images/banner.jpg'
import TopicListSection from './TopicListSection'

const HomePage = () => {
    return (
        <div>

            {/* Banner */}

            <div className='container-fluid'>
                <img className='img-fluid w-100' style={{ height: "300px" }} src={Banner} alt="banner" />
            </div>

            <h1 className="text-center">Welcome to Quiz Time</h1>
            <h4 className="text-center">Here is our quiz topic</h4>


            <div className="container my-5">
                <TopicListSection />
            </div>


        </div>


    )
}

export default HomePage