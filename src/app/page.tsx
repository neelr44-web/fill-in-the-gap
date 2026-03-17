export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-6 border-b">
        <h1 className="text-xl font-bold">Fill In The Gap</h1>

        <div className="flex gap-6 text-sm">
          <a href="#">Opportunities</a>
          <a href="#">For Employers</a>
          <a href="#">About</a>
        </div>

        <div className="flex gap-4">
          <button className="text-sm">Log In</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h2 className="text-5xl font-bold max-w-3xl">
          Real opportunities for students before college catches up
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Find internships, shadowing, and real-world experience near you.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-xl">
            Explore Opportunities
          </button>

          <button className="border px-6 py-3 rounded-xl">
            Post an Opportunity
          </button>
        </div>
      </section>

    </main>
  )
}