import React from "react";
import { getAllWorkspace } from "@/service/workplace.service";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import Link from "next/link";

export async function ListWorkSpaceComponent() {
  const workspaces = await getAllWorkspace();
  const getIcon = (id) => {
    switch (id/2) {
      case 0:
        return <img className="w-5 h-5" src="https://icons8.com/icon/18722/circled" alt="" />  
      case 1:
        return <img  className="w-5 h-5" src="https://img.icons8.com/?size=50&id=37601&format=png" alt="" />
      default:
        return <img className="w-5 h-5" src="https://img.icons8.com/?size=48&id=0IQZQ1dRTUJD&format=png" alt="" /> ;
    }
  };
  

  return (
    <table className=" w-full  text-left rtl:text-right text-gray-500 dark:text-gray-400 space-y-1 > * ">
      <tbody>
        {workspaces.data.map((data, index) => (
          <tr key={index}>
            
            <td>{getIcon(data?.workSpaceId)}</td>
            <Link href={`/todo-list/${data?.workSpaceId}`}> <td>{data?.workspaceName}</td> </Link>
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
