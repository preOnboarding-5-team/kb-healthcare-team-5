import StatusBar from 'components/StatusBar';
import HealthCards from 'components/HealthCards';
import styles from './app.module.scss';
import Main from './Main';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <StatusBar />
        <Main />
        <HealthCards />
      </div>
    </div>
  );
}

export default App;
