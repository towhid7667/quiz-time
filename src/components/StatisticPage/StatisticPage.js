import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import TopicListAPI from '../../CustomHooks/TopicListAPI';

const StatisticPage = () => {


    const [topicLists] = TopicListAPI();

    return (
        <div className='container my-5'>

            <h2 className='mb-3'>Our Quizes</h2>


            <div className="container">
                <BarChart
                    width={500}
                    height={300}
                    data={topicLists}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />

                    <Legend />
                    <Bar type="monotone" dataKey="id" fill='#e36019' stroke="#e36019" activeDot={{ r: 10 }} />
                    <Bar type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" activeDot={{ r: 10 }} />
                </BarChart>


            </div>

        </div>
    )
}

export default StatisticPage