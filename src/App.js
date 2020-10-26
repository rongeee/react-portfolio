import React, { useContext, useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Route, Switch, useLocation } from "react-router-dom";
import Projects from "./pages/Projects";
import { useTransition, animated } from "react-spring";
import { Header } from "./components/Header";
import { PortfolioContext } from "./contexts/PortfolioContext";

function App() {
    const location = useLocation();
    const {direction} = useContext(PortfolioContext);

    let transitions = useTransition(location, location => location.pathname, {
      from: { opacity: '0', transform: direction === 'forward' ? "translateX(100%)" : "translateX(-100%)"},
      enter: { opacity: '1',  transform: "translateX(0%)" },
      leave: { opacity: '0', transform: direction === 'forward' ? "translateX(-100%)" : "translateX(100%)" }
  });

  return (
  <Layout>
  { transitions.map(({ item: location, props, key }) => 
     (<animated.div
      key={key}
      style={{
        ...props,
        position: "absolute",
        top: "0",
        left: "0",
        display: "grid",
        placeItems: "center",
        height: "100%",
        width: "100%",

      }}
    >
    <Switch location={location}>
        <Route path="/projects" exact component={Projects} />
        <Route path="/" exact component={Hero} />
    </Switch>
    </animated.div>)


  )}
    </Layout>
  );
}

export default App;
