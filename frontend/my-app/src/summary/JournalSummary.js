import { Link } from "react-router-dom";
import './JournalSummary.css'
import { Bar } from "react-chartjs-2";

var raw = "";
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var obj;
function affect_api_call(affect_dimension) {
  fetch("http://localhost:8000/api/summary/TobiBall/"+affect_dimension, requestOptions)
        .then(response => response.json())
           .then(data =>  obj = data)
           .then(data => {
            window.localStorage.setItem(affect_dimension, JSON.stringify(obj))})
                .then(result => console.log(obj))
        .catch(error =>('error', error))
}
//affect_api_call("valence")

var affect_dimensions = ["valence","arousal","activity_level","activity_valence"]
var affect_data = {}

var arrayLength = affect_dimensions.length;
for (var aff_dim = 0; aff_dim < arrayLength; aff_dim++) {
    affect_api_call(affect_dimensions[aff_dim])
    affect_data[affect_dimensions[aff_dim]]  = JSON.parse(window.localStorage.getItem(affect_dimensions[aff_dim], obj));
    console.log(affect_dimensions[aff_dim])

};

const JournalSummary = () => {
     return (
          <div className="journal-summary-grid">

           <div className="journal-summary-barchart">
           <div class="header">
            <h5>Happiness</h5>
            </div>

                   <Bar
                     data={{
                       labels: Object.keys(affect_data["valence"]),
                       fontColor: 'white',
                       datasets: [{
                           data: Object.values(affect_data["valence"]),
                           backgroundColor: 'rgba(87, 156, 247, 1',
                                           hoverBackgroundColor: 'rgba(137, 206, 255)',

                         },],}}
                     options={
                         {responsive: true},
                         {maintainAspectRatio: false},{
                     scales: {
                         xAxes: [{
                           scaleLabel: {
                             display: true,
                             labelString: 'Week',
                             fontColor: 'white'
                           },
                           gridLines: {
                             display:false
                                },}],
                         yAxes: [{
                            gridLines: {
                             display:false
                                }},],},
                         legend: {
                             display: false
                         },
                         tooltips: {
                             callbacks: {
                                label: function(tooltipItem) {
                                       return tooltipItem.yLabel;
                                }}}}}
                   />
            </div>
             <div className="journal-summary-barchart">
             <div class="header">

                         <h5>Excitement</h5>
             </div>

                               <Bar
                                 data={{
                                   labels: Object.keys(affect_data["arousal"]),
                                   datasets: [{
                                       data: Object.values(affect_data["arousal"]),
                                       backgroundColor: 'rgba(212, 112, 74, 1)',
                                        hoverBackgroundColor: 'rgba(255, 110, 124, 1)',
                                     },],}}
                                 options={
                                     {responsive: true},
                                     {maintainAspectRatio: false},{
                                 scales: {
                                     xAxes: [{
                                       scaleLabel: {
                                         display: true,
                                         labelString: 'Week',
                                         fontColor: 'white'
                                       },
                                       gridLines: {
                                         display:false
                                            },}],
                                     yAxes: [{
                                        gridLines: {
                                         display:false
                                            }},],},
                                     legend: {
                                         display: false
                                     },
                                     tooltips: {
                                         callbacks: {
                                            label: function(tooltipItem) {
                                                   return tooltipItem.yLabel;
                                            }}}}}
                               />
                        </div>
                         <div className="journal-summary-barchart">
                         <div class="header">
                                                  <h5>Activity Level</h5>
                        </div>
                                           <Bar
                                             data={{

                                               labels: Object.keys(affect_data["activity_level"]),
                                               datasets: [{
                                                   data: Object.values(affect_data["activity_level"]),
                                                   backgroundColor: 'rgba(74, 212, 103, 1)',
                                                   hoverBackgroundColor: 'rgba(124, 255, 153, 1)',
                                                 },],}}
                                             options={

                                                 {responsive: true},
                                                 {maintainAspectRatio: false},{
                                             scales: {
                                                 xAxes: [{
                                                   scaleLabel: {
                                                     display: true,
                                                     labelString: 'Week',
                                                     fontColor: 'white'
                                                   },
                                                   gridLines: {
                                                     display:false
                                                        },}],
                                                 yAxes: [{
                                                    gridLines: {
                                                     display:false
                                                        }},],},
                                                 legend: {
                                                     display: false
                                                 },
                                                 tooltips: {
                                                     callbacks: {
                                                        label: function(tooltipItem) {
                                                               return tooltipItem.yLabel;
                                                        }}}}}
                                           />
                                    </div>
                                     <div className="journal-summary-barchart">
                                     <div class="header">
                                     <h5>Activity Enjoyableness</h5>
                                     </div>
                                                       <Bar
                                                         data={{
                                                           labels: Object.keys(affect_data["activity_valence"]),
                                                           datasets: [{
                                                               data: Object.values(affect_data["activity_valence"]),
                                                               backgroundColor: 'rgba(235, 217, 94, 1)',
                                                               hoverBackgroundColor: 'rgba(255, 255, 144, 1)',
                                                             },],}}
                                                         options={
                                                             {responsive: true},
                                                             {maintainAspectRatio: false},{
                                                         scales: {
                                                             xAxes: [{
                                                               scaleLabel: {
                                                                 display: true,
                                                                 labelString: 'Week',
                                                                 fontColor: 'white'
                                                               },
                                                               gridLines: {
                                                                 display:false
                                                                    },}],
                                                             yAxes: [{
                                                                gridLines: {
                                                                 display:false
                                                                    }},],},
                                                             legend: {
                                                                 display: false
                                                             },
                                                             tooltips: {
                                                                 callbacks: {
                                                                    label: function(tooltipItem) {
                                                                           return tooltipItem.yLabel;
                                                                    }}}}}
                                                       />
                                                </div>
        </div>
     )
   }
   export default JournalSummary