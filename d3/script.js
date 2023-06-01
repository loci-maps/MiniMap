// Select the map container element
const mapContainer = d3.select("#map");

// Set the dimensions of the SVG container
const width = mapContainer.node().getBoundingClientRect().width;
const height = mapContainer.node().getBoundingClientRect().height;

// Create an SVG element within the map container
const svg = mapContainer.append("svg");
//   .attr("width", "100%")
//   .attr("height", "100%");

// Fetch and parse the GeoJSON data
d3.json("./voronoi.geojson").then(data => {
  // Create a projection for the map
  const projection = d3.geoIdentity().fitSize([width, height], data);

  // Create a path generator
  const path = d3.geoPath().projection(projection);

  // Get the bounding box of the GeoJSON features
  const bounds = path.bounds(data);

  // Calculate the width and height of the bounding box
  const bboxWidth = bounds[1][0] - bounds[0][0];
  const bboxHeight = bounds[1][1] - bounds[0][1];

  // Update the width of the SVG container
  svg.attr("width", bboxWidth)
    .attr("height", bboxHeight);

  // Draw the GeoJSON features
  svg.selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("fill", "steelblue")
    .attr("stroke", "white")
    .attr("stroke-width", 1);
});
