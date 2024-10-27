import { useState } from "react";
import NavBar from "./@components/NavBar/NavBar";
import "./App.css";
import Icon from "./@components/Icon/Icon";
import Location from "./@pages/Location/Location";
import About from "./@pages/About/About";
import Futures from "./@pages/Futures/Futures";
import Rules from "./@pages/Rules/Rules";
import Pricing from "./@pages/Pricing/Pricing";
import Promotion from "./@pages/Promotion/Promotion";
import Insurance from "./@pages/Insurance/Insurance";
import Subscription from "./@pages/Subscription/Subscription";
import Device from "./@pages/Device/Device";
import Picture from "./@pages/Picture/Picture";

function App() {
  const tabData = [
    "Location",
    "About",
    "Futures",
    "Rules",
    "Pricing",
    "Promotion",
    "Picture",
    "Insurance",
    "Subscription",
    "Device",
  ];

  const DefaultContent: React.FC = () => (
    <div>
      <h2 className="text-2xl font-semibold">Default Content</h2>
      <p>Select a tab to view its content.</p>
    </div>
  );

  // State to manage the active tab
  const [activeTab, setActiveTab] = useState<string>("Subscription");
  const [completedTabs, setCompletedTabs] = useState<string[]>([
    "Location",
    "About",
    "Futures",
    "Rules",
    "Pricing",
    "Promotion",
    "Picture",
    "Insurance",
  ]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (!completedTabs.includes(tab)) {
      setCompletedTabs([...completedTabs, tab]);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Location":
        return <Location />;
      case "About":
        return <About />;
      case "Futures":
        return <Futures />;
      case "Rules":
        return <Rules />;
      case "Pricing":
        return <Pricing />;
      case "Promotion":
        return <Promotion />;
      case "Picture":
        return <Picture />;
      case "Insurance":
        return <Insurance />;
      case "Subscription":
        return <Subscription />;
      case "Device":
        return <Device />;
      default:
        return <DefaultContent />;
    }
  };

  return (
    <div className="bg-gray-50 h-screen">
      <NavBar />
      <div className="max-w-6xl flex mx-auto pt-14">
        {/* Left side tabs */}
        <div className="w-1/6  p-4">
          {tabData.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex items-center justify-between w-full  p-2 mb-2  font-bold cursor-pointer ${
                activeTab === tab
                  ? " border-l-4 p-2 border-[#009999] text-[#009999] font-bold"
                  : " border-l-4 border-gray-50"
              } ${
                completedTabs.includes(tab)
                  ? "text-[#009999]"
                  : !completedTabs.includes(tab) && activeTab === tab
                  ? "text-[#009999]"
                  : "text-gray-400"
              } `}
            >
              <span>{tab}</span>
              {/* Show checkmark if the tab is completed */}
              {completedTabs.includes(tab) && <Icon className="text-[#009999]" name="check_circle" />}
            </button>
          ))}
        </div>

        {/* Right side content */}
        <div className="w-4/5 p-4 bg-white border rounded-lg ">{renderContent()}</div>
      </div>
    </div>
  );
}

export default App;
