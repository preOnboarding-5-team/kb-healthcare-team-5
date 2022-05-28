import StatusBar from 'components/StatusBar';
import styles from './app.module.scss';
import Main from './Main';
import ScoreAnalyze from '../components/ScoreAnalyze';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <StatusBar />
        <Main />
        <ScoreAnalyze />
      </div>
    </div>
  );
}

export default App;
