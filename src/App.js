import { useState } from "react";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Services from "./componenets/Services";
import Contact from "./componenets/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="bg-blue-700 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">

          <h1 className="text-2xl font-bold">
            EyeCare Clinic
          </h1>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={() => setPage("about")}>
              About
            </button>

            <button onClick={() => setPage("services")}>
              Services
            </button>

            <button onClick={() => setPage("contact")}>
              Contact
            </button>
          </div>

        </div>
      </nav>

      {/* Pages */}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "services" && <Services />}
      {page === "contact" && <Contact />}

    </div>
  );
}

export default App;