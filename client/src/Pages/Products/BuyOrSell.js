import React from 'react'
import './BuyOrSell.css'
function BuyOrSell() {
  return (
    <div class="text-dark glass-panel vw-80 vh-200">
    <h1>Buy And Sell All In One Place</h1>
    <p>You Can Buy And Sell Stuffs Here....Free Gifts Are Much Appreciated !!</p>
    <div class="glass-toolbar">
        <div className='d-flex'>

      <a href="/buyGoods"  class="glass-button">Click To Buy Goods</a>
      <a href="/sellGoods"  class="glass-button">Click To Sell Goods</a>
        </div>
        <div className='d-flex'>

      <a href="https://channeli.in/auth/login?next=/feed" target="_blank" class="glass-button">Click To Go To ChannelI</a>
      <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART" target="_blank" class="glass-button">Click To Go To Flipkart</a>
      <a href="https://www.amazon.com/" target="_blank" class="glass-button">Click To Go To Amazone</a>
        </div>
        <div className='d-flex'>
      <a href="https://www.ajio.com/s/jeans-3571-88891?query=:relevance" target="_blank" class="glass-button">Click To Go To AJIO</a>
      <a href="https://www.myntra.com/" target="_blank" class="glass-button">Click To Go To Myntra</a>
      <a href="https://www.nike.com/jordan" target="_blank" class="glass-button">Click To Go To Nike Store</a>
        </div>
        <div className='d-flex'>
      <a href="https://www.adidas.co.in/" target="_blank" class="glass-button">Click To Go To Adidas Store</a>
      <a href="https://www.nike.com/jordan" target="_blank" class="glass-button">Click To Go To Nike Store</a>
        </div>
    </div>
  </div>
  )
}

export default BuyOrSell