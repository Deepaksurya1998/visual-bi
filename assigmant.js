let inputData = 
{
	"dimensions": [
		{
			"id": "dimension_re",
			"values": ["East", "East", "West", "SouthWest", "South", "NorthEast"]
		}, {
			"id": "dimension_cnt",
			"values": ["London", "Italy", "Germany", "US", "Russia", "India"]
		}
	],
	"meaures": [
		{
			"id": "measure_sales",
			"values": [100, 156, 432, 462, 25, 100]
		}, {
			"id": "measure_qty",
			"values": [85, 34, 153, 434, 52, 43]
		}, {
			"id": "measure_profit",
			"values": [123, 45, 421, 465, 451, 56]
		}
	],
	"metadata": [
		{
			"id": "measure_sales",
			"label": "Sales",
			"type": "number"
		}, {
			"id": "measure_qty",
			"label": "Quantity",
			"type": "number"
		}, {
			"id": "measure_profit",
			"label": "Profit",
			"type": "number"
		}, {
			"id": "dimension_re",
			"label": "Region",
			"type": "string"
		}, {
			"id": "dimension_cnt",
			"label": "County",
			"type": "string"
		}
	]
}


let dimension = inputData.dimensions;

let meaures = inputData.meaures;

let metdata = inputData.metadata;


let DimMesures = dimension.concat(meaures);



//console.log(DimMesures);

[{
  id: directionid,
  values: direction
}, {
  id: countryid,
  values: countryvalues
}] = dimension;

let obj1 = {}

//console.log(dimension);
/* console.log(direction); */

let output = [];

//console.log(countryvalues);


DimMesures.forEach((element, index, array) => {

let temp =[];
//  console.log(element); // 100, 200, 300
 // console.log(index); // 0, 1, 2
 // console.log(array); // same myArray object 3 times
  for(let i=0; i<element.values.length ; i++){
  if(typeof output[i] == 'undefined') {
  	output[i] = [];
    output[i].push(element.values[i]);
  } else {
  	output[i].push(element.values[i]);
  }
   
  
  }
  /* output.push(temp); */
//console.log(output);


});
let outArr = [];
for (let j = 0; j<output.length; j++) {
let obj = {
	"Region":output[j][0],
  "County":output[j][1],
  "Sales":output[j][2],
  "Quantity":output[j][3],
  "Profit":output[j][4],
  
  
  
};
outArr.push(obj);
}
console.log(outArr);


let expectdData =[
	{
 		"Region": "East",
 		"County": "London",
 		"Sales": 100,
 		"Quantity": 85,
 		"Profit": 123
 	}, {
 		"Region": "East",
 		"County": "Italy",
 		"Sales": 156,
 		"Quantity": 34,
 		"Profit": 45
 	}, {
 		"Region": "West",
 		"County": "Germany",
 		"Sales": 432,
 		"Quantity": 153,
 		"Profit": 421
 	}, {
 		"Region": "SouthWest",
 		"County": "US",
 		"Sales": 462,
 		"Quantity": 434,
 		"Profit": 465
 	}, {
 		"Region": "South",
 		"County": "Russia",
 		"Sales": 25,
 		"Quantity": 52,
 		"Profit": 451
 	},
 	{
 		"Region": "NorthEast",
 		"County": "India",
 		"Sales": 100,
 		"Quantity": 43,
 		"Profit": 56
 	}
 ]