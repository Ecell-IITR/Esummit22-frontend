import Task from "../../components/task";

import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { TASK_API } from "../../utils/APIs";
import CapLayout from "../../components/cap/capLayout";
import { getAuthToken } from "../../utils";

export default function task() {
  const [Task_Arr, setTask_Arr] = useState([]);
  const [Task_caller, setTask_caller] = useState(true);
  useEffect(() => {
    FetchApi("get", TASK_API, null, getAuthToken())
      .then((res) => {
        setTask_Arr(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CapLayout>
      <div className="Cap_Content_cotainer">
        <div className="task_heading"> Tasks</div>{" "}
        <div className="Task_cap_underline"></div>
        <div className="Task_flex">
          {Task_Arr.map((det, id) => {
            return (
              <div className="Task_flex_card" key={id}>
                <Task
                  description={det.headline}
                  points={det.max_points}
                  Due_date={det.end_date}
                  id={det.id}
                  sharesesc={det.share_description}
                  shareurl={det.share_url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </CapLayout>
  );
}
