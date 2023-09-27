import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/NavBar/Banner";
import Donations from "../../Components/Donations/Donations";

const Home = () => {
   const donations = useLoaderData();
   console.log(donations);
    return (
        <div>
            <Banner donations={donations}></Banner>
            <Donations donations={donations}></Donations>
        </div>
    );
};

export default Home;