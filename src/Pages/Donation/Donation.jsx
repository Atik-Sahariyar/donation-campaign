import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "../../Pages/Donation/DonationCard";

const Donation = () => {
    const [donation, setDonation] = useState(null);
    const { id } = useParams();
    const intId = parseInt(id)

    const donations = useLoaderData()

    useEffect(() => {
        const findDonation = donations?.find((item) => item.id === intId);
        console.log(findDonation);
        setDonation(findDonation);
    }, [intId, donations])

    return (
        <div>
            {
                donation ? (
                    <div>
                        <DonationCard donation={donation}></DonationCard>
                    </div>
                ): (
                    <div className=" flex h-[70vh] justify-center items-center">
                        <p> No data found .....</p>
                    </div>
                )
            }


        </div>
    );
};

export default Donation;