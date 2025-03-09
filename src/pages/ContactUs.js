import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl text-center">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          📞 Contact Us
        </motion.h2>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-4 text-lg text-gray-700">
            <FaPhoneAlt className="text-blue-500 text-2xl" />
            <span>+91 12345 67890</span>
          </div>

          <div className="flex items-center justify-center space-x-4 text-lg text-gray-700">
            <FaEnvelope className="text-red-500 text-2xl" />
            <span>support@ecommerce.com</span>
          </div>

          <div className="flex items-center justify-center space-x-4 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-green-500 text-2xl" />
            <span>123, Market Street, Mumbai, India</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
