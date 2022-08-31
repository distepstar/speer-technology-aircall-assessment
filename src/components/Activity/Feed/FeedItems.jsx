import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export class FeedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      hourPeriod: "",
      callTypeColor: "",
    }
  }

  formatDate() {
    const dateObj = new Date(this.props.data.created_at);
    const dateOptions = { month: "short", day: "numeric", year: "numeric" };
    const timeOptions = { horu12: true, hour: "2-digit", minute: '2-digit' };

    const [dd, mmm, yyyy] = dateObj.toLocaleDateString('default', dateOptions).split(" ");
    const [hour, minute] = dateObj.toLocaleString('default', timeOptions).split(":");

    // rearranged date
    const resDateString = `${mmm.toUpperCase()}, ${dd} ${yyyy}`;
    const resHourString = `${hour}:${minute}`;
    this.setState({ date: resDateString, time: resHourString, hourPeriod: parseInt(hour) > 12 ? "PM" : "AM" });
  }


  setCallTypeColor() {
    if (this.props.data.call_type === "missed") {
      this.setState({ callTypeColor: "text-red-400" })
    }
    if (this.props.data.call_type === "answered") {
      this.setState({ callTypeColor: "text-green-500" })
    }
    if (this.props.data.call_type === "voicemail") {
      this.setState({ callTypeColor: "text-amber-800" })
    }
  }

  componentDidMount() {
    // format date to correct format
    this.formatDate();
    // set color for call type field
    this.setCallTypeColor();
  }

  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-11/12 h-8 justify-center items-center">
          <div className="border-b-[1px] border-dashed border-gray-400 text-center h-[10px] mb-2.5 w-full">
            <span className="text-xs font-bold bg-gray-200 w-2 text-gray-400">{this.state.date}</span>
          </div>
        </div>
        <div className="flex flex-row w-11/12 h-20 justify-center items-center border-4 border-gray-300 rounded-lg">
          <div className="flex justify-center items-center text-lg w-2/12">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="flex flex-col space-y-2  justify-center items-left w-7/12">
            <div className="text-base font-bold">{this.props.data.from}</div>
            <div className="flex flex-row text-xs text-gray-400 space-x-2">
              <div className={`${this.state.callTypeColor}`}>
                {this.props.data.call_type.charAt(0).toUpperCase() + this.props.data.call_type.slice(1)}
              </div>
              <div>
                -
              </div>
              <div>
                {`via ${this.props.data.via}`}
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-2 h-full justify-center items-right items-center w-4/12 text-gray-400">
            <div className="border-l-[2px] border-dashed border-gray-400 h-16"></div>
            <div className="flex flex-row space-x-2 font-bold justify-center items-center">
              <div >{this.state.time}</div>
              <div className="border-2 border-gray-400 p-1 rounded-md">{this.state.hourPeriod}</div>
            </div>
          </div>
        </div>
      </div>

    )

  }
}
