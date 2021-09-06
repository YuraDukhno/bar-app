import React from "react";
// import { useStyles } from "../utils/useStyles";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { menuData } from "../utils/menuData";
import { Box, ButtonGroup } from "@material-ui/core";
import { ToggleButtonGroup } from "@material-ui/lab";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "en" },
  ru: { nativeName: "ru" },
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const { t, i18n } = useTranslation();

  const closeHandler = path => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <AppBar position="static">
        <Toolbar>
          <ButtonGroup
            fullWidth="true"
            variant="text"
            color="primary"
            aria-label="text primary button group"
          >
            <ToggleButtonGroup>
              <ButtonGroup style={{ paddingRight: "1rem" }}>
                {Object.keys(lngs).map(lng => (
                  <Button
                    key={lng}
                    style={{
                      color: i18n.language === lng ? "white" : "black",
                    }}
                    type="submit"
                    onClick={() => i18n.changeLanguage(lng)}
                  >
                    {lngs[lng].nativeName}
                  </Button>
                ))}
              </ButtonGroup>
              {menuData.map(item => (
                <Box
                  display={{ xs: "none", md: "block" }}
                  className={classes.buttonGroup}
                  m={"1"}
                >
                  <Button
                    color="inherit"
                    onClick={() => closeHandler(item.path)}
                  >
                    {t(`description.${item.title}`)}
                  </Button>
                </Box>
              ))}
            </ToggleButtonGroup>
          </ButtonGroup>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          {/* <Button color="inherit">
            <Link to="/Tips">tips</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Staff">staff</Link>
          </Button>
          <Button color="inherit">
            <Link to="/Schedule"></Link>schedule
          </Button>
          <Button color="inherit">
            <Link to="/Main"></Link>main
          </Button>
          <Button color="inherit">
            <Link to="/SignUp"></Link>sign up
          </Button>
          <Button color="inherit">
            <Link to="/SignIn"></Link>sign in
          </Button> */}
        </Toolbar>
      </AppBar>
    </AppBar>
  );
}
