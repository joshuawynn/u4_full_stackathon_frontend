import { Link } from 'react-router-dom'

const Rides = ({rides}) => {

    return (
        <div className="ride-grid">
            <h1>Rides</h1>
            {rides.map(ride => (
                <Link to={`${ride._id}`}>
                <div className="ride-card" key={ride.id}>
                    <img src={ride.picture} alt={ride.title} />
                        <h2>{ride.title}</h2>
                        <div>
                        <p>Wait Time:</p>
                        <p>{ride.waitTime}</p>
                        </div>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default Rides