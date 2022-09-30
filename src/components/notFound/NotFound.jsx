import { useNavigate } from "react-router-dom";
import Button from "../button/Button";

const styles = {
    notFound: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const NotFound = () => {
  const navigate = useNavigate();

    return (
    <div style={styles.notFound}>
        <h1>Not Found</h1>
        <h3>Error 404</h3>
        <Button onClick={ () => navigate("/") }>Volver</Button>
    </div>
  )
}

export default NotFound