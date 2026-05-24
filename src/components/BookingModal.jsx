'use client';

import { useState } from 'react';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function BookingModal({
  roomId,
  roomName,
  hourlyRate,
  image,
}) {

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [note, setNote] = useState('');

  const today = new Date().toISOString().split('T')[0];

  // 🕒 generate time slots
  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  // ⏱️ convert time to hour number
  const getHour = (time) => Number(time.split(':')[0]);

  // 💰 calculate cost
  const totalCost =
    startTime && endTime
      ? (getHour(endTime) - getHour(startTime)) * hourlyRate
      : hourlyRate;

  // 🚨 end time filter
  const filteredEndTimes =
    startTime
      ? timeSlots.filter(t => getHour(t) > getHour(startTime))
      : [];

  const handleBooking = async () => {

    if (!selectedDate || !startTime || !endTime) {
      toast.error("please select date and time");
      return;
    }

    try {

      const bookingData = {
        roomId,
        roomName,
        roomImage: image,

        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,
        userEmail: user?.email,

        bookingDate: selectedDate,
        startTime,
        endTime,

        hourlyRate,
        totalCost,

        note,
        createdAt: new Date(),
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      // ❌ conflict or error
      if (!response.ok || !data.success) {
        toast.error(data.message || 'Booking Failed');
        return;
      }

      // ✅ success
      toast.success("Room booked successfully!");

      setIsOpen(false);
      setSelectedDate('');
      setStartTime('');
      setEndTime('');
      setNote('');

    } catch (error) {
      console.log(error);
      toast.error('Booking Failed');
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 rounded-2xl"
      >
        Book Now - ${hourlyRate}/hr
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-zinc-900 w-full max-w-md rounded-3xl border border-zinc-700">

            {/* Header */}
            <div className="p-6 border-b border-zinc-700 flex justify-between items-center">

              <h2 className="text-xl font-bold text-white">
                Book {roomName}
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white text-3xl leading-none transition"
                aria-label="Close modal"
              >
                ×
              </button>

            </div>

            {/* Body */}
            <div className="p-6 space-y-4">

              {/* Date */}
              <input
                type="date"
                min={today}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 bg-zinc-800 text-white rounded-xl"
              />

              {/* Start Time */}
              <select
                value={startTime}
                onChange={(e) => {
                  setStartTime(e.target.value);
                  setEndTime('');
                }}
                className="w-full p-3 bg-zinc-800 text-white rounded-xl"
              >
                <option value="">Select Start Time</option>
                {timeSlots.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              {/* End Time */}
              <select
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full p-3 bg-zinc-800 text-white rounded-xl"
              >
                <option value="">Select End Time</option>
                {filteredEndTimes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>

              {/* Note */}
              <textarea
                placeholder="Special note (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full p-3 bg-zinc-800 text-white rounded-xl"
              />

              {/* Total cost */}
              <div className="bg-zinc-800 p-4 rounded-xl flex justify-between">
                <p className="text-white">Total Cost</p>
                <p className="text-emerald-400 font-bold">
                  ${totalCost || 0}
                </p>
              </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-700">
              <Button
                onClick={handleBooking}
                disabled={!selectedDate || !startTime || !endTime}
                className="w-full bg-emerald-600 py-5 rounded-xl"
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