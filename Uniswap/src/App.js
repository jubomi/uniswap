import React from "react";
import { Desktop, Mobile } from "./hooks/MediaQuery";
import MobileUniswap from "./pages/MobileUniswap";
import DesktopUniswap from "./pages/DesktopUniswap";

function App() {
  return (
    <div>
      <Mobile>
        <MobileUniswap />
      </Mobile>
      <Desktop>
        <DesktopUniswap />
      </Desktop>
    </div>
  );
}

export default App;
