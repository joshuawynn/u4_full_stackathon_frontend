import { useParams } from 'react-router-dom'

const Details = () => {

    let id = useParams();

    const [rides, setRides] = useState('');

    useEffect(() => {
        let selectedRide = rides.find((ride) => ride.id === id)
        setRides(selectedRide)
    }, [])

    return (
        <div className='detail'>
            <h1 className='detail-header'>Ride Details</h1>
            <h2>{rides.description}</h2>
            <h3>{rides.image}</h3>
        </div>
    )
}

export default Details