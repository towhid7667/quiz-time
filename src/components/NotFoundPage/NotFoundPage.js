import React from 'react'
import notPic from '../../MyAssets/Images/notFoundPhoto.jpg'
const NotFoundPage = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={notPic} alt="" srcset="" />
        </div>
    )
}

export default NotFoundPage