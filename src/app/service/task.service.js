export async function getAlltask (){
    const res = await fetch("http://110.74.194.123:8989/api/todo/v1/tasks");
    const data = res.json();
    return data;
}

export async function getTaskByWorkspaceId(){
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks/${workspaceId}`);
    const data = res.json();
    return data;
}


// http://110.74.194.123:8989/api/todo/v1/auth/sign-up
// http://110.74.194.123:8989/api/todo/v1/auth/login
// http://110.74.194.123:8989/api/todo/v1/workspaces
// http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=155



