import { lightningChart, AxisTickStrategies, Themes } from "@arction/lcjs";
import React, { useRef, useEffect } from "react";

const Chart = (props) => {
	const { data, id } = props;
	const chartRef = useRef(undefined);

	useEffect(() => {
		// Define an interface for creating vertical bars.
		const chart = lightningChart()
			.ChartXY({
				theme: Themes.auroraBorealis,
				container: id,
			})
			.setPadding({
				right: 50,
			})
			.setTitle("Diesel and Gasoline Price Comparison");

		// Modify the default X Axis to use DateTime TickStrategy, and set the axis interval
		chart
			.getDefaultAxisX()
			.setTickStrategy(AxisTickStrategies.DateTime)
			.setInterval({
				start: new Date(2022, 0, 1).getTime(),
				end: new Date(2022, 0, 31).getTime(),
			});

		const diesel = [
			{ x: new Date(2022, 0, 1).getTime(), y: 1.52 },
			{ x: new Date(2022, 0, 2).getTime(), y: 1.52 },
			{ x: new Date(2022, 0, 3).getTime(), y: 1.58 },
			{ x: new Date(2022, 0, 4).getTime(), y: 1.52 },
			{ x: new Date(2022, 0, 5).getTime(), y: 2.0 },
			{ x: new Date(2022, 0, 6).getTime(), y: 2.0 },
			{ x: new Date(2022, 0, 7).getTime(), y: 2.0 },
			{ x: new Date(2022, 0, 8).getTime(), y: 2.0 },
			{ x: new Date(2022, 0, 9).getTime(), y: 2.26 },
			{ x: new Date(2022, 0, 10).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 11).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 12).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 13).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 14).getTime(), y: 1.6 },
			{ x: new Date(2022, 0, 15).getTime(), y: 1.6 },
			{ x: new Date(2022, 0, 16).getTime(), y: 1.6 },
			{ x: new Date(2022, 0, 17).getTime(), y: 1.0 },
			{ x: new Date(2022, 0, 18).getTime(), y: 1.0 },
			{ x: new Date(2022, 0, 19).getTime(), y: 1.0 },
			{ x: new Date(2022, 0, 20).getTime(), y: 1.74 },
			{ x: new Date(2022, 0, 21).getTime(), y: 1.47 },
			{ x: new Date(2022, 0, 22).getTime(), y: 1.47 },
			{ x: new Date(2022, 0, 23).getTime(), y: 1.47 },
			{ x: new Date(2022, 0, 24).getTime(), y: 1.74 },
			{ x: new Date(2022, 0, 25).getTime(), y: 1.74 },
			{ x: new Date(2022, 0, 26).getTime(), y: 1.74 },
			{ x: new Date(2022, 0, 27).getTime(), y: 1.5 },
			{ x: new Date(2022, 0, 28).getTime(), y: 1.5 },
			{ x: new Date(2022, 0, 29).getTime(), y: 1.5 },
		];

		const gasoline = [
			{ x: new Date(2022, 0, 1).getTime(), y: 1.35 },
			{ x: new Date(2022, 0, 2).getTime(), y: 1.35 },
			{ x: new Date(2022, 0, 3).getTime(), y: 1.35 },
			{ x: new Date(2022, 0, 4).getTime(), y: 1.35 },
			{ x: new Date(2022, 0, 5).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 6).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 7).getTime(), y: 1.9 },
			{ x: new Date(2022, 0, 8).getTime(), y: 1.92 },
			{ x: new Date(2022, 0, 9).getTime(), y: 1.5 },
			{ x: new Date(2022, 0, 10).getTime(), y: 1.5 },
			{ x: new Date(2022, 0, 11).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 12).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 13).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 14).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 15).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 16).getTime(), y: 1.32 },
			{ x: new Date(2022, 0, 17).getTime(), y: 1.4 },
			{ x: new Date(2022, 0, 18).getTime(), y: 1.44 },
			{ x: new Date(2022, 0, 19).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 20).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 21).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 22).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 23).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 24).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 25).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 26).getTime(), y: 1.02 },
			{ x: new Date(2022, 0, 27).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 28).getTime(), y: 1.3 },
			{ x: new Date(2022, 0, 29).getTime(), y: 1.3 },
		];

		// Add two line series.
		const lineSeries = chart.addLineSeries().setName("Diesel");
		const lineSeries2 = chart.addLineSeries().setName("Gasoline");

		// Add the points to each Series
		lineSeries2.add(diesel);
		lineSeries.add(gasoline);

		// Setup view nicely.
		chart
			.getDefaultAxisY()
			.setTitle("$/litre")
			.setInterval({ start: 0, end: 3, stopAxisAfter: true });

		// Enable AutoCursor auto-fill.
		chart.setAutoCursor((cursor) =>
			cursor.setResultTableAutoTextStyle(true).setTickMarkerYAutoTextStyle(true)
		);
		const legend = chart
			.addLegendBox()
			// Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
			.setAutoDispose({
				type: "max-width",
				maxWidth: 0.3,
			});

		// Add Chart to LegendBox.
		legend.add(chart);

		// Return function that will destroy the chart when component is unmounted.
		return () => {
			console.log("destroy chart");
			chartRef.current = undefined;
		};
	}, [id]);

	return <div id={id} className="chart"></div>;
};

export default Chart;
