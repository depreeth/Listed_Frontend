import React from "react";
import dashboard from "../assets/dashboard_icon.png";
import transaction from "../assets/transaction_icon.png";
import setting from "../assets/setting_icon.png";
import schedule from "../assets/schedule_icon.png";
import user from "../assets/user_icon.png";
import search from "../assets/Search icon.png"
import notification from "../assets/notify.png"
import profile from "../assets/Mask Group.png"
import cam1 from "../assets/cam1.png"
import cam2 from "../assets/cam2.png"
import cam3 from "../assets/cam3.png"
import cam4 from "../assets/cam4.png"

const Home = () => {
  return (
    <div>
      <div className=" w-full h-screen grid grid-cols-8 bg-[#F8FAFF]">
        <div className="  col-span-2 p-8">
          <div className=" w-full h-full text-white bg-[#4185F4] rounded-3xl px-10 py-12 flex flex-col justify-between">
            <div className=" flex flex-col">
              <div className=" text-white text-3xl font-semibold">Board.</div>
              <div className=" flex flex-col my-8">
                <div className=" flex items-center my-3">
                  <div>
                    <img src={dashboard} alt="" />
                  </div>
                  <div className=" mx-4">Dashboard</div>
                </div>
                <div className=" flex items-center my-3">
                  {" "}
                  <div>
                    <img src={transaction} alt="" />
                  </div>
                  <div className=" mx-4">Transactions</div>
                </div>
                <div className=" flex items-center my-3">
                  {" "}
                  <div>
                    <img src={schedule} alt="" />
                  </div>
                  <div className=" mx-4">Schedules</div>
                </div>
                <div className=" flex items-center my-3">
                  {" "}
                  <div>
                    <img src={user} alt="" />
                  </div>
                  <div className=" mx-4">Users</div>
                </div>
                <div className=" flex items-center my-3">
                  {" "}
                  <div>
                    <img src={setting} alt="" />
                  </div>
                  <div className=" mx-4">Settings</div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col">
              <div className=" my-2">Help</div>
              <div className=" my-2">Contact Us</div>
            </div>
          </div>
        </div>
        <div className="col-span-6 p-8">
            <div className=" w-full h-full flex flex-col py-4">
                <div className=" w-full  flex justify-between">
                    <div className=" text-3xl font-semibold">Dashboard</div>
                    <div className="  flex items-center">
                        <div className=" w-full flex items-center bg-white mx-2  px-3 py-2 border rounded-2xl"><input className=" w-full bg-white focus:outline-none" type="text" placeholder="search"/><div><img src={search} alt=""/></div></div>
                        <div className=" w-10 h-10 flex items-center mx-2"><img src={notification} alt=""/></div>
                    <div className=" w-10 h-10 flex items-center rounded-full"><img src={profile} alt=""/></div>
                    </div>
                    
                </div>
                <div className=" w-full grid grid-cols-4 gap-4 my-6">
                    <div className=" bg-white rounded-2xl border shadow-lg w-full h-full px-7 py-4 flex flex-col">
                        <div className=" w-10 h-10 bg-[#7FCD93] rounded-full my-1 flex items-center justify-center"><img src={cam1} alt=""/></div>
                        <div className=" text-sm">Total Revenues</div>
                        <div className=" flex justify-between">
                            <div className=" font-semibold text-xl">$2,129,430</div>
                            <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">+2.5%</div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl border shadow-lg w-full h-full px-7 py-4 flex flex-col">
                        <div className=" w-10 h-10 bg-[#DEBF86] rounded-full my-1 flex items-center justify-center"><img src={cam2} alt=""/></div>
                        <div className=" text-sm">Total Transactions</div>
                        <div className=" flex justify-between">
                            <div className=" font-semibold text-xl">1,520</div>
                            <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">+1.7%</div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl border shadow-lg w-full h-full px-7 py-4 flex flex-col">
                        <div className=" w-10 h-10 bg-[#ECA4A4] rounded-full my-1 flex items-center justify-center"><img src={cam3} alt=""/></div>
                        <div className=" text-sm">Total Likes</div>
                        <div className=" flex justify-between">
                            <div className=" font-semibold text-xl">9,721</div>
                            <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">+1.4%</div>
                        </div>
                    </div>
                    <div className=" bg-white rounded-2xl border shadow-lg w-full h-full px-7 py-4 flex flex-col">
                        <div className=" w-10 h-10 bg-[#AAB0E5] rounded-full my-1 flex items-center justify-center"><img src={cam4} alt=""/></div>
                        <div className=" text-sm">Total Users</div>
                        <div className=" flex justify-between">
                            <div className=" font-semibold text-xl">9,721</div>
                            <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">+4.2%</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
