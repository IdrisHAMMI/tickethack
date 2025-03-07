//GET CART
async function fetchCart() {
    try {
      const response = await fetch('http://localhost:3000/api/cart/get/');
      const cartItems = await response.json();
      console.log('Cart items:', cartItems);
  
      const cartContainer = document.getElementById('cart-container');
      cartContainer.innerHTML = cartItems.map(item => `
        <div class="cart-item">
          <p>${item.departure} to ${item.arrival}</p>
          <p>Date: ${new Date(item.date).toLocaleString()}</p>
          <p>Price: $${item.price}</p>
          <button onclick="deleteCartById('${cartItems._id}')">Delete</button>          

        </div>
      `).join('');
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  }
  
  fetchCart();

  //DELETE CART ITEMS
  async function deleteCartById(tripId) {

    try {
      const response = await fetch(`http://localhost:3000/api/cart/delete/${tripId}`, {
          method: 'DELETE',
          
      });
      const deletedCartRes = await response.json();
      console.log('Deleted cart:', deletedCartRes);

      //REFRECH CART DATA UPON DELETION
      fetchCart();
  } catch (error) {
      console.error('Error deleting cart item:', error);
      }
  }
    
  //SEARCH TRIPS
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

