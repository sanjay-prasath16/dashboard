import Barchart from "../components/Barchart";
import Donutchart from "../components/Donutchart";
import Halfdonutchartone from '../components/HalfdonutOne';
import HalfdonutCharttwo from '../components/HalfdonutSecond';
import { TiUserAdd } from "react-icons/ti";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="flex mt-10 ml-10">
        {/* first half donut */}
        <div className="ml-10 p-5 border border-solid rounded-2xl max-w-[350px]">
          <div className="flex justify-between">
            <p className="flex items-center">
              <FaRegCalendarAlt className="mr-2" /> Children Overview
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <Halfdonutchartone height={300} width={300} />
          <hr className="mt-[-6rem] mb-4" />
          <div className="flex">
            <div className="flex flex-col">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#A52A2A" }}></span>
              <span>Registered</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-5">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#FF6347" }}></span>
              <span>Active</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-5">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#FFA07A" }}></span>
              <span>Inactive</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
          </div>
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>
        {/* second half donut */}
        <div className="ml-10 p-5 border border-solid rounded-2xl max-w-[350px]">
          <div className="flex justify-between">
            <p className="flex items-center">
              <FaRegCalendarAlt className="mr-2" /> Caregiver Overview
            </p>
            <p className="border border-solid px-3 py-1 rounded-lg">2024</p>
          </div>
          <HalfdonutCharttwo height={300} width={300} />
          <hr className="mt-[-6rem] mb-4" />
          <div className="flex">
            <div className="flex flex-col">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#3D2374" }}></span>
              <span>Registered</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-5">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#673BC2" }}></span>
              <span>Active</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
            <div className="flex flex-col ml-5">
              <span className="dot inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: "#E2E8F0" }}></span>
              <span>Inactive</span>
              <span>{user.childDetails[0].Registered}</span>
            </div>
          </div>
          <div className="d3-tooltip hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
        </div>
      </div>
      <div className="flex mt-10 ml-10 ">
        {/* donut chart */}
        <div className="ml-10 p-5 border border-solid rounded-2xl max-w-[600px]">
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
        <div className="ml-10 p-5 border border-solid rounded-2xl max-w-[600px]">
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
    </>
  );
};

export default Dashboard;
