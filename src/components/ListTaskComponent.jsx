import React from "react";
import { getAlltask, getTaskByStatus } from "@/service/task.service";

export async function ListTaskComponent({ workspaceId, status }) {
  let task;
  if (status) {
    task = await getTaskByStatus(workspaceId, status);
  } else {
    task = await getAlltask(workspaceId);
  }


  const formatDate = (dueDate) => {
    const date = new Date(dueDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return "Working On";
      case 2:
        return "Checking";
      case 3:
        return "Completed";
      default:
        return "All Task";
    }
  };

  return (
    <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 space-y-1">
      <tbody>
        {task.data.map((data, index) => (
          <div
            key={index}
            className="border-r border-b border-t border-l p-5 mx-w-sm w-[300px] h-[210px] rounded-lg mt-5 ml-5"
          >
            <h3 className="text-2xl mb-2">{data?.taskTitle}</h3>
            <p className="mb-6">{data?.tag}</p>
            <div className="bg-blue-100 text-blue-600 p-2 mb-2 rounded-lg">
              <p className="text-1xl  block">{getStatusText(data?.status)}</p>
            </div>
            <hr className="flex-grow border-t border-blue-300 mb-2" />
            <div className="flex justify-between items-center">
              <img
                className="h-6"
                src="https://cdn.iconscout.com/icon/free/png-512/free-calendar-2693255-2234949.png?f=webp&w=256"
                alt=""
              />
              <div className="flex items-center gap-1">
                <img
                  className="h-6"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-calender-1439791-1214121.png?f=webp&w=256"
                  alt=""
                />
                <p>{formatDate(data?.dueDate)}</p>
              </div>
            </div>
          </div>
        ))}
      </tbody>
    </table>
  );
}

export default ListTaskComponent;

