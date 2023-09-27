import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


const DonationsCard = ({ donation }) => {

    const {id, donation_img, card_bg_color, category, title, category_text_color, text_button_bg_color, price} = donation || {};
    
    const cardBg = { backgroundColor : `${card_bg_color}`};
    const textColor = { color: `${category_text_color}`};
    const categoryTextbg = {color: `${category_text_color}`, backgroundColor: `${text_button_bg_color}`}
    const buttonBgColor = { backgroundColor: `${category_text_color}`};

    return (
        <div className={`m-2 relative  flex flex-col rounded  `} style={cardBg}>
            <div className="flex gap-2 relative  overflow-hidden rounded ">
                <div>
                <img src={donation_img} alt="profile-picture" className=' h-[163px]  md:max-h-[208px]  lg:h-[220px] w-[180px] md:max-w-[220px] lg:w-[242px]' />
                </div>
                <div className={` ml-4 p-2 lg:mt-3`}>
                    <button className={` px-3 py-1 rounded-md `} style={categoryTextbg}>{category}</button>
                    <h2 className='text-xl lg:text-2xl mt-2'>{title}</h2>
                    <p className={`my-2`} style={textColor}>${price}</p>
                    <NavLink to = {`/donation/${id}`} >
                    <button  className={`  mt-1 py-1 px-2 rounded-md  text-white`} style={buttonBgColor}>  
                            View Details 
                    </button>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    );
};

DonationsCard.propTypes = {
    donation: PropTypes.object
}
export default DonationsCard;