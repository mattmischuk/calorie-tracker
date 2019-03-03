import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const MainMenu = props => {
  return (
    <MenuList>
      <MenuItem component={Link} to="add-food">
        Add Food
      </MenuItem>
      <MenuItem component={Link} to="add-exercise">
        Add Exercise
      </MenuItem>
      <MenuItem component={Link} to="view-macros">
        View Macros
      </MenuItem>
      <MenuItem component={Link} to="goals">
        Update Goals
      </MenuItem>
    </MenuList>
  );
};

export default MainMenu;