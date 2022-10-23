import { useState } from 'react'
import items from './data.js'
import Menu from './Menu'

function App() {
  const [menu, setMenu] = useState(items);

  const breakfast = items.filter(menuItem => menuItem.category === 'breakfast').map(category => category);
  const lunch = items.filter(menuItem => menuItem.category === 'lunch').map(category => category);
  const shakes = items.filter(menuItem => menuItem.category === 'shakes').map(category => category);

  return (
    <div className="root">
      <main>
        <section className="menu section">
          <div className ="title">
            <h2>Our Menu</h2>
            <div className="underline"></div>
          </div>
          <div className="btn-container">
            <button type="button" className="filter-btn" onClick={() => setMenu(items)}>All</button>
            <button type="button" className="filter-btn" onClick={() => setMenu(breakfast)}>Breakfast</button>
            <button type="button" className="filter-btn" onClick={() => setMenu(lunch)}>Lunch</button>
            <button type="button" className="filter-btn" onClick={() => setMenu(shakes)}>Shakes</button>
          </div>
        </section>
        <Menu items={menu} /> 
      </main>
    </div>
  );
}

export default App
