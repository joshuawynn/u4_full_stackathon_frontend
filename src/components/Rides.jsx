import { Link } from 'react-router-dom'

const Rides = ({rides}) => {

    return (
        <div className="ride-grid">
            <h1>Rides</h1>
            {rides.map(ride => (
                <div className="ride-card" key={ride.id}>
                    <Link to={`${ride._id}`}>
                        <h2>{ride.title}</h2>
                    </Link>
                    <h3>{ride.waitTime}</h3>
                </div>
            ))}
        </div>
    )
}

export default Rides