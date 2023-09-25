import PropTypes from 'prop-types';
import DonationsCard from './DonationsCard';
import { useEffect, useState } from 'react';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const donationsItem = JSON.parse(localStorage.getItem("donations"));
        if (donationsItem) {
            setDonations(donationsItem)
        }
        else {
            setNofound("No Data Found")
        }
    }, [])



    return (
        <div className='py-10'>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>

                    <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-2 gap-5">
                        {
                            isShow ? donations.map((donation) => (
                                <DonationsCard key={donation.id} donation={donation}></DonationsCard>
                            ))

                                : donations.slice(0, 4).map((donation) => (
                                    <DonationsCard key={donation.id} donation={donation}></DonationsCard>
                                ))
                        }
                    </div>

                    {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-[#009444] text-white mt-4 py-1  rounded-md block mx-auto">
                        {isShow ? "See less" : "See more"}
                    </button>}
                </div>
            )}
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array
}

export default Donations;