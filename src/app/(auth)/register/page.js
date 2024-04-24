import { RegisterService } from "@/service/auth.service";
import RegisterButtonComponent from "@/components/RegitserButton";
import Image from "next/image";

const Register = () => {
  // const router = useRouter();
  // define handle login
  async function handleRegister(userInfo) {
    "use server";
    console.log("user input ", userInfo);
    // define structure object
    const newUserInfo = {
      firstname: userInfo.get("firstName"),
      lastname: userInfo.get("lastName"),
      gender: userInfo.get("gender"),
      profile_url: "string.jpg",
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // calling next auth service and passing " newUseInfo "
    console.log(newUserInfo);
    const data = await RegisterService(newUserInfo);
    console.log("data", data);
  }

  return (
    <main>
      <div className=" mt-10 mx-auto">

       
        <form
          className=" w-auto gap-10 flex justify-center"
          action={handleRegister}
        >
         
          <div className="w-[300px] ">
          <Image className="mb-10" src={"/assets/icons/logo.svg"} width={150} height={100} />
            <div className="mb-5">
              <label
                for="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Sok"
                required
              />
            </div>

            <div class="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email :
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="soksabay@gmail.com"
                required
              />
            </div>

            <div class="mb-5">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <RegisterButtonComponent />
          </div>

          <div className="w-[300px] ">
            <div className="bg-none w-5 h-7 mb-10"></div>
            <div className="mb-5">
              <label
                for="lastName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                last Name:
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Sabay"
                required
              />
            </div>

            <div className="mb-5">
              <label
                for="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender :
              </label>
              <select
                name="gender"
                id="gender"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="repeat-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};
export default Register;
