import "./styles.css";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

export default function App() {
  return (
    <div>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </div>
  );
}
