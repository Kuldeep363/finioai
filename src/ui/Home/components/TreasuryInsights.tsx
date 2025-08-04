import {
  BrainIcon,
  TargetIcon,
  TrendUpIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";

const TreasuryInsights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Smart Treasury Insights
          </h2>
          <p className="text-xl text-sub-text max-w-3xl mx-auto mb-8">
            Don't just track. Predict.
          </p>
          <p className="text-lg text-sub-text max-w-4xl mx-auto">
            Leverage AI-powered analytics to predict cash flows, optimize burn
            rates, and extend runway with actionable insights that drive smarter
            financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Insights visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="text-white mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Treasury Analytics Dashboard
                </h3>
                <p className="text-gray-300 text-sm">
                  Real-time predictions and insights
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">
                    Predicted Runway
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    18 months
                  </div>
                  <div className="text-green-400 text-sm flex items-center">
                    <TrendUpIcon className="h-3 w-3 mr-1" />
                    +2 months
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-gray-400 text-sm mb-1">Burn Rate</div>
                  <div className="text-2xl font-bold text-blue-400">$125K</div>
                  <div className="text-blue-400 text-sm">per month</div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="text-gray-400 text-sm mb-2">
                  Cash Flow Prediction
                </div>
                <div className="h-20 flex items-end justify-between">
                  {[65, 70, 45, 85, 60, 90, 75, 55, 80, 65, 70, 85].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-indigo-500 to-blue-400 rounded-t"
                        style={{ height: `${height}%`, width: "6px" }}
                      ></div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex items-center text-yellow-300">
                  <WarningCircleIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">
                    Optimization Opportunity
                  </span>
                </div>
                <p className="text-yellow-100 text-sm mt-1">
                  Move $500K to high-yield investments to gain $15K annually
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-lg p-3">
                <BrainIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  AI-Powered Forecasting
                </h3>
                <p className="text-sub-text">
                  Machine learning algorithms analyze your historical data and
                  market trends to predict future cash flows with 95% accuracy.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-lg p-3">
                <TrendUpIcon className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Burn Rate Optimization
                </h3>
                <p className="text-sub-text">
                  Identify spending patterns and receive recommendations to
                  optimize your burn rate without impacting growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 rounded-lg p-3">
                <WarningCircleIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Liquidity Alerts
                </h3>
                <p className="text-sub-text">
                  Get proactive alerts about potential cash flow issues before
                  they impact your operations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <TargetIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Strategic Planning
                </h3>
                <p className="text-sub-text">
                  Scenario planning tools help you model different growth paths
                  and their impact on cash requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreasuryInsights;
