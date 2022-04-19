import s from './App.module.css'
import FeaturesMugs from "./components/featuresMugs/FeaturesMugs";
const  App = () => {
  return (
    <div className={s.app}>
      <FeaturesMugs/>
    </div>
  );
}

export default App;
