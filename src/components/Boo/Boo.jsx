import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ButtonGroup, Carousel, Accordion, Card, Button } from 'react-bootstrap';
import './Boo.css'



class Boo extends Component {

    render() {
        let blocks = []

        {
            for (let i = 0; i < 25; i++) {
                blocks.push(
                    <Col className='col-2 col-md-1' >{i + 1}</Col>
                )
            }

        }

        console.log(blocks);

        return (
            <Container>
                <Accordion className='text-center'>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                1. Click me!
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the accordion 1</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                2. Click me!
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm the accordion 2</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                3. Click me!
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! I'm the accordion 3</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://murraymaint.com.au/wp-content/uploads/2013/04/landscape-3-800x4001.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cjdellatore.com/wp-content/uploads/2012/09/5221596851_b9fcf0e472_o-800x400.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.wallpapersafari.com/3/22/jTJh0O.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <Row className='row text-center justify-content-center'>
                    {blocks}
                </Row>

                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>


            </Container>
        )
    }
}

export default Boo;