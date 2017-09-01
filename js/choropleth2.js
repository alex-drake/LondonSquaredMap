function choropleth(){
bubbleChartBool=false
choroplethBool=true;

d3.tsv("londonSquared.tsv", function(error, data) {
	circles.transition().duration(500)
		.attr("r", 0);
	
	grids.transition().duration(500)
		.attr("fill", function(d){return colorScale(d.data)})

		
	for(i=0; i<burroughGrids.length; i++){
		var ooo;
		for (j=0; j<data.length; j++){
			if(data[j].abbreviation==burroughGrids[i].burrough){
				ooo=j;
				
			}
		}
		x="#"+burroughGrids[i].burrough;
		d3.select(x).transition().duration(500)
		.attr("fill", function(d){return colorScale(data[ooo].data)})
		
		}
	d3.selectAll(".labels2").transition().duration(500).style("opacity",1);
})
}


function bubbleChart(){
bubbleChartBool=true
choroplethBool=false;

d3.selectAll("#bilbo").select("p").remove();

d3.tsv("londonSquared.tsv", function(error, data) {
	circles.transition().duration(500)
		.attr("r", function(d){return radiusScale(d.data)})
	
	grids.transition().duration(500)
		.attr("fill", "#0019A8")

	
	
	for(i=0; i<burroughGrids.length; i++){
		
		x="#"+burroughGrids[i].burrough;
		d3.select(x).transition().duration(500)
		.attr("fill", "#0019A8")
		
		}	
	d3.selectAll(".labels2").transition().duration(500).style("opacity",0);
})
}