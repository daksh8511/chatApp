import React from "react";
import assets from "../../../public/assets/assets";
import styled from "styled-components";

const ChatBox = () => {
  return (
    <div className="h-[80vh] relative bg-[#f1f5ff]">
      <div className="px-2.5 py-3.5 flex items-center justify-between gap-2.5 border-b border-[#c6c6c6]">
        <div className="flex items-center gap-3">
          <img className="w-8 rounded-full" src={assets.profile_img} alt="" />
          <p className="flex items-center font-medium text-xl text-[#393939] gap-1">
            Username <img src={assets.green_dot} className="w-3.5" alt="" />
          </p>
        </div>

        <img src={assets.help_icon} className="h-5 cursor-pointer" alt="" />
      </div>

      <ChatMsg>
        <div className="s-msg">
          <p className="msg">
            Hello Govind!
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">
            lorem ipsum is placeholder text commonly used in...
          </p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="s-msg">
          <img src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className="r-msg">
          <img src={assets.pic2} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 PM</p>
          </div>
        </div>

      </ChatMsg>

      <div className="chat-input w-full flex items-center gap-3 px-2.5 py-3.5 bg-white absolute bottom-0 left-0">
        <input
          type="text"
          placeholder="Send Message"
          className="border-0 outline-0 w-full"
        />
        <input type="file" id="image" accept="image/png, image/jpeg" hidden />
        <label className="flex" htmlFor="image">
          <img src={assets.gallery_icon} className="w-[22px]" alt="" />
        </label>
        <img src={assets.send_button} className="w-7" alt="" />
      </div>
    </div>
  );
};

export default ChatBox;

const ChatMsg = styled.div`
  height: calc(100% - 120px);
  padding-bottom: 15px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  scrollbar-width: none;
  

  .s-msg div img,
  .r-msg div img {
    width: 27px;
    aspect-ration: 1/1;
    border-radius: 50%;
    margin-bottom : 10px;
  }

  .s-msg,
  .r-msg {
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 5px;
    padding: 0px 15px;
  }

  .r-msg {
    flex-direction: row-reverse;
    justify-content: start;
  }

  .msg {
    max-width: 230px;
    font-size : 11px;
    padding : 8px;
    border-radius : 8px 8px 0 8px;
    background : #077eff;
    color : white;
    margin-bottom :8px;
  }

  .r-msg .msg{
  border-radius :8px 8px 8px 0px;
  }

  .s-msg div, .r-msg div{
  text-align : center;
  font-size : 9px;
  font-weight : bold;
  }

  .s-msg img, .r-msg img{
  width : 200px;
  margin-bottom : 10px;  
  }
`;
