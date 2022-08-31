import React from "react";
import { FeedItems } from "./FeedItems.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

export class Inbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      isArchived: false,
      filteredArr: []
    }
    this.handleArchiveAll = this.handleArchiveAll.bind(this);

  }

  componentDidMount() {
    this.setArchiveList(this.state.isArchived);
    console.log(this.state.isArchived);
  }

  setArchiveList(isArchived) {
    let filteredArr = this.props.data.filter((item) => {
      return item.is_archived === isArchived;
    });
    this.setState({ filteredArr: filteredArr });
  }

  handleArchiveAll(e) {
    this.props.handleArchiveAll(e);

  }


  // Get archiveList
  archiveList() {
    return this.state.filteredArr.map((item, idx) => {
      return (
        <FeedItems key={`inbox-archived-${idx}`} data={item} />
      )
    })
  }


  render() {
    return (
      <div className="flex flex-col space-x-2 items-center w-full h-full pt-8 pb-8">
        <button className="flex justify-center items-center w-full" onClick={this.handleArchiveAll}>
          <div className="flex flex-row space-x-4 justify-left w-11/12 h-16 items-center pl-4 pr-4 border-4 border-gray-300 rounded-md">
            <FontAwesomeIcon icon={faBoxArchive} className="text-lg">faBoxArchive</FontAwesomeIcon>
            <div className="font-bold text-base">Archive all calls</div>
          </div>
        </button>
        {
          this.archiveList(this.state.isArchived)
        }

      </div >
    )
  }
}

