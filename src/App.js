import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
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
import ContactPage from "pages/ContactPage";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contextElements = {
    isOpen,
    setIsOpen,
  };

  return (
    <div className="App">
      <MyContext.Provider value={contextElements}>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Header />
            <MobileNav />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/hosting" component={HostingPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
            <Footer />
          </ThemeProvider>
        </HashRouter>
      </MyContext.Provider>
    </div>
  );
};

export default App;
