export default function UserDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div className="text-3xl font-bold">Logo</div>
          <nav className="flex space-x-8">
            <a href="#" className="font-semibold hover:text-blue-600">New</a>
            <a href="#" className="font-semibold hover:text-blue-600">Baking</a>
            <a href="#" className="font-semibold hover:text-blue-600">Gaming</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">About your customers</h1>
          <p className="text-xl mb-6">Your customer starting at the last three minutes?</p>
          <h2 className="text-3xl font-bold mb-4">PAPO RUNING BUSINESSES</h2>
          <p className="text-lg mb-8">Get 24 million things up to you and now I'll see a flying in Britain!</p>
        </section>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">13 June River Buffing Marine Drive No</h3>
            <p className="mb-2 text-gray-700">16 Sun River Buffing Stroppers In</p>
            <p className="mb-2 text-gray-700">8 November (November) 2014</p>
            <p className="mb-2 text-gray-700">9 November (November) 2014</p>
            <p className="mb-6 text-gray-700">11 March 21 May</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">25 Sun River Buffing Mine Drive No</h3>
            <p className="mb-2 text-gray-700">58 Sun River Buffing Scouting Go Him</p>
            <p className="mb-2 text-gray-700">18 November (November) 2014</p>
            <p className="mb-2 text-gray-700">9 November (November) 2014</p>
            <p className="mb-6 text-gray-700">11 March 21 May</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Book Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-between items-center pt-8 border-t border-gray-300">
          <a href="#" className="text-gray-600 hover:text-blue-600">Ask to edit</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Support info</a>
        </footer>
      </div>
    </div>
  );
};