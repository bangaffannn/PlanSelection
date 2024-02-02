import React from "react";
import { useState } from "react";
import Radio, { RadioGroup } from "./Radio";
import { BadgePercent, Sparkle, Gem, Crown, ArrowRight } from "lucide-react";

export default function App() {
  const [plan, setPlan] = useState("your");
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold tracking-tight">Choose Your Plan</h2>
      <hr className="my-3 w-1/3" />
      <RadioGroup value={plan} onChange={(e) => setPlan(e.target.value)}>
        <div className="flex gap-4 px-4 justify-center flex-col lg:flex-row">
          <Radio value="free">
            <Plan
              icon={<BadgePercent />}
              title="Free"
              features={["SD (480p)", "Mobile", "Ads"]}
              price="Rp0"
            ></Plan>
          </Radio>
          <Radio value="basic">
            <Plan
              icon={<Sparkle />}
              title="Basic"
              features={["HD (720p)", "1 Device"]}
              price="Rp25.000"
            ></Plan>
          </Radio>
          <Radio value="standard">
            <Plan
              icon={<Gem />}
              title="Standard"
              features={["Full HD (1080p)", "2 Devices"]}
              price="Rp50.000"
            ></Plan>
          </Radio>
          <Radio value="premium">
            <Plan
              icon={<Crown />}
              title="Premium"
              features={["Ultra HD (4K)", "4 Devices"]}
              price="Rp70.000"
            ></Plan>
          </Radio>
        </div>
      </RadioGroup>
      <hr className="my-4 w-1/3" />
      <button
        className={`flex gap-4 items-center px-11 py-3 rounded-lg bg-violet-800 hover:bg-violet-600 font-semibold text-lg text-white`}
      >
        Proceed with {plan} plan
        <ArrowRight />
      </button>
    </main>
  );
}

function Plan({ icon, title, features, price }) {
  const radioClasses = "flex gap-4 items-center";
  return (
    <div className={radioClasses}>
      {icon}
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{features.join(" : ")}</p>
      </div>
      <h3 className="ml-auto font-medium">{price}</h3>
    </div>
  );
}
