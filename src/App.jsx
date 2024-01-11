import "./App.css";
import Wallet from "./Components/Wallet/Wallet";
import Navigation from "./Components/Navigation/Navigation";
import DisplayPannel from "./Components/DisplayPannel/DisplayPannel";

function App() {
  return (
    <>
      <Wallet>
        <Navigation />
        <DisplayPannel />
      </Wallet>
    </>
  );
}

export default App;
