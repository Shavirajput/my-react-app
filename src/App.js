import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Content/>
      <Footer />
      <Card />
    </div>
  );
}

export default App;
