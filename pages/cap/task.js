import Profile from "../../components/cap/cap_profile";
import Task from "../../components/task";
import Navbar from "../../components/dashboard/Navbar";
import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { TASK_API } from "../../utils/APIs";
import CapLayout from "../../components/cap/capLayout";

export default function task() {
  const [Task_Arr, setTask_Arr] = useState([]);
  const [Task_caller, setTask_caller] = useState(true);
  var token = "3f5e58db41c126bf8885f5629863dd87c2551bd8";
  FetchApi("get", TASK_API, null, token)
    .then((res) => {
      this;
      if (Task_caller) {
        setTask_Arr(res.data);
        console.log(res.data);
        setTask_caller(false);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <CapLayout />

      <div className="Cap_Content_cotainer">
        <div className="task_heading"> Today's Task</div>{" "}
        <div className="Task_cap_underline"></div>
        <div className="Task_flex">
          {Task_Arr.map((det, id) => {
            return (
              <div className="Task_flex_card" key={id}>
                <Task
                  description={det.headline}
                  points={det.max_points}
                  Due_date={det.end_date}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}