'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  return (
    <main className="relative bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <header 
  className="fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-screen-xl flex items-center justify-between px-8 py-4 bg-black bg-opacity-70 backdrop-blur-lg shadow-xl z-50 glow-header transition-all duration-300 ease-in-out hover:shadow-2xl"
>
<motion.h1 
  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500" // Ensure bg-clip-text and text-transparent are applied correctly
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Tattoos1960
</motion.h1>


  
  <nav className="w-full text-center">
    <ul className="flex justify-center space-x-8 text-white">
      <li><a href="#services" className="hover:text-yellow-400 transition duration-300">Services</a></li>
      <li><a href="#gallery" className="hover:text-yellow-400 transition duration-300">Gallery</a></li>
      <li><a href="#blogs" className="hover:text-yellow-400 transition duration-300">Blogs</a></li>
      <li><a href="#imagine" className="hover:text-yellow-400 transition duration-300">Imagine</a></li>
      <li><a href="#importance" className="hover:text-yellow-400 transition duration-300">Importance</a></li>
    </ul>
  </nav>

  {/* Book Appointment Button */}
  <a 
    href="#contact" 
    className="ml-8 inline-block px-6 py-3 text-xl font-semibold border border-gray-500 text-white bg-black transition-transform duration-200 hover:scale-105 hover:bg-black-400 whitespace-nowrap"
  >
    Book Appointment
  </a>
</header>


<style jsx>{`
  .glow-header {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.7), 
                0 0 3px rgba(255, 255, 255, 0.5), 
                0 0 2px rgba(255, 215, 0, 0.3);
  }
`}</style>


      {/* Hero Section */}
<section 
  className="relative flex items-center justify-center h-screen bg-cover bg-center" 
  style={{ 
    backgroundImage: 'url(/media/homepagebanner.jpg)', 
    backgroundAttachment: 'fixed', // Keeps the background fixed
    backgroundPosition: 'center',   // Ensures the background is centered
    backgroundSize: 'cover'         // Ensures the background covers the entire section
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  <motion.div 
    className="relative z-10 text-center max-w-3xl px-4"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-6xl font-extrabold leading-tight text-white">
      manifesting timeless <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-500 to-black">tattoos</span> for you
    </h2>
    <a 
      href="#contact" 
      className="inline-block px-8 py-4 mt-8 text-xl font-semibold border border-gray-500 text-white-500 hover:bg-gray-500 hover:text-white transition transform hover:scale-105"
    >
      Book a Session
    </a>
  </motion.div>
</section>


{/* Services Section */}
<section id="services" className="relative py-24 bg-black overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>

  <div className="container relative z-10 px-8 mx-auto text-center">
    {/* Section Title */}
    <motion.h2 
      className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-500 to-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our Services
    </motion.h2>
    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
      From traditional to modern styles, we offer a wide range of tattoo services.
    </p>

    {/* Services Grid */}
    <div className="grid gap-10 mt-16 md:grid-cols-3">
      {[
        { title: 'Custom Tattoos', img: '/media/service1.jpg', desc: 'Get unique designs tailored to your story.' },
        { title: 'Portrait Tattoos', img: '/media/service2.jpg', desc: 'Realistic portraits inked with precision.' },
        { title: 'Cover-Ups', img: '/media/service3.webp', desc: 'Transform your old tattoos into something new.' },
      ].map((service, index) => (
        <div key={index} className="relative group"> {/* Added group class */}
          <motion.div 
            className="rounded-md transform transition-transform duration-500 hover:scale-105 grayscale"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image 
              src={service.img} 
              alt={service.title} 
              width={500} // Increased width
              height={500} // Increased height
              className="w-full h-full object-cover mb-2" // Adjust margin-bottom if necessary
            />
          </motion.div>
          {/* Text Box */}
          <div className="absolute bottom-6 left-6 right-6 p-4 bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-sm text-gray-700">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Gallery Section */}
<section id="gallery" className="relative py-24 bg-black overflow-hidden">
  <div className="container relative z-10 px-8 mx-auto text-center">
    {/* Title */}
    <motion.h2
      className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-500 to-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our Gallery
    </motion.h2>
    <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
      A showcase of our best works, created with passion and artistry.
    </p>

    {/* Masonry Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Image
          src="/media/gallery1.jpeg"
          alt="Tattoo 1"
          width={500}
          height={600} // Custom heights for a staggered look
          className="object-cover w-full h-full transform filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/media/gallery2.jpeg"
          alt="Tattoo 2"
          width={500}
          height={700}
          className="object-cover w-full h-full transform filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          src="/media/gallery3.jpeg"
          alt="Tattoo 3"
          width={500}
          height={500}
          className="object-cover w-full h-full transform filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/media/gallery4.jpeg"
          alt="Tattoo 4"
          width={500}
          height={800}
          className="object-cover w-full h-full transform filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
    </div>
  </div>
</section>


{/* Testimonials Section */}
<section id="testimonials" className="py-28 bg-black relative overflow-hidden">
  {/* Background Texture */}
  <div className="absolute inset-0 opacity-10 bg-[url('/path-to-texture.png')] pointer-events-none"></div>

  <div className="container relative z-10 px-8 mx-auto text-center max-w-screen-xl">
    {/* Title */}
    <motion.h2
      className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-yellow-600 to-black"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Our Clients Say
    </motion.h2>
    <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
      Discover the experiences shared by our valued clients, celebrating their unique journeys with us.
    </p>

    {/* Testimonials Slider */}
    <div className="mt-16">
      <Slider
        dots={true}
        infinite={true}
        speed={600}
        slidesToShow={3}
        slidesToScroll={1}
        centerMode={true} // Enables the centered middle card
        centerPadding="0" // Removes padding around the center card
        autoplay={true}
        autoplaySpeed={5000}
        pauseOnHover={true}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true } },
        ]}
        customPaging={() => (
          <div className="w-3 h-3 bg-gray-500 rounded-full cursor-pointer hover:bg-green-400 transition"></div>
        )}
      >
        {[
          { name: 'John Doe', review: 'Absolutely loved my new tattoo. The artists are amazing!' },
          { name: 'Jane Smith', review: 'Incredible attention to detail. Will be coming back for more.' },
          { name: 'Michael Lee', review: 'They did a great job with my cover-up. Highly recommend!' },
          { name: 'Emily Davis', review: 'The studio was so clean and the process was smooth. Great work!' },
          { name: 'Chris Walker', review: 'My sleeve turned out even better than I imagined!' },
          { name: 'Natalie Johnson', review: 'Super friendly staff and amazing designs!' },
          { name: 'Tom Harris', review: 'Professional artists, I felt totally comfortable throughout.' },
          { name: 'Sophia Martinez', review: 'I love my tattoo! Definitely coming back for more.' },
          { name: 'Jake Wilson', review: 'They are true professionals! I’m thrilled with the result.' },
          { name: 'Laura Brown', review: 'The tattoo looks stunning, couldn’t be happier!' }
        ].map((testimonial, index) => (
          <div key={index} className="mb-9">
            <p className="text-xl italic text-gray-300 leading-relaxed">"{testimonial.review}"</p>
            <h4 className="mt-6 text-2xl font-semibold text-yellow-400 hover:text-green-300 transition-colors">
              {testimonial.name}
            </h4>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>



{/* Contact Section */}
<section id="contact" className="relative py-24 bg-black overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-80 pointer-events-none"></div>

  <div className="container relative z-10 px-8 mx-auto text-center md:text-left">
    {/* Title */}
    <motion.h2 
      className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      Let's Connect
    </motion.h2>
    <p className="mt-6 text-xl text-gray-300 md:w-2/3 mx-auto md:mx-0">
      Got any questions or want to schedule a tattoo session? Reach out to us through the form below, and we’ll get back to you shortly!
    </p>

    {/* Form and Contact Info */}
    <div className="mt-12 grid gap-12 md:grid-cols-3"> {/* Changed to 3 columns */}
      
      {/* Image on the Left */}
      <motion.div 
        className="flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Image 
          src="/media/logo.png" // Replace with your image source
          alt="Contact Us"
          width={300} // Adjust size as needed
          height={300}
          className="rounded-md" // Add any styling here
        />
      </motion.div>

      {/* Contact Information in the Middle */}
      <motion.div 
        className="space-y-8 text-gray-200 md:text-left"
        initial={{ opacity: 0, x: 0 }} // Keep this static
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-400">info@yourtattooshop.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-400">+1 (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-400">123 Tattoo Lane, Ink City, USA</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Hours</h3>
          <p className="text-gray-400">Mon-Fri: 10 AM - 8 PM</p>
          <p className="text-gray-400">Sat-Sun: 11 AM - 7 PM</p>
        </div>
      </motion.div>

      {/* Form on the Right */}
      <motion.form 
        className="grid gap-6" // Removed padding and background
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <input 
          type="text" 
          className="w-full p-4 border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your Name" 
        />
        <input 
          type="email" 
          className="w-full p-4 border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your Email" 
        />
        <textarea 
          className="w-full p-4 border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Your Message" 
          rows={5}
        ></textarea>
        <motion.button 
          type="submit" 
          className="w-full px-6 py-3 font-semibold text-lg bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="py-6 bg-black text-center">
        <div className="text-gray-400 mb-4">© 2024 Tattoos1960. All Rights Reserved.</div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/tattoos1960/?hl=en" className="hover:text-yellow-500">Instagram</a>
          <a href="https://www.facebook.com/tattoos1960/" className="hover:text-yellow-500">Facebook</a>
          <a href="https://in.pinterest.com/tattoos1960/" className="hover:text-yellow-500">Pinterest</a>
        </div>
      </footer>

      {/* Scroll to Top Button */}
<a 
  href="#" 
  className="fixed bottom-5 right-5 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-105 z-50"
>
  ↑
</a>

    </main>
  );
};

export default HomePage;