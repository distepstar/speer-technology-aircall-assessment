import React from "react";
// API
import regeneratorRuntime from "regenerator-runtime";
import * as AirCallApi from "../../../apis/aircallApi";
// components
import { Allcalls } from "./Allcalls.jsx";
import { Inbox } from "./Inbox.jsx";
// Routers
import { Switch, Route, withRouter } from "react-router-dom";
import { NavBar } from "../../Nav"

export class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false, data: [] }
    this.title = "Activity";
    this.links = [{ name: "Inbox", to: "/feed" }, { name: "All calls", to: "/feed/allcalls" }]

    this.handleArchiveAll = this.handleArchiveAll.bind(this);
  }

  async fetchActivities() {
    this.setState({ loading: true });
    const data = await AirCallApi.aircallApi();
    if (data) {
      // set state
      this.setState({ loading: false, data: data });
    }
  }

  componentDidMount() {
    console.log("mounted");
    // Fetch data
    this.fetchActivities();
  }

  async handleArchiveAll(e) {
    // get total length of data which is not archived
    let len = this.state.data.filter((item) => {
      return item.is_archived === false;
    }).length;

    this.setState({ loading: true });

    for (let i = 0; i < len; i++) {
      // set all to archive
      await AirCallApi.aircallApiArchive(this.state.data[i].id);
    }
    await this.fetchActivities();

    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="flex flex-col w-full h-full items-center">
        <NavBar title={this.title} links={this.links} />
        {this.state.loading ?
          <div className="flex flex-col w-full h-full justify-center items-center">Loading......</div>
          : (
            <div className="flex flex-col w-full h-full justify-center items-center overflow-y-auto">
              <Switch>
                <Route exact path="/feed" render={() => <Inbox data={this.state.data} handleArchiveAll={this.handleArchiveAll} />} />
                <Route path="/feed/allcalls" render={() => <Allcalls data={this.state.data} />} />
              </Switch>
            </div>
          )
        }
      </div>
    )
  }
}
