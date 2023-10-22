import discord_icon from "../../assets/discord-icon.svg";
import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { BarButton } from "../barButton/barButton";
import "./mainBar.css";
import { Link, useLocation } from "react-router-dom";
import { createChannelLink, homeRoute } from "../../constants/routs";

export function MainBar() {
  const location = useLocation();
  let mainSelect = homeRoute == location.pathname;
  return (
    <div className="mainBar">
      <Link to={homeRoute}>
        <BarButton
          isSelected={mainSelect}
          icon={
            <img
              className="mainBarIcon"
              src={discord_icon}
              alt="Discord Icon"
            />
          }
          className={mainSelect ? "mainButton" : ""}
        />
      </Link>
      <Link to={createChannelLink(1)}>
        <BarButton
          text="G"
          isSelected={createChannelLink(1) == location.pathname}
          //icon={<AddIcon></AddIcon>}
        />
      </Link>
      <Link to={createChannelLink(2)}>
        <BarButton
          hasNotifications={true}
          text="H"
          isSelected={createChannelLink(2) == location.pathname}
        />
      </Link>
      <BarButton icon={<AddIcon></AddIcon>} isGreen />
      <BarButton icon={<ExploreIcon></ExploreIcon>} isGreen />
      <BarButton
        icon={<FileDownloadOutlinedIcon></FileDownloadOutlinedIcon>}
        isGreen
      />
    </div>
  );
}
