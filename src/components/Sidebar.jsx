import React from 'react'
// import { AiFillHome, MdSplitscreen, CgScreen, TbClipboardCheck, BsPeople, MdOutlineNoteAlt, BsPeopleFill, MdOutlineDirectionsWalk, GoDiffAdded, AiFillSetting } from "react-icons/all";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { MdSplitscreen, MdOutlineDirectionsWalk, MdOutlineNoteAlt } from "react-icons/md";
import { CgScreen } from "react-icons/cg";
import { TbClipboardCheck } from "react-icons/tb";
import { BsPeople, BsPeopleFill } from "react-icons/bs";
import { GoDiffAdded } from "react-icons/go";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div id='sidebar'>
      <AiFillHome size={20} />
      <Link to='/appointments'><MdSplitscreen size={20} color='white' /></Link>
      <CgScreen size={20} />
      <TbClipboardCheck size={20} />
      <BsPeople size={20} />
      <MdOutlineNoteAlt size={20} />
      <BsPeopleFill size={20} />
      <MdOutlineDirectionsWalk size={20} />
      <GoDiffAdded size={20} />
      <AiFillSetting size={20} />
    </div>
  )
}

export default Sidebar