import { Link, useNavigate } from "react-router-dom"
import Button from "../../common/button/Button";


const Header = () => {
    const navigate = useNavigate();

    const deleteToken = () => {
        localStorage.clear("token");
        navigate("/");
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/listing'>Home</Link>
                    </li>
                    <li>
                        <Link to='/'></Link>
                    </li>
                    <li>
                        <Button onClick={deleteToken}>Logout</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header