import React from 'react'
import { Link } from 'react-router-dom';

const TopicCard = (props) => {

    const { id, name, logo, total } = props.topicList;

    return (
        <>
            <div className="col-lg-4 col-md-6 ">
                <div className="card border-dark mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="d-flex col-md-4 align-items-center justify-content-center p-2    ">
                            <img src={logo} className="img-fluid rounded-start border border-dark border-3" alt={logo} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">

                                <h5 className="card-title fs-3 text-center">{name}</h5>

                                <p className="card-text text-center"><small className="text-muted">Total: {total}</small></p>

                                <Link className="btn btn-outline-dark float-end mb-2" to={`/quiz/${id}`}>Lets Go</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopicCard