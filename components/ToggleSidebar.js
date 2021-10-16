import React, { useState } from "react";

function ToggleSidebar() {
  const [isOpenSidebar, setIsOpenSideBar] = useState(false);

  const toggleSidebar = () => {
    // document.getElementById("sidebar").classList.toggle("active");
    setIsOpenSideBar(!isOpenSidebar);
  };

  return (
    <div
      className={
        isOpenSidebar
          ? "fixed transform -translate-x-0 ease-out h-full z-40 top-0 px-1 left-0 w-72 bg-gray-100"
          : "fixed transform -translate-x-full ease-in h-full z-40 top-0 px-1 left-0 w-72 bg-gray-100"
      }
    >
      {/* top */}
      <div className="flex mt-5 justify-between items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        {/* search */}
        <div className="flex rounded-md w-full mr-2 ml-2 border-gray-600 brightness-100 bg-white justify-between items-center">
          {/* input */}
          <div className="w-full">
            <input
              className="border-gray-600 text-sm py-1 px-1 rounded-none  focus:border-none focus:outline-none bg-transparent"
              placeholder="search for task"
              type="text"
            />
          </div>
          {/* end input */}
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* end search */}
      </div>
      {/* end top */}

      {/* toggle button */}
      <button
        onClick={toggleSidebar}
        className="absolute bg-gray-300 py-4 rounded rounded-r-lg text-black -right-6 top-1/2"
      >
        {isOpenSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </button>
      {/* end toggle button */}

      {/* my tasks */}
      <div className="flex flex-col h-1/2">
        <div className="flex flex-grow items-center mt-3">
          <p>my tasks</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="h-full overflow-auto px-2">
          {/* task items */}
          <div className="flex flex-row mt-2 overflow-auto justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}
            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}
            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>
          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>
        </div>
        {/* end task item */}
      </div>
      {/* end my tasks */}

      {/* orther tasks */}
      <div className="flex flex-col h-1/2 overflow-auto">
        <div className="flex items-center mt-3">
          <p>other tasks</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* orther tasks */}
        <div className="flex flex-col h-full overflow-x-auto px-2 pb-14">
          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* orther task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end orther task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>

          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>
          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>
          <div className="flex flex-row mt-2 justify-between">
            {/* edit => delete,... */}
            <div className="flex w-6 h-6 bg-green-500 text-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            {/* my task */}

            <div className="flex-col w-full ml-1">
              <div>
                <span className="text-xs block text-gray-400 font-semibold ml-2 ">
                  19/9/2021
                </span>
              </div>
              <div className="flex flex-col rounded-xl bg-white py-1 px-2 text-sm">
                {/* task title */}
                <h3 className="text-green-400 font-semibold">My task title</h3>
                {/* username */}
                <p className="uppercase">Pham Van Tan</p>
                {/* status */}
                <span className="w-min h-6 rounded-md px-1 items-center justify-center bg-yellow-400 text-white font-semibold">
                  status
                </span>
              </div>
            </div>
            {/* end my task */}
          </div>
        </div>

        {/* end task item */}
      </div>
      {/* end orther tasks */}
    </div>
  );
}

export default ToggleSidebar;
