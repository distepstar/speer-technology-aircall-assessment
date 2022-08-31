import React from "react";
// CSS
import "./css/app.css";
import "./css/body.css";
// Components
import { Viewport } from "./components/Container/Viewport.jsx";
import { FooterNav } from "./components/Nav";
// Apis
import * as AirCallApi from "./apis/aircallApi";
import regeneratorRuntime from "regenerator-runtime";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      totalCalls: 0,
    }
    // function call
    this.setTotalCalls = this.setTotalCalls.bind(this);
  }

  async setTotalCalls() {
    this.setState({ loading: true });
    const data = await AirCallApi.aircallApi();
    if (data) {
      this.setState({ totalCalls: data.length });
    }
  }

  componentDidMount() {
    // check all calls from api
    this.setTotalCalls();
  }


  render() {
    return (
      <div className="container relative w-full h-full flex flex-col">
        {/* <div className="container-view">Some activities should be here</div> */}
        <section className="static w-full h-full">
          <Viewport handleTotalCalls={this.setTotalCalls} />
        </section >

        <section className="static w-full">
          <FooterNav totalCalls={this.state.totalCalls} />
        </section>
      </div >
    );
  }
};

export default App;
