import { Link } from 'react-router-dom'

const Rides = ({rides}) => {

    return (
        <div className="ride-grid">
            <h1>Rides</h1>
            {rides.map(ride => (
                <Link to={`${ride._id}`}>
                <div className="ride-card" key={ride.id}>
                        <h2>{ride.title}</h2>
                    <h3>{ride.waitTime}</h3>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default Rides