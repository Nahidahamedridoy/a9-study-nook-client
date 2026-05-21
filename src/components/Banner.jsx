"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-100 via-white to-cyan-50">

            {/* Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-5 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 font-medium mb-6">

                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>

                        Smart Study Room Booking Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">

                        Find Your Perfect

                        <span className="block text-cyan-600">
                            Study Room
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">

                        Browse and book quiet, modern, and fully equipped study
                        rooms for focused learning, group discussions, and
                        productive work sessions.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-5">

                        <Link
                            href="/rooms"
                            className="px-8 py-4 rounded-2xl bg-cyan-500 text-white text-lg font-bold hover:bg-cyan-400 transition duration-300 shadow-xl shadow-cyan-300/40 text-center"
                        >
                            Explore Rooms
                        </Link>

                        <Link
                            href="/add-room"
                            className="px-8 py-4 rounded-2xl border-2 border-cyan-500 text-cyan-700 text-lg font-bold hover:bg-cyan-100 transition duration-300 text-center"
                        >
                            Add Your Room
                        </Link>

                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-10 mt-14">

                        <div>
                            <h2 className="text-4xl font-extrabold text-cyan-700">
                                500+
                            </h2>

                            <p className="text-gray-600 mt-1">
                                Active Users
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-extrabold text-cyan-700">
                                120+
                            </h2>

                            <p className="text-gray-600 mt-1">
                                Study Rooms
                            </p>
                        </div>

                        <div>
                            <h2 className="text-4xl font-extrabold text-cyan-700">
                                1K+
                            </h2>

                            <p className="text-gray-600 mt-1">
                                Successful Bookings
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >

                    {/* Main Image */}
                    <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl border border-cyan-200">

                        <img
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
                            alt="Study Room"
                            className="w-full h-[600px] object-cover"
                        />

                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-10 -left-5 bg-white rounded-3xl shadow-2xl p-6 border border-cyan-100 z-20">

                        <h3 className="text-3xl font-extrabold text-cyan-700">
                            98%
                        </h3>

                        <p className="text-gray-600 mt-1">
                            Positive Reviews
                        </p>

                    </div>

                    {/* Floating Card */}
                    <div className="absolute top-10 -right-5 bg-cyan-500 text-white rounded-3xl shadow-2xl p-6 z-20">

                        <h3 className="text-2xl font-extrabold">
                            Quiet Zone
                        </h3>

                        <p className="mt-1 text-cyan-50">
                            Comfortable & Productive
                        </p>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Banner;