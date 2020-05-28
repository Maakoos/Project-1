import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import HomePage from "pages/HomePage";
import MyContext from "context/Context";

class App extends React.Component {
  state = {
    isOpen: false,
  };

  openMobileMenu = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeMobileMenu = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const contextElements = {
      ...this.state,
      openMobileMenu: this.openMobileMenu,
      closeMobileMenu: this.closeMobileMenu,
    };
    return (
      <MyContext.Provider value={contextElements}>
        <div className="App">
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <HomePage />
          </ThemeProvider>
        </div>
      </MyContext.Provider>
    );
  }
}

/* function App() {
  const [isOpen, setOpen] = useState(false);
  const context = {
    isOpen,
    setOpen,
  };
  return (
    <MyContext.Provider value={context}>
      <div className="App">
        <GlobalStyle />
        <HomePage />
      </div>
    </MyContext.Provider>
  );
} */

export default App;
