var w = 600,
    h = 600,
    i = 0,
    size=h/rangeVals;

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h)
    .style("pointer-events", "all")
    .on("mousemove", mouseBar);


function bar(y) {
  var rectangle = svg.append("rect")
      .attr("x", 0)
      .attr("y", (rangeVals-y-1)*size)
      .attr("width", w)
      .attr("height", size)
      .style("fill", "#009DFF")
    .transition()
      .duration(2000)
      .ease(Math.sqrt)
      .style("opacity", 1e-6)
      .remove();

}

function mouseBar(){
    var m = d3.svg.mouse(this);
    var val = rangeVals-Math.floor(m[1]/size)-1;
    bar(val);
    Note(val);
}
