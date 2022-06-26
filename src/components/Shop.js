import React, { useContext, useRef, useState } from 'react'
import FooterSticky from './FooterSticky';

import { AuthContext } from '../context/AuthContext';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { firestoreApp, timestamp } from '../config/firebase';


const Shop = () => {
  
  const { currentUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const amount = useRef();
  const cvcNumber = useRef();
  const creditCard = useRef();
  const comment = useRef();
  const emailRef = useRef();
  const billingAddress = useRef(); 
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const cena = "$50";

  const submitForm = async (e) => {
    e.preventDefault();

    let transaction = {
      email: emailRef.current.value,
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      amount: amount.current.value,
      comment: comment.current.value,
      billingAddress: billingAddress.current.value,
      creditCardNumber: creditCard.current.value,
      transactionTime: timestamp()
  };
  const collectionRef = firestoreApp.collection('transactions');
  const docRef = await collectionRef.add(transaction);
  alert("Thanks for the purchase! Check your email for order info.");
  closeForm();
  };
  return (
    <div>
      <div className='text-center pb-3'>
        <h2>Welcome to our shop.</h2>
        <h5>Here you can buy our products. <br></br>
          With purchasing, you take part in humanitarian action for people who need our help.
        </h5>
      </div>
      <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div class="col mb-5">
          <div class="card h-100">
            <img class="card-img-top" src="../shirt.png" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">T-Shirt</h5>
                $80.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center" onClick={openForm}><a class="btn btn-outline-dark mt-auto" href="#">Buy</a></div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <div class="badge text-white position-absolute bg-success" >Sale</div>
            <img class="card-img-top" src="../case.png" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Phone case</h5>
                <div class="d-flex justify-content-center small text-warning mb-2">
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                  <div class="bi-star-fill"></div>
                </div>
                <span class="text-muted text-decoration-line-through">$20.00 </span>
                $18.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center" onClick={openForm}><a class="btn btn-outline-dark mt-auto" href="#">Buy</a></div>
            </div>
          </div>
        </div>
        <div class="col mb-5">
          <div class="card h-100">
            <div class="badge  bg-success text-white position-absolute" >Sale</div>
            <img class="card-img-top" src="../Cup1.PNG" alt="..." />
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">Cup</h5>
                <span class="text-muted text-decoration-line-through">$50.00 </span>
                $25.00
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div class="text-center" onClick={openForm}><a class="btn btn-outline-dark mt-auto" href="#">Buy</a></div>
            </div>
          </div>
        </div>
      </div>
      <Modal centered show={showForm} onHide={closeForm} >
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title>Fill out the order</Modal.Title>
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
              {currentUser ? (<Form.Control type="email"  readOnly value={currentUser.email} ref={emailRef} />) : 
                              (<Form.Control type="email"  required  ref={emailRef} />)}
            </Form.Group>
            <Form.Group>
              <Form.Label>Billing Address</Form.Label>
              <Form.Control type="text" required ref={billingAddress} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Cost</Form.Label>
              <Form.Control type="text" readOnly value={cena} ref={amount} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Credit card number</Form.Label>
              <Form.Control type="text" placeholder="0000 0000 0000 0000" ref={creditCard} />
            </Form.Group>
            <Form.Group>
              <div class="row mt-1">
                <div class="form-group col-sm-4">
                  <label for="ccmonth">Month</label>
                  <select class="form-control" id="ccmonth" required>
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
                  <select class="form-control" id="ccyear" required>
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
                    <input class="form-control" id="cvv" type="text" placeholder="123" required/>
                  </div>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} ref={comment} />
            </Form.Group>
            <Form.Group>
              <Form.Check>
                <Form.Check.Input type="checkbox" required />
                <Form.Check.Label><i>I agree to terms and conditions.</i></Form.Check.Label>
                <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
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
      <FooterSticky />
    </div>
  )
};

export default Shop