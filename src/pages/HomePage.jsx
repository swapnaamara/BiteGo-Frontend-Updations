import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const dummyProducts = [
    {id: 1, name: "Chicken Biryani", price: 180, img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=300"},
    {id: 2, name: "Pizza", price: 250, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300"},
    {id: 3, name: "Burger", price: 120, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300"},
    
    
    {id: 6, name: "Paneer Tikka", price: 200, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300"},
  
    {id: 8, name: "French Fries", price: 80, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=300"},
    
    {id: 10, name: "Dal Tadka", price: 130, img: "https://images.unsplash.com/photo-1547496502-affa22d38842?w=300"},
    {id: 11, name: "Momos", price: 100, img: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=300"},

  ]

  return (
    <div style={containerStyle}>
      
      <div style={heroStyle}>
        <h1>Welcome to BiteGo {user ? user.fullName : ""} 👋</h1>
        <p>Order your favorite food and get it delivered hot & fresh</p>
        {!user && <button onClick={() => navigate('/register')} style={heroBtnStyle}>Order Now</button>}
      </div>

      <h2 style={sectionTitleStyle}>Popular Items</h2>
      
      <div style={gridStyle}>
        {dummyProducts.map(p => (
          <div key={p.id} style={cardStyle}>
            <img src={p.img} alt={p.name} style={imgStyle}/>
            <h3>{p.name}</h3>
            <p style={priceStyle}>₹{p.price}</p>
            <button style={addBtnStyle}>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  )
}

const containerStyle = {padding: '20px 40px', background: '#f9f9f9', minHeight: '90vh'}
const heroStyle = {textAlign: 'center', padding: '50px 20px', background: 'linear-gradient(135deg, #ff9966, #ff5e62)', color: 'white', borderRadius: '15px', marginBottom: '30px'}
const heroBtnStyle = {padding: '12px 30px', background: 'white', color: '#ff3333', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '15px'}
const sectionTitleStyle = {textAlign: 'center', fontSize: '28px', marginBottom: '20px', color: '#333'}
const gridStyle = {display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}
const cardStyle = {background: 'white', padding: '15px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center'}
const imgStyle = {width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px'}
const priceStyle = {fontSize: '18px', fontWeight: 'bold', color: '#ff3333'}
const addBtnStyle = {width: '100%', padding: '10px', background: '#ff5555', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold'}