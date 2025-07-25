import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
  return (
    <div id="layout-wrapper">
      <DashboardHeader />
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <DashboardSidebar />
      {/* <!-- Left Sidebar End --> */}

      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- start page title --> */}
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                  <h4 className="mb-sm-0 font-size-18">
                    Welcome to AIMS Dashboard
                  </h4>
                </div>
              </div>
            </div>
            {/* <!-- end page title --> */}

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-5">Activity</h4>
                    <ul className="verti-timeline list-unstyled">
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              15 May{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “Volunteer Activities</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              15 May{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>
                              Everyone realizes why a new common language would
                              be desirable...{" "}
                              <a href="javascript: void(0);">Read more</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list active">
                        <div className="event-timeline-dot">
                          <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              15 May{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Joined the group “Boardsmanship Forum”</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              12 May{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “In-Kind Opportunity”</div>
                          </div>
                        </div>
                      </li>
                      <li className="event-list">
                        <div className="event-timeline-dot">
                          <i className="bx bx-right-arrow-circle font-size-18"></i>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <h5 className="font-size-14">
                              12 Nov{" "}
                              <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                            </h5>
                          </div>
                          <div className="flex-grow-1">
                            <div>Responded to need “In-Kind Opportunity”</div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <a
                        href="javascript: void(0);"
                        className="btn btn-primary waves-effect waves-light btn-sm"
                      >
                        View More <i className="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              Active Customers
                            </p>
                            <h4 className="mb-0">1,235</h4>
                          </div>

                          <div className="flex-shrink-0 align-self-center">
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                              <span className="avatar-title">
                                <i className="bx bx-copy-alt font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              Accounts Receivable
                            </p>
                            <h4 className="mb-0">$35, 723</h4>
                          </div>

                          <div className="flex-shrink-0 align-self-center">
                            <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-archive-in font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex-grow-1">
                            <p className="text-muted fw-medium">
                              Account Payable
                            </p>
                            <h4 className="mb-0">$160000.2</h4>
                          </div>

                          <div className="flex-shrink-0 align-self-center">
                            <div className="avatar-sm rounded-circle bg-primary mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-purchase-tag-alt font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- end row --> */}
                <div className="card">
                  <div className="card-body">
                    <div
                      id="line_chart_datalabel"
                      data-colors='["--bs-primary", "--bs-danger", "--bs-success"]'
                      className="apex-charts"
                      dir="ltr"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Latest Transaction</h4>
                    <div className="table-responsive">
                      <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                          <tr>
                            <th style={{ width: "20px" }}>
                              <div className="form-check font-size-16 align-middle">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck01"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck01"
                                ></label>
                              </div>
                            </th>
                            <th className="align-middle">Order ID</th>
                            <th className="align-middle">Billing Name</th>
                            <th className="align-middle">Date</th>
                            <th className="align-middle">Total</th>
                            <th className="align-middle">Payment Status</th>
                            <th className="align-middle">Payment Method</th>
                            <th className="align-middle">View Details</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck02"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck02"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2540
                              </a>{" "}
                            </td>
                            <td>Neal Matthews</td>
                            <td>07 Oct, 2019</td>
                            <td>$400</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-11">
                                Paid
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-mastercard me-1"></i>{" "}
                              Mastercard
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck03"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck03"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2541
                              </a>{" "}
                            </td>
                            <td>Jamal Burnett</td>
                            <td>07 Oct, 2019</td>
                            <td>$380</td>
                            <td>
                              <span className="badge badge-pill badge-soft-danger font-size-11">
                                Chargeback
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-visa me-1"></i> Visa
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck04"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck04"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2542
                              </a>{" "}
                            </td>
                            <td>Juan Mitchell</td>
                            <td>06 Oct, 2019</td>
                            <td>$384</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-11">
                                Paid
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-paypal me-1"></i> Paypal
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck05"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck05"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2543
                              </a>{" "}
                            </td>
                            <td>Barry Dick</td>
                            <td>05 Oct, 2019</td>
                            <td>$412</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-11">
                                Paid
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-mastercard me-1"></i>{" "}
                              Mastercard
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck06"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck06"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2544
                              </a>{" "}
                            </td>
                            <td>Ronald Taylor</td>
                            <td>04 Oct, 2019</td>
                            <td>$404</td>
                            <td>
                              <span className="badge badge-pill badge-soft-warning font-size-11">
                                Refund
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-visa me-1"></i> Visa
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check font-size-16">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="transactionCheck07"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="transactionCheck07"
                                ></label>
                              </div>
                            </td>
                            <td>
                              <a
                                href="javascript: void(0);"
                                className="text-body fw-bold"
                              >
                                #SK2545
                              </a>{" "}
                            </td>
                            <td>Jacob Hunter</td>
                            <td>04 Oct, 2019</td>
                            <td>$392</td>
                            <td>
                              <span className="badge badge-pill badge-soft-success font-size-11">
                                Paid
                              </span>
                            </td>
                            <td>
                              <i className="fab fa-cc-paypal me-1"></i> Paypal
                            </td>
                            <td>
                              {/* <!-- Button trigger modal --> */}
                              <button
                                type="button"
                                className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                              >
                                View Details
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <!-- end table-responsive --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- container-fluid --> */}
        </div>
        {/* <!-- End Page-content --> */}

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <script>document.write(new Date().getFullYear())</script> ©
                AIMS.
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* <!-- end main content--> */}
    </div>
  );
};

export default Dashboard;
