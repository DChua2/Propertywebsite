import './App.css';

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <h1>PropertyWebsite</h1>
        <nav>
          <button className="nav-button">Home</button>
          <button className="nav-button">Listings</button>
          <button className="nav-button">Contact</button>
        </nav>
      </header>

      <section className="search-bar">
        <h2>Find Your Dream Home</h2>
        <input type="text" placeholder="Search by location or keyword..." />
      </section>

      <section className="featured">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          <div className="property-card">Property 1</div>
          <div className="property-card">Property 2</div>
          <div className="property-card">Property 3</div>
        </div>
      </section>
    </div>
  );
}

export default App;
