import { useState } from "react";
import data from "../assets/data";
import styles from "./chart.module.css";

let maxAmount = 0;

const getMaxAmount = () => {
  data.forEach((item) => {
    const { amount } = item;
    if (amount > maxAmount) {
      maxAmount = amount;
    }
  });
};
getMaxAmount();

const Chart = () => {
  return (
    <section className={styles.chart}>
      {data.map((item, index) => {
        return (
          <BarSegment
            key={index}
            item={item}
            index={index}
            maxAmount={maxAmount}
          ></BarSegment>
        );
      })}
    </section>
  );
};

const BarSegment = ({ item, index, maxAmount }) => {
  const { amount, day } = item;
  const [showTooltip, setShowTooltip] = useState(false);
  var barHeight = (amount / 50) * 100; //asuming making $50 per day

  const toggleActive = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div key={index} className={styles.chart_segment}>
      <p>{day}</p>
      <div
        className={`${styles.chart_bar} ${
          maxAmount === amount ? styles.max : ""
        }`}
        style={{
          height: `${barHeight}px`
        }}
        onMouseEnter={toggleActive}
        onMouseLeave={toggleActive}
      >
        <div
          className={`${styles.chart_tooltip} ${
            showTooltip ? styles.active : ""
          }`}
        >
          <h6>
            <span>$</span>
            {amount}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Chart;
