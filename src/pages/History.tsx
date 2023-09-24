import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";


function History() {
  const jobs = useSelector((state: RootState) => state.jobReducer);

  return (
    <div>
      <h1>Jobs: </h1>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
          {job.name} | {job.cost} | {job.items} | {job.distance}
        </li>
        ))}
      </ul>
    </div>
  );
}
export default History;