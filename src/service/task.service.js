
import { getServerSession } from "next-auth";
import { authOption } from "../app/api/auth/[...nextauth]/route";

export async function getAlltask(workspaceId) {
    const session = await getServerSession(authOption);
    
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=${workspaceId}`, {
        headers: {
            Authorization: `Bearer ${session?.user?.token}`, // Include the token in the request headers
        },
    });
    const data = await res.json(); // Await the JSON parsing
    return data;
}

export async function getTaskByStatus(workspaceId, status) {
    const session = await getServerSession(authOption);
    
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=${workspaceId}&status=${status}`, {
        headers: {
            Authorization: `Bearer ${session?.user?.token}`, // Include the token in the request headers
        },
    });
    const data = await res.json(); // Await the JSON parsing
    return data;
}

export const InsertTaskService = async ({TaskData}) => {
    const session = await getServerSession(authOption);
     
      try {
        const res = await fetch(
          "http://110.74.194.123:8989/api/todo/v1/tasks",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${session?.user?.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(TaskData),
          }
        );
        const data = await res.json();
        
        return data;
      } catch (err) {
        console.log("error task service", err);
      }
    };
