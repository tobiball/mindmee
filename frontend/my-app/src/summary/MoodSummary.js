import { Link } from "react-router-dom";
import {Radar} from 'react-chartjs-2';
import { useEffect, useState } from "react";
import './MoodSummary.css'
 
const MoodSummary = () => {

    return (
      <div className="mood-summary-grid">

        <div className="months-change">
          <i className="material-icons" style={{color: "white"}}>chevron_left</i>
          <h3 className="master-topic-headline">APRIL</h3>
          <i className="material-icons" style={{color: "white"}}>chevron_right</i>
        </div>

        <div className="mood-summary-radar">
          <Radar 

            options= {{
              legend: {
                display: false
              },
              pointRadius: [0],
              scale: {
                ticks: {
                   display: false
                }                
             }
            }}
            data={{
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

              datasets: [
                {
                  label: 'Mood',
                  data: [32, 87, 45, 76, 21, 12, 89],
                  borderColor: ['rgba(87, 156, 247, 1)'],
                  borderWidth: "5px",
                  pointRadius: [1],
                  pointBorderWidth: [1.5],
                  pointBorderColor: ['rgba(255, 255, 255, 0'],
                  backgroundColor: ['rgba(255, 255, 255, 0'],
                },
                {
                  label: 'Sleep',
                  data: [42,  34,  50,  86,  30,  10,  27],
                  borderColor: ['rgba(74, 212, 103, 1)'],
                  borderWidth: "5px",
                  pointRadius: [1],
                  pointBorderWidth: [1.5],
                  pointBorderColor: ['rgba(255, 255, 255, 0'],
                  backgroundColor: ['rgba(255, 255, 255, 0'],
                },
                {
                  label: 'Arise',
                  data: [92,  90,  38,  2,  54,  91,  10],
                  borderColor: ['rgba(235, 217, 94, 1)'],
                  borderWidth: "5px",
                  pointRadius: [1],
                  pointBorderWidth: [1.5],
                  pointBorderColor: ['rgba(255, 255, 255, 0'],
                  backgroundColor: ['rgba(255, 255, 255, 0'],
                },
                {
                  label: 'Excitement',
                  data: [33,  9,  86,  63,  45,  50,  39],
                  borderColor: ['rgba(212, 112, 74, 1)'],
                  borderWidth: "5px",
                  pointRadius: [1],
                  pointBorderWidth: [1.5],
                  pointBorderColor: ['rgba(255, 255, 255, 0'],
                  backgroundColor: ['rgba(255, 255, 255, 0'],
                }

              ]
            }}
            
            
          />
        </div>

        
        <Link to="/summary/MoodSummaryDetail">
          <button>insight</button>
        </Link>
        
      </div>
    )
  }

  export default MoodSummary