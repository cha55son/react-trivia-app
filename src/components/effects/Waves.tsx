import { MutableRefObject, useLayoutEffect, useRef } from "react";
import * as d3 from "d3";

function Waves(props: { className: string | undefined }) {
    const divRef = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement | null>;
    const svgRef = useRef<SVGSVGElement>() as MutableRefObject<SVGSVGElement | null>;
    useLayoutEffect(() => {
        const svgCurrent = svgRef.current!;
        const timer = render(svgCurrent, divRef.current!.clientWidth, divRef.current!.clientHeight * 2);
        return () => {
            svgCurrent.innerHTML = '';
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

    const rows = 16;
    const cols = 3;

    const root = d3.select(svg)
        .attr("width", width)
        .attr("height", height)
        .style("background", "#111");
    const randomStart = (start: number, end: number) => start + (Math.abs(end - start) * Math.random());
    const g = root.selectAll("g")
        .data(d3.range(1, rows))
        .enter().append("g")
        .attr("transform", d => `translate(${[randomStart(-250, 250), (d - 1) * height / rows]})`);
    const paths = g.append("path")
        .attr("fill", "#fff")
        .attr("fill-opacity", 0.05);
    return d3.timer(t => {
      paths.attr("d", r => {
          const area = d3.area()
              .curve(d3.curveBasis)
              .x(d => (r * t / 100) % (width / (cols - 2)) + d[1] * width / (cols - 1))
              .y0(height)
              .y1((d, i) => 300 * (i % 2) - 150 + 20 * Math.sin(r + t / 500));
          const range = d3.range(-3, cols + 2);
          return area(range.map(r => [0, r]));
      })
    });
}

export default Waves;