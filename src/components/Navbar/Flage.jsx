import './Flage.css'
const Flage = ({value}) => {
  return (
    <div>
        {value.map((element)=>(
            <div>
            
            <p> <img className="image-flage" src={ element.flags.svg}/>{element.cca2}</p>
            </div>
        )
        )
        }
    </div>
  )
}

export default Flage