import BudgetUsageChart from "./components/BudgetUsageChart";
import SimpleDataDisplay from "./components/SimpleDataDisplay";

import { sampleData } from "./sampledata";

export default function Details() {
  const grocery = sampleData().data[0].category[0].data;
  const hardware = sampleData().data[1].category[0].data;

  return (
    <div className="bg-white flex flex-col items-center justify-center w-full p-8">
      <BudgetUsageChart />
      <div className="w-full flex flex-row flex-wrap gap-2 ">
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={grocery[0]}
          title="Grocery Total"
        />
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={hardware[0]}
          title="Hardware Total"
        />
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={grocery[0]}
          title="Grocery Total"
        />
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={hardware[0]}
          title="Hardware Total"
        />{" "}
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={grocery[0]}
          title="Grocery Total"
        />
        <SimpleDataDisplay
          containerStyles="w-[150px] h-[150px]"
          content={hardware[0]}
          title="Hardware Total"
        />
      </div>
    </div>
  );
}
