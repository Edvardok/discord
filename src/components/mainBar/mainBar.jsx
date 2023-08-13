import discord_icon from "../../assets/discord-icon.svg";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { BarButton } from "../barButton/barButton";
import "./mainBar.css";
import { Link, useLocation } from "react-router-dom";
import { createChannelLink, homeRoute } from "../../constants/routs";

export function MainBar(props) {
  const location = useLocation();

  return (
    <div className="mainBar">
      <Link to={homeRoute}>
        <div className="mainBarButton mainButton">
          <img className="mainBarIcon" src={discord_icon} alt="Discord Icon" />
        </div>
      </Link>
      <Link to={createChannelLink(1)}>
        <BarButton
          selected={createChannelLink(1) == location.pathname}
        ></BarButton>
      </Link>
      <Link to={createChannelLink(2)}>
        <BarButton
          notifications={true}
          selected={createChannelLink(2) == location.pathname}
        ></BarButton>
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
