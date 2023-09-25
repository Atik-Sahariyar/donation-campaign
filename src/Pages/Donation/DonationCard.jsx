import PropTypes from 'prop-types';


const DonationCard = ({ donation }) => {
    const {  picture,  category, title } = donation || {};
    console.log(donation);
    const handleAddDonations = () =>{
        localStorage.setItem('donations', JSON.stringify(donation))
    }
    
    return (
        <div >
            <div className="flex justify-center items-center h-[80vh]">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img src={picture} alt="image" className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {category}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};


DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;