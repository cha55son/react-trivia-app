import { MutableRefObject, useEffect, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";

function Swirl(props: { className: string | undefined }) {
    const divRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
    const svgRef = useRef<SVGSVGElement>() as MutableRefObject<SVGSVGElement | null>;
    useLayoutEffect(() => {
        const noop = true;
        const svgCurrent = svgRef.current!;
        const timer = render(svgCurrent, divRef.current!.clientWidth, divRef.current!.clientHeight);
        return () => {
            console.log('test');
            svgCurrent.innerHTML = '';
            timer.stop();
        }
    }, []);

    return (
        <div ref={divRef} className={'overflow-hidden ' + props.className}>
            <svg ref={svgRef}></svg>
        </div>
    )
}

function render(svg: SVGSVGElement | null, width: number, height: number): d3.Timer {
    if (svg === null) return d3.timer(() => {});

    const n = 20;
    const m = 20;
    const g = 137.5 * Math.PI / 180;

    const root = d3.select(svg)
        .attr("width", width)
        .attr("height", height)
        .append("g");
    const data = [] as { r: number, theta: number }[];
    for (let r = 1; r <= n; r++) {
        for (let theta = 0; theta < Math.PI * 2; theta += 2 * Math.PI / m) {
            data.push({ r, theta });
        }
    }
    const seeds = root.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", d => d.r * d.r * Math.cos(d.theta + g * d.r))
        .attr("cy", d => d.r * d.r * Math.sin(d.theta + g * d.r))
        .attr("fill", "#FFF")
        .attr("fill-opacity", 0.1);
    return d3.timer(t => {
        seeds.attr("r", (d, i) => 0.12 * (Math.sin(i * t / 50000) + 1) * Math.pow(d.r, 1.9));
        root.attr("transform", "translate(" + [width / 2, height / 2] + ")rotate(" + t / 100 % 360 + ")");
    });
}

export default Swirl;
