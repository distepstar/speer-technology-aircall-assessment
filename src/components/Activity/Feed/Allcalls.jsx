import React from "react";
import { FeedItems } from "./FeedItems.jsx";


export class Allcalls extends React.Component {
  constructor(props) {
    super(props);

  }


  // Get archiveList
  allCallList() {
    return this.props.data.map((item, idx) => {
      return (
        <FeedItems key={`inbox-archived-${idx}`} data={item} />
      )
    })
  }

  render() {

    return (
      <div className="flex flex-col space-x-2 items-center w-full h-full pt-8 pb-8">
        {
          this.allCallList()
        }

      </div >
    )
  }
}

