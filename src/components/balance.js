import styles from "./balance.module.css";
import logo from "../assets/images/logo.svg";

const Balance = () => {
  return (
    <section className={styles.balance}>
      <div className={styles.balance_text}>
        <p>My balance</p>
        <h1>$921.48</h1>
      </div>
      <div className={styles.balance_image}>
        <img src={logo} alt="logo"></img>
      </div>
    </section>
  );
};

export default Balance;
