import { useState, useEffect } from "react"
import "./ProductCarousel.css"

const products = [
  {
    id: 1,
    name: "Premium Shoes",
    price: "$299",
    description: "Wireless noise-cancelling headphones with premium sound quality",
    image: "https://pics.craiyon.com/2023-07-06/82a4be92b98f4ce9895eb352750a146f.webp",
    category: "Wearables",
  },
  {
    id: 2,
    name: "Wilson Basketball",
    price: "$199",
    description: "Advanced fitness tracking with heart rate monitoring",
    image: "https://i0.wp.com/afro.com/wp-content/uploads/2022/04/ben-hershey-5nk3wSFUWZc-unsplash.jpg?w=1200&ssl=1",
    category: "Ball",
  },
  {
    id: 3,
    name: "Tennis Racket",
    price: "$159",
    description: "True wireless earbuds with active noise cancellation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovE7YUDV_-QAJPRtW1vSaUYIsH7dWuityJQ&s",
    category: "Racket",
  },
  {
    id: 4,
    name: "Football",
    price: "$79",
    description: "High-precision gaming mouse with RGB lighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOoXJ0Wbc8_8Ocvx63ciR0KNFwkCh3VzgPA&s",
    category: "Ball",
  },
  {
    id: 5,
    name: "Bike Headgear",
    price: "$149",
    description: "RGB mechanical keyboard with custom switches",
    image: "https://www.hjcsports.com/app/uploads/2023/06/RedBull-social.jpg",
    category: "Wearable",
  },
]

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % products.length)
      }, 3000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrevClick = () => {
    setActiveIndex((current) => (current - 1 + products.length) % products.length)
    setIsAutoPlaying(false)
  }

  const handleNextClick = () => {
    setActiveIndex((current) => (current + 1) % products.length)
    setIsAutoPlaying(false)
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {products.map((product, index) => {
          const position = (index - activeIndex + products.length) % products.length
          const isActive = position === 0
          const isPrev = position === products.length - 1
          const isNext = position === 1

          return (
            <div
              key={product.id}
              className={`carousel-card ${isActive ? "active" : ""} ${isPrev ? "prev" : ""} ${isNext ? "next" : ""}`}
              style={{
                "--position": position,
                "--total": products.length,
              }}
            >
              <div className="card-content">
                <div className="image-container">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                  <div className="category-tag">{product.category}</div>
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="price">{product.price}</p>
                  <p className="description">{product.description}</p>
                  {isActive && <button className="buy-button">Add to Cart</button>}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="carousel-controls">
        <button className="control-button" onClick={handlePrevClick}>
          ←
        </button>
        <div className="carousel-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <button className="control-button" onClick={handleNextClick}>
          →
        </button>
      </div>

      <button className="autoplay-button" onClick={() => setIsAutoPlaying(!isAutoPlaying)}>
        {isAutoPlaying ? "Pause" : "Play"}
      </button>
    </div>
  )
}

export default ProductCarousel

