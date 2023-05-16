import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.img_banner}></div>
      <div className={s.descriptionBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
