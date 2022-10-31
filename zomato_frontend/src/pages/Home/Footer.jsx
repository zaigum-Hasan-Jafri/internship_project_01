import React from 'react'

const Footer = () => {
  return (
    <div className='container d-flex'>
      <div style={{ flex: '1' }}>
        <img className='zomato-logo cur mb-4' src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|193:22&amp;crop=198:42;" alt='zomato-logo'></img>
        <p></p>
        <div>
          <a className='link' href="/"><h6>ABOUT ZOMATO</h6></a>
          <a className='link' href="/"><h6>CONTACT ZOMATO</h6></a>
        </div>
      </div>
      <div style={{ flex: '1' }}>

        <div style={{ marginTop: "50px" }}>
          <dl>
            <dt><h5>Learn More</h5></dt>
            <dd><a className='link' href="/">Privacy</a></dd>
            <dd><a className='link' href="/">Security</a></dd>
            <dd><a className='link' href="/">Terms</a></dd>
            <dd><a className='link' href="/">Sitemap</a></dd>
          </dl>
        </div>
      </div>
      <div style={{ flex: '1' }}>


        <div style={{ marginTop: "50px" }}>
          <dl>
            <dt><h5>FOR RESTAURANTS</h5></dt>
            <dd><a className='link' href="/">Partner With Us</a></dd>
            <dd><a className='link' href="/">Apps For You</a></dd>
            <dt><h5>FOR ENTERPRISES</h5></dt>
            <dd><a className='link' href="/">Zomato For Work</a></dd>
          </dl>
        </div>
      </div>
      <div style={{ flex: '1', marginTop: "50px" }}>

        <p>Make sure to connect with us in the Social Network Also!</p>
        <p>Enjoy Your Meal !!</p>

        <div><dl>
          <dt>Social Network</dt>
          <i className="cur bi bi-facebook p-1"></i>
          <i className="cur bi bi-whatsapp p-2"></i>
          <i className="cur bi bi-instagram p-2"></i>
        </dl>
        </div>
      </div>
    </div>
  )
}

export default Footer