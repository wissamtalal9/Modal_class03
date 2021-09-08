import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import NavBarCustom from "./components/NavBarCustom";
import BsModal from "./components/BsModal";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      title: "",
      description: "",
      image_url: "",
      horns: "",
    };
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  handleOpen = (description, title, image_url, horns) => {
    this.setState({
      showModal: true,
      description: description,
      title: title,
      image_url: image_url,
      horns: horns,
    });
  };
  render() {
    return (
      <>
        <NavBarCustom />
        <Main handleOpen={this.handleOpen} />

        <BsModal
          handleClose={this.handleClose}
          showModal={this.state.showModal}
          description={this.state.description}
          title={this.state.title}
          image_url={this.state.image_url}
          horns={this.state.horns}
        />
      </>
    );
  }
}

export default App;
