import './EssentialCard.css'
const EssentialCard = ({img,title1,title2,decreption}) => {
  return (
    <div>
        
                    <div className="d-flex flex-column align-items-center">
                        <img className="image-ess" src={img}/>
                        <a href="#">{title1}</a>
                        <a href="#">{title2}</a>
                        <p className="text-center">{decreption}</p>
                    
                </div>
    </div>
  )
}

export default EssentialCard