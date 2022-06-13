import Barchart from "./Barchart/barchart";
import Scatter from "./Scatterchart/scatter";
import Navbar from "./NAVBAR/navbar";


const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="chartContainer">
        <div className="chart-shadow">
          <span className="chart-title">Barras <i className="info fas fa-info-circle"></i></span> 
          <Barchart />
        </div>
        <div className="chart-shadow">
        <span className="chart-title"> Scatter <i className="info fas fa-info-circle"></i></span>
        <Scatter />
        </div>
      </div>
    
    
    </>
  );
}

export default Dashboard;
