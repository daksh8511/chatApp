import React, { useEffect, useState } from "react";
import assets from "../../../public/assets/assets";
import styled from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../Config/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {

  const navigate = useNavigate()

  const [image, setImage] = useState(false)
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')
  const [uid, setUid] = useState('')
  const [prevImage, setPrevImage] = useState('')

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        setUid(user.uid)
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.data().name){
          setName(docSnap.data().name)
        }

        if(docSnap.data().bio){
          setBio(docSnap.data().bio)
        }

        if(docSnap.data().avatar){
          setPrevImage(docSnap.data().avatar)
        }
      }else{
        navigate('/')
      }
    })
  },[])

  return (
    <Wrapper>
      <div className="profile-container bg-white flex items-center justify-between min-w-[700px] rounded-2xl">
        <form className="flex flex-col gap-5 p-10">
        <h3>Profile Details</h3>
          <label htmlFor="avatar" className="flex items-center gap-2.5 text-gray-500 cursor-pointer">
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="avatar" accept=".png, .jpg, .jpeg" hidden />
            <img className="w-12 aspect-square rounded-full" src={image ? URL.createObjectURL(image) :assets.avatar_icon} alt="" />
            <h3 className="font-medium ">upload profile image</h3>
          </label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="p-2.5 min-w-[300px] border border-[#c9c9c9] outline-0" type="text" placeholder="Your Name" required />
          <textarea value={bio} onChange={(e)=>setBio(e.target.value)} className="p-2.5 min-w-[300px] border border-[#c9c9c9] outline-0" placeholder="write profile bio" required></textarea>
          <button className="border-0 text-white bg-[#077eff] p-2 cursor-pointer" type="submit">Save</button>
        </form>
        <img className="max-w-[160px] aspect-square m-auto my-5 rounded-full" src={image? URL.createObjectURL(image) :assets.logo_icon} alt="" />
      </div>
    </Wrapper>
  );
};

export default ProfileUpdate;


const Wrapper = styled.section`
  min-height : 100vh;
  background : url(assets/background.png) no-repeat;
  background-size : cover;
  display : flex;
  align-items : center;
  justify-content : center;
`