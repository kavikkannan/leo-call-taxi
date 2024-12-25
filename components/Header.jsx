export default function HeaderComponent(){
    return(
        <div className="w-full bg-black  flex ">
            <div className="">
                <img src="./images/LeoTaxiLogo.png" alt="Logo" />
            </div>
            <div className="w-full flex  items-center text-white justify-between ">
                <div className=" w-[75%]  text-center sm:hidden">
                    <h1>Leo Call Taxi</h1>
                </div>
                <div className=" h-[32%] w-[25%] flex justify-end pr-10 sm:hidden ">
                    <button className="flex justify-center items-center ">
                        <h1>menu</h1>
                        <div>
                            <img className="bg-white h-5 w-10" src="./images/down-chevron.png" alt="" />
                        </div>
                    </button>
                </div>
                {/* desktop view */}
                <div className=" hidden sm:flex w-full font-bold justify-evenly items-center ">
                    <button>
                        Home
                    </button>
                    <button>
                        Booking
                    </button>
                    <button>
                        About us
                    </button>
                    <button>
                        Contact us
                    </button>
                    <button>
                        Join us
                    </button>
                </div>
            </div>
            
        </div>
    );
}