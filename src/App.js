import s from './App.module.css'
import FeaturesMugs from "./components/featuresMugs/FeaturesMugs";
import MoreProducts from './components/moreProducts/moreProducts';
import PremiumOffer from './components/premiumOffer/PremiumOffer';
const  App = () => {
  return (
    <div className={s.app}>
      <FeaturesMugs/>
      <MoreProducts/>
      <PremiumOffer/>
    </div>
  );
}

export default App;
