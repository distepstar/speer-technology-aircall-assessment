import React from 'react';
import { Home } from "../Home.jsx";
import { Archive, Feed, Detail } from "../Activity"
// React router dom
import { Route, Switch, withRouter } from "react-router-dom";

export class Viewport extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="w-full h-full bg-gray-200" >
        <Switch>
          <Route path="/" component={withRouter(Feed)} />
          <Route path="/archive" component={withRouter(Archive)} />
          <Route path="/detail" component={withRouter(Detail)} />
        </Switch>
      </div >
    )
  }
}
