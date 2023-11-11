
import inno1 from './../../assets/imges/inno1.webp'
import inno2 from './../../assets/imges/inno2.png'
import inno3 from './../../assets/imges/inno3.png'
import inno4 from './../../assets/imges/inno4.webp'
import inno5 from './../../assets/imges/inno5.webp'
import innocenter from './../../assets/imges/innocenter.webp'
import inno6 from './../../assets/imges/inno6.webp'
import './Innovate.css'

const Innovate = () => {
    return (
        <div className='innovate'>
            <div className="container " >
                <h1 className="text-center ">INNOVATIVE QUALITIES & FEATURES</h1>
                <p className="text-center">SHOW YOURS TO THE WORLD</p>
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-12 order2 d-flex flex-column  justify-content-center ">
                        <div className="d-flex">
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>
                            <img className="image-innov" src={inno1} />
                        </div>

                        <div className="d-flex">
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>
                            <img className="image-innov" src={inno2} />
                        </div>

                        <div className="d-flex">
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>
                            <img className="image-innov" src={inno3} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 order1">
                        <img className="img-center-innov" src={innocenter} />
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 order3 d-flex flex-column  justify-content-center ">
                        <div className="d-flex ">
                            <img className="image-innov" src={inno4} />
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>

                        </div>

                        <div className="d-flex  ">
                            <img className="image-innov" src={inno5} />
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>

                        </div>

                        <div className="d-flex ">
                            <img className="image-innov" src={inno6} />
                            <div className="text-center">
                                <a href="#">INTELLEGENT PROCESSOOR</a>
                                <p>Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Innovate