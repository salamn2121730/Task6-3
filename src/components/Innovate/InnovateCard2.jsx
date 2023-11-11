
const InnovateCard2 = ({img,title,descreption}) => {
  return (
    <div>
         <div className="d-flex ">
                            <img className="image-innov" src={img} />
                            <div className="text-center">
                                <a href="#">{title}</a>
                                <p>{descreption}</p>
                            </div>
    </div>
    </div>
  )
}

export default InnovateCard2