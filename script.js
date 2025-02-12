document.getElementById('search-form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
  
    try {
      const response = await fetch(`http://localhost:3000/api/trips/search?departure=${departure}&arrival=${arrival}&date=${date}`);
      const trips = await response.json();
  
      const resultsContainer = document.getElementById('search-results');
      resultsContainer.innerHTML = trips.map(trip => `
        <li>
          <p>${trip.departure} > ${trip.arrival}</p>
          <p>${new Date(trip.date).toLocaleString()}</p>
          <p>$${trip.price}</p>
          <button onclick="addToCart('${trip._id}')">Add to Cart</button>
        </li>
      `).join('');
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  });
  
  async function addToCart(tripId) {
    try {
      const response = await fetch(`http://localhost:3000/api/cart/post/${tripId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tripId }),
      });
      const data = await response.json();
      console.log('Added to cart:', data);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  }