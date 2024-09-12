import Barchart from "../components/Barchart"


const Dashboard = () => {

  return (
    <>
      <Barchart height={400} />
      <div className="hidden absolute p-2 bg-white border border-black rounded-md text-sm"></div>
    </>
  )
}

export default Dashboard