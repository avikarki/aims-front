const DashboardSidebar = () => {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        {/* <!--- Sidemenu --> */}
        <div id="sidebar-menu">
          {/* <!-- Left Menu Start --> */}
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
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
                      <a href="email-template-basic.html" key="t-basic-action">
                        Basic Action
                      </a>
                    </li>
                    <li>
                      <a href="email-template-alert.html" key="t-alert-email">
                        Alert Email
                      </a>
                    </li>
                    <li>
                      <a href="email-template-billing.html" key="t-bill-email">
                        Billing Email
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
              <a href="javascript: void(0);" className="has-arrow waves-effect">
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
        {/* <!-- Sidebar --> */}
      </div>
    </div>
  );
};

export default DashboardSidebar;
