import { menuData } from "../utils/menuData";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { setSideBar } from "../redux/appReducer";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { Box, ButtonGroup } from "@material-ui/core";
// import { useStyles } from "../utils/useStyles";
import CloseIcon from "@material-ui/icons/Close";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: purple[500],
  },
});

export default function SideBar() {
  const dispatch = useDispatch();
  const sideBar = useSelector(state => state.sideBar);
  console.log("sideBar", sideBar);
  const { t, i18n } = useTranslation();
  const history = useHistory();
  const classes = useStyles();

  // const [sideBar, setSideBar] = useStyles(true);

  const closeHandler = path => {
    history.push(path);
    dispatch(setSideBar(false));
  };

  return (
    <Drawer
      anchor="right"
      open={sideBar}
      classes={{ paper: classes.paper }}
      onClose={() => dispatch({ type: "SHOW_SIDEBAR", payload: false })}
    >
      <Button
        onClick={() => dispatch({ type: "SHOW_SIDEBAR", payload: false })}
        style={{ margin: "2.5rem 0" }}
        startIcon={<CloseIcon />}
      ></Button>
      <Box style={{ paddingTop: "2.5rem" }}>
        <ButtonGroup
          className={classes.sideBar}
          orientation="vertical"
          // color="primary"
          // variant="contained"
          aria-label="vertical outlined primary button group"
          style={{ width: "200px" }}
          // onClick={() => dispatch(setSideBar(false))}
        >
          {menuData.map(item => (
            <Button onClick={() => closeHandler(item.path)}>
              {t(`description.${item.title}`)}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </Drawer>
  );
}
