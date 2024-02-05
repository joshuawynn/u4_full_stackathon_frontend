const Rides = ({rides}) => {
    return (
        <div>
            <h1>Rides</h1>
            {rides.map(ride => (
                <div key={ride.id}>
                    <h2>{ride.name}</h2>
                    <h3>{ride.wait_time}</h3>
                </div>
            ))}
        </div>
    )
}

export default Rides