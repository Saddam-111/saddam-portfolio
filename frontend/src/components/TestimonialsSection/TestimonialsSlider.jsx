import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const TestimonialsSlider =() => {
  const testimonials = [
    { name: "Akash Tripathi", role: "CEO, Vedseem Info Tech", message: "Saddam built our e-commerce site flawlessly!" },
    { name: "Dipendra Soni", role: "CMO,  Vedseem Info Tech", message: "Exceptional MERN stack development skills!" },
    //{ name: "Alice Johnson", role: "Product Manager", message: "Highly professional and creative developer." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">What Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 dark:bg-gray-900 p-8 rounded-xl shadow-lg text-center mx-4"
            >
              <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{t.message}"</p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{t.role}</p>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}


export default TestimonialsSlider