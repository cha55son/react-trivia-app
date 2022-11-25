import { MutableRefObject, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";

function Tunnel(props: { className: string | undefined }) {
    const divRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
    const svgRef = useRef<SVGSVGElement>() as MutableRefObject<SVGSVGElement | null>;
    useLayoutEffect(() => {
        const svgCurrent = svgRef.current;
        const timer = render(svgCurrent, divRef.current!.clientWidth, divRef.current!.clientHeight);
        return () => {
            console.log('test');
            svgCurrent!.innerHTML = '';
            timer.stop();
        }
    }, []);

    return (
        <div ref={divRef} className={'overflow-hidden ' + props.className}>
            <svg ref={svgRef}></svg>
        </div>
    );
}

function render(svg: SVGSVGElement | null, width: number, height: number): d3.Timer {
    if (svg === null) return d3.timer(() => {});

    const n = 2000;

    const logNorm1 = d3.randomLogNormal(0, 0.3);
    const logNorm2 = d3.randomLogNormal();
    let data = d3.range(0, n).map(i => ({
        i,
        r: logNorm1() * (width / 10),
        theta: Math.random() * Math.PI * 2,
        l: 20 - 2 * logNorm2(),
        w: Math.random() * 3,
        o: Math.random()
    }));
    const g = d3.select(svg)
        .attr("width", width)
        .attr("height", width)
        .append("g")
        .attr("transform", "translate(" + [width / 2, width / 2] + ")");
    g.selectAll("path")
        .data(data, d => (d as any).i)
        .enter().append("path")
        .attr("stroke", "#FFF")
        .attr("stroke-linecap", "round")
        .attr("stroke-opacity", d => (d as any).o)
        .attr("stroke-width", d => (d as any).w)
        .attr("d", d => "M" + [0, -(d as any).l / 2] + "L" + [0, (d as any).l / 2]);

    return d3.timer(t => {
        t /= 2000;
        data = data.filter(d => {
            d.r += Math.min(2, (d.r * d.r) / 100000);
            return d.r < width;
        });
        const somePaths = g.selectAll("paths")
            .data(data, d => (d as any).i);
        somePaths.exit().remove();
        somePaths.attr("transform", d => "rotate(" + (d.theta * 180 / Math.PI + d.r / 5) % 360 + ")translate(" + [d.r, 0] + ")");
        return data.length === 0;
    });
}

export default Tunnel;