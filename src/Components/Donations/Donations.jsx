import PropTypes from 'prop-types';
import DonationsCard from './DonationsCard';

const Donations = ({donations}) => {
   
    return (
        <div className='py-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 py-10 mx-2'>
            {
                donations?.map(donation=><DonationsCard key={donation.id} donation={donation} ></DonationsCard> )
            }
        </div>
    </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array,
    findDonation: PropTypes.object
}

export default Donations;