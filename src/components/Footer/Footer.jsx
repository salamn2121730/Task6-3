import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>

      <div class="text-center container subscribe ">
        <p>SUBSCRIBE NOW</p>
        <h1>GET OUR UPDATES ALWAYS FAST</h1>
        <p>YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
        <input id="input" type="email" />
        <div class="d-flex  justify-content-center end">
          <a href="#">SEARCH</a>
          <a href="#">HELP </a>
          <a href="#">INFORMATION </a>
          <a href="#">
            PRIVACY POLICY</a>
          <a href="#">
            SHIPPING DETAILS</a>
        </div>
      </div>

    </div>
  )
}

export default Footer