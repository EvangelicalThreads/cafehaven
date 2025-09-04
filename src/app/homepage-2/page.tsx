"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";


export default function CozyHome() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  const renderLinks = (onClick?: () => void) =>
    links.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="hover:text-orange-900 transition duration-300"
          onClick={onClick}
        >
          {link.name}
        </a>
      </li>
    ));

  return (
    <main className="font-sans bg-cream-50 text-gray-900">
{/* Navbar */}
<header className="fixed top-0 left-0 w-full h-20 px-8 flex justify-between items-center 
  bg-orange-100 shadow-md z-50">
  {/* Logo */}
  <div className="text-2xl font-bold tracking-wide text-orange-800">
    CafeHaven
  </div>

  {/* Desktop Nav */}
  <nav className="hidden md:flex space-x-6 text-orange-700 font-medium">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="hover:text-orange-900 transition duration-300"
      >
        {link.name}
      </a>
    ))}
  </nav>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(true)}
      className="text-3xl text-orange-700 focus:outline-none"
    >
      <HiMenu />
    </button>
  </div>

  {/* Mobile Drawer */}
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Overlay */}
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black z-40"
        />

        {/* Drawer */}
        <motion.div
          key="drawer"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed top-0 right-0 h-full w-64 bg-orange-50 flex flex-col pt-8 px-6 space-y-8 z-50 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-3xl text-orange-700 hover:text-orange-900 focus:outline-none"
          >
            <HiX />
          </button>

          {/* Links */}
          <ul className="flex flex-col items-center space-y-6 text-lg font-medium text-orange-800">
            {renderLinks(() => setIsOpen(false))}
          </ul>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</header>


      {/* ...rest of your CozyHome code remains unchanged */}


      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-orange-50">
        <Image
          src="/cozy-hero.jpg"
          alt="Cozy coffee"
          fill
          className="object-cover object-center"
        />
        <div className="absolute bg-black/20 w-full h-full"></div>
        <div className="absolute text-center px-6 text-white">
          <h1 className="text-6xl md:text-7xl font-serif mb-4">Warmth in Every Sip</h1>
          <p className="text-xl md:text-2xl font-light">
            Discover a cozy escape with handcrafted coffees and comforting ambiance.
          </p>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-8 bg-orange-50">
        <h2 className="text-4xl font-semibold text-center mb-16 text-orange-800">Our Favorites</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { name: "Vanilla Latte", desc: "Sweet vanilla syrup in creamy latte.", img: "/vanilla-latte.jpg" },
            { name: "Pumpkin Spice Latte", desc: "Seasonal favorite with warm spices.", img: "/pumpkin-latte.jpg" },
            { name: "Mocha Delight", desc: "Chocolate and coffee in perfect harmony.", img: "/mocha.jpg" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative w-full h-72">
                <Image src={item.img} alt={item.name} fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-orange-800">{item.name}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Slider */}
<section id="reviews" className="py-24 px-8">
  <h2 className="text-4xl font-semibold text-center mb-16 text-orange-800">
    Happy Guests
  </h2>
  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
    {[
      {
        name: "Liam S.",
        review: "The coziest cafe in town. I feel at home here every time.",
        img: "/testi1.jpg",
      },
      {
        name: "Olivia T.",
        review: "Soft lighting, warm drinks, and friendly staff. Pure comfort.",
        img: "/testi2.jpg",
      },
      {
        name: "Noah P.",
        review: "Perfect weekend spot for reading and sipping coffee.",
        img: "/testi3.jpg",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="bg-orange-100 rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300"
      >
        <div className="w-24 h-24 relative rounded-full overflow-hidden mb-4">
          <Image
            src={item.img}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-gray-800 italic mb-4">"{item.review}"</p>
        <p className="font-semibold text-orange-900">{item.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Events Section */}
<section id="events" className="py-24 px-8 bg-orange-50">
  <h2 className="text-4xl font-semibold text-center mb-16 text-orange-800">
    Upcoming Events
  </h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
    {[
      {
        title: "Cozy Coffee Nights",
        date: "Every Thursday",
        desc: "Relaxing evenings with music and seasonal drinks.",
        img: "/event-cozy-night.jpg",
      },
      {
        title: "Barista Classes",
        date: "Sept 15, 2025",
        desc: "Learn the art of coffee making with our experts.",
        img: "/event-barista-class.jpg",
      },
      {
        title: "Fall Pastry Tasting",
        date: "Oct 1, 2025",
        desc: "Taste our new seasonal pastries paired with perfect coffees.",
        img: "/event-fall-pastry.jpg",
      },
    ].map((event, idx) => (
      <div
        key={idx}
        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
      >
        {/* Event Image with Date Badge */}
        <div className="relative h-48 w-full">
          <Image
            src={event.img}
            alt={event.title}
            fill
            className="object-cover"
          />
          <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {event.date}
          </span>
        </div>

        {/* Event Details */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-2 text-orange-800">
            {event.title}
          </h3>
          <p className="text-gray-700">{event.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="py-24 px-8 bg-orange-100">
  <h2 className="text-4xl font-semibold text-center mb-16 text-orange-800">
    Visit Us
  </h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    {/* Contact Info */}
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-orange-800 flex items-center gap-2">
          📍 Location
        </h3>
        <p className="text-gray-700">456 Cozy Lane</p>
        <p className="text-gray-700">Hometown, State</p>
        <p className="text-gray-700">+1 987 654 321</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-4 text-orange-800 flex items-center gap-2">
          ⏰ Hours
        </h3>
        <p className="text-gray-700">Mon–Fri: 7am – 7pm</p>
        <p className="text-gray-700">Sat–Sun: 8am – 8pm</p>
      </div>
    </div>

    {/* Map Embed */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019953170305!2d-122.41941508468277!3d37.77492927975992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8ba22f1f%3A0x8b52a98e8c6a7a0!2sCafe!5e0!3m2!1sen!2sus!4v1693422983249!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="bg-orange-900 text-white py-16 px-8">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
    <div>
      <h3 className="text-xl font-semibold mb-4">CafeHaven</h3>
      <p className="text-orange-200">Where warmth meets flavor.</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Contact</h3>
      <p className="text-orange-200">456 Cozy Lane</p>
      <p className="text-orange-200">Hometown, State</p>
      <p className="text-orange-200">+1 987 654 321</p>
    </div>

    <div>
      <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-orange-300 transition duration-300">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="#" className="hover:text-orange-300 transition duration-300">
          <FaFacebookF className="text-2xl" />
        </a>
        <a href="#" className="hover:text-orange-300 transition duration-300">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </div>
  </div>
  <p className="text-center text-orange-200 mt-12">
    &copy; 2025 CafeHaven. All rights reserved.
  </p>
</footer>
    </main>
  );
}
