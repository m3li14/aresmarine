import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './Home';
import Capabilities from './Capabilities';
import PreviousRestoration from './PreviousRestoration';
import CustomPaint from './CustomPaint';
import Videos from './Videos'
import MissionStatment from './MissionStatement';
import Contact from './Contact';
import Yachts from './YachtsForSale/Yachts';
import Afterglow from './YachtsForSale/Afterglow';
import JustEnough from './YachtsForSale/JustEnough';
import GoingFissionSale from './YachtsForSale/GoingFission'
import LadyJane from './YachtsForSale/LadyJane';
import Miniskirt from './Restoration/Miniskirt';
import MiniskirtTestimonial from './Restoration/MiniskirtTestimonial';
import Awards from './Restoration/Awards';
import JustEnoughRestoration from './Restoration/JustEnough';
import ReelMoney from './Restoration/ReelMoney';
import DNatalin from './Restoration/DNatalin';
import Otam from './Restoration/Otam';
import Magnum from './Restoration/Magnum';
import VirginiaSea from './Restoration/VirginiaSea';
import Octopussy from './Restoration/Octopussy';
import Bread from './Restoration/Bread';
import Yes from './Restoration/Yes';
import SeaDiamond from './Restoration/SeaDiamond';
import TheProgram from './Restoration/TheProgram';
import FourAces from './Restoration/FourAces';
import MustangSally from './Restoration/MustangSally';
import GoingFission from './Restoration/GoingFission';
import Footer from './Component/Footer';
import Navigation from './Component/Navigation';
// import VideoBG from './Component/VideoBG';
// import Skills from './Skills';
import InterestCalculator from './InterestCalculator';


const history = createBrowserHistory();

function App() {
  return (
    <div className='RickFont font-bold'>

      {/* <div className='z-0 print:hidden'><VideoBG /></div> */}
      <div className='absolute inset-0 z-10'>
        <Navigation>

          <div>

            <BrowserRouter history={history}>



              <Switch>
                <div className=''>
                  <Route exact="true" path="/" component={Home} />
                  <Route exact="true" path="/Restoration/Awards" component={Awards} />
                  <Route exact="true" path="/Capabilities" component={Capabilities} />
                  <Route exact="true" path="/PreviousRestoration" component={PreviousRestoration} />
                  <Route exact="true" path="/CustomPaint" component={CustomPaint} />
                  <Route exact="true" path="/YachtsForSale/Yachts" component={Yachts} />
                  <Route exact="true" path="/Videos" component={Videos} />
                  <Route exact="true" path="/MissionStatment" component={MissionStatment} />
                  <Route exact="true" path="/Contact" component={Contact} />
                  <Route exact="true" path="/YachtsForSale/Afterglow" component={Afterglow} />
                  <Route exact="true" path="/YachtsForSale/JustEnough" component={JustEnough} />
                  <Route exact="true" path="/YachtsForSale/LadyJane" component={LadyJane} />
                  <Route exact="true" path="/YachtsForSale/GoingFission" component={GoingFissionSale} />
                  <Route exact="true" path="/Restoration/Miniskirt" component={Miniskirt} />
                  <Route exact="true" path="/Restoration/MiniskirtTestimonial" component={MiniskirtTestimonial} />
                  <Route exact="true" path="/Restoration/JustEnough" component={JustEnoughRestoration} />
                  <Route exact="true" path="/Restoration/ReelMoney" component={ReelMoney} />
                  <Route exact="true" path="/Restoration/DNatalin" component={DNatalin} />
                  <Route exact="true" path="/Restoration/Otam" component={Otam} />
                  <Route exact="true" path="/Restoration/Magnum" component={Magnum} />
                  <Route exact="true" path="/Restoration/VirginiaSea" component={VirginiaSea} />
                  <Route exact="true" path="/Restoration/Octopussy" component={Octopussy} />
                  <Route exact="true" path="/Restoration/GoingFission" component={GoingFission} />
                  <Route exact="true" path="/Restoration/Bread" component={Bread} />
                  <Route exact="true" path="/Restoration/Yes" component={Yes} />
                  <Route exact="true" path="/Restoration/SeaDiamond" component={SeaDiamond} />
                  <Route exact="true" path="/Restoration/TheProgram" component={TheProgram} />
                  <Route exact="true" path="/Restoration/FourAces" component={FourAces} />
                  <Route exact="true" path="/Restoration/MustangSally" component={MustangSally} />


                  <Route exact="true" path="/Restoration/MustangSally" component={MustangSally} />
                  <Route exact="true" path="/InterestCalculator" component={InterestCalculator} />
                </div>
              </Switch>

            </BrowserRouter>

            <div className='clear-both'><Footer /></div>
          </div>
        </Navigation>
      </div>

    </div>
  );
}

export default App;
