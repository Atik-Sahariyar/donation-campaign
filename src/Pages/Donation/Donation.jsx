import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../../Pages/Donation/DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState([]);
    const { id } = useParams();

    const donations = useLoaderData()
  
    useEffect(() =>{
        const findDonation = donations?.find((donation) => donation.id === id);
        console.log(findDonation);
        setDonation(findDonation);
    },[id, donations])
    
    return (
        <div>
            <DonationCard donation={donation}></DonationCard>
            <h3>This is Donation page</h3>
        </div>
    );
};

export default Donation;