import PropTypes from 'prop-types';


const DonationsCard = ({ donation }) => {
    const { donation_img, card_bg_color, category, title, category_text_color, text_button_bg_color, price} = donation || {};
    
    return (
        <div className={`m-2 relative  flex flex-col rounded  bg-[${card_bg_color}]`}>
            <div className="flex gap-2 relative   overflow-hidden rounded ">
                <div>
                <img src={donation_img} alt="profile-picture" className='md:h-[208px]' />
                </div>
                <div className={` ml-4 p-2 lg:mt-3`}>
                    <button className={` px-3 py-1 rounded-md  bg-[${text_button_bg_color}]  text-[${category_text_color}] `}>{category}</button>
                    <h2 className='text-2xl mt-2'>{title}</h2>
                    <p className={`my-2 text-[${category_text_color}]`}>${price}</p>
                    <button className={`mt-1  text-white  bg-[${category_text_color}] py-1 px-2 rounded-md`}>View Details</button>
                </div>
            </div>
        </div>
    );
};

DonationsCard.propTypes = {
    donation: PropTypes.object
}
export default DonationsCard;