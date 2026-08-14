import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";


function ShowsSection() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("mom");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  const fetchShows = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=f28eabc0`
      );

      const data = await response.json();

      if (data.Response === "True") {
        setShows(data.Search);
        setError("");
      } else {
        setShows([]);
        setError("No results found.");
      }
    } catch (err) {
      setShows([]);
      setError("Something went wrong. Please try again.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShows("mom");
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchShows(searchTerm);
    }
  };

  return (
    <section id="search-section" className="min-h-screen bg-black px-6 md:px-12  py-10">
      <h1 className="md:text-[90px] text-[60px] leading-[60px] font-bold bebas mt-20 text-white mb-2">
        Discover Movies*
      </h1>

      <p className="text-gray-400 space mb-8">
        Watch the best shows and movies.
      </p>

      {/* Search Bar */}
      <div className="flex  sm:flex-row gap-4 mb-10">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="
            flex-1
            bg-white/10
            space
            border-b
            px-5
            py-3
            text-white
            placeholder-gray-400
            outline-none
          "
        />

        <button
          onClick={handleSearch}
          className="
           
            
            
            px-4
            text-white
            text-3xl
            transition-all
            duration-300
          "
        >
          <FaSearch />
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10">
          <p className="text-white text-xl">Loading...</p>
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl font-semibold text-white">
            No Results Found
          </h2>

          <p className="text-gray-400 mt-2">
            Try searching for another movie or series.
          </p>
        </div>
      )}

      {/* Movies Grid */}
      {!loading && shows.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {shows.map((show) => (
            <div
              key={show.imdbID}
              className="
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:scale-105
                hover:bg-white/15
                transition-all
                duration-300
              "
            >
              <img
                src={
                  show.Poster !== "N/A"
                    ? show.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={show.Title}
                className="w-full h-80 object-cover"
              />

              <div className="p-4">
                <h3 className="text-white font-semibold text-lg truncate">
                  {show.Title}
                </h3>

                <p className="text-gray-300 text-sm mt-1">
                  {show.Year} • {show.Type}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ShowsSection;