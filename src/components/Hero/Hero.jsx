import slider1 from './../../assets/imges/phono-slider-1.webp'
import slider2 from './../../assets/imges/phono-slider-2.webp'
import slider3 from './../../assets/imges/phono-slider-3.webp'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
       <div id="carouselExampleCaptions" class="carousel slide">
        
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={slider1} class="d-block w-100" alt="slider1"/>
                <div class="carousel-caption d-none d-md-block text-hero">
                    <h5 class="ch text-center">ZAINA BLACK EDTION</h5>
                    <p class="cp text-center">CURVY BEVEL DUAL AUDIO</p>
                    <button type="button" class="btn btn-outline-secondary">Shop Now</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src={slider2} class="d-block w-100" alt="slider2"/>
                <div class="carousel-caption d-none d-md-block text2-hero">
                    <h5 class="ch text-center">ZAINA BLACK EDTION</h5>
                    <p class="cp text-center">CURVY BEVEL DUAL AUDIO</p>
                    <button type="button" class="btn btn-outline-secondary">Shop Now</button>
                </div>
            </div>
            <div class="carousel-item">
                <img src={slider3} class="d-block w-100" alt="slider3"/>
                <div class="carousel-caption d-none d-md-block  text-hero">
                    <h5 class="ch text-center">ZAINA BLACK EDTION</h5>
                    <p class="cp text-center">CURVY BEVEL DUAL AUDIO</p>
                    <button type="button" class="btn btn-outline-secondary">Shop Now</button>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>


    </div>
  )
}

export default Hero