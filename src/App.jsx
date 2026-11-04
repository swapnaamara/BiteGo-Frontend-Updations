import { useState } from 'react'
import './App.css'

function App() { 
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])

  const restaurants = [
    { id: 1, name: "Biryani House", type: "Biryani, North Indian", rating: 4.3, time: "35 min", price: "₹349", offer: "40% OFF", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400" },
    { id: 2, name: "Momos Magic", type: "Chinese, Momos", rating: 4.1, time: "25 min", price: "₹199", offer: "20% OFF", img: "https://images.unsplash.com/photo-1598182198871-d3be0b5e7f8b?w=400" },
    { id: 3, name: "Dosa Point", type: "South Indian", rating: 4.5, time: "30 min", price: "₹249", offer: "30% OFF", img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=400" },
    { id: 4, name: "Pizza Corner", type: "Pizza, Italian", rating: 4.2, time: "40 min", price: "₹399", offer: "50% OFF", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400" },
    { id: 5, name: "Burger King", type: "Burger, Fast Food", rating: 4.0, time: "20 min", price: "₹299", offer: "Buy 1 Get 1", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400" },
    { id: 6, name: "Cake Shop", type: "Desserts, Bakery", rating: 4.6, time: "45 min", price: "₹450", offer: "25% OFF", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400" },
  ]

  const addToCart = (item) => {
    setCart([...cart, item])
    alert(item.name + " added to cart!")
  }

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index) 
    setCart(newCart)
  }

  const goHome = () => {
    setShowLogin(false)
    setShowRegister(false)
    setShowCart(false)
  }

  const Navbar = () => (
    <nav className="navbar">
      <h1 className="logo" onClick={goHome}>BiteGo</h1>
      <div className="nav-links">
        <a href="#" onClick={goHome}>Home</a>
        {!user && <a href="#" onClick={() => {setShowRegister(true); setShowCart(false); setShowLogin(false)}}>Register</a>}
        {!user && <a href="#" onClick={() => {setShowLogin(true); setShowCart(false); setShowRegister(false)}}>Login</a>}
        <a href="#" onClick={() => {setShowCart(true); setShowLogin(false); setShowRegister(false)}}>Cart ({cart.length})</a>
      </div>
    </nav>
  )

  if (showRegister) {
    return (
      <div>
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Register for BiteGo</h2>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Register</button>
            <p>Already have account? <a href="#" onClick={() => {setShowRegister(false); setShowLogin(true)}}>Login</a></p>
          </div>
        </div>
      </div>
    )
  }

  if (showLogin) {
    return (
      <div>
        <Navbar />
        <div className="auth-container">
          <div className="auth-box">
            <h2>Login to BiteGo</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Login</button>
            <p>New user? <a href="#" onClick={() => {setShowLogin(false); setShowRegister(true)}}>Register</a></p>
          </div>
        </div>
      </div>
    )
  }

  if (showCart) {
    return (
      <div>
        <Navbar />
        <div className="cart-container">
          <h2>Your Cart ({cart.length} items)</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Cart is empty. Add some food!</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price} for two</p>
                  </div>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </div>
              ))}
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="hero">
        <h2>Cravings? We Deliver Happiness</h2>
      </div>
      
      <div className="restaurants">
        <h2>Popular Restaurants Near You</h2>
        <div className="restaurant-grid">
          {restaurants.map(res => (
            <div className="restaurant-card" key={res.id}>
              <div className="restaurant-img">
                <img src={res.img} alt={res.name} />
                <span className="offer">{res.offer}</span>
              </div>
              <div className="restaurant-info">
                <h3>{res.name}</h3>
                <p className="meta">{res.type} • ⭐ {res.rating} • {res.time}</p>
                <p className="price">{res.price} for two</p>
                <button className="add-btn" onClick={() => addToCart(res)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
