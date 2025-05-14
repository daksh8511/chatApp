import React from 'react'
import styled from 'styled-components'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ChatBox from '../../Components/ChatBox/ChatBox'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'

const Chat = () => {
  return (
    <Wrapper>
      <div className="w-[96%] h-[80vh] max-w-[1200px] bg-[aliceblue] grid grid-cols-3">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>
    </Wrapper>
  )
}

export default Chat

const Wrapper = styled.section`
  min-height : 100vh;
  background : linear-gradient(#596aff, #383699);
  display : grid;
  place-items : center;
`