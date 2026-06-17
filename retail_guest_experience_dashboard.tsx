import React, { useState, useMemo } from 'react';
import { Settings, MapPin, Calendar, TrendingUp, AlertCircle, CheckCircle2, ChevronRight, X, ArrowUp, ArrowDown, Minus } from 'lucide-react';

// --- CONSTANTS & INITIAL DATA ---
const LOCATION_REGIONS = {
  // South Region
  "Durant East": "South",
  "Durant West": "South",
  "Grant": "South",
  "Garvin": "South",
  "Broken Bow": "South",
  "Idabel": "South",
  "Antlers": "South",
  "Hugo": "South",
  // North Region
  "Heavener": "North",
  "Poteau": "North",
  "Pocola": "North",
  "Stigler": "North",
  "Talihina": "North",
  "Mercantile": "North",
  // Central Region
  "McAlester": "Central",
  "Stringtown": "Central",
  "Atoka": "Central",
  "Wilburton": "Central"
};

// Generate initial mock data for all 18 locations
const generateInitialData = () => {
  const data = {};
  Object.keys(LOCATION_REGIONS).forEach(loc => {
    // Randomize some realistic looking default data
    const nps = Math.floor(Math.random() * 201) - 100; // -100 to 100
    data[loc] = {
      nps: nps,
      previousNps: Math.max(-100, Math.min(100, nps - (Math.floor(Math.random() * 21) - 10))), // Delta between -10 and +10
      opWalk: Math.floor(Math.random() * 20) + 70, // 70-90%
      clo: Math.floor(Math.random() * 45) + 50, // 50-95% to test the 75% threshold
      drivers: {
        Friendly: { current: (Math.random() * 1.5 + 3.0).toFixed(1), previous: (Math.random() * 1.5 + 3.0).toFixed(1), ytd: (Math.random() * 1.5 + 3.0).toFixed(1) },
        Efficient: { current: (Math.random() * 1.5 + 2.8).toFixed(1), previous: (Math.random() * 1.5 + 2.8).toFixed(1), ytd: (Math.random() * 1.5 + 2.8).toFixed(1) },
        Cleanliness: { current: (Math.random() * 2.0 + 2.5).toFixed(1), previous: (Math.random() * 2.0 + 2.5).toFixed(1), ytd: (Math.random() * 2.0 + 2.5).toFixed(1) },
        Restroom: { current: (Math.random() * 2.0 + 2.2).toFixed(1), previous: (Math.random() * 2.0 + 2.2).toFixed(1), ytd: (Math.random() * 2.0 + 2.2).toFixed(1) },
        "Quality of Food": { current: (Math.random() * 1.5 + 3.5).toFixed(1), previous: (Math.random() * 1.5 + 3.5).toFixed(1), ytd: (Math.random() * 1.5 + 3.5).toFixed(1) }
      }
    };
  });
  
  // Hardcode Durant East to somewhat match the visual mockup
  data["Durant East"] = {
    nps: 45,
    previousNps: 41, // Hardcoded previous month
    opWalk: 82,
    clo: 82, // Hardcoded above 75% to show green by default
    drivers: {
      Friendly: { current: "3.5", previous: "3.1", ytd: "3.3" },
      Efficient: { current: "3.2", previous: "3.4", ytd: "3.3" },
      Cleanliness: { current: "2.8", previous: "2.8", ytd: "2.9" },
      Restroom: { current: "2.8", previous: "2.5", ytd: "3.0" },
      "Quality of Food": { current: "4.2", previous: "3.9", ytd: "4.1" }
    }
  };
  
  return data;
};

// --- MAIN COMPONENT ---
export default function App() {
  const [reportPeriod, setReportPeriod] = useState("MAY FY26");
  const [selectedLocation, setSelectedLocation] = useState("Durant East");
  const [isEditMode, setIsEditMode] = useState(false);
  const [storeData, setStoreData] = useState(generateInitialData());

  const currentRegion = LOCATION_REGIONS[selectedLocation];
  const currentMetrics = storeData[selectedLocation];

  // Derived Insights
  const insights = useMemo(() => {
    const drivers = currentMetrics.drivers;
    let maxDriver = "Friendly";
    let minDriver = "Friendly";
    
    Object.keys(drivers).forEach(key => {
      if (parseFloat(drivers[key].current) > parseFloat(drivers[maxDriver].current)) maxDriver = key;
      if (parseFloat(drivers[key].current) < parseFloat(drivers[minDriver].current)) minDriver = key;
    });

    return {
      watchArea: minDriver,
      watchValue: drivers[minDriver].current,
      strongest: maxDriver,
      strongestValue: drivers[maxDriver].current,
      npsDelta: currentMetrics.nps > 40 ? "positive" : "negative"
    };
  }, [currentMetrics]);

  // Handlers
  const handleDataChange = (field, value) => {
    setStoreData(prev => {
      const updated = { ...prev };
      updated[selectedLocation] = {
        ...updated[selectedLocation],
        [field]: value
      };
      return updated;
    });
  };

  const handleDriverChange = (driver, metricType, value) => {
    setStoreData(prev => {
      const updated = { ...prev };
      updated[selectedLocation].drivers = {
        ...updated[selectedLocation].drivers,
        [driver]: {
          ...updated[selectedLocation].drivers[driver],
          [metricType]: value
        }
      };
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-[#F6F4F0] text-slate-800 p-4 md:p-8 font-sans selection:bg-red-200">
      
      {/* --- DASHBOARD CONTAINER --- */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden relative border border-slate-100">
        
        {/* --- HEADER --- */}
        <header className="bg-gradient-to-r from-[#8B1A1A] to-[#6A1414] text-white p-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
          {/* Abstract background shapes mimicking the mockup */}
          <div className="absolute -right-20 -top-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div>
            <h2 className="text-[#D2B48C] font-bold tracking-widest text-sm mb-1 uppercase">Choctaw Travel Plaza</h2>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wide">
              Monthly Retail Guest Experience<br/>Performance Report
            </h1>
          </div>
          
          <button 
            onClick={() => setIsEditMode(!isEditMode)}
            className="mt-4 md:mt-0 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center gap-2 text-sm font-medium border border-white/20 backdrop-blur-sm"
          >
            {isEditMode ? <X size={16} /> : <Settings size={16} />}
            {isEditMode ? "Close Editor" : "Edit Data"}
          </button>
        </header>

        {/* --- CONTROLS BAR --- */}
        <div className="bg-[#EAE5DF] border-b border-[#D6CFC4] px-6 py-4 flex flex-col md:flex-row gap-4 items-center justify-between z-10 relative shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 w-full md:w-auto bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-200">
              <MapPin size={18} className="text-[#8B1A1A]" />
              <select 
                className="bg-transparent border-none outline-none font-bold text-slate-700 w-full md:w-48 cursor-pointer"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <optgroup label="South Region">
                  {Object.keys(LOCATION_REGIONS).filter(k => LOCATION_REGIONS[k] === "South").map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </optgroup>
                <optgroup label="North Region">
                  {Object.keys(LOCATION_REGIONS).filter(k => LOCATION_REGIONS[k] === "North").map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </optgroup>
                <optgroup label="Central Region">
                  {Object.keys(LOCATION_REGIONS).filter(k => LOCATION_REGIONS[k] === "Central").map(loc => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </optgroup>
              </select>
            </div>
            
            <div className="px-3 py-1 bg-[#D2B48C]/30 text-[#6A1414] font-bold rounded-full text-sm border border-[#D2B48C]/50">
              {currentRegion} Region
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-200">
            <Calendar size={18} className="text-[#8B1A1A]" />
            <input 
              type="text" 
              className="bg-transparent border-none outline-none font-bold text-slate-700 w-full md:w-32 placeholder-slate-400"
              value={reportPeriod}
              onChange={(e) => setReportPeriod(e.target.value)}
              placeholder="e.g. MAY FY26"
            />
          </div>
        </div>

        {/* --- EDIT MODE PANEL --- */}
        {isEditMode && (
          <div className="bg-slate-800 text-white p-6 shadow-inner animate-in slide-in-from-top-4">
            <h3 className="text-lg font-bold mb-4 text-[#D2B48C] border-b border-slate-700 pb-2">
              Editing Data for {selectedLocation}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main KPIs Edit */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-300">Core Metrics</h4>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Retail NPS (%)</label>
                  <input type="number" min="-100" max="100" value={currentMetrics.nps} onChange={(e) => handleDataChange('nps', e.target.value)} className="w-full bg-slate-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#D2B48C]" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Previous Month NPS (%)</label>
                  <input type="number" min="-100" max="100" value={currentMetrics.previousNps} onChange={(e) => handleDataChange('previousNps', e.target.value)} className="w-full bg-slate-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#D2B48C]" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">OpWalk (%)</label>
                  <input type="number" value={currentMetrics.opWalk} onChange={(e) => handleDataChange('opWalk', e.target.value)} className="w-full bg-slate-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#D2B48C]" />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Choctaw Language Utilization (%)</label>
                  <input type="number" value={currentMetrics.clo} onChange={(e) => handleDataChange('clo', e.target.value)} className="w-full bg-slate-700 rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#D2B48C]" />
                </div>
              </div>

              {/* Drivers Edit */}
              <div className="space-y-4 md:col-span-2">
                <h4 className="font-semibold text-slate-300">Drivers (Scale 1.0 - 5.0)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(currentMetrics.drivers).map(([driver, vals]) => (
                    <div key={driver} className="bg-slate-700/50 p-3 rounded-lg border border-slate-600">
                      <label className="block text-sm font-bold text-[#D2B48C] mb-2">{driver}</label>
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-1">Current</label>
                          <input 
                            type="number" step="0.1" min="0" max="5"
                            value={vals.current} 
                            onChange={(e) => handleDriverChange(driver, 'current', e.target.value)} 
                            className="w-full bg-slate-700 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#D2B48C]" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-1">Prev. Month</label>
                          <input 
                            type="number" step="0.1" min="0" max="5"
                            value={vals.previous} 
                            onChange={(e) => handleDriverChange(driver, 'previous', e.target.value)} 
                            className="w-full bg-slate-700 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#D2B48C]" 
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-400 mb-1">YTD</label>
                          <input 
                            type="number" step="0.1" min="0" max="5"
                            value={vals.ytd} 
                            onChange={(e) => handleDriverChange(driver, 'ytd', e.target.value)} 
                            className="w-full bg-slate-700 rounded px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-[#D2B48C]" 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- MAIN CONTENT AREA --- */}
        <div className="p-6 md:p-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
          
          {/* Section: Performance Snapshot */}
          <div className="mb-12">
            <h2 className="text-xl font-black text-[#8B1A1A] mb-8 flex items-center gap-2 border-b-2 border-[#8B1A1A]/10 pb-2">
              PERFORMANCE SNAPSHOT
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* KPI 1: Retail NPS */}
              {(() => {
                const npsDelta = currentMetrics.nps - currentMetrics.previousNps;
                const isPositive = npsDelta > 0;
                const isNegative = npsDelta < 0;
                
                let cardBg = "bg-white";
                let topBorder = "bg-[#D2B48C]";
                let circleBorder = "border-[#8B1A1A]";
                let valueColor = "text-[#8B1A1A]";
                let deltaText = "text-slate-500";
                
                if (isPositive) {
                  cardBg = "bg-green-50";
                  topBorder = "bg-green-500";
                  circleBorder = "border-green-600";
                  valueColor = "text-green-700";
                  deltaText = "text-green-600";
                } else if (isNegative) {
                  cardBg = "bg-red-50";
                  topBorder = "bg-red-500";
                  circleBorder = "border-red-600";
                  valueColor = "text-red-700";
                  deltaText = "text-red-600";
                }

                return (
                  <div className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group transition-colors duration-300 ${cardBg}`}>
                    <div className={`absolute top-0 w-full h-1 ${topBorder}`} />
                    <div className={`w-32 h-32 rounded-full border-[6px] flex items-center justify-center mb-2 shadow-inner bg-slate-50 transition-colors duration-300 ${circleBorder}`}>
                      <span className={`text-4xl font-black ${valueColor}`}>{currentMetrics.nps}%</span>
                    </div>
                    
                    {/* Delta Shift Indicator */}
                    <div className="flex items-center gap-1 mb-2">
                      {isPositive ? <ArrowUp size={16} className="text-green-600" /> : isNegative ? <ArrowDown size={16} className="text-red-600" /> : <Minus size={16} className="text-slate-400" />}
                      <span className={`text-sm font-bold ${deltaText}`}>
                        {Math.abs(npsDelta)}% vs Last Month
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-700 tracking-wide text-center">RETAIL NPS</h3>
                  </div>
                );
              })()}

              {/* KPI 2: OpWalk */}
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 w-full h-1 bg-[#556B2F]" />
                <div className="w-32 h-32 rounded-full border-[6px] border-[#556B2F] flex items-center justify-center mb-4 shadow-inner bg-slate-50">
                  <span className="text-4xl font-black text-[#556B2F]">{currentMetrics.opWalk}%</span>
                </div>
                <h3 className="font-bold text-slate-700 tracking-wide text-center">OPWALK</h3>
              </div>

              {/* KPI 3: Language */}
              {(() => {
                const isPositive = currentMetrics.clo >= 75;
                
                let cardBg = isPositive ? "bg-green-50" : "bg-red-50";
                let topBorder = isPositive ? "bg-green-500" : "bg-red-500";
                let circleBorder = isPositive ? "border-green-600" : "border-red-600";
                let valueColor = isPositive ? "text-green-700" : "text-red-700";
                let statusText = isPositive ? "text-green-600" : "text-red-600";

                return (
                  <div className={`flex flex-col items-center justify-center p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden transition-colors duration-300 ${cardBg}`}>
                     <div className={`absolute top-0 w-full h-1 ${topBorder}`} />
                    <div className={`w-32 h-32 rounded-full border-[6px] flex items-center justify-center mb-2 shadow-inner bg-slate-50 transition-colors duration-300 ${circleBorder}`}>
                      <span className={`text-4xl font-black ${valueColor}`}>{currentMetrics.clo}%</span>
                    </div>
                    
                    {/* Goal Indicator */}
                    <div className="flex items-center gap-1 mb-2">
                      <span className={`text-sm font-bold ${statusText}`}>
                        Goal: 75%
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-700 tracking-wide text-center uppercase text-sm leading-tight">Choctaw Language<br/>Utilization</h3>
                  </div>
                );
              })()}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* --- LEFT COLUMN: DRIVERS CHART --- */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-[#8B1A1A] mb-2 text-center uppercase tracking-widest">DRIVERS</h2>
              
              {/* Chart Legend */}
              <div className="flex justify-center items-center gap-6 mb-4 text-xs">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-sm"></div><span className="text-slate-600 font-semibold uppercase">Current Month</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-200 rounded-sm"></div><span className="text-slate-600 font-semibold uppercase">Year to Date (YTD)</span></div>
              </div>
              
              {/* Custom Bar Chart */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 h-96 flex flex-col justify-end relative">
                {/* Background Grid Lines */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none z-0">
                  {[5, 4, 3, 2, 1, 0].map(val => (
                    <div key={val} className="border-b border-dashed border-slate-200 flex-1 relative">
                       <span className="absolute -left-5 -top-3 text-xs text-slate-400 font-medium">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-around items-end h-full relative z-10 gap-2 sm:gap-4 pb-8">
                  {Object.entries(currentMetrics.drivers).map(([driverName, vals], index) => {
                    const currentVal = parseFloat(vals.current);
                    const previousVal = parseFloat(vals.previous);
                    const ytdVal = parseFloat(vals.ytd);
                    
                    const momDelta = currentVal - previousVal;
                    const isPositiveMom = momDelta > 0;
                    const isNegativeMom = momDelta < 0;

                    const currentHeight = (currentVal / 5) * 100;
                    const ytdHeight = (ytdVal / 5) * 100;
                    
                    // Colors matching the PDF mockup
                    const colors = [
                      "bg-[#7B8565]", // Olive
                      "bg-[#965A20]", // Rust Brown
                      "bg-[#D2A039]", // Mustard
                      "bg-[#705018]", // Dark Brown
                      "bg-[#8B1A1A]"  // Maroon (Bonus color for 5th driver)
                    ];
                    const barColor = colors[index % colors.length];
                    const isWatchArea = driverName === insights.watchArea;
                    const isStrongest = driverName === insights.strongest;

                    return (
                      <div key={driverName} className="flex flex-col items-center w-full group h-full justify-end relative">
                        
                        {/* Values Header (Value & MoM) */}
                        <div className="flex flex-col items-center mb-2 h-12 justify-end">
                          <span className={`text-[11px] font-bold flex items-center gap-0.5 mb-0.5 ${isPositiveMom ? 'text-green-600' : isNegativeMom ? 'text-red-600' : 'text-slate-400'}`}>
                            {isPositiveMom ? <ArrowUp size={10} strokeWidth={3}/> : isNegativeMom ? <ArrowDown size={10} strokeWidth={3}/> : <Minus size={10} strokeWidth={3}/>}
                            {Math.abs(momDelta).toFixed(1)}
                          </span>
                          <div className={`font-bold transition-all text-base sm:text-lg ${isWatchArea ? 'text-red-600' : isStrongest ? 'text-green-700' : 'text-slate-700'}`}>
                            {currentVal.toFixed(1)}
                          </div>
                        </div>
                        
                        {/* Bars Container */}
                        <div className="flex items-end gap-1 w-full justify-center h-full">
                          {/* YTD Bar */}
                          <div 
                            className="w-1/3 max-w-[16px] sm:max-w-[20px] bg-slate-200 rounded-t-sm transition-all duration-300 relative group/ytd"
                            style={{ height: `${ytdHeight}%`, minHeight: '10px' }}
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500 bg-white shadow-sm px-1 rounded opacity-0 group-hover/ytd:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">YTD {ytdVal.toFixed(1)}</span>
                          </div>
                          
                          {/* Current Bar */}
                          <div 
                            className={`w-2/3 max-w-[32px] sm:max-w-[40px] rounded-t-lg transition-all duration-500 ease-out shadow-sm group-hover:opacity-90 group-hover:-translate-y-1 ${barColor} ${isWatchArea ? 'ring-2 ring-red-400 ring-offset-2' : ''}`}
                            style={{ height: `${currentHeight}%`, minHeight: '10px' }}
                          />
                        </div>
                        
                        {/* Driver Label */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                          <div className={`hidden sm:block w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${barColor} shrink-0`} />
                          <span className="text-[9px] sm:text-xs font-semibold text-slate-700 text-center uppercase leading-tight truncate px-1">
                            {driverName}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* --- RIGHT COLUMN: INSIGHTS & SUMMARY --- */}
            <div className="space-y-6">
              
              {/* Summary Box */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-[#D2B48C]">
                <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-3 uppercase tracking-wide">
                  <TrendingUp size={18} className="text-[#D2B48C]" /> Summary
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For the <span className="font-semibold">{reportPeriod}</span> reporting period, <span className="font-semibold text-[#8B1A1A]">{selectedLocation}</span> achieved a Retail NPS of <span className="font-semibold">{currentMetrics.nps}%</span>. The strongest operational driver was <span className="font-semibold text-[#556B2F]">{insights.strongest}</span>.
                </p>
              </div>

              {/* Watch Area Box */}
              <div className="bg-red-50 p-6 rounded-2xl shadow-sm border border-red-100 border-l-4 border-l-red-500">
                <h3 className="font-bold text-red-900 flex items-center gap-2 mb-3 uppercase tracking-wide">
                  <AlertCircle size={18} className="text-red-600" /> Watch Area
                </h3>
                <p className="text-sm text-red-800 leading-relaxed">
                  Focus is needed on <span className="font-bold underline decoration-red-300">{insights.watchArea}</span>, currently tracking at a low of <span className="font-bold">{insights.watchValue}</span>. Immediate operational review of this guest touchpoint is advised.
                </p>
              </div>

              {/* Key Insights & Recommendations */}
              <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <h3 className="font-bold text-[#D2B48C] flex items-center gap-2 mb-4 uppercase tracking-wide">
                  <CheckCircle2 size={18} /> Recommendations
                </h3>
                
                <ul className="space-y-4">
                  <li className="text-sm text-slate-300 flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#D2B48C] shrink-0 mt-0.5" />
                    <span>Prioritize floor staff training specific to <strong>{insights.watchArea}</strong> to lift baseline scores above 3.5.</span>
                  </li>
                  <li className="text-sm text-slate-300 flex items-start gap-3">
                    <ChevronRight size={16} className="text-[#D2B48C] shrink-0 mt-0.5" />
                    <span>Leverage the success of <strong>{insights.strongest}</strong> ({insights.strongestValue}) by having shift leads share best practices with other {currentRegion} region stores.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          
        </div>

        {/* --- FOOTER --- */}
        <footer className="bg-slate-900 text-slate-400 py-6 px-10 text-xs flex flex-col md:flex-row justify-between items-center">
          <p className="uppercase tracking-widest font-semibold mb-2 md:mb-0 text-[#D2B48C]">
            Choctaw Nation • Operational Excellence
          </p>
          <p>Confidential Internal Report • Generated dynamically based on inputted data.</p>
        </footer>

      </div>
    </div>
  );
}