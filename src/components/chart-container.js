import styles from "./chart-container.module.css";
import data from "../assets/data";
import Chart from "./chart";

const ChartContainer = () => {
  let total = 0;
  let precentage = 2.43;

  data.forEach((date) => {
    const { amount } = date;
    total = total + amount;
  });

  return (
    <section className={styles.chartContainer}>
      <h1>Spending - Last 7 days</h1>

      <Chart></Chart>

      <div className={styles.total}>
        <div className={styles.total_left}>
          <p>Total this month</p>
          <h1>
            <span>$</span>
            {total}
          </h1>
        </div>

        <div className={styles.total_right}>
          <h4>
            <span>+</span>
            {precentage}
            <span>%</span>
          </h4>
          <p>from last month</p>
        </div>
      </div>
    </section>
  );
};

export default ChartContainer;
