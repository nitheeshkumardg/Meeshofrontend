import React from 'react'
import Logo1 from '../assests/Logo1.png'
import Logo2 from '../assests/Logo2.png'
import Logo3 from '../assests/Logo3.png'
import Logo4 from '../assests/Logo4.png'
import Logo5 from '../assests/Logo5.png'
import { Link } from 'react-router-dom'



function Carousal() {

  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Link to="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=404992592" target="_blank" rel="noopener noreferrer">
      <img src={Logo1} className="d-block w-100" alt="IMG 1"/>
      </Link>
    </div>
   
  </div>
</div>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
    <h1>----------------Top Categories to choose from-----------------------</h1>
</div>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo2} className="d-block w-100" alt="IMG 2" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div>
    </div>
  </div>


  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo3} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>



<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo4} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>


<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo5} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>


</>
  )
}

export default Carousal





