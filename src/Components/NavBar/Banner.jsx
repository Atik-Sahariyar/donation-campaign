
const Banner = () => {
    // const backgroundImg = '../../assets/images/'
    return (
        <div className=' h-[80vh] bg-green-200  flex justify-center items-center'>
            <div>
                <h1 className="text-3xl font-bold mb-8">I Grow By Helping People In Need</h1>

                <div  className=" flex justify-center ">
                <input type="text" placeholder="Search here...." className=" w-[60%] py-1 px-3 rounded-l-md" />
                <button className=" bg-red-custom text-white py-1 px-3 rounded-r-md">Search</button>  
                </div>
            </div>
        </div>
    );
};

export default Banner;