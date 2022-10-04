import Footer from "./footer/Footer";
import Header from "./header/Header";
import useLocalStorage from "../services/token";

const Layout = ({ children }) => {

    const { token } = useLocalStorage();

    if (!token) return <>{children}</>

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout