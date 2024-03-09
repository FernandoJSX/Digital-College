import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}> Início</Link>
                </li>
                <li>
                    <Link to={'/sobre'}> Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;