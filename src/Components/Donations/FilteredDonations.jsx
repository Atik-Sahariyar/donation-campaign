import PropTypes from 'prop-types';
import FindDonations from './FindDonations';

const FilteredDonations = ({filterDonations }) => {
   
    return (
        <div className='py-10 flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3 py-10 mx-2'>
            {
                 filterDonations?.map((findDonation) => <FindDonations key = {findDonation.id} findDonation = {findDonation}></FindDonations>)
            }
        
        </div>
    </div>
    );
};

FilteredDonations.propTypes = {
    filterDonations: PropTypes.array, 
}

export default FilteredDonations;