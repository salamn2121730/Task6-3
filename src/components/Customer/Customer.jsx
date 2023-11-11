
import customerimg from './../../assets/imges/collec.webp'
import './Customer.css'
const Customer = () => {
  return (
    <div class="customer">
    <div class="container" >
        <h1 class="text-center" >SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h1>
        <p class="text-center">DESIGNED TO PERFECTION</p>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img class="img-customer" src={customerimg}/>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                NEW GRADIENT COLOR FINISHES
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                It is shown by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall appearance, as well
                                as the showing and hiding via CSS transition
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                FOUR-SIDED CURVED CERAMIC BODY
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                It is hidden by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall appearance, as well
                                as the showing and hiding via CSS transition
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                4000MAH HIGH-CAPACITY BATTERY
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                It is hidden by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall appearance, as well
                                as the showing and hiding via CSS transition
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                FULLY HIDDEN CAMERA LENS
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                It is hidden by default, until the collapse plugin adds the appropriate classes that
                                we use to style each element. These classes control the overall appearance, as well
                                as the showing and hiding via CSS transition
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Customer