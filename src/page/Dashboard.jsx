import React, { useState } from "react";
import { BeatLoader } from "react-spinners";

import { getAlltasks } from "../hooks/useTask";
import TaskBox from "../component/task/TaskBox";

function Dashboard() {

  const [limit, setLimit] = useState(10);
  const { data, isPending } = getAlltasks(limit);

  console.log(data);
  return (
    <div className="px-8">
      <h1 className="ml-4 my-4 text-3xl font-bold">Current Tasks</h1>
      <hr />
      <div className="flex  flex-wrap">
        {isPending && (
          <div className="flex justify-center w-full mt-16 items-center">
            {" "}
            <BeatLoader color="#7a8889" />
          </div>
        )}
        {data?.map((item) => (
          <TaskBox key={item?.id} data={item} />
        ))}
        <div className="flex justify-center w-full my-8">
          <button
            onClick={() => setLimit(limit + 10)}
            className="border rounded-lg px-6 text-sm py-1 "
          >
            load more...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
