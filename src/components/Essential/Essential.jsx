import ess1 from './../../assets/imges/ess1.webp'
import ess2 from './../../assets/imges/ess2.webp'
import ess3 from './../../assets/imges/ess3.webp'
import './Essential.css'
const Essential = () => {
  return (
    <div className='essential'>
        <div className=" container " >
        <h1 className="text-center ">WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
        <p className="text-center">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
        <div className="d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                        <img className="image-ess" src={ess1}/>
                        <a href="#">PERFECT CUT</a>
                        <a href="#">DOAL CAMERA</a>
                        <p className="text-center">Tristique senectus et netus et malesuada ant reiet fames</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="d-flex flex-column align-items-center">
                        <img className="image-ess" src={ess2}/>
                        <a href="#">PRETTY</a>
                        <a href="#">INTELLEGENT PROCESSING</a>
                        <p className="text-center">Consequat ac habit amet asse felis donec et odio pellentesque diam</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12">

                    <div className="d-flex flex-column align-items-center">
                        <img className="image-ess" src={ess3}/>
                        <a href="#">MOST PAPULAR</a>
                        <a href="#">8GB DDR5 RAM</a>
                        <p className="text-center">Dictum varius duis at consectetur lorem donec massa sap faucibus.</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Essential