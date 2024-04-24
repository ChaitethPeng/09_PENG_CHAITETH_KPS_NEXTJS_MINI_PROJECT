import React from "react";
import { getAllWorkspace } from "@/app/service/workplace.service";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export async function ListWorkSpaceComponent() {
  const workspaces = await getAllWorkspace();

  return (
    <table className=" w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400 space-y-1 > * ">
      <tbody>
        {workspaces.data.map((data, index) => (
          <tr key={index}>
            <td className="w-8">
          
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_1789)">
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#CD0000"
                    stroke-width="2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1789">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </td>
            <td>{data?.workspaceName}</td>
            <td>
              <EditDeleteDropDownComponent id={data?.workSpaceId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ListWorkSpaceComponent;
