import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const DonationsCard = ({ donation }) => {
   
    const {id, picture, card_bg_color, category, title, category_text_color, text_button_bg_color} = donation || {};

    console.log(donation);

    const handleAddToDonation = () => {
        const addedDonationArray = [];
    
        const donationItems = JSON.parse(localStorage.getItem("donations"));
    
       
        if (!donationItems) {
          addedDonationArray.push(donation);
          localStorage.setItem("donations", JSON.stringify(addedDonationArray));
          Swal("Good job!", "Products added successfully!", "success");
        } 
        
        else {
    
    
          const isExits = donationItems.find((donation) => donation.id === id);
    
          
          if (!isExits) {
    
            addedDonationArray.push(...donationItems, donation);
            localStorage.setItem("donations", JSON.stringify(addedDonationArray));
            Swal("Good job!", "Products added successfully!", "success");
           
          } else {
            Swal("Error!", "No duplicate !", "error");
          }
        }
    }
    return (
        <div onClick={handleAddToDonation}  className={`relative   w-[312px] flex flex-col rounded  bg-[${card_bg_color}]`}>
            <div className="relative h-72 overflow-hidden rounded ">
                <img src={picture} alt="profile-picture" />
                <div className={`text-[${category_text_color}] ml-4 mt-3`}>
                    <button className={`px-3 py-1 rounded-md  bg-[${text_button_bg_color}] `}>{category}</button>
                    <h2 className={`text-2xl text-[${category_text_color}]`}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

DonationsCard.propTypes = {
    donation: PropTypes.object
}
export default DonationsCard;