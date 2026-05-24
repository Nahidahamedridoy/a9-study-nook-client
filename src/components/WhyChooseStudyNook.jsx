export default function WhyChooseStudyNook() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-200 via-white to-blue-100">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why Choose StudyNook?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              ⚡ Fast Booking
            </h3>
            <p className="text-gray-600 text-sm">
              Book study rooms instantly without waiting.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🔒 Secure System
            </h3>
            <p className="text-gray-600 text-sm">
              JWT authentication keeps your data safe and secure.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              📊 Easy Management
            </h3>
            <p className="text-gray-600 text-sm">
              Manage your rooms and bookings in one dashboard.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}