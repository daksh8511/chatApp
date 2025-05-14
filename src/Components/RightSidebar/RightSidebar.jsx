import React from "react";
import assets from "../../../public/assets/assets";
import { logout } from "../../Config/Firebase";

const RightSidebar = () => {
  return (
    <div className="text-white bg-[#001030] relative h-[80vh] overflow-y-scroll no-scrollbar">
      <div className="rs-profile pt-14 text-center max-w-[70%] m-auto">
        <img src={assets.profile_img} className="w-28 aspect-square rounded-full m-auto" alt="" />
        <h3 className="flex items-center justify-center my-3 text-2xl gap-1">
          Username <img src={assets.green_dot} alt="" />
        </h3>
        <p className="text-md mb-2">i am govind!</p>
      </div>
      <hr className="border-[#fff]" />
      <div className="rs-media px-[20px] py-0 text-md mt-3">
        <p className="capitalize">media </p>
        <div className="grid grid-cols-3 gap-2 mt-3">
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button onClick={()=>logout()} className="absolute bottom-2 left-6/12 -translate-x-6/12 bg-[#077eff] text-white border-0 text-sm font-light px-2.5 cursor-pointer rounded-full">Logout</button>
    </div>
  );
};

export default RightSidebar;
