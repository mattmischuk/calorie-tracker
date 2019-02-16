import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class Header extends Component {
  computeCaloriesLeft() {
    return this.props.dailyGoal - this.props.calorieCount;
  }

  render() {
    let caloriesLeft = this.computeCaloriesLeft();

    return (
      <div className="header">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h4" component={Link} to="/">
              Calorie Tracker
            </Typography>
          </Toolbar>
        </AppBar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Daily Calories</TableCell>
              <TableCell>Daily Consumed</TableCell>
              <TableCell>Daily Amount Left</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1800</TableCell>
              <TableCell>{this.props.calorieCount}</TableCell>
              <TableCell>{caloriesLeft}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Header;
