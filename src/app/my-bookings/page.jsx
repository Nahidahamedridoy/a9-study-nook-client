import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { IoTrashBin } from "react-icons/io5";

const MyBookingPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user


    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

    const bookings = await res.json()
    console.log(bookings);

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className='text-3xl font-bold'>My Booking Page</h1>

            <div className="space-y-5">
                {
                    bookings.map(booking => <div key={booking._id} className="flex gap-5 border p-5 min-w-3xl">

                        <Image
                            src={booking.roomImage}
                            alt={booking.roomName}
                            height={100}
                            width={100}
                        />

                        <div>
                            <h1 className="font-bold text-2xl">{booking.roomName}</h1>
                            <p>{new Date(booking.bookingDate).toLocaleString(
                                "en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }
                            )}</p>

                            <p>Booking id : {booking._id}</p>

                            <p className="text-3xl font-bold">${booking.hourlyRate}</p>

                        <Button className={'rounded-none border-red-500 text-red-500'} variant="outline"><IoTrashBin/> Cancel</Button>
                        </div>


                    </div>)}
            </div>
        </div>
    );
};

export default MyBookingPage;