import logo from './../../assets/imges/logo.webp'
import collectionimg from './../../assets/imges/collec.webp'
import './Navbar.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Flage from './Flage'
const Navbar = () => {
    const [value, setValue] = useState(null);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setValue(data);
            })

    })


    // const flages = document.querySelector(".flag");

    // function display(arr) {
    //     axios.get('https://restcountries.com/v3.1/all').then(Response => console.log(Response))


    //     arr.forEach((element) => {
    //         flages.innerHTML += `<li><img class="image" src=${element.flags.svg}>${element.cca2}</li>`



    //     });
    // }
    return (
        <div>
            <div className="navbar">
                <img src={logo} />
                <ul className="listnav">

                    <li><Link to='/'>Home</Link></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">collection
                        </a>
                        <ul class="dropdown-menu ">
                            <div class="drop">
                                <ul>
                                    <li><a class="dropdown-item" href="#">SSD CARD</a></li>
                                    <hr class="dropdown-divider" />

                                    <li><a class="dropdown-item" href="#">Affinity M20</a></li>
                                    <li><a class="dropdown-item" href="#">Affinity P40 Pro</a></li>
                                    <li><a class="dropdown-item" href="#">PO V40 ThinQ</a></li>
                                    <li><a class="dropdown-item" href="#">Tencho 7.3</a></li>
                                    <li><a class="dropdown-item" href="#">Tencho 8.1</a></li>
                                    <li><a class="dropdown-item" href="#">Nexian</a></li>
                                    <li><a class="dropdown-item" href="#">Ningbo</a></li>
                                    <li><a class="dropdown-item" href="#">Fix A Phone</a></li>
                                    <li><a class="dropdown-item" href="#">Hisense</a></li>
                                    <li><a class="dropdown-item" href="#">Force Cell</a></li>
                                </ul>

                                <ul>
                                    <li><a class="dropdown-item" href="#">POWER BANKS</a></li>
                                    <hr class="dropdown-divider" />

                                    <li><a class="dropdown-item" href="#">Spots 8 Lite</a></li>
                                    <li><a class="dropdown-item" href="#">Spots ERA 5X</a></li>
                                    <li><a class="dropdown-item" href="#">Tencho 8.1</a></li>
                                    <li><a class="dropdown-item" href="#">Phonelink</a></li>
                                    <li><a class="dropdown-item" href="#">Musah</a></li>
                                    <li><a class="dropdown-item" href="#">Connect 4</a></li>
                                    <li><a class="dropdown-item" href="#">Alcatel</a></li>
                                    <li><a class="dropdown-item" href="#">MobiAir</a></li>
                                    <li><a class="dropdown-item" href="#">Beat Cell</a></li>
                                    <li><a class="dropdown-item" href="#">Hunk Cell</a></li>
                                </ul>
                                <ul>
                                    <li><a class="dropdown-item" href="#">POWER BANKS</a></li>
                                    <hr class="dropdown-divider" />

                                    <li><a class="dropdown-item" href="#">Spots 8 Lite</a></li>
                                    <li><a class="dropdown-item" href="#">Spots ERA 5X</a></li>
                                    <li><a class="dropdown-item" href="#">Tencho 8.1</a></li>
                                    <li><a class="dropdown-item" href="#">Phonelink</a></li>
                                    <li><a class="dropdown-item" href="#">Musah</a></li>
                                    <li><a class="dropdown-item" href="#">Connect 4</a></li>
                                    <li><a class="dropdown-item" href="#">Alcatel</a></li>
                                    <li><a class="dropdown-item" href="#">MobiAir</a></li>
                                    <li><a class="dropdown-item" href="#">Beat Cell</a></li>
                                    <li><a class="dropdown-item" href="#">Hunk Cell</a></li>
                                </ul>


                                <li>
                                    <img class="imgcollection"
                                        src={collectionimg} />
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li><a href="#">Shop</a></li>
                    <li><Link to='/android'>Android</Link></li>
                    <li> <Link to='/accessoires'>Accessoires</Link></li>
                    <li><a href="#">Memorey&Storage</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">pages
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">About us</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#">contact us</a></li>
                            <li>
                                <hr class="dropdown-divider" />
                            </li>
                            <li><a class="dropdown-item" href="#"> else here</a></li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown dropflag">
                        <a class="nav-link dropdown-toggle dropa" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false"><img className="image-flage" src="https://flagcdn.com/pf.svg"/>EV
                        </a>
                        <ul class="dropdown-menu flag">
                            {value && <Flage value={value} />}
                        </ul>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar