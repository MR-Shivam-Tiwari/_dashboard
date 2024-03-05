import React, { useState } from "react";
import { useLocation } from "react-router";
import { Avatar, Box, Chip, List } from "@mui/material";
import "./Dropdown.css";
const SidebarItems = () => {
  const [isOpenUpper, setIsOpenUpper] = useState(false);
  const [isOpenLower1, setIsOpenLower1] = useState(false);
  const [isOpenLower2, setIsOpenLower2] = useState(false);

  const toggleDropdownUpper = () => {
    setIsOpenUpper(!isOpenUpper);
    setIsOpenLower1(false);
    setIsOpenLower2(false);
  };

  const toggleDropdownLower1 = () => {
    setIsOpenLower1(!isOpenLower1);
    setIsOpenUpper(false);
    setIsOpenLower2(false);
  };

  const toggleDropdownLower2 = () => {
    setIsOpenLower2(!isOpenLower2);
    setIsOpenUpper(false);
    setIsOpenLower1(false);
  };

  const lowerButtonStyle = {
    marginTop: isOpenUpper ? "14rem" : "0", // Adjust the margin to create space for the expanded dropdown
    transition: "margin 0.5s ease", // Add a smooth transition effect
  };

  return (
    <Box sx={{ p: 1 }}>
      <List sx={{}} className="sidebarNav mt-5 ">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="flex items-center " style={{ gap: "10px" }}>
            <img
              src="https://img.freepik.com/free-vector/gradient-drone-logo-template_23-2148815107.jpg?t=st=1709612681~exp=1709616281~hmac=e28e9d33354dcba53ef5a8eb590f94c6cd3c506e652959416e1bdfadfe66b84c&w=740"
              alt=""
              style={{ width: "35px", height: "35px", borderRadius: "7px" }}
            />
            <div style={{ lineHeight: "16px" }}>
              <p className="" style={{ color: "gray", fontSize: "12px" }}>
                {" "}
                INC
              </p>
              <h4 className="">InnovateHub</h4>
            </div>
          </div>{" "}
          <Avatar
            src="https://cdn.dribbble.com/users/654620/avatars/small/733439397940c7f37b994579b00249d9.png?1650643147"
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div
          className="  border   "
          style={{ borderRadius: "15px 15px 15px 10px" }}
        >
          <div className="  p-2       ">
            <div className="h-full   bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-1 font-medium ">
                <li>
                  <div
                    href="#"
                    className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="">
                      <i class="bi bi-vector-pen"></i>
                      <span className="ml-2 text-sm">Design Team</span>
                    </div>
                    <Chip
                      label="⌘ +1"
                      style={{
                        width: "45px",
                        fontSize: "10px",
                        height: "20px",
                        borderRadius: "5px",
                      }}
                      size="small"
                    />
                  </div>
                </li>
                <li>
                  <div
                    href="#"
                    className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/2907/2907972.png"
                        alt=""
                        style={{ width: "17px" }}
                      />
                      <span className="text-sm">Marketing Team</span>
                    </div>
                    <Chip
                      label="⌘ +2"
                      style={{
                        width: "45px",
                        fontSize: "10px",
                        height: "20px",
                        borderRadius: "5px",
                      }}
                      size="small"
                    />
                  </div>
                </li>
                <li>
                  <div
                    href="#"
                    className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className=" flex items-center">
                      <i class="bi bi-code"></i>
                      <span className="ml-2 text-sm">Development Team</span>
                    </div>
                    <Chip
                      label="⌘ +3"
                      style={{
                        width: "45px",
                        fontSize: "10px",
                        height: "20px",
                        borderRadius: "5px",
                      }}
                      size="small"
                    />
                  </div>
                </li>
                <hr className=""></hr>
                <li>
                  <div
                    href="#"
                    className="flex items-center justify-between px-2 p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <div className=" flex items-center">
                      <i
                        class="bi bi-plus-square"
                        style={{ color: "#66676c" }}
                      ></i>
                      <span
                        className="ml-2 text-sm"
                        style={{ color: "#66676c" }}
                      >
                        Create a Team
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div
            className="text-xs flex justify-between mt-3 px-2"
            style={{ color: "#66676c" }}
          >
            {" "}
            FOLDERS <i class="bi bi-plus-lg"></i>
          </div>
          <div className="flex flex-col items-start">
            <div className="relative inline-block text-left w-full mt-2">
              <button
                onClick={toggleDropdownUpper}
                className={`flex justify-between w-full rounded-lg p-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 ${
                  isOpenUpper ? "bg-gray-200" : "bg-white"
                }`}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div>
                  <i class="bi bi-folder"></i> Products
                </div>
                {isOpenUpper ? (
                  <i class="bi bi-caret-up-fill"></i>
                ) : (
                  <i class="bi bi-caret-down-fill"></i>
                )}
              </button>

              {isOpenUpper && (
                <div
                  className="custom-dropdown px-5 py-2 "
                  style={{ lineHeight: "18px" }}
                >
                  <div href="#" className="option">
                    Roadmap
                  </div>
                  <div href="#" className="option">
                    Feedback
                  </div>
                  <div href="#" className="option">
                    Performance
                  </div>
                  <div href="#" className="option">
                    Team
                  </div>
                  <div href="#" className="option">
                    Analytics
                  </div>
                  <div href="#" className="option" style={{ color: "#66676c" }}>
                    <i
                      class="bi bi-plus-square"
                      style={{ color: "#66676c" }}
                    ></i>{" "}
                    Add new sub
                  </div>
                </div>
              )}
            </div>
            <div className="text-left w-full mt-2" style={lowerButtonStyle}>
              <button
                onClick={toggleDropdownLower1}
                className={`flex justify-between w-full rounded-lg p-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 ${
                  isOpenLower1 ? "bg-gray-200" : "bg-white"
                }`}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div>
                  <i class="bi bi-folder"></i> Sales
                </div>
                {isOpenLower1 ? (
                  <i class="bi bi-caret-up-fill"></i>
                ) : (
                  <i class="bi bi-caret-down-fill"></i>
                )}
              </button>
            </div>
            <div className="text-left w-full mt-2">
              <button
                onClick={toggleDropdownLower2}
                className={`flex justify-between w-full rounded-lg p-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 ${
                  isOpenLower2 ? "bg-gray-200" : "bg-white"
                }`}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div>
                  <i class="bi bi-folder"></i> Design
                </div>
                {isOpenLower2 ? (
                  <i class="bi bi-caret-up-fill"></i>
                ) : (
                  <i class="bi bi-caret-down-fill"></i>
                )}
              </button>
            </div>
            <div className="text-left w-full mt-2">
              <button
                onClick={toggleDropdownLower2}
                className={`flex justify-between w-full rounded-lg p-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 `}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div>
                  <i class="bi bi-folder"></i> Office
                </div>
              </button>
            </div>
            <div className="text-left w-full mt-2">
              <button
                onClick={toggleDropdownLower2}
                className={`flex justify-between w-full rounded-lg p-2 text-sm font-medium text-gray-700 focus:ring-offset-gray-100 `}
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <div>
                  <i class="bi bi-folder"></i> Legal
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0  mt-6 mb-0">
          <div className="flex items-center mb-4 gap-2 text-md px-3">
            <i class="bi bi-person-add"></i>
            Invite Teammates
          </div>
          <div className="flex items-center justify-between mb-4 px-3">
            <div className="flex gap-2 items-center">
              <i class="bi bi-question-circle"></i>
              Help and first steps
            </div>
            <Chip
              label="0/6"
              style={{
                width: "40px",
                fontSize: "10px",
                height: "20px",
                borderRadius: "5px",
              }}
              size="small"
            />
          </div>
          <div className="flex items-center justify-between  bg-gray-100 py-2 px-3 rounded-lg">
            <div className="flex gap-2">
              <i class="bi bi-7-square"></i>
              Days left on trial
            </div>
            <button className="p-2 text-xs rounded-lg" style={{background:"black ", color:"white"}}> Add billing</button>
          </div>
        </div>
      </List>
    </Box>
  );
};
export default SidebarItems;
