import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PAGE_PLAY, ROUTERS } from "./paths";
const Routers = () => {
  return (
    <Switch>
      {ROUTERS.map(({ path, component }) => (
        <Route path={path} component={component} key={path} />
      ))}
      <Redirect to={PAGE_PLAY} />
    </Switch>
  );
};
export default Routers;
