import React from "react";

import Navbar2 from "../Component/Subcimponent/Navbar2";
import Commonsection from "../Component/Subcimponent/Commonsection";

 
import "../Stylesheet/Admin.css";
import { Link, Outlet } from "react-router-dom";
function Admin() {
  return (
    <div className="Admin">
      <Navbar2 />
      <Commonsection title="Admin" />

      <div className="admin_con">
        <div className="container-fluid  ">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark rounded-2 side_bar">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link
                  to="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">
                    &nbsp;&nbsp;Menu
                  </span>
                </Link>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <Link to="./details" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp;Cars
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="./add_car" className="nav-link align-middle px-0">
                      <i className="bi bi-plus-circle"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp;Add Car
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="./removecar"
                      className="nav-link align-middle px-0"
                    >
                      <i className="bi bi-trash"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp;Remove Car
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="./updatecar"
                      className="nav-link align-middle px-0"
                    >
                      <i className="bi bi-arrow-up-circle"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp;Update Car
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="./reservation"
                      className="nav-link align-middle px-0"
                    >
                      <i className="bi bi-bookmark-plus-fill"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp; Reservation
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="./customers"
                      className="nav-link align-middle px-0"
                    >
                      <i className="bi bi-people-fill"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">
                        &nbsp;&nbsp;Customers
                      </span>
                    </Link>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <Link
                    to="/"
                    className="d-flex align-items-center text-white text-decoration-none  "
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span className="d-none d-sm-inline mx-1">Logout</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col py-3 content rounded-2 ">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
