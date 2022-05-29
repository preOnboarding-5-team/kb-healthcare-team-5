import MyHealth from 'components/MyHealth';
import StatusBar from 'components/StatusBar';
import HealthCards from 'components/HealthCards';

import styles from './app.module.scss';
import ScoreAnalyze from '../components/ScoreAnalysis';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div id="app" className={styles.app}>
        <StatusBar />
        <MyHealth />
        <ScoreAnalyze />
        <HealthCards />
      </div>
    </div>
  );
}

export default App;
