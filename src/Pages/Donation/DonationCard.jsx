import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


const DonationCard = ({ donation }) => {
    const { id, donation_img, price, category_text_color, title, description } = donation || {};

    const buttonbgColor = { backgroundColor: `${category_text_color}`};
   
    const handleDonate = () =>{

        const addedDonatesArray = [];

        const donateItems = JSON.parse(localStorage.getItem("donates"));

        if (!donateItems) {
            addedDonatesArray.push(donation);
            localStorage.setItem("donates", JSON.stringify(addedDonatesArray));
            Swal.fire({
              title: ' Donation added successfully!',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          } 
          
          else {
      
      
            const isExits = donateItems.find((donation) => donation.id === id);
      
            
            if (!isExits) {
      
              addedDonatesArray.push(...donateItems, donation);
              localStorage.setItem("donates", JSON.stringify(addedDonatesArray));
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
                title: 'Error! Allready donated !',
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
        <div >
           <div className=' relative'>
            <img src={donation_img} alt="" className=' w-[60%] mx-auto h-[60vh] rounded-lg'/>
            <div className='ml-[20%] absolute bg-[#363636b3] w-[60%] h-[20%] bottom-0  rounded-b-lg'>
            <button onClick={handleDonate} className={` text-[10px] md:text-[16px] lg:text-[16px] text-white px-3 py-[6px] rounded bg-orange-600 w-auto absolute bottom-[20%] left-[5%] `} style={buttonbgColor}>
                Donate ${price}
            </button>
           </div>
           </div>
           <div className='mx-auto  w-[60%]'>
            <h1 className=' text-2xl font-semibold my-3'>{title}</h1>
            <p className=' text-gray-500'>{description}</p>
           </div>
       
        </div>
    );
};


DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;