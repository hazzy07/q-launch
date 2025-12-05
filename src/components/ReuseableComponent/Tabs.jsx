import { useState } from "react";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-4 py-2 -mb-px font-medium ${
              activeTab === tab.label
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.label && (
              <div key={tab.label}>{tab.content}</div>
            )
        )}
      </div>
    </div>
  );
}

export default Tabs;
