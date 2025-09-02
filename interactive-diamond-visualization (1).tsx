import React, { useState } from 'react';

const InteractiveDiamond = () => {
  // State for the position of each point of the diamond
  const [valuePosition, setValuePosition] = useState(0); // -50 to 50, 0 is center
  const [directionPosition, setDirectionPosition] = useState(0); 
  const [exchangePosition, setExchangePosition] = useState(0);
  const [operatePosition, setOperatePosition] = useState(0);
  
  // Calculate diamond points based on slider values
  const topPoint = { x: 400 + valuePosition * 2, y: 120 };
  const rightPoint = { x: 580 + exchangePosition, y: 300 + exchangePosition / 2 };
  const bottomPoint = { x: 400 + operatePosition * 2, y: 480 };
  const leftPoint = { x: 220 + directionPosition, y: 300 + directionPosition / 2 };
  
  // Get the path string for the diamond
  const diamondPath = `
    M ${topPoint.x},${topPoint.y}
    Q ${topPoint.x + 15},${(topPoint.y + rightPoint.y) / 2} ${rightPoint.x},${rightPoint.y}
    Q ${(rightPoint.x + bottomPoint.x) / 2},${rightPoint.y + 50} ${bottomPoint.x},${bottomPoint.y}
    Q ${bottomPoint.x - 30},${(bottomPoint.y + leftPoint.y) / 2} ${leftPoint.x},${leftPoint.y}
    Q ${(leftPoint.x + topPoint.x) / 2},${leftPoint.y - 50} ${topPoint.x},${topPoint.y}
  `;
  
  // The ideal diamond path
  const idealDiamondPath = `
    M 400,120
    Q 415,210 580,300
    Q 490,350 400,480
    Q 310,350 220,300
    Q 385,210 400,120
  `;
  
  // Get effect description based on slider positions
  const getValueEffect = () => {
    if (valuePosition < -30) return "Heavy Wall Street focus. Investors happy but customers may feel neglected.";
    if (valuePosition > 30) return "Strong customer value focus, but Wall Street may not understand strategy.";
    return "Balanced value proposition between investor and customer needs.";
  };
  
  const getDirectionEffect = () => {
    if (directionPosition < -30) return "Strategy too investor-focused. Employee engagement suffering.";
    if (directionPosition > 30) return "Employee-driven strategy may lack market alignment.";
    return "Strategic alignment balances investor expectations and employee capabilities.";
  };
  
  const getExchangeEffect = () => {
    if (exchangePosition < -30) return "Customer focus without market context. May miss emerging trends.";
    if (exchangePosition > 30) return "Market-driven but not addressing specific customer needs.";
    return "Value exchange optimized between customer needs and market conditions.";
  };
  
  const getOperateEffect = () => {
    if (operatePosition < -30) return "Operating model too employee-centric, disconnected from market realities.";
    if (operatePosition > 30) return "Market-driven operations without employee engagement.";
    return "Operating model aligns employee capabilities with market dynamics.";
  };
  
  // Calculate diamond health score
  const calculateHealth = () => {
    const balanceScore = 100 - (
      Math.abs(valuePosition) + 
      Math.abs(directionPosition) + 
      Math.abs(exchangePosition) + 
      Math.abs(operatePosition)
    ) / 2;
    
    return Math.max(0, balanceScore);
  };
  
  // Get health description
  const getHealthDescription = () => {
    const health = calculateHealth();
    if (health >= 80) return "Excellent structural integrity! The architecture is aligned and positioned for growth.";
    if (health >= 60) return "Good integrity. Minor adjustments could improve commercial effectiveness.";
    if (health >= 40) return "Moderate structural weaknesses. Organization experiencing tension in key areas.";
    if (health >= 20) return "Significant structural issues. Organization likely experiencing dysfunction.";
    return "Critical structural failure. Organization at risk of collapse.";
  };
  
  return (
    <div className="flex flex-col bg-gray-50 rounded-lg p-4 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Commercial Value Architecture
      </h2>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Visualizing the structural tensions that shape organizational form and function
      </p>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6 border border-gray-200">
        <h3 className="text-xl font-bold text-center mb-4 text-blue-800">The Executive Perspective Challenge</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-3">
              <span className="font-bold">CEOs and CFOs</span> are the only executives who experience all four forces shaping the organization:
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
              <li><span className="font-semibold text-blue-700">Investor expectations</span> - driving growth & returns</li>
              <li><span className="font-semibold text-teal-700">Customer demands</span> - seeking value & solutions</li>
              <li><span className="font-semibold text-indigo-700">Employee realities</span> - requiring direction & support</li>
              <li><span className="font-semibold text-green-700">Market dynamics</span> - creating constraints & opportunities</li>
            </ul>
            <p className="text-gray-700 mb-3">
              Yet while inhabiting these spaces, they lack a common language to unite these perspectives.
            </p>
          </div>
          
          <div>
            <p className="text-gray-700 mb-3">
              While both focus on shareholder value:
            </p>
            <div className="flex mb-4">
              <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-200 mr-2">
                <h4 className="font-bold text-blue-800 mb-1">CEO Bias</h4>
                <p className="text-sm text-gray-700">Performance-oriented, focused on growth opportunities</p>
              </div>
              <div className="flex-1 bg-green-50 p-3 rounded-lg border border-green-200 ml-2">
                <h4 className="font-bold text-green-800 mb-1">CFO Bias</h4>
                <p className="text-sm text-gray-700">Risk-oriented, focused on financial sustainability</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              This subtle tension creates a slight bias toward risk mitigation over calculated risks necessary for growth.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mt-2">
          <h4 className="font-bold text-yellow-800 mb-2">Why Commercial Value Architecture Matters</h4>
          <p className="text-gray-700">
            The Commercial Value Architecture visualizes these complex tensions and provides a framework to identify misalignments before they cascade into execution problems.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <svg viewBox="0 0 800 600" className="w-full h-auto">
              {/* Background */}
              <rect width="800" height="600" fill="#f8fafc" />
              
              {/* Force fields (looking more like natural forces) */}
              {/* Wall Street Force Field */}
              <ellipse cx="250" cy="200" rx="200" ry="180" fill="#1e40af" fillOpacity="0.3" />
              
              {/* Customer Force Field */}
              <ellipse cx="550" cy="200" rx="190" ry="185" fill="#0e7490" fillOpacity="0.3" />
              
              {/* Employee Force Field */}
              <ellipse cx="250" cy="400" rx="195" ry="190" fill="#6366f1" fillOpacity="0.3" />
              
              {/* Market Force Field */}
              <ellipse cx="550" cy="400" rx="200" ry="195" fill="#047857" fillOpacity="0.3" />
              
              {/* Ideal Diamond (dotted outline) */}
              <path d={idealDiamondPath} fill="none" stroke="#0f766e" strokeWidth="1" strokeDasharray="5,5" />
              
              {/* Dynamic Diamond */}
              <path d={diamondPath} fill="none" stroke="#0f766e" strokeWidth="3" />
              
              {/* Balance points */}
              {/* Top point - VALUE */}
              <g>
                <circle cx={topPoint.x} cy={topPoint.y} r="16" fill="#0f766e" fillOpacity="0.2" />
                <circle cx={topPoint.x} cy={topPoint.y} r="12" fill="#0f766e" />
                <circle cx={topPoint.x} cy={topPoint.y} r="5" fill="#ffffff" />
              </g>
              <text x="400" y="95" textAnchor="middle" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#0f766e">
                VALUE
              </text>
              <text x="400" y="75" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#64748b">
                (Lift)
              </text>
              
              {/* Right point - EXCHANGE */}
              <g>
                <circle cx={rightPoint.x} cy={rightPoint.y} r="16" fill="#0f766e" fillOpacity="0.2" />
                <circle cx={rightPoint.x} cy={rightPoint.y} r="12" fill="#0f766e" />
                <circle cx={rightPoint.x} cy={rightPoint.y} r="5" fill="#ffffff" />
              </g>
              <text x="620" y="300" textAnchor="start" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#0f766e">
                EXCHANGE
              </text>
              <text x="620" y="320" textAnchor="start" fontFamily="Arial" fontSize="14" fill="#64748b">
                (Thrust)
              </text>
              
              {/* Bottom point - OPERATE */}
              <g>
                <circle cx={bottomPoint.x} cy={bottomPoint.y} r="16" fill="#0f766e" fillOpacity="0.2" />
                <circle cx={bottomPoint.x} cy={bottomPoint.y} r="12" fill="#0f766e" />
                <circle cx={bottomPoint.x} cy={bottomPoint.y} r="5" fill="#ffffff" />
              </g>
              <text x="400" y="515" textAnchor="middle" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#0f766e">
                OPERATE
              </text>
              <text x="400" y="535" textAnchor="middle" fontFamily="Arial" fontSize="14" fill="#64748b">
                (Weight)
              </text>
              
              {/* Left point - DIRECTION */}
              <g>
                <circle cx={leftPoint.x} cy={leftPoint.y} r="16" fill="#0f766e" fillOpacity="0.2" />
                <circle cx={leftPoint.x} cy={leftPoint.y} r="12" fill="#0f766e" />
                <circle cx={leftPoint.x} cy={leftPoint.y} r="5" fill="#ffffff" />
              </g>
              <text x="180" y="300" textAnchor="end" fontFamily="Arial" fontSize="18" fontWeight="bold" fill="#0f766e">
                DIRECTION
              </text>
              <text x="180" y="320" textAnchor="end" fontFamily="Arial" fontSize="14" fill="#64748b">
                (Drag)
              </text>
              
              {/* Force Labels with essence descriptions */}
              <text x="250" y="150" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#1e40af">
                Wall Street
              </text>
              <text x="250" y="175" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#1e40af">
                Investor Expectations
              </text>
              <text x="250" y="200" textAnchor="middle" fontFamily="Arial" fontSize="14" fontStyle="italic" fill="#1e40af">
                Corporation as Asset
              </text>
              
              <text x="550" y="150" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#0e7490">
                Customers
              </text>
              <text x="550" y="175" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#0e7490">
                Value Expectations
              </text>
              <text x="550" y="200" textAnchor="middle" fontFamily="Arial" fontSize="14" fontStyle="italic" fill="#0e7490">
                Corporation as Supplier
              </text>
              
              <text x="250" y="430" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#6366f1">
                Employees
              </text>
              <text x="250" y="455" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#6366f1">
                Fragmented Perspectives
              </text>
              <text x="250" y="480" textAnchor="middle" fontFamily="Arial" fontSize="14" fontStyle="italic" fill="#6366f1">
                Corporation as Paycheck
              </text>
              
              <text x="550" y="430" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#047857">
                Main Street
              </text>
              <text x="550" y="455" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="#047857">
                Market Dynamics
              </text>
              <text x="550" y="480" textAnchor="middle" fontFamily="Arial" fontSize="14" fontStyle="italic" fill="#047857">
                Corporation as Organism
              </text>
            </svg>
          </div>
          
          <div className="mt-4 flex justify-center items-center">
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-4 w-full rounded-lg">
              <div 
                className="bg-white h-full rounded-full" 
                style={{ 
                  width: `${100 - calculateHealth()}%`,
                  marginLeft: `${calculateHealth()}%`
                }}
              ></div>
            </div>
          </div>
          <div className="text-center mt-2">
            <span className="font-bold">Structural Integrity: {calculateHealth().toFixed(0)}%</span>
          </div>
          <div className="mt-2 text-center text-gray-700">
            {getHealthDescription()}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-bold text-lg text-center mb-3 text-blue-800">
                Balance Point Controls
              </h3>
              
              <div className="mb-4">
                <label className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-900">VALUE</span>
                  <span className="text-sm text-gray-500">Wall Street ← → Customers</span>
                </label>
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={valuePosition}
                  onChange={(e) => setValuePosition(parseInt(e.target.value, 10))}
                  className="w-full"
                />
                <div className="mt-1 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                  {getValueEffect()}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-900">DIRECTION</span>
                  <span className="text-sm text-gray-500">Wall Street ← → Employees</span>
                </label>
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={directionPosition}
                  onChange={(e) => setDirectionPosition(parseInt(e.target.value, 10))}
                  className="w-full"
                />
                <div className="mt-1 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                  {getDirectionEffect()}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-900">EXCHANGE</span>
                  <span className="text-sm text-gray-500">Customers ← → Market</span>
                </label>
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={exchangePosition}
                  onChange={(e) => setExchangePosition(parseInt(e.target.value, 10))}
                  className="w-full"
                />
                <div className="mt-1 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                  {getExchangeEffect()}
                </div>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center justify-between mb-1">
                  <span className="font-medium text-blue-900">OPERATE</span>
                  <span className="text-sm text-gray-500">Employees ← → Market</span>
                </label>
                <input 
                  type="range" 
                  min="-50" 
                  max="50" 
                  value={operatePosition}
                  onChange={(e) => setOperatePosition(parseInt(e.target.value, 10))}
                  className="w-full"
                />
                <div className="mt-1 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                  {getOperateEffect()}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="font-bold text-center mb-2">CEO/CFO Insights</h3>
              <p className="text-gray-700 text-sm mb-2">
                This represents the top layer of the Commercial Value Architecture. The slight misalignments seen here cascade through six additional layers of organizational structure.
              </p>
              <p className="text-gray-700 text-sm">
                Finding the optimal balance requires understanding how these initial tensions propagate through the organization.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button 
                  onClick={() => {
                    setValuePosition(0);
                    setDirectionPosition(0);
                    setExchangePosition(0);
                    setOperatePosition(0);
                  }}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Ideal Form
                </button>
                <button 
                  onClick={() => {
                    setValuePosition(Math.floor(Math.random() * 101) - 50);
                    setDirectionPosition(Math.floor(Math.random() * 101) - 50);
                    setExchangePosition(Math.floor(Math.random() * 101) - 50);
                    setOperatePosition(Math.floor(Math.random() * 101) - 50);
                  }}
                  className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                >
                  Stress Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDiamond;
