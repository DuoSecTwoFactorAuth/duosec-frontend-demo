import React from "react";

const Contact = () => {
  return (
    <div className="mb-28 flex flex-col items-center pt-1 pb-1">
      <h1 className="text-3xl font-semibold mb-10">Contact Us</h1>
      <div className="box-border w-1/3 py-14 mb-40 border-2 rounded-md bg-[#F4EEFF] border-[#5C5CC0]">
        <div className="grid overflow-hidden grid-cols-2 text-lg">
          <div className="box text-right font-medium w-2/3">
            <ul>
              <li className="pb-1">Contact: </li>
              <li className="pb-1">Email: </li>
              <li className="pb-1">Address: </li>
            </ul>
          </div>
          <div className="box text-left -ml-10">
            <ul>
              <li className="pb-1">+91-20-24283001</li>
              <li className="pb-1">enquiry@vit.edu</li>
              <li className="pb-1">VIT, Upper Indira Nagar </li>
              <li className="pb-1">Bibwewadi, Pune.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;