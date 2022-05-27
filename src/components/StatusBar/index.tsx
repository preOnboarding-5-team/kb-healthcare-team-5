import styles from './statusBar.module.scss';

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.leftSection}>left</div>
      <div className={styles.centerSection}>center</div>
      <div className={styles.rightSection}>right</div>
    </div>
  );
}

export default StatusBar;
