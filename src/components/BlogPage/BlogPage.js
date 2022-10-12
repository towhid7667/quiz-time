import React from 'react'

const BlogPage = () => {
    return (
        <div className='container'>

            <h2 className='text-center my-3 text-decoration-underline'>Here Some information from Developer</h2>

            <section className='my-3'>

                <div className='mb-3'>
                    <i className="fas fa-question-circle fs-3 "></i>
                    <span className=' ms-2 text-danger fs-3 fw-bold'>What is the purpose of react router?</span>
                </div>

                <div className='mb-3'>
                    <i className="fas fa-marker fs-5 me-2"></i>
                    <span className='fs-5'>
                        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    </span>
                </div>

                <hr />

                <div className='mb-3'>
                    <i className="fas fa-question-circle fs-3 "></i>
                    <span className=' ms-2 text-danger fs-3 fw-bold'>How does context api works?</span>
                </div>

                <div className='mb-3'>
                    <i className="fas fa-marker fs-5 me-2"></i>
                    <span className='fs-5'>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </span>
                </div>

                <hr />

                <div className='mb-3'>
                    <i className="fas fa-question-circle fs-3 "></i>
                    <span className=' ms-2 text-danger fs-3 fw-bold'>How does useRef works?</span>
                </div>

                <div className='mb-3'>
                    <i className="fas fa-marker fs-5 me-2"></i>
                    <span className='fs-5'>
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                    </span>
                </div>

            </section>
        </div>
    )
}

export default BlogPage