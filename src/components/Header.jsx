import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h2>Seven Flags</h2>
            </Link>
            <Link to="/rides">
                <h3>Explore</h3>
            </Link>
        </header>
    )
}

export default Header

