import React from "react";
import TitleIcon from "./TitleIcon";

interface SubscriptionCardProps {
  plan: any;
  activePlan: any | null;
  selectPlan: (plan: any) => void;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, activePlan, selectPlan }) => {
  return (
    <div
      className={`border p-4 rounded-md shadow-md cursor-pointer ${
        activePlan?.id === plan.id ? "border-[#009999] bg-blue-50" : "border-gray-200"
      }`}
      onClick={() => selectPlan(plan)}
    >
      <h2 className="text-xl font-semibold text-[#009999]">{plan.title}</h2>

      <TitleIcon iconName={"pin_drop"} option={plan?.option1} />
      <TitleIcon iconName={"schedule"} option={plan?.option2} />
      <TitleIcon iconName={"lock"} option={plan?.option3} />
    </div>
  );
};

export default SubscriptionCard;
