import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from './utils/useStyles'
import Header from "./components/Header"
import AppRouter from "./components/AppRouter"
import { useTranslation, Trans } from "react-i18next";

 const lngs = {
   en: { nativeName: "English" },
   de: { nativeName: "Russian" },
 };

function App() {

 

  const { t, i18n } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <main className="App-main">
            <AppRouter />
          </main>
        </div>
    </ThemeProvider>
  );
}

export default App;
