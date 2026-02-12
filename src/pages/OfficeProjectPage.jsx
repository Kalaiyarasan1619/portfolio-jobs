import React from "react";
// import officeImage from "../assets/images/employeeMaster.png";
import officeImage from "../assets/images/projectSchedule.jpeg";
import timeLog from "../assets/images/projectTimelog.jpeg";
import clientLocationImage from "../assets/images/clientLocation.png";
import jewellery from "../assets/images/jewellery.png";
import MyWorkingStores from "../components/MyWorkingStores";

const OfficeProjectPage = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32 pb-20">
        <div className="max-w-[90%] mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-gray-400 uppercase tracking-[4px] text-sm mb-3">
              Project Details
            </h2>
            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
              Office Project
            </h1>
          </div>

          {/* BIG WIDE CARD */}
          <div
            className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/90
                        backdrop-blur-2xl rounded-3xl
                        border border-gray-700
                        shadow-[0_0_80px_rgba(59,130,246,0.2)]
                        p-16"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[140px] rounded-3xl pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-2 gap-20 items-center">
              {/* LEFT IMAGE */}
              <div className="flex justify-center">
                <img
                  src={officeImage}
                  alt="Office Project"
                  className="w-full max-w-lg object-contain
                           drop-shadow-[0_0_70px_rgba(59,130,246,0.6)]
                           hover:scale-105 transition duration-500"
                />
              </div>

              {/* RIGHT DETAILS */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Project Schedule Management System
                  </h3>
                  <div className="w-24 h-1 bg-blue-500 rounded"></div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Project Schedule Management System is a web-based
                    application designed to organize and manage employee project
                    activities on a daily basis. This system helps companies
                    plan, assign, and monitor project tasks efficiently by
                    maintaining a structured day-by-day schedule for each
                    employee. It allows administrators or project managers to
                    create projects, assign employees, define daily tasks, set
                    deadlines, and track progress. Employees can view their
                    assigned schedules, update task status, and manage their
                    workload effectively. The main objective of this system is
                    to improve productivity, maintain proper task planning,
                    reduce confusion, and ensure timely project completion
                    through clear scheduling and monitoring.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Usage
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
                    <li>Admin can create and manage projects</li>
                    <li>
                      Assign employees to specific projects and daily tasks
                    </li>
                    <li>Define day-by-day schedules with deadlines</li>
                    <li>
                      Employees can view and update their daily task status
                    </li>
                    <li>
                      Track project progress and monitor completion reports
                    </li>
                    <li>Secure authentication and role-based access control</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-gray-300 text-lg">
                    Vue JS • Elixir • PostgreSQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------------------- */}

      <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32 pb-20">
        <div className="max-w-[90%] mx-auto">
          {/* BIG WIDE CARD */}
          <div
            className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/90
                    backdrop-blur-2xl rounded-3xl
                    border border-gray-700
                    shadow-[0_0_80px_rgba(59,130,246,0.2)]
                    p-16"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-600/10 blur-[140px] rounded-3xl pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-2 gap-20 items-center">
              {/* LEFT SIDE - DETAILS */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Project TimeLog
                  </h3>
                  <div className="w-24 h-1 bg-blue-500 rounded"></div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Project Time Log System is a web-based application developed
                    to record and manage the daily working hours of employees
                    for assigned projects. This system enables employees to log
                    the time spent on each task or project on a day-by-day
                    basis, ensuring accurate tracking of work progress and
                    productivity. Administrators or project managers can monitor
                    logged hours, analyze performance, and generate time-based
                    reports for better project planning and resource management.
                    The system improves transparency, accountability, and
                    efficient time utilization within the organization.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Usage
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
                    <li>Admin can create and manage projects</li>
                    <li>Assign employees to specific projects</li>
                    <li>
                      Employees can log daily working hours for assigned
                      projects
                    </li>
                    <li>Manual time entry with date and task description</li>
                    <li>
                      Track total hours worked per project and per employee
                    </li>
                    <li>
                      Role-based access control with secure JWT authentication
                    </li>
                    <li>
                      Generate time-based reports for monitoring productivity
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-gray-300 text-lg">
                    Vue JS • Elixir • PostgreSQL
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - IMAGE */}
              <div className="flex justify-center">
                <img
                  src={timeLog}
                  alt="Office Project"
                  className="w-full max-w-lg object-contain
                       drop-shadow-[0_0_70px_rgba(59,130,246,0.6)]
                       hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------- */}

      {/* <section className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white pt-32 pb-20">
        <div className="max-w-[90%] mx-auto">

          <div
            className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/90
                        backdrop-blur-2xl rounded-3xl
                        border border-gray-700
                        shadow-[0_0_80px_rgba(59,130,246,0.2)]
                        p-16"
          >
            <div className="absolute inset-0 bg-blue-600/10 blur-[140px] rounded-3xl pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-2 gap-20 items-center">
              <div className="flex justify-center">
                <img
                  src={jewellery}
                  alt="Office Project"
                  className="w-full max-w-lg object-contain
                           drop-shadow-[0_0_70px_rgba(59,130,246,0.6)]
                           hover:scale-105 transition duration-500"
                />
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-3">
                    Jewellery Sales DashBoard
                  </h3>
                  <div className="w-24 h-1 bg-blue-500 rounded"></div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    The Jewellery Billing and Sales Management System is a
                    comprehensive retail solution designed to manage end-to-end
                    jewellery store operations efficiently across multiple
                    branches. The system handles jewellery product data
                    including gold rate, weight, purity, wastage percentage,
                    making charges, and tax calculations to automatically
                    generate accurate selling prices. It supports both
                    estimation mode for customer price preview and final billing
                    mode with invoice generation and print functionality. The
                    application enables secure role-based access for Admin,
                    Store Manager, Salesman, and Marketing Executive. Admin
                    users can manage product inventory, branch details, and
                    daily gold rates, while store managers can monitor
                    branch-wise sales performance, revenue trends, and
                    product-wise analytics using an interactive dashboard
                    filtered by date and branch. Employees can generate customer
                    bills with dynamic price calculation based on real-time gold
                    rates. The system maintains complete billing history,
                    customer details, and sales records for reporting and
                    auditing purposes. It also provides sales dashboards
                    displaying total revenue, daily collections, branch
                    comparison, and top-selling jewellery products to help
                    management make informed business decisions. Additionally,
                    the marketing executive module allows tracking of customer
                    leads, follow-ups, and sales conversions to improve customer
                    engagement and business growth. Overall, the system ensures
                    pricing transparency, operational efficiency, accurate
                    billing, centralized monitoring, and improved sales
                    performance for jewellery retail businesses.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Usage
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
                    <li>
                      Admin can manage jewellery products, gold rates, and
                      branch details
                    </li>
                    <li>
                      Salesman can generate customer bills with dynamic gold
                      price calculation
                    </li>
                    <li>
                      System supports estimation mode for previewing jewellery
                      pricing
                    </li>
                    <li>
                      Store managers can monitor branch-wise sales and revenue
                      analytics
                    </li>
                    <li>Print-ready invoices with GST and tax calculation</li>
                    <li>
                      Date-wise and branch-wise sales reports for business
                      tracking
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-blue-400 mb-2">
                    Tech Stack
                  </h4>
                  <p className="text-gray-300 text-lg">
                    React.js • Spring Boot • PostgreSQL • JWT • Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <MyWorkingStores/> */}

      {/* ----------------------------------------------------------------------------------- */}
    </>
  );
};

export default OfficeProjectPage;
