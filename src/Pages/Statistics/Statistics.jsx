


import {Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Pie } from "react-chartjs-2";


const Statistics = () => {

  const donationsItem = JSON.parse(localStorage.getItem("donates"));
  const totalDonation = donationsItem.length;
  const donationPercentage = (totalDonation * 100)/12;
  const remainingDonationPercentage = (100 - donationPercentage);

  console.log(donationPercentage, remainingDonationPercentage);
  Chart.register(
    Tooltip, Title, ArcElement, Legend
  );
  
  const data = {
    datasets: [{
        data: [ donationPercentage, remainingDonationPercentage],
        backgroundColor:[
          'orange',
          'red',
      ] 
    },
  
  ],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Your Donations %',
        'Remainig Donations %',
        
    ]
  }; 

  return (
    <div className='flex justify-center  mx-auto'>
      
     <div className='w-[60vw] h-[60vh]'>
     <Pie data = {data}></Pie>
     </div>
    </div>
  );
}

export default Statistics;
 