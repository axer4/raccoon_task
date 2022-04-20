import s from './App.module.css'
import FeaturesMugs from "./components/featuresMugs/FeaturesMugs";
import MoreProducts from './components/moreProducts/moreProducts';
import PremiumOffer from './components/premiumOffer/PremiumOffer';
import SimpleSlider from './components/Slider/Slider';
const  App = () => {
  return (
    <div className={s.app}>
      <FeaturesMugs/>
      <MoreProducts/>
      <PremiumOffer/>
      <SimpleSlider/>
    </div>
  );
}

export default App;
