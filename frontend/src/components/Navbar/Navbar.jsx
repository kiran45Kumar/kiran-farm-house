import farmhouse_logo from "../../../src/assets/farmhouse_logo.png";
import vector_png from "../../assets/Vector.png";
import olive_tree from "../../assets/olive-tree-remove-bg.png";

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="top-section century-gothic flex justify-between items-center p-2">
                    <a href="/">
                        <div className="logo">
                            <img src={farmhouse_logo} alt="Website Logo" className="logo" loading="eager" />
                        </div>
                    </a>
                    <div>
                        <ul className="flex gap-12 p-5 text-lg text-[#FFFFFF] font-normal">
                            <li className="cursor-pointer">Home</li>
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Gallary</li>
                            <li className="cursor-pointer">Testimonials</li>
                            <li className="cursor-pointer">Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-section flex  flex-col mx-35">
                    <div className=" border w-40 p-1 border-[#FFFFFF] rounded-2xl">
                        <h2 className="text-xs text-center letter-spacing text-[#FFFFFF]">
                            BELIVE IN QUALITY
                        </h2>
                    </div>
                    <div className="signika-medium-500">
                        <h2 className="text-[80px] text-[#FFFFFF]">
                            Where Nature <br /> Meets Luxury
                        </h2>
                    </div>
                    <div className="w-200  roboto-regular-300  my-5 text-lg">
                        <h2 className="text-lg text-[#FFFFFF]">
                            Premium stays, scenic views, and peaceful living crafted for your
                            perfect getaway.
                        </h2>
                    </div>
                    <div className="w-45 roboto-regular-300 my-1 justify-center text-lg flex items-center gap-2 p-4 caption-bottom bg-[#FFFFFF]  rounded-4xl text-[#404A3D]  hover:cursor-pointer hover:transition-all hover:delay-100 hover:bg-green-500 hover:text-white">
                        <h2 className=" signika-medium-500 text-lg">Contact Us</h2>
                        <img
                            src={vector_png}
                            alt="contact-vector-icon"
                            className="h-3 w-3"
                             loading="eager"
                        />
                    </div>
                </div>
            </nav>
            <section>
                <div className="frame-1">
                    <div className="h-30 bg-[#616B1A] top-96 border-[#FFFFFF1A] left-7 rounded-xs border flex items-center  flex-2">
                        <div className="w-50">
                            <img
                                src={olive_tree}
                                alt="olive-tree-remove-bg"
                                className="img-height-width"
                                 loading="eager"
                            />
                        </div>
                        <div className="w-500">
                            <h2 className="text-[#DAB709] text-center text-3xl century-gothic font-bold">
                                Escape the city noise in a quiet, green retreat built for rest.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Navbar;
