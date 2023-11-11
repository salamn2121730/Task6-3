import ess1 from './../../assets/imges/ess1.webp'
import ess2 from './../../assets/imges/ess2.webp'
import ess3 from './../../assets/imges/ess3.webp'
import './Essential.css'
import EssentialCard from './EssentialCard'
const Essential = () => {
    return (
        <div className='essential'>
            <div className=" container " >
                <h1 className="text-center ">WHAT MAKES THE ESSENTIAL DIFFERENT?</h1>
                <p className="text-center">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <EssentialCard img={ess1}
                                title1="PERFECT CUT"
                                title2="DOAL CAMERA"
                                decreption="Tristique senectus et netus et malesuada ant reiet fames" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <EssentialCard img={ess2}
                                title1="PRETTY"
                                title2="INTELLEGENT PROCESSING"
                                decreption="Consequat ac habit amet asse felis donec et odio pellentesque diam" />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <EssentialCard img={ess3}
                                title1="MOST PAPULAR"
                                title2="8GB DDR5 RAM"
                                decreption="Dictum varius duis at consectetur lorem donec massa sap faucibus." />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Essential