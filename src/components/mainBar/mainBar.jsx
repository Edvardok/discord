import discord_icon from "../../assets/discord-icon.svg";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { BarButton } from "../barButton/barButton";
import "./mainBar.css";
import { Link } from "react-router-dom";
import { createChannelLink, homeRoute } from "../../constants/routs";

export function MainBar(props) {
  return (
    <div className="mainBar">
      <Link to={homeRoute}>
        <div className="mainBarButton mainButton">
          <img className="mainBarIcon" src={discord_icon} alt="Discord Icon" />
        </div>
      </Link>
      <Link to={createChannelLink(1)}>
        <BarButton selected={true}></BarButton>
      </Link>
      <Link to={createChannelLink(2)}>
        <BarButton notifications={true}></BarButton>
      </Link>
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
  );
}
