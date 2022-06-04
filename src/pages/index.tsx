import { useRef } from 'react';
import MyHealth from 'components/MyHealth';
import StatusBar from 'components/StatusBar';
import HealthCards from 'components/HealthCards';

import styles from './app.module.scss';
import ScoreAnalyze from '../components/ScoreAnalysis';

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.appWrapper}>
      <div id="app" className={styles.app} ref={appRef}>
        <StatusBar />
        <MyHealth />
        <ScoreAnalyze appRef={appRef} />
        <HealthCards />
      </div>
    </div>
  );
}

export default App;
