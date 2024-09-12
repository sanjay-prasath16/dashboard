import { useContext, useEffect, useRef } from "react";
import * as d3 from "d3";
import { UserContext } from "../../Context/UserContext";
import PropTypes from 'prop-types';

const Barchart = (props) => {
    const { user } = useContext(UserContext);
    const chartRef = useRef(null);

    useEffect(() => {
        const tooltip = d3.select('.d3-tooltip');
        if (!user || !user.enrollmentDetails || !user.enrollmentDetails.length) return;
    
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const width = chartRef.current.offsetWidth - margin.left - margin.right;
        const height = props.height - margin.top - margin.bottom;
    
        const enrollmentDetails = user.enrollmentDetails;
    
        const x = d3.scaleBand()
            .domain(enrollmentDetails.map(d => d.enroll))
            .rangeRound([0, width])
            .padding(0.3);
    
        const y = d3.scaleLinear()
            .domain([0, d3.max(enrollmentDetails, d => d.count)])
            .nice()
            .rangeRound([height, 0]);
    
        d3.select(chartRef.current).selectAll("*").remove();
    
        const svg = d3.select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
    
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .selectAll('.tick line').remove()
            .select('.domain').remove();
    
        const yAxis = svg.append('g')
            .call(d3.axisLeft(y).ticks(5));

        yAxis.selectAll('.tick line').remove();
        yAxis.select('.domain').remove();
    
        svg.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft(y)
                .ticks(5)
                .tickSize(-width)
                .tickFormat('')
            )
            .selectAll('line')
            .attr('stroke', '#e0e0e0');
    
        svg.selectAll('rect')
            .data(enrollmentDetails)
            .enter()
            .append('rect')
            .attr('x', d => x(d.enroll))
            .attr('width', x.bandwidth())
            .attr('y', d => y(0))
            .attr('height', 0)
            .attr('fill', 'steelblue')
            .on('mouseover', (event, d) => {
                d3.select(event.currentTarget).transition().duration(50).attr('opacity', '.85');
                tooltip.html(
                    `<div class='tooltip-title'>${d.enroll}</div>
                     <div class='tooltip-value'>${d.count}</div>`
                ).style('display', 'block');
            })
            .on('mousemove', (event) => {
                tooltip.style('top', event.pageY - 10 + 'px')
                    .style('left', event.pageX + 10 + 'px');
            })
            .on('mouseout', (event) => {
                d3.select(event.currentTarget).transition().duration(50).attr('opacity', '1');
                tooltip.style('display', 'none');
            })
            .transition()
            .duration(1000)
            .attr('y', d => y(d.count))
            .attr('height', d => height - y(d.count));
    
    }, [props.height, user]);

    return (
        <div ref={chartRef} />
    );
}

export default Barchart;

Barchart.propTypes = {
    height: PropTypes.number.isRequired,
};