import { Link } from "react-router-dom";
import './JournalSummary.css'
import { Bar } from "react-chartjs-2";

import {
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

//var raw = "";
//
//var requestOptions = {
//  method: 'GET',
//  body: raw,
//  redirect: 'follow'
//};
//
//
//    var obj;
//     fetch("http://localhost:8000/api/summary/TobiBall", requestOptions)
//      .then(response => response.json())
//         .then(data =>  obj = data)
//         .then(data => {
//          window.localStorage.setItem("obj", obj)})
//              .then(result => console.log(obj))
//      .catch(error =>('error', error));

var raw = "";

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

    var obj;

fetch("http://localhost:8000/api/summary/TobiBall", requestOptions)
      .then(response => response.json())
         .then(data =>  obj = data)
         .then(data => {
          window.localStorage.setItem("obj", JSON.stringify(obj))})
              .then(result => console.log(obj))
      .catch(error =>('error', error));

//

//var bubu = {id:window.localStorage.getItem('obj')}
//var op = [];
//Object.keys(bubu).forEach(function(key) {
//  var dat = {};
//  dat[key] = bubu[key];
//  op.push(dat); //push newly created object in `op`array
//});

var ob = JSON.parse(window.localStorage.getItem("obj", obj));
var weeks = Object.keys(ob)
var valences = Object.values(ob)

console.log(weeks);

//const bubu = Object.keys(obj).map(key => [key, obj[key]]);
//console.log(bubu)
//
//export default function JournalSummary() {
//    return (
//        <BarChart
//            width={500}
//            height={300}
//            data={data}
//            margin={{
//                top: 5,
//                right: 30,
//                left: 20,
//                bottom: 5
//            }}
//        >
//            <CartesianGrid strokeDasharray="3 3" />
//            <XAxis dataKey="name" />
//            <YAxis />
//            <Tooltip />
//            <Legend />
//            <Bar dataKey="pv" fill="#8884d8" />
//            <Bar dataKey="uv" fill="#82ca9d" />
//        </BarChart>
//        <div>
//pm.visualizer.set({data})
//        </div>


//    )
//  }

export default function JournalSummary() {
 return (
     <div>
       <div>
         <Bar
           data={{
             // Name of the variables on x-axies for each bar
             labels: weeks,
             datasets: [
               {
                 // Label for bars
                 label: "Mood Level",
                 // Data or value of your each variable
                 data: valences,
                 // Color of each bar
                 backgroundColor: "white",
                 // Border color of each bar
//                 borderColor: ["aqua", "green", "red", "yellow"],
                 borderWidth: 0.5,
               },
             ],
           }}
           // Height of graph
           options={{
             scales: {
               yAxes: [
                 {
                   ticks: {
                     // The y-axis value will start from zero
                     beginAtZero: true,
                   },
                 },
               ],
             },

           }}
         />
       </div>
     </div>
   );
 }