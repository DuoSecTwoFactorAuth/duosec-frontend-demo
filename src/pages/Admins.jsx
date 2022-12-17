import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import AddEmployeeModal from '../components/AdminPage/AddEmployeeModal';

const Admins = () => {
  const [showAddEmpModal, setShowAddEmpModal] = useState(false);
  const [employeesDetails, setEmployeesDetails] = useState([
    {
      employeeId: "",
      name: "",
      emailId: "",
      phoneNumber: ""
    }
  ]);

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-row px-16 place-items-center fixed top-0 w-screen h-28 bg-[#474554] text-white">
          Admin Home Page
        </div>

        <button
          className="bg-[#D9D9D9] shadow hover:shadow-lg outline-none focus:outline-none mr-16 mb-6 ease-linear transition-all duration-150 rounded-full"
          type="button"
          onClick={() => setShowAddEmpModal(true)}
        >
          Add Employee
        </button>


      </div>
      <AddEmployeeModal
        setEmployeesDetails={setEmployeesDetails}
        showAddEmpModal={showAddEmpModal}
        setShowAddEmpModal={setShowAddEmpModal}
        toast={toast}
      />
      <ToastContainer />
    </>
  );
};

export default Admins;