import { FC } from "react";
import styles from "./style.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles['three-body']}>
      <div className={styles['three-body__dot']}></div>
      <div className={styles['three-body__dot']}></div>
      <div className={styles['three-body__dot']}></div>
    </div>
  )
}

export default Loader;
