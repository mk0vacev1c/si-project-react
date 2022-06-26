import React from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";

function Home() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Container className="home-background">
          <Row className="px-4 my-5 home-background">
            <Col sm={7}>
              <Image src="../C.PNG" width="450" fluid rounded className="" />
            </Col>
            <Col sm={5}>
              <h2 className="font-weight-light">Welcome to No Scissors Nov</h2>
              <div className="px-4 mt-5"></div>
              <h4>It's non profit organization who helps fight the cancer!</h4>
              <p>
                November is a month-Iong journey during which participants forgo
                shaving and grooming in order to evoke conversation and raise
                cancer awareness. Learn more about how you can get involved and
                start getting hairy!
              </p>
              <p>
                The goal of month of November is to grow awareness by embracing
                our hair, which many cancer patients lose, and letting it grow
                wild and free. Donate the money you typically spend on shaving
                and grooming to educate about cancer prevention, save lives, and
                aid those fighting the battle.
              </p>
            </Col>
          </Row>
          <Row className="px-4 my-5 home-background">
            <Col sm={7}>
              <Image
                src="https://d1hjmxl2sh2vx3.cloudfront.net/wp-content/uploads/2021/05/rule.png"
                width="450"
                fluid
                rounded
                className=""
              />
            </Col>
            <Col sm={5}>
              <div className="px-4 mt-5"></div>
              <h4>The Rules</h4>
              <p>
                The rules of No-Shave November are simple: put down your razor
                for 30 days and donate your monthly hair-maintenance expenses to
                the cause. Strict dress-code at work? Don’t worry about it! We
                encourage participation of any kind; grooming and trimming are
                perfectly acceptable.
              </p>
            </Col>
          </Row>
          <Row class="txt white">
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>
                We are three musketeers, who decided to bring world wide culture
                in Serbia. Our goal is to support people who fight testical
                cancer.
              </Card.Body>
            </Card>
          </Row>
          <Row className="body-card">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../8.jfif" />
                <Card.Body>
                  <Card.Title className="home-card-title">
                    Milos Kovacevic
                  </Card.Title>
                  <Card.Text><i><u>Information Technology Engineer</u></i></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../djolee.PNG" />
                <Card.Body>
                  <Card.Title className="home-card-title">
                    Djordje Isailovic
                  </Card.Title>
                  <Card.Text><i><u>Master Electrical Engineer</u></i></Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="../rola.PNG" />
                <Card.Body>
                  <Card.Title className="home-card-title">
                    Marko Radovanovic
                  </Card.Title>
                  <Card.Text><i><u>Graphic Technician Engineer</u></i></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <footer class="py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class="text-center text-white">© 2022 Copyright: No Shave Nov</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
