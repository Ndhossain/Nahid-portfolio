import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <main className='max-w-[1024px] mx-auto px-5'>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;