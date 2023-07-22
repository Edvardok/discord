import { useState } from "react";
import discord_icon from "./assets/discord-icon.svg";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="mainBar">
        <div className="mainBarButton mainButton">
          <img className="mainBarIcon" src={discord_icon} alt="Discord Icon" />
        </div>
        <div className="mainBarButton greenFont">
          <AddIcon></AddIcon>
        </div>
        <div className="mainBarButton  greenFont">
          <ExploreIcon></ExploreIcon>
        </div>
        <div className="mainBarButton greenFont">
          <FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
