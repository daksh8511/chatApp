import React from "react";

import assets from "../../../public/assets/assets";
import styled from "styled-components";

const LeftSidebar = () => {
  return (
    <Wrapper className="bg-[#001030] color:white h-[80vh]">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <img className="max-w-32" src={assets.logo} alt="" />
          <div className="menu relative">
            <img
              className="max-h-5 cursor-pointer"
              src={assets.menu_icon}
              alt=""
            />
            <div className="sub-menu hidden absolute top-[100%] right-0 w-[130px] p-5 bg-white text-black space-y-2 *:cursor-pointer rounded-2xl">
              <p>Edit Profile</p>
              <hr />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="bg-[#002670] flex items-center gap-2.5 px-2.5 py-3 mt-5">
          <img className="w-4" src={assets.search_icon} alt="" />
          <input
            className="w-full text-white bg-transparent border-0 outline-0"
            type="text"
            placeholder="Search Here..."
          />
        </div>
      </div>

      <div className="flex flex-col h-[70%] overflow-y-scroll no-scrollbar">
        {Array(10)
          .fill("")
          .map((item, i) => {
            return (
              <div
                key={i}
                className="friends flex items-center gap-2.5 px-2.5 py-5 cursor-pointer text-sm text-white hover:bg-[#077eff]"
              >
                <img
                  className="w-9 aspect-square rounded-full"
                  src={assets.profile_img}
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="font-bold">Username</p>
                  <span className="text-[#9f9f9f] text-[11px]">
                    Hello, How Are You?
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </Wrapper>
  );
};

export default LeftSidebar;

const Wrapper = styled.section`
  .friends:hover span {
    color: white;
  }

  .menu:hover .sub-menu {
    display: block;
  }
`;
