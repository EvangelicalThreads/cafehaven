"use client";

import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Location", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const renderLinks = (onClick?: () => void) =>
    links.map((link) => (
      <li key={link.name}>
        <a
          href={link.href}
          className="hover:text-gray-500 transition-colors"
          onClick={onClick}
        >
          {link.name}
        </a>
      </li>
    ));

  return (
    <main className="bg-white text-black font-sans relative scroll-smooth">
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 flex justify-between items-center px-6 md:px-16 lg:px-24 h-16 z-50">
        <div className="text-xl md:text-2xl font-bold tracking-wide">CafeLuxe</div>

        <ul className="hidden md:flex gap-8 text-lg font-light">{renderLinks()}</ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-64 bg-white flex flex-col pt-6 px-6 space-y-6 z-50 shadow-lg"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end text-3xl hover:text-gray-500 focus:outline-none"
              >
                <HiX />
              </button>
              <ul className="flex flex-col items-center space-y-6 text-lg font-light">
                {renderLinks(() => setIsOpen(false))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <section
        id="homepage"
        className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/hero-cafe.jpg"
          alt="Cafe Hero"
          fill
          className="object-cover object-center brightness-75"
        />
        <div className="absolute px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            Morning Bliss
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
            Experience the art of coffee like never before
          </p>
        </div>
      </section>

      <section className="py-12 px-6 md:px-24 lg:px-32 flex flex-row items-center gap-6 md:gap-16">
        <div className="w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-4">Today's Special</h2>
          <p className="text-base md:text-lg font-light mb-4 md:mb-4">
            Try our signature Caramel Latte with hand-crafted vanilla foam and a touch of sea salt. Freshly brewed, made with love.
          </p>
          <button className="px-6 py-2 md:px-8 md:py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
            Order Now
          </button>
        </div>

        <div className="w-1/2 relative h-64 md:h-[500px]">
          <Image
            src="/special-latte.jpg"
            alt="Caramel Latte"
            fill
            className="object-cover rounded-xl shadow-lg"
            sizes="50vw"
          />
        </div>
      </section>

      <div id="menu" className="relative -top-13"></div>
      <section className="py-20 px-6 md:px-24 lg:px-32 bg-gray-50">
        <h2 className="text-4xl font-bold mb-14 text-center">Explore Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Espresso", img: "/menu-espresso.jpg" },
            { name: "Cappuccino", img: "/menu-cappuccino.jpg" },
            { name: "Latte Art", img: "/menu-latte.jpg" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={500}
                height={600}
                className="object-cover w-full h-[450px] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-5 text-center">
                <h3 className="text-2xl font-semibold tracking-wide">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="about" className="relative -top-24"></div>
      <section className="py-16 px-6 md:px-24 lg:px-32 flex flex-row items-center gap-6 md:gap-16">
        <div className="w-1/2 relative h-64 md:h-[500px]">
          <Image src="/about-cafe.jpg" alt="Cafe Interior" fill className="object-cover rounded-xl shadow-lg" sizes="50vw" />
        </div>

        <div className="w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Our Story</h2>
          <p className="text-base md:text-lg font-light mb-4 md:mb-6">
            At CafeLuxe, every cup is a masterpiece. Our passion for coffee drives us to source the finest beans and perfect each brew. The result? An unforgettable cafe experience.
          </p>
          <button className="px-6 py-2 md:px-8 md:py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-24 bg-white px-16 md:px-24 lg:px-32">
        <h2 className="text-4xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {["/gallery1.jpg","/gallery2.jpg","/gallery3.jpg","/gallery4.jpg"].map((src, idx) => (
            <div key={idx} className="relative h-64 w-full overflow-hidden rounded-xl shadow-md">
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 px-16 md:px-24 lg:px-32 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="text-lg font-light mb-8">
          Subscribe to our newsletter for exclusive offers, events, and the latest cafe updates.
        </p>
        <form className="flex flex-col sm:flex-row w-full max-w-xl gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      <section id="testimonials" className="py-24 px-16 md:px-24 lg:px-32 bg-white">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Sophia L.", text: "The caramel latte is a work of art! Every sip is perfection.", img: "/testi1.jpg" },
            { name: "James R.", text: "Best cafe experience I've ever had. Cozy and luxurious ambiance.", img: "/testi2.jpg" },
            { name: "Lily M.", text: "A true paradise for coffee lovers. The flavors are unmatched.", img: "/testi3.jpg" },
          ].map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4 p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="w-24 h-24 relative rounded-full overflow-hidden">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <p className="text-lg font-light">&quot;{t.text}&quot;</p>
              <h4 className="text-md font-semibold mt-2">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-24 px-16 md:px-24 lg:px-32 bg-gray-50 flex flex-col items-center text-center gap-8">
        <h2 className="text-4xl font-bold mb-6">Find Us</h2>
        <p className="text-lg font-light mb-6">123 Luxe Avenue, Coffee City, CA 90210</p>
        <div className="w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.01987623537!2d-122.42037928468138!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c57b1a9e7%3A0x7b2e5d5f9a0d0c1b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1693560000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer className="bg-white border-t border-gray-200 py-16 px-16 md:px-24 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-wide">CafeLuxe</div>
          <ul className="flex gap-6 text-lg font-light">
            <li className="hover:text-gray-500 cursor-pointer transition">Menu</li>
            <li className="hover:text-gray-500 cursor-pointer transition">About</li>
            <li className="hover:text-gray-500 cursor-pointer transition">Contact</li>
          </ul>
          <div className="flex gap-4 text-gray-700 text-xl">
            <a href="#" className="hover:text-gray-900 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-900 transition"><FaTwitter /></a>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CafeLuxe. All rights reserved.
        </div>
      </footer>

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div className="bg-gray-400 h-full w-0" id="scrollBar"></div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            const scrollBar = document.getElementById('scrollBar');
            window.addEventListener('scroll', () => {
              const scrollTop = window.scrollY;
              const docHeight = document.body.scrollHeight - window.innerHeight;
              const scrollPercent = (scrollTop / docHeight) * 100;
              scrollBar.style.width = scrollPercent + '%';
            });
          `,
        }}
      />
    </main>
  );
}
