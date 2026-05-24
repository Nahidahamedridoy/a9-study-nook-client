export default function HowStudyNookWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-200 via-white to-blue-100 mt-10 mb-10">
      
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          How StudyNook Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 bg-white rounded-2xl shadow-md border border-cyan-100 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              1. Find Room
            </h3>
            <p className="text-gray-600 text-sm">
              Browse available study rooms based on your need.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-cyan-100 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              2. Check Details
            </h3>
            <p className="text-gray-600 text-sm">
              View capacity, price, amenities and availability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-cyan-100 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              3. Book Instantly
            </h3>
            <p className="text-gray-600 text-sm">
              Select time slot and confirm booking in seconds.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md border border-cyan-100 hover:shadow-xl transition">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              4. Manage Easily
            </h3>
            <p className="text-gray-600 text-sm">
              Track bookings or manage your listed rooms.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}