import { useState } from "react";
import Home from "./components/Home/Home";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={
          darkMode
            ? "bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500"
            : "bg-gradient-to-b from-blue-400 via-blue-200 to-blue-50"
        }
      >
        <Home handleDarkMode={handleDarkMode} />
      </div>
    </div>
  );
}

export default App;
