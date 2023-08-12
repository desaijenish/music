import React, { FC } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface CardProsp {
  image: string;
  title: string | undefined;
}

const Card: FC<CardProsp> = ({ image, title }) => {
  return (
    <div>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            src={image}
            sx={{ width: 60, height: 60 }}
            style={{ margin: "0px 10px" }}
          />
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </div>
  );
};

export default Card;
