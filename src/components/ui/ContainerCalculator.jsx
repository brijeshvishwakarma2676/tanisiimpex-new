import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Ship, Info, Scale, Box, AlertTriangle } from 'lucide-react';

const commodities = [
  {
    name: 'Fresh Red Onions',
    packSize: '25kg Mesh Bag',
    weightPerPack: 25,
    capacity20ft: 13.0, // MT
    capacity40ft: 26.0, // MT
    recommendedContainer: '40ft Reefer',
    tempControl: '12°C - 15°C',
    humidity: '65% - 70%',
    notes: 'Requires active fresh-air ventilation to prevent sprouting and mold growth.'
  },
  {
    name: 'Basmati Rice',
    packSize: '50kg PP Bag',
    weightPerPack: 50,
    capacity20ft: 21.0,
    capacity40ft: 26.0,
    recommendedContainer: '20ft Dry Van',
    tempControl: 'Ambient',
    humidity: 'Muted',
    notes: 'Heavy weight commodity. Best loaded in 20ft containers to maximize legal road weight limits.'
  },
  {
    name: 'Green Chillies',
    packSize: '4.5kg Carton',
    weightPerPack: 4.5,
    capacity20ft: 6.0,
    capacity40ft: 12.0,
    recommendedContainer: '40ft Reefer',
    tempControl: '8°C - 10°C',
    humidity: '85% - 90%',
    notes: 'Highly perishable cargo. Must be pre-cooled before loading into high-airflow reefers.'
  },
  {
    name: 'Grapes / Pomegranates',
    packSize: '5kg Carton',
    weightPerPack: 5.0,
    capacity20ft: 8.0,
    capacity40ft: 17.0,
    recommendedContainer: '40ft Reefer',
    tempControl: '1°C - 4°C',
    humidity: '90% - 95%',
    notes: 'Ethylene filters and high humidity are critical to prevent shriveling during sea transit.'
  },
  {
    name: 'Spices & Condiments',
    packSize: '25kg Paper Bag',
    weightPerPack: 25,
    capacity20ft: 18.0,
    capacity40ft: 26.0,
    recommendedContainer: '20ft Dry Van',
    tempControl: 'Ambient',
    humidity: 'Dry (under 60%)',
    notes: 'Highly aromatic cargo. Requires dry, clean container lining to prevent moisture condensation.'
  }
];

export default function ContainerCalculator() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [targetWeight, setTargetWeight] = useState(15); // in Metric Tons (MT)

  const active = commodities[selectedIdx];

  // Calculations
  const totalBags = Math.ceil((targetWeight * 1000) / active.weightPerPack);
  
  // Container logic
  let containers20 = 0;
  let containers40 = 0;
  
  if (active.recommendedContainer.includes('40ft')) {
    containers40 = Math.ceil(targetWeight / active.capacity40ft);
  } else {
    // For ambient dry goods, prefer 20ft dry vans for heavy weight, but allow 40ft if it exceeds 20ft max cap
    if (targetWeight <= active.capacity20ft) {
      containers20 = 1;
    } else {
      containers40 = Math.ceil(targetWeight / active.capacity40ft);
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 shadow-card border border-gray-100 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Input Settings */}
        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-navy-800 font-body mb-2">
              Select Commodity
            </label>
            <select
              value={selectedIdx}
              onChange={(e) => setSelectedIdx(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl px-4 py-3.5 text-navy-800 font-body text-sm focus:outline-none focus:ring-2 focus:ring-navy-500"
            >
              {commodities.map((c, i) => (
                <option key={c.name} value={i}>{c.name} ({c.packSize})</option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-navy-800 font-body">
                Target Cargo Weight (MT)
              </label>
              <span className="text-navy-800 font-heading font-bold text-lg bg-navy-50 px-3 py-1 rounded-lg">
                {targetWeight} Metric Tons
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="1"
              value={targetWeight}
              onChange={(e) => setTargetWeight(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-gold-500"
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-body mt-1">
              <span>5 MT (Min Order)</span>
              <span>100 MT</span>
            </div>
          </div>

          {/* Logistics specs */}
          <div className="bg-navy-50 rounded-2xl p-5 border border-navy-100 space-y-3.5">
            <h4 className="font-heading font-bold text-navy-800 text-sm flex items-center gap-2">
              <Info size={16} className="text-navy-600" /> Marine Logistics Specs
            </h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-body">
              <div>
                <span className="text-gray-400">Packaging Type:</span>
                <div className="font-semibold text-navy-700 mt-0.5">{active.packSize}</div>
              </div>
              <div>
                <span className="text-gray-400">Temp / Humidity Control:</span>
                <div className="font-semibold text-navy-700 mt-0.5">{active.tempControl} / {active.humidity}</div>
              </div>
              <div className="col-span-2 border-t border-navy-100/50 pt-2.5">
                <span className="text-gray-400 flex items-center gap-1">
                  <AlertTriangle size={12} className="text-gold-500" /> Crucial Stowage Instructions:
                </span>
                <p className="text-gray-500 mt-1 leading-relaxed text-[11px]">{active.notes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output Dashboard */}
        <div className="w-full lg:w-[320px] bg-navy-900 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-gold-400/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h3 className="font-heading font-bold text-lg text-white border-b border-white/10 pb-4">
              Estimated Load Plan
            </h3>

            {/* Packaging units count */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Box size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-body font-semibold">Total Packages</div>
                <div className="font-heading font-bold text-2xl text-white mt-0.5">{totalBags.toLocaleString()} <span className="text-xs font-body font-normal text-white/60">units</span></div>
              </div>
            </div>

            {/* Total containers */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Ship size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-body font-semibold">Container Requirement</div>
                <div className="font-heading font-bold text-xl text-white mt-0.5">
                  {containers40 > 0 && `${containers40} x ${active.recommendedContainer}`}
                  {containers20 > 0 && `${containers20} x ${active.recommendedContainer}`}
                </div>
              </div>
            </div>

            {/* Total Weight in KGs */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Scale size={20} className="text-gold-400" />
              </div>
              <div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-body font-semibold">Total Cargo Net Weight</div>
                <div className="font-heading font-bold text-2xl text-white mt-0.5">
                  {(targetWeight * 1000).toLocaleString()} <span className="text-xs font-body font-normal text-white/60">KG</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
            <a
              href={`/inquiry?product=${encodeURIComponent(active.name)}&quantity=${targetWeight}%20MT&incoterm=CIF`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gold-400 text-navy-800 font-body font-bold rounded-xl hover:bg-gold-300 transition-all text-sm"
            >
              Request Quote for Load Plan
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
