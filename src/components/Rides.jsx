const Rides = ({rides}) => {
    return (
        <div className="ride-grid">
            <h1>Rides</h1>
            {rides.map(ride => (
                <div className="ride-card" key={ride.id}>
                    <h2>{ride.title}</h2>
                    <h3>{ride.wait_time}</h3>
                </div>
            ))}
        </div>
    )
}

export default Rides