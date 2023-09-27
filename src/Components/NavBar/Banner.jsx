import { useState } from "react";
import PropTypes from 'prop-types';

const Banner = ({donations, handleSearch}) => {
    const bannerImg = 'https://i.ibb.co/wzrgHTP/Banner-bg.png';
    const [inputValue, setInputValue] = useState('');
    

    const bannerStyle = {
        content: `<h1>Atik</h1>`,
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.08
    }
    console.log(donations);
    const handleInputChange = (event) => {
        let searchText = event.target.value;
        setInputValue(searchText);
    }
    
    return (
        <div className=" relative  h-screen">
            <div className={`  w-[100%] h-[85vh]  `} style={bannerStyle}>
            </div>

            <div className=" absolute  bottom-[50%] left-[30%]">
                <h1 className="text-xl md:text-3xl lg:text-3xl font-bold mb-8">I Grow By Helping People In Need</h1>

                <div className=" flex justify-center ">
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text" placeholder="Search here...." className=" w-[60%] py-1 px-3 rounded-l-md"
                    />
                    <button onClick={() => handleSearch(inputValue)} className=" bg-red-custom text-white py-1 px-3 rounded-r-md">Search</button>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    donations: PropTypes.array,
    handleSearch: PropTypes.func
}
export default Banner;