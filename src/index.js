//Here we're importing items we'll need. You can add other imports here.
import c3 from "c3";
import { handleClick } from "./utils.js";

window.loadChart = (data) => {
  //console.log(data) 
  const columnData = JSON.parse(data);
  //console.log(columnData);
var options = {
  bindto: '#chart',
  size: {width: 800, height: 400},
  data: {
    onclick: handleClick,
    selection: {
      enabled: true,
      draggable: true
    },
    regions: {
      opened: [
        {'start':1, 'end':2, 'style':'dashed'},
        {'start':3, label:"Region 2", paddingX:2, paddingY:2, vertical: true}
      ]
    },
    colors: {opened: "purple"},
    columns: columnData
  }
};
const chart = c3.generate(options);


window.updateChartData = (data) => {
  // alert("updateChartData");
  const newData = JSON.parse(data);
  const load = newData.load;
  const unload = newData.unload;
chart.load({columns: load, unload: unload});
};
}
