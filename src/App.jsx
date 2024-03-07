import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Hero/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
