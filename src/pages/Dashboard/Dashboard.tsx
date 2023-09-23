import React, {useState} from 'react'
import './Dashboard.css'
import Delivery from '../../components/Delivery/Delivery'
import jobsJSON from '../../jobs.json'
import { Link } from 'react-router-dom';

interface Job {
  name: string,
  items: number,
  cost: number,
  distance: number
}

const Dashboard = () => {

  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);

  const onCheckboxChange: (name: string, items: number, cost: number, distance:number) => void = (name, items, cost, distance) => {
    if (selectedJobs.some((job) => job.name === name)) {
      const updatedJobs = selectedJobs.filter((job) => job.name !== name);
      setSelectedJobs(updatedJobs);
    } else {
      const newJob: Job = {
        name: name,
        items: items,
        cost: cost,
        distance: distance
      };
      setSelectedJobs([...selectedJobs, newJob]);
    }
  }

  const handleSubmit: () => void = () => {
    console.log(selectedJobs);
    //FIGURE OUT REDUX
  }

  return (
    <div style={{margin: 'auto'}}>
      <div className="container">
        <h1 style={{fontWeight: '800'}}>Dashboard</h1>
      </div>
      <div className="container">
        <div id="flexbox">
          {jobsJSON.map((job, index) => 
          <Delivery 
            key={index}
            name={job.name}
            cost={job.cost}
            items={job.items}
            distance={job.distance}
            onCheckboxChange={onCheckboxChange}/>)}
        </div>
        <Link to="/map">
          <button id="submit" onClick={handleSubmit}>Submit</button>
      </Link>
      </div>
    </div>
  )
}

export default Dashboard