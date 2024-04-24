import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";


const session = await getServerSession(authOption);

export async function getAllWorkspace() {
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    headers: {
      Authorization: `Bearer ${session?.user?.token}`, // Include the token in the request headers
    },
  },{next:{tag: ['workspcace']}}
,);
  const data = res.json(); // Await the JSON parsing
  return data;
}

export const InsertWorkspaceService = async ({workspacename}) => {
 
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/workspaces",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workspacename),
      }
    );
    const data = await res.json();
    
    console.log("Data reponse in workspace service ", data);
    return data;
  } catch (err) {
    console.log("error workspace service", err);
  }
};

export const DeleteWorkspaceService = async ({workspaceId}) => {
 
  try {
    const res = await fetch(
      `http://110.74.194.123:8989/api/todo/v1/workspaces/workspaceId/${workspaceId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.user?.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workspaceId),
      }
    );
    const data = await res.json();
    
    console.log("Data reponse in workspace service ", data);
    return data;
  } catch (err) {
    console.log("error workspace service", err);
  }
};