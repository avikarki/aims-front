const TestNavbar = () => {
  return (
    <>
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box">
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/favicon.png" alt="" height="26" />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo.png" alt="" height="40" />
                  </span>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 header-item waves-effect"
                id="vertical-menu-btn"
              >
                <i className="bx  bx-border-all menu-icon   btn-primary"></i>
              </button>
              <button
                type="button"
                className="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-bs-toggle="collapse"
                data-bs-target="#topnav-menu-content"
              >
                <i className="fa fa-fw fa-bars"></i>
              </button>

              <div className="topnav">
                <nav className="navbar navbar-light navbar-expand-lg topnav-menu">
                  <div
                    className="collapse navbar-collapse"
                    id="topnav-menu-content"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          id="topnav-dashboard"
                          role="button"
                        >
                          <i className="bx bx-slider me-2"></i>
                          <span key="t-dashboards">User Management</span>
                        </a>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-pages"
                          role="button"
                        >
                          <i className="bx bx-paper-plane me-2"></i>
                          <span key="t-apps">Productivity</span>{" "}
                          <div className="arrow-down"></div>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-pages"
                        >
                          <a href="#" className="dropdown-item" key="t-chat">
                            Task
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            key="t-file-manager"
                          >
                            Event
                          </a>
                          <a
                            href="#"
                            className="dropdown-item"
                            key="t-file-manager"
                          >
                            Calendar
                          </a>
                        </div>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle arrow-none"
                          href="#"
                          id="topnav-components"
                          role="button"
                        >
                          <i className="bx bx-collection me-2"></i>
                          <span key="t-components">Transaction</span>{" "}
                          <div className="arrow-down"></div>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="topnav-components"
                        >
                          <div className="dropdown">
                            <a
                              className="dropdown-item dropdown-toggle arrow-none"
                              href="#"
                              id="topnav-form"
                              role="button"
                            >
                              <span key="t-forms">Forms</span>{" "}
                              <div className="arrow-down"></div>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="topnav-form"
                            >
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-elements"
                              >
                                Form Elements
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-layouts"
                              >
                                Form Elements
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-elements"
                              >
                                Form Elements
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-layouts"
                              >
                                Form Elements
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-elements"
                              >
                                Form Elements
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-form-layouts"
                              >
                                Form Elements
                              </a>
                            </div>
                          </div>
                          <div className="dropdown">
                            <a
                              className="dropdown-item dropdown-toggle arrow-none"
                              href="#"
                              id="topnav-table"
                              role="button"
                            >
                              <span key="t-tables">Tables</span>{" "}
                              <div className="arrow-down"></div>
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="topnav-table"
                            >
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                              <a
                                href="#"
                                className="dropdown-item"
                                key="t-basic-tables"
                              >
                                Basic Tables
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          id="topnav-dashboard"
                          role="button"
                        >
                          <i className="bx bx-home-circle me-2"></i>
                          <span key="t-dashboards">Report</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link waves-effect waves-light"
                          data-bs-toggle="modal"
                          data-bs-target=".bs-example-modal-center"
                        >
                          <i className="bx bx-note me-2"></i>
                          <span key="t-dashboards">Form</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>

            <div className="d-flex">
              <div className="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="mdi mdi-magnify"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown"
                >
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item noti-icon waves-effect"
                  id="page-header-notifications-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-bell bx-tada"></i>
                  <span className="badge bg-danger rounded-pill">3</span>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown"
                >
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0" key="t-notifications">
                          {" "}
                          Notifications{" "}
                        </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small" key="t-view-all">
                          {" "}
                          View All
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight: "230px" }}>
                    <a
                      href="javascript: void(0);"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-primary rounded-circle font-size-16">
                            <i className="bx bx-cart"></i>
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-your-order">
                            Your order is placed
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-simplified">
                              It will seem like simplified English.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <div className="avatar-xs me-3">
                          <span className="avatar-title bg-success rounded-circle font-size-16">
                            <i className="bx bx-badge-check"></i>
                          </span>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1" key="t-shipped">
                            Your item is shipped
                          </h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-grammer">
                              If several languages coalesce the grammar
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-min-ago">3 min ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a
                      href="javascript: void(0);"
                      className="text-reset notification-item"
                    >
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-4.jpg"
                          className="me-3 rounded-circle avatar-xs"
                          alt="user-pic"
                        />
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1" key="t-occidental">
                              As a skeptical Cambridge friend of mine
                              occidental.
                            </p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span key="t-hours-ago">1 hours ago</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top d-grid">
                    <a
                      className="btn btn-sm btn-link font-size-14 text-center"
                      href="javascript:void(0)"
                    >
                      <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                      <span key="t-view-more">View More..</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="dropdown d-inline-block">
                <button
                  type="button"
                  className="btn header-item waves-effect"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="rounded-circle header-profile-user"
                    src="assets/images/users/avatar-2.jpg"
                    alt="Header Avatar"
                  />
                  <span className="d-none d-xl-inline-block ms-1" key="t-henry">
                    Samir
                  </span>
                  <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="profile.html">
                    <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-profile">Profile</span>
                  </a>
                  <a className="dropdown-item d-block" href="#">
                    <span className="badge bg-success float-end">11</span>
                    <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-settings">Settings</span>
                  </a>

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                    <span key="t-logout">Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div
          className="modal fade bs-example-modal-center"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Form Title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="needs-validation" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          placeholder="First name"
                          value="Mark"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustom02"
                          className="form-label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          placeholder="Last name"
                          value="Otto"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustom03"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select"
                          id="validationCustom03"
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom04"
                          placeholder="City"
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="mb-3">
                        <label
                          htmlFor="validationCustom05"
                          className="form-label"
                        >
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom05"
                          placeholder="Zip"
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="example-date-input"
                      className="col-form-label"
                    >
                      Date
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      value="2019-08-19"
                      id="example-date-input"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="validationCustom06"
                        required
                      />
                      <label
                        className="form-check-label"
                        htmlFor="validationCustom06"
                      >
                        Cash
                      </label>
                      <div className="invalid-feedback">Please choose.</div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentType"
                        id="creditRadio"
                        required
                      />
                      <label className="form-check-label" htmlFor="creditRadio">
                        Credit
                      </label>
                      <div className="invalid-feedback">Please choose.</div>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck">
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical-menu">
          <div data-simplebar className="h-100">
            <div id="sidebar-menu">
              <ul className="metismenu list-unstyled" id="side-menu">
                <li>
                  <a href="javascript: void(0);" className="waves-effect">
                    <i className="bx bx-home-circle"></i>
                    <span key="t-dashboards">Dashboards</span>
                  </a>
                </li>

                <li>
                  <a href="javascript: void(0);" className="waves-effect">
                    <i className="bx bx-calendar"></i>
                    <span key="t-dashboards">Calendars</span>
                  </a>
                </li>

                <li>
                  <a href="javascript: void(0);" className="waves-effect">
                    <i className="bx bx-chat"></i>
                    <span key="t-chat">Chat</span>
                  </a>
                </li>

                <li>
                  <a href="javascript: void(0);" className="waves-effect">
                    <i className="bx bx-file"></i>
                    <span key="t-file-manager">File Manager</span>
                  </a>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bx-store"></i>
                    <span key="t-ecommerce">Sells</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="javascript: void(0);" key="t-products">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-product-detail">
                        Product Detail
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-orders">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-customers">
                        Customers
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-cart">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-checkout">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-shops">
                        Shops
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-add-product">
                        Add Product
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bx-envelope"></i>
                    <span key="t-email">Email</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="email-inbox.html" key="t-inbox">
                        Inbox
                      </a>
                    </li>
                    <li>
                      <a href="email-read.html" key="t-read-email">
                        Read Email
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);">
                        <span key="t-email-templates">Templates</span>
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li>
                          <a
                            href="email-template-basic.html"
                            key="t-basic-action"
                          >
                            Basic Action
                          </a>
                        </li>
                        <li>
                          <a
                            href="email-template-alert.html"
                            key="t-alert-email"
                          >
                            Alert Email
                          </a>
                        </li>
                        <li>
                          <a
                            href="email-template-billing.html"
                            key="t-bill-email"
                          >
                            Billing Email
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bx-receipt"></i>
                    <span key="t-invoices">Invoices</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="javascript: void(0);" key="t-invoice-list">
                        Invoice List
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-invoice-detail">
                        Invoice Detail
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bx-task"></i>
                    <span key="t-tasks">Tasks</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="javascript: void(0);" key="t-task-list">
                        Task 1
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-kanban-board">
                        Task Details
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-create-task">
                        Create Task
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bxs-bar-chart-alt-2"></i>
                    <span key="t-charts">Charts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li>
                      <a href="javascript: void(0);" key="t-apex-charts">
                        Chart 1
                      </a>
                    </li>
                    <li>
                      <a href="javascript: void(0);" key="t-e-charts">
                        Chart 2
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="javascript: void(0);"
                    className="has-arrow waves-effect"
                  >
                    <i className="bx bx-share-alt"></i>
                    <span key="t-multi-level">Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <a href="javascript: void(0);" key="t-level-1-1">
                        Level 1.1
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript: void(0);"
                        className="has-arrow"
                        key="t-level-1-2"
                      >
                        Level 1.2
                      </a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li>
                          <a href="javascript: void(0);" key="t-level-2-1">
                            Level 2.1
                          </a>
                        </li>
                        <li>
                          <a href="javascript: void(0);" key="t-level-2-2">
                            Level 2.2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">
                      Welcome to AIMS Dashboard
                    </h4>
                  </div>
                </div>
              </div>

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
                                Everyone realizes why a new common language
                                would be desirable...{" "}
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

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Latest Transaction</h4>
                      <div className="table-responsive">
                        <table className="table align-middle table-nowrap mb-0 d-none">
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
                            <tr
                              data-bs-toggle="collapse"
                              data-bs-target="#row1"
                              className="accordion-toggle"
                            >
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
                                <button
                                  type="button"
                                  className="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                                >
                                  View Details
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={8} className="p-0">
                                <div
                                  id="row1"
                                  className="accordion-collapse collapse"
                                >
                                  <div className="p-3 accordion-body accordion-body--alternate">
                                    <strong>Details for Item 1:</strong>
                                    <br />
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book.
                                  </div>
                                </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
      </div>
    </>
  );
};

export default TestNavbar;
