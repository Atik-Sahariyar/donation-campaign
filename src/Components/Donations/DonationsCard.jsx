import PropTypes from 'prop-types';


const DonationsCard = ({ donation }) => {
    const { picture, card_bg_color, category, title, category_text_color, text_button_bg_color} = donation || {};

    console.log(donation);
   
    return (
        <div  className={`relative   w-[312px] flex flex-col rounded  bg-[${card_bg_color}]`}>
            <div className="relative h-72 overflow-hidden rounded ">
                <img src={picture} alt="profile-picture" />
                <div className={`  text-[${category_text_color}] ml-4 mt-3`}>
                    <button className={`px-3 py-1 rounded-md  bg-[${text_button_bg_color}] `}>{category}</button>
                    <h2 className='text-2xl'>{title}</h2>
                </div>
            </div>
        </div>
    );
};

DonationsCard.propTypes = {
    donation: PropTypes.object
}
export default DonationsCard;