import { Navigate } from "react-router-dom";
import useLocalStorage from "../../services/token";

const styles = {
    listing: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const Listing = () => {
    const { token } = useLocalStorage();

    //sass y react grid o grid system y bootstrap o  mui
    console.log(token)
    return (
     <div style={styles.listing}>
        {!token && <Navigate replace to="/" /> }
        <h1>Ya estas dentro</h1>
    </div>
  )
}

export default Listing;