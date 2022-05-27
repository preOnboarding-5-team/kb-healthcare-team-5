import StatusBar from 'components/StatusBar';
import styles from './app.module.scss';
import Main from './Main';

function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <StatusBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
