import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import router from "./routes/routes";
import CustomHeader from "./components/CustomHeader";
const App = () => (
  <ErrorBoundary>
    <CustomHeader />
    <BrowserRouter>{router.map((item) => item.component)}</BrowserRouter>
  </ErrorBoundary>
);

export default App;
