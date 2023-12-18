import { Route, Routes } from "react-router-dom";
import App from "../App";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="*"
          element={
            <h1>
              404-Not Found Go to <a href="/">Home</a>{" "}
            </h1>
          }
        />
      </Routes>
    </div>
  );
}
