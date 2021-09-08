import React, { Component } from "react";
import imagesData from "./images.json";
import User from "./User";

class Main extends Component {
  render() {
    return (
      <div className="row">
        {imagesData.map((image) => {
          return (
            <User
              handleOpen={this.props.handleOpen}
              image_url={image.image_url}
              title={image.title}
              description={image.description}
              keyword={image.keyword}
              horns={image.horns}
            />
          );
        })}
      </div>
    );
  }
}

export default Main;
