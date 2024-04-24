"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  // define handle login
  async function handleLogin(userInfo) {
    // define structure object
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    // calling next auth service and passing " newUseInfo "
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    // checking is login success nor not
    if (res.ok) {
      router.push("/todo-list");
    }
  }
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-900 mx-w-auto">
        <div className="mx-w-auto flex flex-col-2 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                login
              </h1>
              <form className="space-y-4 md:space-y-6" action={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    
                    Register
                  </a>
                </p>
              </form>
              <div class="flex items-center">
                <hr class="flex-grow border-t border-blue-300" />
                <span class="px-3 text-blue-500">
                 Continue with
                </span>
                <hr class="flex-grow border-t border-blue-300" />
              </div>
              <button
                  type=""
                  className="w-full text-black border-black  bg-white-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Google
                </button>
            </div>
          </div>
          <div className="image w-1/2 flex justify-center ">
            <img className="h-[70vh]" src="/assets/icons/login.svg" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
