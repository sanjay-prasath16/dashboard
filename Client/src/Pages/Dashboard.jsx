import Barchart from "../components/Barchart";
import Donutchart from "../components/Donutchart";
import Halfdonutchartone from '../components/HalfdonutOne';
import HalfdonutCharttwo from '../components/HalfdonutSecond';
import Financial from "../components/Financial";
import { TiUserAdd } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiBabyCarriageFill } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data: responseData } = await axios.get('/logout');

      if(responseData.err) {
        toast.error(responseData.err);
      } else {
        toast.success('Logged out successfully!');
        navigate('/');
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-0 right-0 mt-5 mr-10 sm:mr-10">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="res:flex mt-20 res:ml-10 ml-[-20px]">
        {/* first half donut */}
        <div className="ml-10 p-5 border border-solid rounded-2xl min-w-[350px] max-w-[300px] shadow-md">
          <div className="flex justify-between">
            <p className="flex items-center">
              <PiBabyCarriageFill className="mr-2" /> Children Overview
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <Halfdonutchartone height={300} width={300} />
          <hr className="mt-[-6rem] mb-4" />
          <div className="flex">
            <div className="flex flex-col ml-3">
              <span className="dot inline-block w-3 h-3 rounded-full ml-8" style={{ backgroundColor: "#A52A2A" }}></span>
              <span>Registered</span>
              <span className="ml-7 font-bold text-lg">{user.childDetails.Registered}</span>
            </div>
            <div className="flex flex-col ml-10">
              <span className="dot inline-block w-3 h-3 rounded-full ml-4 mr-2" style={{ backgroundColor: "#FF6347" }}></span>
              <span>Active</span>
              <span className="ml-2 font-bold text-lg">{user.childDetails[0].Active}</span>
            </div>
            <div className="flex flex-col ml-10">
              <span className="dot inline-block w-3 h-3 rounded-full ml-5" style={{ backgroundColor: "#FFA07A" }}></span>
              <span>Inactive</span>
              <span className="ml-4 font-bold text-lg">{user.childDetails[0].Inactive}</span>
            </div>
          </div>
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>

        {/* second half donut */}
        <div className="ml-10 p-5 border border-solid rounded-2xl min-w-[300px] max-w-[350px] shadow-md mt-10 res:mt-0">
          <div className="flex justify-between">
            <p className="flex items-center">
              <HiMiniUserGroup className="mr-2" /> Caregiver Overview
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <HalfdonutCharttwo height={300} width={300} />
          <hr className="mt-[-6rem] mb-4" />
          <div className="flex">
            <div className="flex flex-col ml-3">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2 ml-8" style={{ backgroundColor: "#3D2374" }}></span>
              <span>Registered</span>
              <span className="ml-7">{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-10">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2 ml-4" style={{ backgroundColor: "#673BC2" }}></span>
              <span>Active</span>
              <span className="ml-2">{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-10">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2 ml-5" style={{ backgroundColor: "#E2E8F0" }}></span>
              <span>Inactive</span>
              <span className="ml-4">{user.childDetails[0].Registered}</span>
            </div>
          </div>
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>

        {/* Financial status */}
        <div className="sm:ml-10 mt-10 res:mt-0">
          <Financial />
        </div>
      </div>

      <div className="res:flex mt-10 res:ml-10 ml-[-20px] mb-10">
        {/* donut chart */}
        <div className="ml-10 p-5 border border-solid rounded-2xl min-w-[400px] max-w-[450px] shadow-md">
          <div className="flex justify-between">
            <p className="flex items-center">
              <FaRegCalendarAlt className="mr-2" /> Attendance
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <Donutchart height={300} width={400} /> {/* Use the component here */}
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>

        {/* bar chart */}
        <div className="ml-10 mt-10 res:mt-0 p-5 border border-solid rounded-2xl min-w-[600px] max-w-[650px] shadow-md">
          <div className="flex justify-between">
            <p className="flex items-center">
              <TiUserAdd className="mr-2" /> Enrollment Record
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <Barchart height={400} width={600} />
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;