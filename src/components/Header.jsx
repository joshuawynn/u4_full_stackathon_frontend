import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/">
                <h2 className="logo">Seven Flags</h2>
            </Link>
            <Link to="/rides">
                <h4>Explore</h4>
            </Link>
        </header>
    )
}

export default Header