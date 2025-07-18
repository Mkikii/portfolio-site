import React from "react";

// Navbar Component
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div>
      <h2>Welcome to my site!</h2>
    </div>
  );
}

// About Component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
}

export default App;
