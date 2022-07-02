import Balance from "./components/balance";
import ChartContainer from "./components/chart-container";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Balance />
      <ChartContainer />
    </div>
  );
}
