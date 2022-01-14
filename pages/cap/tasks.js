import CAPTask from '../../components/task';
import CompletedTask from '../../components/completedTask';
import React, { useEffect, useState } from 'react';
import FetchApi from '../../utils/fetchAPI';
import { CA_PROFILE_API, TASK_API } from '../../utils/APIs';
import CapLayout from '../../components/cap/capLayout';
import { getAuthToken } from '../../utils';

export default function Task() {
  const [allTasks, setAllTasks] = useState([]);
  const [completed_task, set_completed_task] = useState([]);

  useEffect(() => {
    FetchApi('get', CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        set_completed_task(res.data[0]?.tasks_uploaded);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    FetchApi('get', TASK_API, null, getAuthToken())
      .then((res) => {
        setAllTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Filter = () => {
    let comp_task = completed_task;
    var compTask = comp_task?.map(function (item) {
      return item?.uploaded_task?.id;
    });
    var tasks = allTasks;
    tasks = tasks?.filter(function (item) {
      return !compTask?.includes(item?.id);
    });
    return tasks;
  };

  return (
    <CapLayout>
      <div className='Cap_Content_cotainer'>
        <div className='task_heading'>Tasks</div>{' '}
        <div className='Task_cap_underline'></div>
        <div className='Task_flex'>
          {Filter()?.map((det, id) => {
            return (
              <CAPTask
                key={id}
                description={det.headline}
                points={det.max_points}
                Due_date={det.end_date}
                id={det.id}
                sharesesc={det.share_description}
                shareurl={det.share_url}
              />
            );
          })}
        </div>
        <div className='cap-completed-task-container'>
          <div className='task_heading'>Completed Tasks</div>{' '}
          <div className='completed_task_cap_underline'></div>
          <div className='completed-task-flex'>
            {completed_task.map((det, id) => {
              return (
                <div key={id}>
                  <CompletedTask
                    description={det?.uploaded_task?.headline}
                    points={det?.uploaded_task?.max_points}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CapLayout>
  );
}
