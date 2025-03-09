import React from "react";
import { FaTruck, FaLock, FaTags, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutEshop = () => {
    return (
        <div className="bg-gray-100 text-gray-800">

            {/* 🌟 Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center">
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to <span className="text-yellow-300">E-Shop</span></h1>
                    <p className="text-lg md:text-xl mb-6">
                        Your One-Stop Destination for Quality Products at the Best Prices.
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        className="bg-yellow-300 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-all"
                    >
                        Shop Now
                    </motion.button>
                </motion.div>
            </section>

            {/* 🌍 Our Mission & Vision */}
            <section className="py-16 px-6 text-center bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-blue-500">Our Mission & Vision</h2>
                    <p className="text-gray-600 text-lg mb-4">
                        At <span className="font-bold text-blue-500">E-Shop</span>, our mission is to revolutionize online shopping by providing 
                        high-quality products, seamless transactions, and top-tier customer service.
                    </p>
                    <p className="text-gray-600 text-lg">
                        We envision a future where everyone has access to **affordable, premium-quality** products from the comfort of their homes.
                    </p>
                </div>
            </section>

            {/* 🚀 Why Choose Us */}
            <section className="py-16 px-6 bg-gray-200 text-center">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-blue-600">Why Choose E-Shop?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div 
                            className="p-6 bg-white rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaTruck className="text-4xl text-blue-500 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Fast Delivery</h3>
                            <p className="text-sm text-gray-600">Get your orders delivered quickly.</p>
                        </motion.div>
                        <motion.div 
                            className="p-6 bg-white rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaLock className="text-4xl text-blue-500 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Secure Payments</h3>
                            <p className="text-sm text-gray-600">100% safe and secure transactions.</p>
                        </motion.div>
                        <motion.div 
                            className="p-6 bg-white rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaTags className="text-4xl text-blue-500 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">Best Deals</h3>
                            <p className="text-sm text-gray-600">Unbeatable discounts and offers.</p>
                        </motion.div>
                        <motion.div 
                            className="p-6 bg-white rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaHeadset className="text-4xl text-blue-500 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold">24/7 Support</h3>
                            <p className="text-sm text-gray-600">We're always here to help.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🌟 Trusted by Thousands */}
            <section className="py-16 bg-white text-center">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-green-500">Trusted by 10,000+ Customers</h2>
                    <p className="text-gray-600 text-lg">
                        We take pride in offering the best shopping experience with **authentic products, secure payments, and fast delivery**.
                    </p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <motion.div 
                            className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow-md"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaCheckCircle className="mr-2" /> **100% Genuine Products**
                        </motion.div>
                        <motion.div 
                            className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow-md"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaCheckCircle className="mr-2" /> **Easy Returns**
                        </motion.div>
                        <motion.div 
                            className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow-md"
                            whileHover={{ scale: 1.1 }}
                        >
                            <FaCheckCircle className="mr-2" /> **Customer Satisfaction**
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 📩 Call to Action */}
            <section className="py-20 text-center bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <motion.div 
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Start Shopping with Us Today!</h2>
                    <p className="text-lg mb-6">Get the best deals and fastest delivery at E-Shop.</p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        className="bg-yellow-300 text-gray-800 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition-all"
                    >
                        Explore Now
                    </motion.button>
                </motion.div>
            </section>

        </div>
    );
};

export default AboutEshop;
