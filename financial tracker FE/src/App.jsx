import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { Transaction } from "./pages/Transaction";
import { Login } from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<DefaultLayout />}>
          {/* login page */}
          <Route index element={<Login />} />
          {/* signup */}
          <Route path="signup" element={<SignUp />} />
          {/* dashboard page */}
          <Route path="dashboard" element={<Dashboard />} />
          {/* transaction page */}
          <Route path="transaction" element={<Transaction />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
