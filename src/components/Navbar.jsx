"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {

  const {
    data: session,
  } = authClient.useSession()

  const user = session?.user
  // console.log(user);


  const handleSignOut = async () => {
    await authClient.signOut();
  }

  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    // public links
    { name: "Home", path: "/" },
    { name: "All Rooms", path: "/rooms" },

    // private links
  ];

  const privateLinks = [
    { name: "Add Room", path: "/add-room", private: true },
    { name: "My Listings", path: "/my-listing", private: true },
    { name: "My Bookings", path: "/my-bookings", private: true },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-2xl bg-sky-400 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-sky-500/30">
              S
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
              Study<span className="text-sky-400">Nook</span>
            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
          {
            links.map((link) => {

                const isActive = pathname === link.path;

                return (

                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                      ? "bg-sky-400 text-black shadow-lg shadow-sky-500/30"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })
          }
            {
           user && privateLinks.map((link) => {
                  console.log(user);
                const isActive = pathname === link.path;

                return  (

                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                      ? "bg-sky-400 text-black shadow-lg shadow-sky-500/30"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                ) 
              })
            }

          </div>

          {/* Desktop Buttons */}

          {user ? <div className="flex gap-5">
            <li className="list-none">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li className="list-none">
              <Button onClick={handleSignOut} variant="danger" className={'rounded-none'}>Logout</Button>
            </li>
          </div>
            :
            <div className="hidden lg:flex items-center gap-4">

              <Link
                href="/login"
                className={`px-5 py-2.5 rounded-xl transition duration-300 border ${pathname === "/login"
                  ? "bg-sky-400 text-black border-sky-400"
                  : "border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black"
                  }`}
              >
                Login
              </Link>

              <Link
                href="/signup"
                className={`px-5 py-2.5 rounded-xl font-semibold transition duration-300 ${pathname === "/signup"
                  ? "bg-white text-black"
                  : "bg-sky-400 text-black hover:bg-sky-300"
                  }`}
              >
                Signup
              </Link>

            </div>}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {
              open
                ? <X size={30} />
                : <Menu size={30} />
            }
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[700px]" : "max-h-0"
          }`}
      >

        <div className="bg-[#1E293B] border-t border-white/10 px-6 py-6 flex flex-col gap-4">

          {
            links.map((link) => {

              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl transition duration-300 ${isActive
                    ? "bg-sky-400 text-black font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-sky-400"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })
          }

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-4 mt-4">

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={`w-full text-center px-5 py-3 rounded-xl border transition duration-300 ${pathname === "/login"
                ? "bg-sky-400 text-black border-sky-400"
                : "border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black"
                }`}
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className={`w-full text-center px-5 py-3 rounded-xl font-semibold transition duration-300 ${pathname === "/signup"
                ? "bg-white text-black"
                : "bg-sky-400 text-black hover:bg-sky-300"
                }`}
            >
              Signup
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}
export default Navbar;