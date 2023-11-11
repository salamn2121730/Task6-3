import './CardArrival.css'
const CardArrival = ({val}) => {
    return (
        <div>
            { val.map((e) => (
                <div>
                    <div class="card">
                        <img class="imgarrival" src={e.products.images[0]} />
                        <h2 class="text-center">{e.products.title}</h2>
                        <p class="text-center">*****</p>
                        <p class="text-center">{e.products.price}$</p>
                    </div>
                </div>

            )
            )
            }
        </div>
    )
}

export default CardArrival