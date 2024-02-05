const Home = () => {
    return (

        <div className="home">
            Welcome to Seven Flags!
        </div>

        <div>
            <div>
                <img className="home-img" src="https://i.imgur.com/ek0Jum6.jpg" alt="amusement park"></img>
                <div className="container home-info">
                    <h2>Welcome to Seven Flags!</h2>
                    <p>Discover joy and excitement for all ages at our premier amusement park. Starting in 2024, Seven Flags is a beacon of fun, safety, and innovation.</p>
                    <ul>
                        <p>What Make Us Special:</p>
                        <li>Thrilling Rides: Experience heart-pounding roller coasters and whimsical attractions.</li>
                        <li>Family-Friendly: Create lasting memories with rides catering to all age groups.</li>
                        <li>Safety Priority: Our commitment to safety ensures worry-free enjoyment for all.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h2>Park Hours:</h2>
                <p>8am to 10pm</p>
            </div>
        </div>


    )
}

export default Home