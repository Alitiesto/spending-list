import SpendingContextProvider from "./context/SpendingContextProvider";
import Home from "./pages/home";

function App() {
  return (
    <SpendingContextProvider>
      <Home />
    </SpendingContextProvider>
  );
}

export default App;
