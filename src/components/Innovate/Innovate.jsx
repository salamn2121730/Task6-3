
import inno1 from './../../assets/imges/inno1.webp'
import inno2 from './../../assets/imges/inno2.png'
import inno3 from './../../assets/imges/inno3.png'
import inno4 from './../../assets/imges/inno4.webp'
import inno5 from './../../assets/imges/inno5.webp'
import innocenter from './../../assets/imges/innocenter.webp'
import inno6 from './../../assets/imges/inno6.webp'
import './Innovate.css'
import InnovateCard1 from './InnovateCard1'
import InnovateCard2 from './InnovateCard2'

const Innovate = () => {
    return (
        <div className='innovate'>
            <div className="container " >
                <h1 className="text-center ">INNOVATIVE QUALITIES & FEATURES</h1>
                <p className="text-center">SHOW YOURS TO THE WORLD</p>
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-12 order2 d-flex flex-column  justify-content-center ">
                        
                        <InnovateCard1 img={inno1}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      
                      <InnovateCard1 img={inno2}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      
                      <InnovateCard1 img={inno3}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 order1">
                        <img className="img-center-innov" src={innocenter} />
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 order3 d-flex flex-column  justify-content-center ">
                    <InnovateCard2 img={inno4}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      
                      <InnovateCard2 img={inno5}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      

                      <InnovateCard2 img={inno6}
                        title="INTELLEGENT PROCESSOOR"
                        descreption="Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri"/>
                      
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Innovate