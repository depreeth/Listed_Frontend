import React, { useState,useEffect } from "react";
import dashboard from "../assets/dashboard_icon.png";
import transaction from "../assets/transaction_icon.png";
import setting from "../assets/setting_icon.png";
import schedule from "../assets/schedule_icon.png";
import user from "../assets/user_icon.png";
import search from "../assets/Search icon.png";
import notification from "../assets/notify.png";
import profile from "../assets/Mask Group.png";
import cam1 from "../assets/cam1.png";
import cam2 from "../assets/cam2.png";
import cam3 from "../assets/cam3.png";
import cam4 from "../assets/cam4.png";
import plus from "../assets/plus (Stroke).png";
import whatsapp from "../assets/WButton.png"
import insta from "../assets/instabutton.png"
import email from "../assets/mailbutton.png"
import youtube from "../assets/ubutton.png"


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import ProfileForm from "../components/ProfileForm";
import BasicForm from "../components/BasicForm";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const [basicinfo, setBasicInfo] = useState(null);
  const [contactinfo, setContactInfo] = useState({});
  const [currencydata,setCurrdata]=useState({})
  console.log("basic:", basicinfo);
  console.log("contact:", contactinfo);

  const options = {
    categoryPercentage: 0.8,
    barPercentage: 0.5,
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
    },
  };
  useEffect(() => {
    const host = 'api.frankfurter.app';
  fetch(`https://${host}/2020-01-01..2020-01-31`)
  .then(resp => resp.json())
  .then((data) => {
    // console.log(data)
    setCurrdata(data)
  });
  }, []);
  

  console.log(currencydata.rates)
  

  const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const data = {
    labels,
    datasets: [
      {
        label: "User",
        data: [500, 350, 200, 400],
        backgroundColor: "rgba(152, 216, 158, 1)",
        barThickness: 30,
        borderRadius: 5,
        categoryPercentage: 0.8,
        barPercentage: 0.5,
      },
      {
        label: "Guest",
        data: [400, 450, 280, 350],
        backgroundColor: "rgba(238, 132, 132, 1)",
        barThickness: 30,
        borderRadius: 5,
        categoryPercentage: 0.8,
        barPercentage: 0.5,
      },
    ],
  };
  const options1 = {
    cutout: "80%",
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data1 = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        label: "# of Votes",
        data: [55, 31, 14],
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(246, 220, 125, 1)",
          "rgba(238, 132, 132, 1)",
        ],
        barThickness: 10,
        borderWidth: 0,
        // borderRadius:20,
      },
    ],
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    
  };
  

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
        <div className="col-span-6 py-6 px-8">
          <div className=" w-full h-full flex flex-col py-3">
            <div className=" w-full  flex justify-between">
              <div className=" text-3xl font-semibold">Dashboard</div>
              <div className="  flex items-center">
                <div className=" w-full flex items-center bg-white mx-2  px-3 py-2 border rounded-2xl">
                  <input
                    className=" w-full bg-white focus:outline-none"
                    type="text"
                    placeholder="search"
                  />
                  <div>
                    <img src={search} alt="" />
                  </div>
                </div>
                <div className=" w-10 h-10 flex items-center mx-2">
                  <img src={notification} alt="" />
                </div>
                <div className=" w-10 h-10 flex items-center rounded-full">
                  <img src={profile} alt="" />
                </div>
              </div>
            </div>
            <div className=" w-full grid grid-cols-4 gap-4 my-4">
              <div className=" bg-white rounded-2xl border shadow-md w-full h-full px-7 py-2 flex flex-col">
                <div className=" w-10 h-10 bg-[#7FCD93] rounded-full my-1 flex items-center justify-center">
                  <img src={cam1} alt="" />
                </div>
                <div className=" text-sm">Total Revenues</div>
                <div className=" flex justify-between">
                  <div className=" font-semibold text-xl">$2,129,430</div>
                  <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">
                    +2.5%
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-2xl border shadow-md w-full h-full px-7 py-2 flex flex-col">
                <div className=" w-10 h-10 bg-[#DEBF86] rounded-full my-1 flex items-center justify-center">
                  <img src={cam2} alt="" />
                </div>
                <div className=" text-sm">Total Transactions</div>
                <div className=" flex justify-between">
                  <div className=" font-semibold text-xl">1,520</div>
                  <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">
                    +1.7%
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-2xl border shadow-md w-full h-full px-7 py-2 flex flex-col">
                <div className=" w-10 h-10 bg-[#ECA4A4] rounded-full my-1 flex items-center justify-center">
                  <img src={cam3} alt="" />
                </div>
                <div className=" text-sm">Total Likes</div>
                <div className=" flex justify-between">
                  <div className=" font-semibold text-xl">9,721</div>
                  <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">
                    +1.4%
                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-2xl border shadow-md w-full h-full px-7 py-2 flex flex-col">
                <div className=" w-10 h-10 bg-[#AAB0E5] rounded-full my-1 flex items-center justify-center">
                  <img src={cam4} alt="" />
                </div>
                <div className=" text-sm">Total Users</div>
                <div className=" flex justify-between">
                  <div className=" font-semibold text-xl">9,721</div>
                  <div className=" px-2 py-1 text-center rounded-2xl bg-[#E9F9EB] text-sm text-[#4AD15F]">
                    +4.2%
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full full my-2 flex flex-col px-12 border shadow-md rounded-2xl py-4 bg-white">
              <div className=" text-2xl font-semibold my-1">Activities</div>
              <div className=" w-full flex items-center justify-between">
                <div className=" text-sm">May-June 2021</div>
                <div className=" flex my-2">
                  <div className=" flex items-center mx-4">
                    <div className=" w-3 h-3 mx-2 rounded-full bg-red-500"></div>
                    <div className=" text-sm">Guest</div>
                  </div>
                  <div className=" flex items-center mx-4">
                    <div className=" w-3 h-3 mx-2 rounded-full bg-green-500"></div>
                    <div className=" text-sm">User</div>
                  </div>
                </div>
              </div>
              <div className=" mb-2 ">
                <Bar
                  style={{ width: "100%", height: "28vh" }}
                  options={options}
                  data={data}
                />
              </div>
            </div>

            <div className=" w-full grid grid-cols-2 mt-3 gap-5">
              <div className=" w-full h-full border shadow-md rounded-2xl bg-white flex flex-col  py-2">
                <div className="px-12 w-full flex items-center justify-between">
                  <div className=" text-2xl font-semibold">Top products</div>
                  <div className=" text-gray-500 text-sm">May-June 2021</div>
                </div>
                <div className=" w-full grid grid-cols-2">
                  <div className=" w-full">
                    <Doughnut data={data1} options={options1} />
                  </div>
                  <div className=" w-full flex flex-col justify-center items-center">
                    <div className=" flex flex-col justify-center  my-2">
                      <div className=" flex items-center ">
                        <div className=" w-3 h-3  rounded-full bg-[#98D89E]"></div>
                        <div className=" text-sm mx-2">Basic Tees</div>
                      </div>
                      <div className=" mx-5 my-1 text-xs text-gray-500">
                        55%
                      </div>
                      <div className=" flex items-center ">
                        <div className=" w-3 h-3  rounded-full bg-[#F6DC7D]"></div>
                        <div className=" text-sm mx-2">Custom Short Pants</div>
                      </div>
                      <div className=" mx-5 my-1 text-xs text-gray-500">
                        31%
                      </div>
                      <div className=" flex items-center ">
                        <div className=" w-3 h-3  rounded-full bg-[#EE8484]"></div>
                        <div className=" text-sm mx-2">Super Hoodies</div>
                      </div>
                      <div className=" mx-5 my-1 text-xs text-gray-500">
                        14%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full border shadow-md rounded-2xl bg-white">
                {!basicinfo && (
                  <div className=" w-full h-full flex flex-col justify-center items-center">
                    <div
                      onClick={openForm}
                      className=" w-16 h-16 rounded-full flex justify-center bg-[#F2F2F2] items-center"
                    >
                      <img src={plus} alt="" />
                    </div>
                    <div className=" text-gray-500">Add Profile</div>
                  </div>
                )}
                {basicinfo && (
                  <div className=" w-full h-full flex flex-col justify-between px-10 py-8">
                    <div className=" text-2xl font-semibold">{basicinfo.name}</div>
                    <div className=" w-full h-[60%] grid grid-cols-2 items-center justify-center">
                      <div className="flex"><div><img src={whatsapp} alt=""/></div><div className=" mx-1">+91 {basicinfo.phone}</div></div>
                      <div className="flex"><div><img src={insta} alt=""/></div><div className=" mx-1">{contactinfo.insta}</div></div>
                   
                      <div className="flex"><div><img src={email} alt=""/></div><div className=" mx-1">{basicinfo.email}</div></div>
                   
                      <div className="flex"><div><img src={youtube} alt=""/></div><div className=" mx-1">{contactinfo.youtube}</div></div>
                   
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ProfileForm
          isOpen={isFormOpen}
          setBasicInfo={setBasicInfo}
          setContactInfo={setContactInfo}
          onRequestClose={closeForm}
        />
      </div>
    </div>
  );
};

export default Home;
