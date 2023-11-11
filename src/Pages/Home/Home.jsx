import Hero from '../../components/Hero/Hero'
import Innovate from '../../components/Innovate/Innovate';
import Essential from '../../components/Essential/Essential';
import Customer from '../../components/Customer/Customer';
import Footer from '../../components/Footer/Footer'
import Arrivals from "../../components/Arrivals/Arrivals";
const Home = () => {
  return (
    <div>
        
      <Hero />
      <Essential />
      <Innovate />
      <Arrivals/>
      <Customer />
      <Footer />
    </div>
  )
}

export default Home