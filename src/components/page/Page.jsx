import Button from "../button/Button"
import { useNavigate, Navigate } from "react-router-dom";

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const Page = () => {
    const navigate = useNavigate();
    let token = localStorage.getItem("token");

    const deleteToken = () => {
        localStorage.clear("token");
        navigate("/");
    }
    //sass y react grid o grid system y bootstrap o  mui

    return (
     <div style={styles.page}>
        {!token && <Navigate replace to="/" /> }
        <h1>Ya estas dentro</h1>
        <Button onClick={deleteToken}>Cerrar sesión</Button>
    </div>
  )
}

export default Page