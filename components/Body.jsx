'use client';
import React, { useState, useEffect  } from 'react';
import packagesData from '@/public/assests/packagesData.json';
import Slider from 'react-slick'; 

export default function BodyComponent() {
  const [currentTab, setCurrentTab] = useState('Outstation');
  const [visibleCards, setVisibleCards] = useState(12);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        // Load Google Maps Places Library
        const { places } = await google.maps.importLibrary('places');
        
        // Define the place ID for "Leo Call Taxi"
        const placeId = '0x3bad39552e72dc17:0x93fc4ae09cf140c'; 
        
        // Create a new Places Service instance
        const service = new places.PlacesService(document.createElement('div'));

        // Fetch place details, including reviews
        service.getDetails(
          {
            placeId: placeId,
            fields: ['reviews'],
          },
          (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              setReviews(place.reviews || []);
            } else {
              console.error('Error fetching reviews:', status);
            }
          }
        );
      } catch (error) {
        console.error('Error importing Google Maps library:', error);
      }
    }

    fetchGoogleReviews();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setVisibleCards(12);
  };

  const handleViewMore = () => {
    setVisibleCards((prev) => prev + 12);
  };

  const filteredData = packagesData[currentTab.toLowerCase()].slice(0, visibleCards);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section id="booknow" className="h-[95vh] bg-black text-yellow-600">
        <div className="flex flex-col h-full">
          {/* Heading and Button */}
          <div className="flex flex-col sm:flex-row h-full justify-center sm:justify-between items-center sm:items-center p-4 gap-6">
            <div className="text-center sm:text-left">
              <h1 className="text-yellow-500 text-3xl sm:text-5xl md:text-6xl font-bold leading-snug">
                Connecting You to
              </h1>
              <h1 className="text-yellow-500 text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Destination
              </h1>
              <p className="text-gray-300 text-sm sm:text-lg md:text-xl mt-4">
                From short rides to long journeys, we got it all.
              </p>
            </div>
            <div>
              <button className="p-3 md:px-6 rounded-3xl bg-yellow-500 text-black text-sm md:text-lg font-bold">
                BOOK NOW
              </button>
            </div>
            <div className="sm:hidden">
              <button className="p-2 text-purple-700 text-sm font-bold">
                DOWNLOAD TARIFF
              </button>
            </div>
          </div>

          {/* Car Image and Tariff */}
          <div className="flex flex-col sm:flex-row items-center w-full ">
                <div className="w-full sm:w-[75%] -mt-10">
                <img
                    src="./images/car.png"
                    alt="Car"
                    className="w-full object-contain translate-y-7 sm:translate-y-10 md:translate-y-12 lg:translate-y-16"
                />
                </div>
                <div className="hidden sm:flex items-end justify-center w-[25%]">
                <button className="p-2 text-purple-700 text-sm md:text-base font-bold">
                    DOWNLOAD TARIFF
                </button>
                </div>
            </div>

          {/* Contact Section */}
          <div className="w-full py-6 bg-yellow-500 h-[25%] text-center text-black">
            <p className="text-sm md:text-base">WE ARE READY TO TAKE YOUR CALL ALL DAY EVERYDAY</p>
            <h1 className="font-bold text-xl md:text-2xl">+91 9150452590</h1>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section
        id="packages"
        className="min-h-screen bg-black text-white py-10 px-4 sm:px-8 lg:px-16"
      >
        <h1 className="text-center text-3xl sm:text-4xl font-bold mb-8">PACKAGES</h1>
        <div className="flex justify-center space-x-4 md:space-x-8 mb-8">
          {['Outstation', 'Local', 'Pickup'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                currentTab === tab ? 'bg-gray-700' : 'bg-gray-500'
              }`}
              onClick={() => handleTabChange(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredData.map((place, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:scale-105"
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-white">{place.name}</h2>
                <p className="text-sm text-gray-400">{place.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400">★ {place.rating}</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Start from <span className="font-bold">${place.priceStart}/pax</span>
                </p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {packagesData[currentTab.toLowerCase()].length > visibleCards && (
          <div className="flex justify-center mt-8">
            <button
              className="px-6 py-2 bg-yellow-500 text-black font-bold rounded-full"
              onClick={handleViewMore}
            >
              VIEW MORE
            </button>
          </div>
        )}
      </section>
      <section
      id="testimonials"
      className=" bg-gray-900 text-white py-10 px-4 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          HAPPY CLIENTS
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-500">
          TESTIMONIALS
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Google Reviews Slider */}
        <div className="lg:pr-8">
          <Slider {...sliderSettings}>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                >
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                    {review.text}
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-yellow-500 mt-2">
                    {review.author_name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">
                    {review.rating} ★
                  </p>
                </div>
              ))
            ) : (
              <div className="text-gray-500 text-center">
                Loading reviews...
              </div>
            )}
          </Slider>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 bg-yellow-500 text-black font-bold rounded-full">
          VIEW MORE
        </button>
      </div>
    </section>
    <section id='Banner' className='relative'>
        <div>
        <div className='' > 
                <img className='w-full' src="./images/LeoBanner.png" alt="" />

            </div>
            <div>
                
                <button className=' text-blue-300 flex text-[0.5rem] sm:text-xs md:text-sm lg:text-xl justify-around items- w-full absolute bottom-[4%] z-10 '>
                    
                    CLICK HERE 
                    <br className='sm:hidden md:' />
                    TO KNOW MORE
                </button>
            </div>
        </div>
            
    </section>
    <section className="bg-yellow-500 text-black py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        WE DO MORE THAN YOU WISH
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">⭐</span>
          </div>
          <h3 className="text-lg font-semibold">HOME PICKUP</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">⏰</span>
          </div>
          <h3 className="text-lg font-semibold">FAST BOOKING</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">⚡</span>
          </div>
          <h3 className="text-lg font-semibold">BONUSES FOR RIDES</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <span className="text-4xl">⚙️</span>
          </div>
          <h3 className="text-lg font-semibold">GPS SEARCHING</h3>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8">
          <img
            src="./images/LeoTaxiLogo.png" // Replace with your actual image path
            alt="Leo Taxi Logo"
            className="w-40 h-40 lg:w-48 lg:h-48"
          />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">About us</h2>
          <p className="text-red-600 font-semibold mb-4">
            For the past 8 years, we have proudly served as a leading taxi
            service company in Vellore, Tamil Nadu, India. With a fleet of over
            600 cabs at our disposal, we have been dedicated to providing
            reliable and comfortable transportation solutions to our valued
            customers.
          </p>
          <p>
            Customer satisfaction is at the heart of our operations, and we
            continually strive to exceed expectations. We prioritize
            punctuality, reliability, and affordability, ensuring that our
            customers experience a seamless and enjoyable journey with us.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}
