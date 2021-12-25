export const CompletedTask = (completed_task) => {
  return (
    <div className="completed-task-container">
      <div className="completed-task-description">
        {completed_task.description}
      </div>
      <div className="completed-task-foot">
        <div className="completed-task-points">
          {completed_task.points} points
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
