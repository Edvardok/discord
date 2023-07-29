import { useState } from "react";
import discord_icon from "./assets/discord-icon.svg";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { BarButton } from "./components/barButton/barButton";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="mainBar">
        <div className="mainBarButton mainButton">
          <img className="mainBarIcon" src={discord_icon} alt="Discord Icon" />
        </div>
        <BarButton selected={true}></BarButton>
        <BarButton notifications={true}></BarButton>
        <div className="mainBarButton greenFontButton">
          <AddIcon></AddIcon>
        </div>
        <div className="mainBarButton  greenFontButton">
          <ExploreIcon></ExploreIcon>
        </div>
        <div className="mainBarButton greenFontButton">
          <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
