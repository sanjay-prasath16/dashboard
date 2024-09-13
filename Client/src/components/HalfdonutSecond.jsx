import * as d3 from "d3";
import { useContext, useRef, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import PropTypes from "prop-types";

const Halfdonut = (props) => {
    const { user } = useContext(UserContext);
    const chartRef = useRef(null);

    useEffect(() => {
        const tooltip = d3.select(".d3-tooltip");

        d3.select(chartRef.current).selectAll("*").remove();

        if (!user || !user.childDetails) {
            console.log("No child details found");
            return;
        }

        const margin = { top: 20, right: 20, bottom: 30, left: 20 };
        const width = props.width - margin.left - margin.right;
        const height = props.height - margin.top - margin.bottom;
        const radius = Math.min(width, height) / 2;
        const padding = 10;

        const svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${width / 2}, ${height / 2 + 20})`);

        const caregiverDetails = user.caregiverDetails[0];
        const registered = parseInt(caregiverDetails.Registered) || 0;
        const active = parseInt(caregiverDetails.Active) || 0;
        const inactive = parseInt(caregiverDetails.Inactive) || 0;

        const total = registered + active + inactive;

        const data = [
            { label: "Registered", value: registered, color: "#3D2374" },
            { label: "Active", value: active, color: "#673BC2" },
            { label: "Inactive", value: inactive, color: "#E2E8F0" }
        ];

        const pie = d3.pie()
            .value(d => d.value)
            .sort(null)
            .startAngle(-Math.PI / 2)
            .endAngle(Math.PI / 2);

        const arc = d3.arc()
            .innerRadius(radius * 0.5)
            .outerRadius(d => radius - padding)
            .padAngle(0.05)
            .cornerRadius(5);

        svg.selectAll("path")
            .data(pie(data))
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", d => d.data.color)
            .on("mouseover", (event, d) => {
                tooltip
                    .style("left", `${event.pageX + 10}px`)
                    .style("top", `${event.pageY - 25}px`)
                    .style("display", "inline-block")
                    .html(`${d.data.label}: ${d.data.value}`);
            })
            .on("mouseout", () => tooltip.style("display", "none"));

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "-0.2em")
            .attr("class", "total-text")
            .style("font-size", "24px")
            .style("font-weight", "bold")
            .text(total);

        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "1.5em")
            .style("font-size", "14px")
            .style("fill", "#999")
            .text("Total");

    }, [user, props.height, props.width]);

    return <div ref={chartRef} />;
};

export default Halfdonut;

Halfdonut.propTypes = {
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};