import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {

    return (
        <div className=" ">
            <nav className="">
              <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center py-4  px-6 gap-4">
               <Logo></Logo>
                <ul className="flex gap-5 ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-custom underline text-xl" : "text-xl"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/donations"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-custom underline text-xl" : "text-xl"
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-custom underline text-xl" : "text-xl"
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
              
              </div>
            </nav>
         
        </div>

    );
};

export default NavBar;