import { BatteryIcon, WifiIcon } from 'assets/svgs';

import styles from './statusBar.module.scss';

function StatusBar() {
  return (
    <div className={styles.statusBar}>
      <div className={styles.leftSection}>
        <WifiIcon className={styles.wifiIcon} />
      </div>
      <div className={styles.centerSection}>8:08 AM</div>
      <div className={styles.rightSection}>
        <BatteryIcon className={styles.batteryIcon} />
      </div>
    </div>
  );
}

export default StatusBar;
