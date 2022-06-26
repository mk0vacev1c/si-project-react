import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoginComp } from "./LoginComp";
import { RegisterComp } from "./RegisterComp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Contact from "../Contact";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { AuctionBody } from "../auctions/Body";
import { AuthProvider } from "../../context/AuthContext";
import { BlogBody } from "../blog/Body";

import { firestoreApp, timestamp } from "../../config/firebase";

export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const firstName = useRef();
  const lastName = useRef();
  const amount = useRef();
  const creditCard = useRef();
  const comment = useRef();
  const emailRef = useRef();

  const submitForm = async (e) => {
    e.preventDefault();

    let donation = {
      email: emailRef.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      amount: amount.current.value,
      comment: comment.current.value,
      creditCardNumber: creditCard.current.value,
      transactionTime: timestamp(),
    };
    const collectionRef = firestoreApp.collection("donations");
    const docRef = await collectionRef.add(donation);
    alert("Thanks for the suport!");
    closeForm();
  };
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light mb-5">
          <div className="container">
            <Link className="navbar-brand" to={"/home"}>
              No Shave Nov
            </Link>
            <div
              className="collapse navbar-collapse nav-right"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/home"}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/blog"}>
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/shop"}>
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/auctions"}>
                    Auctions
                  </Link>
                </li>
                <li onClick={openForm} className="nav-link">
                  Donate/Support
                </li>
                <Modal
                  centered
                  show={showForm}
                  onHide={closeForm}
                  backdrop="static"
                >
                  <form onSubmit={submitForm}>
                    <Modal.Header>
                      <Modal.Title>Donate/Support</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form.Group>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" required ref={firstName} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" required ref={lastName} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        {currentUser ? (
                          <Form.Control
                            type="email"
                            readOnly
                            value={currentUser.email}
                            ref={emailRef}
                          />
                        ) : (
                          <Form.Control type="email" required ref={emailRef} />
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Enter amount</Form.Label>
                        <Form.Control type="number" placeholder="Amount in euros.."ref={amount}  />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Credit card number</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          ref={creditCard}
                        />
                      </Form.Group>
                      <Form.Group>
                        <div class="row mt-1">
                          <div class="form-group col-sm-4">
                            <label for="ccmonth">Month</label>
                            <select class="form-control" id="ccmonth">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                              <option>7</option>
                              <option>8</option>
                              <option>9</option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                          <div class="form-group col-sm-4">
                            <label for="ccyear">Year</label>
                            <select class="form-control" id="ccyear">
                              <option>2014</option>
                              <option>2015</option>
                              <option>2016</option>
                              <option>2017</option>
                              <option>2018</option>
                              <option>2019</option>
                              <option>2020</option>
                              <option>2021</option>
                              <option>2022</option>
                              <option>2023</option>
                              <option>2024</option>
                              <option>2025</option>
                            </select>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-group">
                              <label for="cvv">CVV/CVC</label>
                              <input
                                class="form-control"
                                id="cvv"
                                type="text"
                                placeholder="123"
                              />
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={comment} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Check>
                          <Form.Check.Input type="checkbox" required />
                          <Form.Check.Label>
                            <i>I agree to terms and conditions.</i>
                          </Form.Check.Label>
                          <Form.Control.Feedback type="valid">
                            You did it!
                          </Form.Control.Feedback>
                        </Form.Check>
                      </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={closeForm}>
                        Cancel
                      </Button>
                      <Button variant="primary" type="submit">
                        Donate
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </ul>
              <div className="d-flex">
                <div className="col">
                  {currentUser ? (
                    <>
                      <div className="btn btn-outline-secondary mx-2 disabled">
                        {currentUser.email}
                      </div>
                      <div
                        onClick={() => logout()}
                        className="btn btn-outline-secondary mx-2"
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <LoginComp />
                      <RegisterComp />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/auctions" element={<AuctionBody />}></Route>
            <Route path="/blog" element={<BlogBody />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};
