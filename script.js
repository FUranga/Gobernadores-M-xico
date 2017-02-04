<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>D3 World Map</title>
    <style>
      path {
        stroke: white;
        stroke-width: 0.5px;
        fill: black;
      }
    </style>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script src="http://d3js.org/topojson.v0.min.js"></script>
  </head>
  <body>
    d3.json("http://furanga.carto.com/api/v2/sql?q=SELECT * FROM gobernadores_mexico_xls 1 WHERE the_geom IS NOT NULL&format=geojson&dp=5", function(collection) {
svg.select("#partido")
.selectAll("path")
.data(collection.features)
.enter().append("path")
.attr("fill", "violet")
.attr("d", path.projection(xy));
});
      
    </script>
  </body>
</html>
