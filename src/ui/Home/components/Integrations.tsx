import {
  BuildingIcon,
  ChartBarIcon,
  CreditCardIcon,
  DatabaseIcon,
  FileTextIcon,
  GlobeIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const Integrations = () => {
  const integrations = [
    {
      name: "Bank Accounts",
      icon: BuildingIcon,
      description: "Connect all major banks",
    },
    {
      name: "Credit Cards",
      icon: CreditCardIcon,
      description: "Track expenses automatically",
    },
    {
      name: "QuickBooks",
      icon: FileTextIcon,
      description: "Sync accounting data",
    },
    {
      name: "Tally",
      icon: ChartBarIcon,
      description: "Indian accounting software",
    },
    {
      name: "Zoho Books",
      icon: DatabaseIcon,
      description: "Complete business suite",
    },
    { name: "Xero", icon: GlobeIcon, description: "Cloud accounting platform" },
  ];

  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Seamless Integrations
          </h2>
          <p className="text-xl text-sub-text max-w-3xl mx-auto">
            Connect your existing financial stack and get up and running in
            minutes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="bg-gray-50 rounded-full p-4 mx-auto mb-4 group-hover:bg-indigo-50 transition-colors">
                <integration.icon className="h-8 w-8 text-sub-text group-hover:text-indigo-600 transition-colors" />
              </div>
              <h3 className="font-semibold text-black mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-sub-text">{integration.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sub-text mb-6">
            Don't see your integration? We're constantly adding new connections.
          </p>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium">
            Request an Integration →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
