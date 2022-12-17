import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { validateOtp } from "./form-utils.js";
import routes from "../../config/routes-config.js";

const verifyTotp = async(route, payload, navigate, setErrors) => {
    try {
        const res = await axios.post(route, payload);
        if (res.status === 200) {
            const status = await res.data
            if (status == true) {
                navigate("/employees");
            } else {
                setErrors({ totp: "Invalid otp. Please enter a valid otp" })
            }
        }
    } catch (err) {
        console.error(err);
    }
}

const OtpModal = ({ employeeId, showOtpModal, setShowOtpModal }) => {
    if (!showOtpModal) {
        return null;
    }

    const navigate = useNavigate()

    const [otpDetails, setOtpDetails] = useState({
        apiKey: "OsTvYEu0iKqC2TVQ",
        employeeID: employeeId,
        totp: ""
    });

    const [errors, setErrors] = useState({
        totp: ""
    });

    const handleChangeOtpDetails = (event) => {
        setOtpDetails((previousState) => {
            return { ...previousState, [event.target.name]: event.target.value }
        });
    }

    const handleSubmitOtpDetails = (event) => {
        event.preventDefault();

        const formErrors = validateOtp(otpDetails);
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            const route = "http://localhost:8080" + routes.employee.verifyOtp
            verifyTotp(route, otpDetails, navigate, setErrors);
        }
    }

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between gap-x-8 p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Enter Employee Details</h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => setShowOtpModal(false)}
                                data-modal-toggle="defaultModal"
                            >
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex flex-col flex-auto">
                            <form
                                id="empForm"
                                className="flex flex-col gap-y-8"
                                onSubmit={handleSubmitOtpDetails}
                                noValidate
                            >
                                <div className="flex flex-col gap-y-2">
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        maxLength={6}
                                        className="rounded-md bg-[#D9D9D9]"
                                        name="totp"
                                        value={otpDetails.totp}
                                        onChange={handleChangeOtpDetails}
                                    />
                                    {errors.totp !== "" ? <p className="text-red-700 indent-1">{errors.totp}</p> : null}
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-white bg-red-500 hover:bg-red-700 background-transparent font-bold uppercase text-sm px-6 py-2 rounded shadow outline-none hover:shadow-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowOtpModal(false)}
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                form="empForm"
                                className="text-white bg-[#333533] hover:bg-[#303130] font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                                Enter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default OtpModal;