import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const FindDonations = ({ findDonation }) => {
  console.log(findDonation);
  const { id, picture, card_bg_color, category, title, category_text_color, text_button_bg_color } = findDonation || {};

  const cardBg = { backgroundColor: `${card_bg_color}` };
  const textColor = { color: `${category_text_color}` };
  const buttonBgColor = { backgroundColor: `${text_button_bg_color}` }


  const handleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (!donationItems) {
      addedDonationArray.push(findDonation);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      Swal.fire({
        title: 'Good job! Donation added successfully!',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }

    else {


      const isExits = donationItems.find((donation) => donation.id === id);


      if (!isExits) {

        addedDonationArray.push(...donationItems, findDonation);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        Swal.fire({
          title: 'Good job! Donation added successfully!',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })

      } else {
        Swal.fire({
          title: 'Error! No duplicate !',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    }
  }
  return (
      <div onClick={handleAddToDonation} className={`relative   w-[312px] flex flex-col rounded`} style={cardBg}>
        <div className="relative h-72 overflow-hidden rounded ">
          <img src={picture} alt="profile-picture" className='w-[100%] h-[67.37%]'/>
          <div className={` ml-4 mt-3`} style={textColor}>
            <button className={`px-3 py-1 rounded-md`} style={buttonBgColor}>{category}</button>
            <h2 className={`text-2xl`} style={textColor}>{title}</h2>
          </div>
        </div>
      </div>
   
  );
};

FindDonations.propTypes = {
  findDonation: PropTypes.object
}
export default FindDonations;