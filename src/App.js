import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "styles/theme";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";
import MyContext from "context/Context";
import Footer from "components/Footer";
import Header from "components/Header";
import MobileNav from "components/MobileNav";
import HostingPage from "pages/HostingPage";

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
          <BrowserRouter>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              {/* <HeaderInfo /> */}
              {/* <DesktopNav /> */}
              <Header />
              <MobileNav />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/hosting" component={HostingPage} />
                {/* <HomePage /> */}
              </Switch>
              <Footer />
            </ThemeProvider>
          </BrowserRouter>
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
