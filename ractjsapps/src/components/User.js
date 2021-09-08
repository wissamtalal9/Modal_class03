import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Col } from "react-bootstrap";
class User extends Component {
  getHandleOpen = () => {
    let description = this.props.description;
    let title = this.props.title;
    let url = this.props.image_url;
    let horns = this.props.horns;
    this.props.handleOpen(description, title, url, horns);
  };

  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                Description : {this.props.description}
                <br />
                keyword : {this.props.keyword}
                <br />
                horns : {this.props.horns}
              </Card.Text>
              <Button onClick={this.getHandleOpen} variant="primary">
                Open The Image
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default User;
