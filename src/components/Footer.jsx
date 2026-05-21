import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-cyan-100 via-white to-cyan-50 border-t border-cyan-200 mt-20">

            <div className="max-w-7xl mx-auto px-5 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & Description */}
                    <div>

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-11 h-11 rounded-2xl bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-cyan-300/40">
                                S
                            </div>

                            <h1 className="text-3xl font-extrabold text-cyan-800">
                                StudyNook
                            </h1>

                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Find and book modern study rooms for focused
                            learning, teamwork, and productive sessions anytime.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>

                        <h2 className="text-2xl font-bold text-cyan-800 mb-5">
                            Quick Links
                        </h2>

                        <div className="flex flex-col gap-3 text-gray-600">

                            <Link href="/" className="hover:text-cyan-600 transition duration-300">
                                Home
                            </Link>

                            <Link href="/rooms" className="hover:text-cyan-600 transition duration-300">
                                Rooms
                            </Link>

                            <Link href="/add-room" className="hover:text-cyan-600 transition duration-300">
                                Add Room
                            </Link>

                            <Link href="/my-bookings" className="hover:text-cyan-600 transition duration-300">
                                My Bookings
                            </Link>

                        </div>
                    </div>

                    {/* Contact */}
                    <div>

                        <h2 className="text-2xl font-bold text-cyan-800 mb-5">
                            Contact
                        </h2>

                        <div className="space-y-3 text-gray-600">

                            <p>
                                📧 support@studynook.com
                            </p>

                            <p>
                                📞 +880 1234-567890
                            </p>

                            <p>
                                📍 Dhaka, Bangladesh
                            </p>

                        </div>
                    </div>

                    {/* Social Links */}
                    <div>

                        <h2 className="text-2xl font-bold text-cyan-800 mb-5">
                            Follow Us
                        </h2>

                        <div className="flex items-center gap-4">

                            <Link
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white border border-cyan-200 flex items-center justify-center text-cyan-700 text-xl hover:bg-cyan-500 hover:text-white transition duration-300 shadow-md"
                            >
                                <FaFacebookF />
                            </Link>

                            <Link
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white border border-cyan-200 flex items-center justify-center text-cyan-700 text-xl hover:bg-cyan-500 hover:text-white transition duration-300 shadow-md"
                            >
                                <FaInstagram />
                            </Link>

                            <Link
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white border border-cyan-200 flex items-center justify-center text-cyan-700 text-xl hover:bg-cyan-500 hover:text-white transition duration-300 shadow-md"
                            >
                                <FaLinkedinIn />
                            </Link>

                            <Link
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white border border-cyan-200 flex items-center justify-center text-cyan-700 text-xl hover:bg-cyan-500 hover:text-white transition duration-300 shadow-md"
                            >
                                <FaXTwitter />
                            </Link>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-cyan-200 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-gray-600 text-center md:text-left">
                        © 2026 StudyNook. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-6 text-gray-600">

                        <Link href="#" className="hover:text-cyan-600 transition duration-300">
                            Privacy Policy
                        </Link>

                        <Link href="#" className="hover:text-cyan-600 transition duration-300">
                            Terms & Conditions
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;