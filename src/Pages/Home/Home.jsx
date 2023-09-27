import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/NavBar/Banner";
import Donations from "../../Components/Donations/Donations";
import { useState } from "react";
import FilteredDonations from "../../Components/Donations/FilteredDonations";

const Home = () => {
    const donations = useLoaderData();
    const [filterDonations, setFilterDonations] = useState([])
    console.log(filterDonations);
    const handleSearch = (text) => {
        const searchText = text.toLowerCase()
        const findDonations = donations.filter((donation) => donation.category.toLowerCase() === searchText)
        setFilterDonations(findDonations)
    }

    console.log(donations);
    return (
        <div>
            <Banner Donations={Donations} handleSearch = {handleSearch}></Banner>
            {filterDonations.length > 0 ? (
               <FilteredDonations filterDonations={filterDonations}></FilteredDonations>        
            ) : (
                <Donations donations={donations}></Donations>
            )
            }
            
        </div>
    );
};

export default Home;