import { POST } from "../app/api/auth/[...nextauth]/route";

export const loginService = async (userInfo) => {
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/login",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("error login service", err);
  }
};

export const RegisterService = async (userInfo) => {
  console.log(userInfo)
  try {
    const res = await fetch(
      "http://110.74.194.123:8989/api/todo/v1/auth/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    );
    const data = await res.json();
    console.log("Data reponse in Registere service ", data);
    return data;
  } catch (err) {
    console.log("error register service", err);
  }
};

