import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api';

const Details = () => {

    let { id } = useParams();

    const [rides, setRides] = useState('');

    const [review, setReview] = useState({
        rating: '5',
        content: ''
    })

    const fetchRide = async () => {
        let res = await Client.get(`/rides/${id}`)
        setRides(res.data)
    }

    const handleChange = (e) => {
        setReview({ ...review, [e.target.name]: e.target.value })
    }

    const addReview = async () => {
        try {
            await Client.post(`/reviews/rides/${id}`, review)
            .then((res)=>{
                fetchRide()
            })
        } catch (error) {
            console.error("Error adding review:", error);
        }
    }

    const handleSubmit = async (e) => {
        addReview()

    }

    useEffect(() => {
        fetchRide()
    }, [id])


    return rides ? (
        <div className='details-container'>
            <div className='ride'>
                <img src={rides.picture} alt={rides.title}/>
                <div className='ride-data'>
                    <div>
                        <p className='data-title'>Speed:</p>
                        <p className='data'>{rides.rideSpeed}</p>
                    </div>
                    <div>
                        <p className='data-title'>Height:</p>
                        <p className='data'>{rides.rideHeight}</p>
                    </div>
                    <div>
                        <p className='data-title'>Length:</p>
                        <p className='data'>{rides.rideDuration}</p>
                    </div>
                </div>
                <h2>{rides.title}</h2>
                <h5>{rides.description}</h5>
                <h5>Wait Time:</h5>
                <p>{rides.waitTime}</p>

            </div>
            <div className='reviews-container'>
                <h3>Reviews</h3>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor='rating'>Rating:</label>
                    <select name="rating" id="rating">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <input type="text" name="content" id="content" onChange={handleChange} />
                    <button type='submit'>Post</button>
                </form>
                <br />
                <br />
                <div className='reviews'>
                    {rides.reviews.map(review => (
                        <div>
                            <p>{review.content}</p>
                            <p>rating: {review.rating}</p>
                            <hr />
                            <p>{review.rating}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : null
}

export default Details