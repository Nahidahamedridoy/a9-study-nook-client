'use client';

import { useState } from 'react';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

export default function BookingModal({
  roomId,
  roomName,
  hourlyRate,
  image,
  availableTimeSlots = [],
}) {

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots =
    availableTimeSlots.length > 0
      ? availableTimeSlots
      : [
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
      ];

  const today = new Date().toISOString().split('T')[0];

  const handleBooking = async () => {

    if (!selectedDate || !selectedTime) {
      alert('তারিখ এবং সময় সিলেক্ট করুন');
      return;
    }

    try {

      const bookingData = {
        roomId,
        roomName,
        roomImage: image,

        userId:user?.id,
        userImage:user?.image,
        userName:user?.name,
        userEmail:user?.email,

        bookingDate: selectedDate,
        bookingTime: selectedTime,

        hourlyRate,

        createdAt: new Date(),
      };

      console.log(bookingData);

     const res =await fetch('http://localhost:5000/booking' , {
      method: "POST",
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(bookingData)
     })

     const data = await res.json();
     console.log(data);


      alert(
        `✅ Booking Successful!\nDate: ${selectedDate}\nTime: ${selectedTime}`
      );

      setIsOpen(false);
      setSelectedDate('');
      setSelectedTime('');

    } catch (error) {

      console.log(error);
      alert('❌ Booking Failed');
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-6 text-lg rounded-2xl shadow-lg"
      >
        Book Now - ${hourlyRate}/hr
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-zinc-900 w-full max-w-md rounded-3xl overflow-hidden border border-zinc-700">

            {/* Header */}
            <div className="p-6 border-b border-zinc-700">

              <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold text-white">
                  Book {roomName}
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-zinc-400 hover:text-white leading-none"
                >
                  ×
                </button>

              </div>

              <p className="text-zinc-400 text-sm mt-2">
                Pick a date and time slot
              </p>

            </div>

            {/* Body */}
            <div className="p-6 space-y-6">

              <div>

                <label className="block text-sm text-zinc-400 mb-2">
                  Select Date
                </label>

                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
                />

              </div>

              <div>

                <label className="block text-sm text-zinc-400 mb-3">
                  Available Time Slots
                </label>

                <div className="grid grid-cols-4 gap-2">

                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 text-sm font-medium rounded-xl transition-all border ${selectedTime === time
                          ? 'bg-cyan-500 text-white border-cyan-500'
                          : 'bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-zinc-300'
                        }`}
                    >
                      {time}
                    </button>
                  ))}

                </div>

              </div>

              <div className="bg-zinc-800 rounded-2xl p-5 flex justify-between items-center">

                <div>
                  <p className="text-zinc-400 text-sm">
                    Total (1 Hour)
                  </p>

                  <p className="text-3xl font-bold text-white">
                    ${hourlyRate}
                  </p>
                </div>

                <div className="text-emerald-400 font-medium">
                  ✓ Available
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-700">

              <Button
                onClick={handleBooking}
                disabled={!selectedDate || !selectedTime}
                className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:text-zinc-500 py-6 text-lg font-semibold rounded-2xl"
              >
                Confirm Booking
              </Button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}