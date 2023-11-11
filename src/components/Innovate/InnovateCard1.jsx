import './InnovateCard1.css'

const InnovateCard1 = ({img,title,descreption}) => {
  return (
    <div>
        <div className="d-flex">
                            <div className="text-center">
                                <a href="#">{title}</a>
                                <p>{descreption}</p>
                            </div>
                            <img className="image-innov" src={img} />
                        </div>
    </div>
  )
}

export default InnovateCard1