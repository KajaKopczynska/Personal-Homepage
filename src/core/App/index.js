import { ThemeProvider } from "styled-components";
import PersonalHomepage from "../../features/PersonalHomepage/PersonalHomepage";
import { GlobalStyle } from "./GlobalStyle";
import { selectIsDarkTheme } from "../../common/ThemeSwitch/themeSlice";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "./theme";


function App() {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <PersonalHomepage />
      </ThemeProvider>
    </div>
  );
}

export default App;
