import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api';

const Details = (props) => {

    let { id } = useParams();

    const [rides, setRides] = useState('');

    const selectedRide = props.rides.find(ride => ride._id === id)

    const [review, setReview] = useState({
        rating: '5',
        content: ''
    })

    // const handleChange = (e) => {
    //     setReview({ ...review, [e.target.name]: e.target.value })
    // }

    const fetchRide = async () => {
        let res = await Client.get(`/rides/${id}`)
        setRides(res.data)
    }

    useEffect(() => {
        // setRides(selectedRide)
        fetchRide()
    }, [id])

    return rides ? (
        <div>
            <div className='ride'>
                <h1>Ride Details</h1>
                <h2>{rides.title}</h2>
                <p>{rides.description}</p>
            </div>
            {/* <div className='reviews-container'>
                <h3>Reviews</h3>
                <form>
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
                </div> */}
            {/* </div> */}
        </div>
    ) : null
}

export default Details