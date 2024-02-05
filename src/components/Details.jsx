import { useParams } from 'react-router-dom'

const Details = () => {

    let id = useParams();

    const [rides, setRides] = useState('');

    useEffect(() => {
        let selectedRide = rides.find((ride) => ride.id === id)
        setRides(selectedRide)
    }, [])

    return (
        <div>
            <div className='ride'>
                <h1>Ride Details</h1>
                <h2>{rides.description}</h2>
                <h3>{rides.image}</h3>
            </div>
            <div className='reviews'>
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
                    <input type="text" name="content" id="content" />
                    <button type='submit'>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Details