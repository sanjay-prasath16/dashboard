import { useContext, useEffect, useRef } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";
import { UserContext } from "../../Context/UserContext";

const Donutchart = (props) => {
  const { user } = useContext(UserContext);
  const chartRef = useRef(null);
  const colors = ["#52309A", "#E13247", "#FE7059", "#E2E8F0"];

  useEffect(() => {
    const tooltip = d3.select(".d3-tooltip");
    if (!user || !user.attendanceDetails || !user.attendanceDetails.length) {
      console.log("No attendance details found");
      return;
    }

    const margin = { top: 40, right: 20, bottom: 30, left: 50 };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;
    let radius = Math.min(width, height) / 2;

    const attendanceDetails = user.attendanceDetails[0];

    const attendanceData = [
      {
        label: "Late Attendance",
        count: parseInt(attendanceDetails.lateAttendance) || 0,
      },
      {
        label: "Not Present",
        count: parseInt(attendanceDetails.notPresent) || 0,
      },
      { label: "On Time", count: parseInt(attendanceDetails.onTime) || 0 },
      {
        label: "Took Day Off",
        count: parseInt(attendanceDetails.takeDayOff) || 0,
      },
    ];

    d3.select(chartRef.current).selectAll("*").remove();

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr(
        "transform",
        `translate(${(width + margin.left + margin.right) / 2},${
          (height + margin.top + margin.bottom) / 2
        })`
      );

    let pie = d3.pie().value((d) => d.count);
    let data_ready = pie(attendanceData);

    svg
      .selectAll("path")
      .data(data_ready)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.6)
          .outerRadius(radius)
          .cornerRadius(7)
      )
      .attr("fill", (d) => colors[d.index])
      .attr("stroke", "#fff")
      .attr("stroke-width", "2")
      .style("opacity", ".8")
      .on("mouseover", function (event, d) {
        tooltip
          .html(`${d.data.label}: ${d.data.count}`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 25}px`)
          .style("display", "block");
      })
      .on("mouseout", function () {
        tooltip.style("display", "none");
      });

    const total = attendanceData
      .filter(d => d.label === "On Time" || d.label === "Late Attendance")
      .reduce((sum, d) => sum + d.count, 0);

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-0.5em")
      .attr("class", "donut-label")
      .text(Math.round(total));

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "1em")
      .attr("class", "donut-sub-label")
      .text("/ 2000")
      .style("fill", "#4A5568");
  }, [props.height, props.width, user, colors]);

  return (
    <div className="donut-chart-container">
      <div ref={chartRef} />
      <div className="legend mt-5">
        <ul>
          {user.attendanceDetails && user.attendanceDetails[0] && (
            <div className="flex flex-col items-center">
              <div className="flex">
                <li>
                  <span
                    className="dot inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: "#52309A" }}
                  ></span>{" "}
                  {user.attendanceDetails[0].onTime}{" "}
                  <span className="text-gray-700">On Time</span>
                </li>
                <li>
                  <span
                    className="dot inline-block w-3 h-3 rounded-full mr-2 ml-2"
                    style={{ backgroundColor: "#E13247" }}
                  ></span>{" "}
                  {user.attendanceDetails[0].lateAttendance}{" "}
                  <span className="text-gray-700">Late Attendance</span>
                </li>
              </div>
              <div className="flex">
                <li>
                  <span
                    className="dot inline-block w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: "#FE7059" }}
                  ></span>{" "}
                  {user.attendanceDetails[0].takeDayOff}{" "}
                  <span className="text-gray-700">Took Day Off</span>
                </li>
                <li>
                  <span
                    className="dot inline-block w-3 h-3 rounded-full mr-2 ml-2"
                    style={{ backgroundColor: "#E2E8F0" }}
                  ></span>{" "}
                  {user.attendanceDetails[0].notPresent}{" "}
                  <span className="text-gray-700">Not Present</span>
                </li>
              </div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Donutchart;

Donutchart.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};