const DashboardHeader = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
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
                      // className="nav-link dropdown-toggle arrow-none"
                      className="nav-link arrow-none"
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
                      <div className="dropdown">
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
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      // className="nav-link dropdown-toggle arrow-none"
                      className="nav-link arrow-none"
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
                          As a skeptical Cambridge friend of mine occidental.
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
              {/* <!-- item--> */}
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
  );
};

export default DashboardHeader;
