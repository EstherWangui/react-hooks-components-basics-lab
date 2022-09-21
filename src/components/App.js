import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}


function App() {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      <div id="home">
      <h1>Home</h1>
      </div>
      {/* add your <About> component here */}
      <div id="about">
      <h1>About</h1>
      </div>
    </div>
  );
}

export default App;
