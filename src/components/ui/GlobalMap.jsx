import React from "react";
import { ComposableMap, Geographies, Geography, Line, Marker } from "react-simple-maps";

// TopoJSON URL for world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// [Longitude, Latitude]
const INDIA = [78.9629, 20.5937];

const DESTINATIONS = [
  { name: "UAE (Jebel Ali)", coordinates: [55.2708, 25.2048] },
  { name: "UK (London)", coordinates: [-0.1276, 51.5072] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859] },
  { name: "France", coordinates: [2.2137, 46.2276] },
  { name: "Nigeria", coordinates: [8.6753, 9.0820] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "Vietnam", coordinates: [108.2772, 14.0583] }
];

export default function GlobalMap() {
  return (
    <div className="w-full max-w-5xl mx-auto h-[350px] md:h-[450px] lg:h-[550px] relative overflow-hidden bg-navy-900 rounded-3xl shadow-card border border-navy-700">
      <div className="absolute top-6 left-6 z-10 text-white font-heading font-semibold text-lg md:text-xl tracking-wide flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
        Live Trade Routes
      </div>
      
      <ComposableMap
        projectionConfig={{ scale: 140, center: [10, 15] }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#163459" // navy-600
                stroke="#112947" // navy-700
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#1B3F6B", outline: "none", cursor: "pointer" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {/* Lines from India to Destinations */}
        {DESTINATIONS.map((dest, i) => (
          <Line
            key={`line-${i}`}
            from={INDIA}
            to={dest.coordinates}
            stroke="#D4A017" // gold-400
            strokeWidth={1.5}
            strokeLinecap="round"
            className="opacity-70"
            style={{
              strokeDasharray: "4 4",
              animation: "dash 10s linear infinite",
            }}
          />
        ))}

        {/* Destination Markers */}
        {DESTINATIONS.map((dest, i) => (
          <Marker key={`marker-${i}`} coordinates={dest.coordinates}>
            <circle r={3} fill="#fff" className="opacity-80" />
            <text
              textAnchor="middle"
              y={-8}
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "7px", fill: "#fff", opacity: 0.6 }}
            >
              {dest.name}
            </text>
          </Marker>
        ))}

        {/* India Marker */}
        <Marker coordinates={INDIA}>
          <circle r={4} fill="#F0C040" />
          <circle r={12} fill="#F0C040" className="opacity-30 animate-ping" />
          <text
            textAnchor="middle"
            y={12}
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: "8px", fontWeight: "bold", fill: "#F0C040" }}
          >
            MUMBAI, INDIA
          </text>
        </Marker>

      </ComposableMap>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}} />
    </div>
  );
}
