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
            await Client.post(`/rides/${id}/reviews`, review);
            fetchRide();
        } catch (error) {
            console.error("Error adding review:", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addReview(review)
    } 

    useEffect(() => {
        fetchRide()
    }, [id])


    return rides ? (
        <div>
            <div className='ride'>
                <h1>Ride Details</h1>
                <img src={rides.picture} alt={rides.title}/>
                <h2>{rides.title}</h2>
                <p>{rides.description}</p>
                <p>{rides.waitTime}</p>
                <p>{rides.rideDuration}</p>
                <p>{rides.rideHeight}</p>
                <p>{rides.rideSpeed}</p>
            </div>
            <div className='reviews-container'>
                <h3>Reviews</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='rating'>Rating:</label>
                    <select name="rating" id="rating">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <br />
                    <input type="text" name="content" id="content" onChange={handleChange}/>
                    <button type='submit'>Post</button>
                </form>

                <div className='reviews'>
                    {rides.reviews.map(review => (
                        <div>
                            <p>{review.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : null
}

export default Details