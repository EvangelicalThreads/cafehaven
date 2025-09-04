"use client";

import { useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Menu", href: "#menu" },
    { name: "Featured", href: "#featured" },
    { name: "Instagram", href: "#instagram" },
    { name: "Contact", href: "#contact" },
  ];

  const renderLinks = (onClick?: () => void) =>
    links.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="hover:text-yellow-300 transition-colors"
          onClick={onClick}
        >
          {link.name}
        </a>
      </li>
    ));

  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Navbar */}
<header className="fixed top-0 left-0 w-full h-20 px-6 md:px-24 flex justify-between items-center 
  bg-gray-900 shadow-md z-50">
  {/* Logo */}
  <div className="text-2xl font-extrabold tracking-widest text-yellow-400">CafeBold</div>

  {/* Desktop Menu */}
  <nav className="hidden md:flex space-x-8 text-lg font-medium text-yellow-400">
    {links.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="hover:text-yellow-300 transition-colors duration-300"
      >
        {link.name}
      </a>
    ))}
  </nav>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-3xl text-yellow-400 focus:outline-none"
    >
      {isOpen ? <HiX /> : <HiMenu />}
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
          className="fixed top-0 right-0 h-full w-64 bg-gray-800 flex flex-col pt-6 px-6 space-y-8 z-50 shadow-2xl backdrop-blur-sm"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end text-3xl text-yellow-400 hover:text-yellow-300 focus:outline-none"
          >
            <HiX />
          </button>

          {/* Links */}
          <ul className="flex flex-col items-center space-y-6 text-lg font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</header>


    

      {/* Hero Section (unchanged) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI4NDF8MHwxfHNlYXJjaHwxfHxjYWZlfGVufDB8fHx8MTY5MzYxNzI5Mg&ixlib=rb-4.0.3&q=80&w=1600"
          alt="Cafe Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6 drop-shadow-lg">
            Bold Flavors. Vibrant Vibes.
          </h1>
          <div className="space-x-4">
            <a
              href="#order"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-lg shadow-lg hover:scale-105 transition transform"
            >
              Order Online
            </a>
            <a
              href="#visit"
              className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg shadow-lg hover:bg-yellow-400 hover:text-gray-900 transition transform"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 md:px-24 bg-gray-800">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{ title: "Espresso", desc: "Rich, bold espresso shot to kickstart your day.", img: "/menu-espresso.jpg" },
            { title: "Latte", desc: "Creamy and smooth latte with perfect milk foam.", img: "/milk-foam.jpg" },
            { title: "Matcha Latte", desc: "Vibrant green matcha with silky smooth milk blend.", img: "/matcha-latte.jpg" }]
            .map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 p-6 rounded-xl hover:scale-105 transition transform shadow-2xl">
              <div className="overflow-hidden rounded-lg mb-4">
                <img src={item.img} alt={item.title} className="object-cover w-full h-48 hover:scale-110 transition-transform duration-500"/>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Drinks */}
      <section id="featured" className="py-24 px-6 md:px-24">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">Featured Drinks</h2>
        <div className="flex flex-col md:flex-row gap-12">
          {[{ title: "Cold Brew", img: "/special-latte.jpg" }, { title: "Caramel Macchiato", img: "/carmel.jpg" }]
            .map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-400"
            >
              <img src={item.img} alt={item.title} className="object-cover w-full h-80 hover:brightness-110 transition duration-500"/>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 backdrop-blur-sm p-4 rounded">
                <h3 className="text-2xl font-bold text-yellow-400">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section id="instagram" className="py-24 px-6 md:px-24 bg-gray-800">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-400 drop-shadow-lg">Follow Us On Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["/testi1.jpg","/testi2.jpg","/testi3.jpg","/testi4.jpg"]
            .map((url, i) => (
            <motion.img
              key={i}
              src={url}
              alt={`IG${i+1}`}
              className="rounded-lg object-cover w-full h-48 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="py-28 px-6 md:px-24 bg-gray-950 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Get exclusive offers, updates, and the latest cafe news straight to your inbox.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4 rounded-xl text-gray-900 flex-1 border-2 border-yellow-400 placeholder-yellow-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 outline-none placeholder-opacity-100 placeholder:text-lg"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 font-bold rounded-xl shadow-xl hover:scale-105 hover:shadow-yellow-400/50 transition-transform duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-6 md:px-24 text-center">
        <div className="flex justify-center space-x-8 mb-6 text-yellow-400">
          <a href="#" className="hover:text-yellow-300 transition-all duration-300 text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-300 transition-all duration-300 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-300 transition-all duration-300 text-2xl">
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; 2025 CafeBold. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
