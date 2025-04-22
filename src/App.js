import { useState } from 'react';
import './App.css';
import listings from './data';

function App() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filtered = listings.filter((property) => {
    return (
      property.location.toLowerCase().includes(location.toLowerCase()) &&
      (type === '' || property.type === type) &&
      (maxPrice === '' || property.price <= parseInt(maxPrice))
    );
  });

  return (
    <div className="App">
      <header className="site-header">
        <h1>PropertyWebsite</h1>
      </header>

      <section className="filter-section">
        <input
          type="text"
          placeholder="Search MRT or location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">All Types</option>
          <option value="HDB">HDB</option>
          <option value="Condo">Condo</option>
          <option value="Studio">Studio</option>
          <option value="Landed">Landed</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </section>

      <section className="listing-section">
        <h2>Listings</h2>
        <div className="property-grid">
          {filtered.length > 0 ? (
            filtered.map((property) => (
              <div className="property-card" key={property.id}>
                <img src={property.image} alt="Property" />
                <h3>{property.title}</h3>
                <p>{property.location} · {property.size}</p>
                <p>Type: {property.type}</p>
                <p><strong>${property.price.toLocaleString()}</strong></p>
              </div>
            ))
          ) : (
            <p>No matching properties found.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
