export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b bg-white">
        <h1 className="text-xl font-bold tracking-tight">Fill In The Gap</h1>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-black">Opportunities</a>
          <a href="#" className="hover:text-black">For Employers</a>
          <a href="#" className="hover:text-black">About</a>
        </div>

        <div className="flex gap-4">
          <button className="text-sm text-gray-600 hover:text-black">Log In</button>
          <button className="bg-black text-white px-5 py-2 rounded-xl text-sm hover:opacity-90">
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-6 py-36 bg-gradient-to-b from-white to-gray-50">

        <div className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-xs mb-6">
          Built for students • Trusted by professionals
        </div>

        <h2 className="text-6xl font-bold max-w-4xl leading-tight tracking-tight">
          Real opportunities for students before college catches up
        </h2>

        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Discover internships, shadowing, mentorship, and real-world experience near you.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-black text-white px-7 py-3 rounded-xl text-sm hover:scale-105 transition">
            Explore Opportunities
          </button>

          <button className="border px-7 py-3 rounded-xl text-sm hover:bg-gray-100 transition">
            Post an Opportunity
          </button>
        </div>

      </section>

      {/* FEATURE SECTION */}
      <section className="px-10 py-20 grid md:grid-cols-3 gap-8">

        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Real Internships</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Get access to internships from real companies, not fake listings.
          </p>
        </div>

        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Local Opportunities</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Find opportunities near your zip code and build real connections.
          </p>
        </div>

        <div className="p-6 border rounded-2xl hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Direct Applications</h3>
          <p className="text-gray-500 mt-2 text-sm">
            Apply directly and get connected with professionals instantly.
          </p>
        </div>

      </section>

    </main>
  )
}