"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  // PUBLIC LINKS
  const publicLinks = [
    { name: "Home", path: "/" },
    { name: "All Rooms", path: "/rooms" },
  ];

  // PRIVATE LINKS
  const privateLinks = [
    { name: "Add Room", path: "/add-room" },
    { name: "My Listings", path: "/my-listing" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const allLinks = [...publicLinks, ...(user ? privateLinks : [])];

  return (
    <nav className="sticky top-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-400 flex items-center justify-center text-black font-bold text-xl shadow-lg shadow-sky-500/30">
              S
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Study<span className="text-sky-400">Nook</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-4">
            {allLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`px-5 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-sky-400 text-black"
                      : "text-gray-300 hover:text-sky-400 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden lg:flex items-center gap-4">

            {/* NOT LOGGED IN */}
            {!user && (
              <>
                <Link
                  href="/login"
                  className={`px-5 py-2.5 rounded-xl border transition ${
                    pathname === "/login"
                      ? "bg-sky-400 text-black border-sky-400"
                      : "border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black"
                  }`}
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className={`px-5 py-2.5 rounded-xl font-semibold transition ${
                    pathname === "/signup"
                      ? "bg-white text-black"
                      : "bg-sky-400 text-black hover:bg-sky-300"
                  }`}
                >
                  Signup
                </Link>
              </>
            )}

            {/* LOGGED IN */}
            {user && (
              <div className="flex items-center gap-4">

                <div className="relative group">
                  <Avatar className="cursor-pointer">
                    <Avatar.Image src={user?.image} />
                    <Avatar.Fallback>
                      {user?.name?.charAt(0) || "U"}
                    </Avatar.Fallback>
                  </Avatar>

                  {/* DROPDOWN */}
                  <div className="hidden group-hover:block absolute right-0 mt-2 w-52 bg-[#1E293B] rounded-xl shadow-lg p-2">
                    <Link
                      href="/my-listings"
                      className="block px-3 py-2 rounded hover:bg-white/10"
                    >
                      My Listings
                    </Link>

                    <Link
                      href="/my-bookings"
                      className="block px-3 py-2 rounded hover:bg-white/10"
                    >
                      My Bookings
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-3 py-2 text-red-400 rounded hover:bg-white/10"
                    >
                      Logout
                    </button>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[800px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#1E293B] border-t border-white/10 px-6 py-6 flex flex-col gap-4">

          {/* LINKS */}
          {allLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl ${
                  isActive
                    ? "bg-sky-400 text-black font-semibold"
                    : "text-gray-300 hover:bg-white/5 hover:text-sky-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* MOBILE AUTH */}
          {!user ? (
            <div className="flex flex-col gap-3 mt-4">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="text-center px-5 py-3 rounded-xl border border-sky-400 text-sky-400"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="text-center px-5 py-3 rounded-xl bg-sky-400 text-black"
              >
                Signup
              </Link>
            </div>
          ) : (
            <button
              onClick={handleSignOut}
              className="mt-4 px-5 py-3 bg-red-500 text-white rounded-xl"
            >
              Logout
            </button>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;