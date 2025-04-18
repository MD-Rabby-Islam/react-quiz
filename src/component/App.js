import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./PublicRoute";
import Quiz from "./Quiz";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <PublicRoute exact path="/signup" element={<Signup />} />
            <PublicRoute exact path="/login" element={<Login />} />
            <PrivateRoute exact path="/quiz" element={<Quiz />} />
            <PrivateRoute exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
