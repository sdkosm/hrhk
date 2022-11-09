
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Sidebar from "../Common/Sidebar";
import Navbar from "../Common/Navbar";
import "../Dashboard/Dashboard.css";
// import Axios from 'axios';

const Letter = () => {
  const [validated, setValidated] = useState(false);


// const url=""
// const [data,setData]=useState({
//   name:"",
//   date:"",
//   iduser:""

// })
// function handle(e){
//   const newdata={... data}
//   newdata[e.target.id]=e.target.value
//   setData(newdata)
//   console.log(newdata)
// }



  const submit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
     
      e.stopPropagation();
    }
    setValidated(true);

    // Axios.post(url,{
    //   name:data.name,
    //   date: data.date,
    //   iduser: data.iduser
    // })
    //   .then(res=>{
    //     console.log(res.data)
    //   })
  };



  return (
    <div className="dashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <Navbar />

        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <React.Fragment>
              <Container>
                <div className="row">
                  <div className="col-sm-12">
                    <br />
                    <Card>
                      <Card.Body>
                        <Card.Title>Letter Creation</Card.Title>
                      </Card.Body>
                    </Card>

                    <br />

                    <Form
                      className="row g-3"
                      noValidate
                      validated={validated}
                      onSubmit={(e)=> submit(e)}
                    >
                      <div className="col-md-4">
                        <label className="left-align-text">
                          Candidate Name
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            id="name"
                            type="text"
                            minLength={5}
                            className="form-control"
                            placeholder="Enter Name"
                            required
                            // value={data.name}
                            // onChange={(e)=>handle(e)}
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="left-align-text">
                          Email Id
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            className="form-control"
                            placeholder="Enter Email"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label className="left-align-text">
                          Mobile No.
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            className="form-control"
                            type="number"
                            placeholder="Enter Mobile No."
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-sm-12">
                    <Form
                      className="row g-3"
                      noValidate
                      validated={validated}
                      onSubmit={submit}
                    >
                      <div className="col-md-4" id="lid">
                        <label className="left-align-text">
                          Letter Issued Date
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            className="form-control"
                            type="date"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="left-align-text">
                          Date Of Joining
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            className="form-control"
                            type="date"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label className="left-align-text">
                          CTC
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <input
                            className="form-control"
                            type="text"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col-sm-12">
                    <Form
                      className="row g-3"
                      noValidate
                      validated={validated}
                      onSubmit={submit}
                    >
                      <div className="col-md-4">
                        <label className="left-align-text">
                          Variable Pay Percentage
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <select className="form-select" required>
                            <option value="">select</option>
                            <option value="1"> 15%</option>
                            <option value="2"> 20%</option>
                            <option value="3"> 25%</option>
                          </select>
                          <Form.Control.Feedback type="invalid">
                            Please choose something here
                          </Form.Control.Feedback>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label className="left-align-text">
                          Role
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <select className="form-select" required>
                            <option value="">select</option>
                            <option value="1"> HR Executive</option>
                            <option value="2"> HR Admin</option>
                            <option value="3">Accounts Executive</option>
                            <option value="4">Payroll Executive</option>
                            <option value="5">Software</option>
                          </select>
                          <Form.Control.Feedback type="invalid">
                            Please choose something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <label className="left-align-text">
                          Designation
                          <span class="required">*</span>
                        </label>
                        <div className="text-dark">
                          <select className="form-select" required>
                            <option value="">select</option>
                            <option value="1">Senior Cloud Software </option>
                            <option value="2">Junior Cloud Software</option>
                            <option value="3">Senior Software Engineer </option>
                            <option value="4">Business Analyst</option>
                          </select>
                          <Form.Control.Feedback type="invalid">
                            Please choose something here
                          </Form.Control.Feedback>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <br />
                <Form noValidate validated={validated} onSubmit={submit}>
                  <div className="row">
                    <div>
                      <div class="mb-3">
                        <label
                          for="exampleFormControlTextarea1"
                          class="left-align-text"
                        >
                          Address
                          <span class="required">*</span>
                        </label>
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </Form>

                <div className="col-md-12 " style={{ padding: "10px" }}>
                  <label className="left-align-text"></label>
                  <div className="text-dark">
                    <button
                      name="save"
                      className="btn btn-primary btn-lg mr-3"
                      width="250px"
                      onClick={submit}
                    >
                      {" "}
                      Save
                    </button>
                    <button
                      name="preview"
                      className="btn btn-primary btn-lg mr-3"
                      width="250px"
                    >
                      {" "}
                      Preview
                    </button>
                  </div>
                </div>
              </Container>
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;