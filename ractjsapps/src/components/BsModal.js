import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./css/style.css";

export class BsModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="divModal">
            <img className={"imgModal"} src={this.props.image_url} alt="" />
          </div>
          <br />
          <div>
            <strong>description :</strong> {this.props.description}
            <br /> <strong> number of horns: {this.props.horns} horns</strong>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BsModal;
