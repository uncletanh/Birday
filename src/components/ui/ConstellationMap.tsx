"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  Line,
  Graticule
} from "react-simple-maps";

const geoUrl = "/world.json";

interface CityNode {
  id: string;
  name: string;
  coords: [number, number];
  dx: number;
  dy: number;
  delay: number;
}

// Sắp xếp theo một lộ trình du lịch (Bắc xuống Nam, Đông sang Tây)
const citiesData: CityNode[] = [
  { id: "beijing", name: "Beijing", coords: [116.4, 39.9], dx: -40, dy: -30, delay: 0.3 },
  { id: "tianjin", name: "Tianjin", coords: [117.2, 39.1], dx: 40, dy: 10, delay: 0.6 },
  { id: "qingdao", name: "Qingdao", coords: [120.38, 36.06], dx: 50, dy: -10, delay: 0.9 },
  { id: "nanjing", name: "Nanjing", coords: [118.79, 32.06], dx: -60, dy: -20, delay: 1.2 },
  { id: "changzhou", name: "Changzhou", coords: [119.97, 31.81], dx: -65, dy: -45, delay: 1.5 },
  { id: "wuxi", name: "Wuxi", coords: [120.31, 31.49], dx: -20, dy: -55, delay: 1.8 },
  { id: "suzhou", name: "Suzhou", coords: [120.58, 31.29], dx: 50, dy: -30, delay: 2.1 },
  { id: "shanghai", name: "Shanghai", coords: [121.47, 31.23], dx: 60, dy: 10, delay: 2.4 },
  { id: "hangzhou", name: "Hangzhou", coords: [120.15, 30.27], dx: -50, dy: 30, delay: 2.7 },
  { id: "ningbo", name: "Ningbo", coords: [121.54, 29.86], dx: 50, dy: 40, delay: 3.0 },
  { id: "guangzhou", name: "Guangzhou", coords: [113.26, 23.12], dx: -40, dy: 30, delay: 3.3 },
  { id: "lijiang", name: "Lijiang", coords: [100.23, 26.87], dx: -40, dy: -20, delay: 3.6 },
];

const unvisitedCitiesData = [
  { id: "xian", name: "Xi'an", coords: [108.9398, 34.3416], dx: 0, dy: -8 },
  { id: "chengdu", name: "Chengdu", coords: [104.0665, 30.5728], dx: 0, dy: 8 },
  { id: "chongqing", name: "Chongqing", coords: [106.5516, 29.5630], dx: 0, dy: 10 },
  { id: "wuhan", name: "Wuhan", coords: [114.3055, 30.5928], dx: 0, dy: -8 },
  { id: "shenzhen", name: "Shenzhen", coords: [114.0579, 22.5431], dx: 15, dy: 5 },
  { id: "xiamen", name: "Xiamen", coords: [118.0894, 24.4798], dx: 12, dy: 0 },
  { id: "harbin", name: "Harbin", coords: [126.5350, 45.8038], dx: 0, dy: -8 },
  { id: "urumqi", name: "Urumqi", coords: [87.6168, 43.8256], dx: 0, dy: -8 },
  { id: "lhasa", name: "Lhasa", coords: [91.1406, 29.6469], dx: 0, dy: -8 },
  { id: "dalian", name: "Dalian", coords: [121.6147, 38.9140], dx: 12, dy: 0 }
];

export default function ConstellationMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-square md:aspect-[16/10] max-w-5xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#030303] to-[#0a0a0a] border border-gold/10 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
      {/* Vignette viền tối để bản đồ chìm vào bóng đêm ở các góc */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,1)] pointer-events-none z-10" />
      
      {/* Legend / Thông tin hành trình hiển thị dạng overlay */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 pointer-events-none">
         <div className="flex flex-col gap-1 text-gold/80 font-serif">
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase opacity-70">The Journey</span>
            <span className="text-xl md:text-3xl font-bold tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">2024 - 2026</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-[1px] bg-gold/40"></div>
              <span className="text-xs md:text-sm tracking-wider opacity-90 text-warm-white">12 Cities • Thousand miles</span>
            </div>
         </div>
      </div>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1400, // Zoom cận cảnh hơn vào phía Đông Trung Quốc
          center: [110, 32] // Lệch tâm về phía Đông một chút
        }}
        width={1000}
        height={600}
        style={{ width: "100%", height: "100%", outline: "none" }}
      >
        {/* Lưới kinh độ vĩ độ (Graticule) tạo cảm giác hàng hải/bản đồ chuyên nghiệp */}
        <Graticule stroke="rgba(212, 175, 55, 0.15)" strokeWidth={0.5} step={[4, 4]} />

        {/* Bản đồ địa lý Trung Quốc */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isChina = geo.id === "156" || geo.properties.name === "China";
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isChina ? "rgba(212, 175, 55, 0.03)" : "rgba(255, 255, 255, 0.01)"}
                  stroke={isChina ? "rgba(212, 175, 55, 0.15)" : "transparent"}
                  strokeWidth={isChina ? 1 : 0}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Các thành phố nổi tiếng chưa đặt chân đến (Mờ làm nền) */}
        {unvisitedCitiesData.map((city) => (
          <Marker key={city.id} coordinates={city.coords as [number, number]}>
            <circle r={2} fill="rgba(255,255,255,0.1)" />
            <text
              x={city.dx}
              y={city.dy}
              textAnchor={city.dx > 0 ? "start" : city.dx < 0 ? "end" : "middle"}
              alignmentBaseline="middle"
              fill="rgba(255,255,255,0.15)"
              fontSize={10}
              fontFamily="sans-serif"
              style={{ pointerEvents: "none" }}
            >
              {city.name}
            </text>
          </Marker>
        ))}

        {/* Lộ trình Dấu Chân (Hành trình nối các điểm) */}
        {citiesData.map((city, i) => {
          if (i === citiesData.length - 1) return null;
          const target = citiesData[i + 1];
          return (
            <g key={`path-${city.id}-${target.id}`} className="animate-fade-in" style={{ animationDelay: `${target.delay}s`, animationFillMode: "both" }}>
              <Line
                from={city.coords}
                to={target.coords}
                stroke="rgba(212, 175, 55, 0.5)"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            </g>
          );
        })}

        {/* Render Các Thành Phố Đã Đến */}
        {citiesData.map((city) => {
          const isHovered = hoveredCity === city.id;
          const isSuzhou = city.id === "suzhou";
          
          // Khi hover một thành phố khác, Suzhou vẫn sáng nhưng hơi mờ hơn một chút
          const isFaded = hoveredCity !== null && !isHovered && !isSuzhou;
          // Tô Châu sẽ giữ lại độ sáng ngay cả khi bị fade, nhưng hơi giảm opacity một chút
          const opacityStyle = isSuzhou && hoveredCity !== null && !isHovered ? 0.6 : (isFaded ? 0.3 : 1);

          return (
            <g 
              key={city.id}
              className="cursor-crosshair animate-fade-in"
              style={{ opacity: opacityStyle, transition: "opacity 0.4s ease", animationDelay: `${city.delay}s`, animationFillMode: "both" }}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <Marker coordinates={city.coords}>
                {/* Điểm tâm phát sáng */}
                <circle r={isHovered || isSuzhou ? 5 : 2.5} fill={isHovered ? "#fff" : isSuzhou ? "#D4AF37" : "#D4AF37"} />
                <circle r={isSuzhou ? 12 : 10} fill="rgba(212,175,55,0.3)" className="animate-pulse" />
                
                {/* Tô Châu luôn có quầng sáng lan tỏa (ping) */}
                {(isHovered || isSuzhou) && (
                  <circle r={isSuzhou ? 20 : 16} fill="rgba(212,175,55,0.4)" className="animate-ping" />
                )}
              </Marker>
              
              <Annotation
                subject={city.coords}
                dx={city.dx}
                dy={city.dy}
                connectorProps={{
                  stroke: isSuzhou ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.3)",
                  strokeWidth: isSuzhou ? 1.5 : 1,
                  strokeLinecap: "round"
                }}
              >
                <text
                  x={city.dx > 0 ? 8 : -8}
                  y={0}
                  textAnchor={city.dx > 0 ? "start" : "end"}
                  alignmentBaseline="middle"
                  fill={isHovered ? "#fff" : isSuzhou ? "#D4AF37" : "rgba(255,255,255,0.8)"}
                  fontSize={isHovered ? 15 : isSuzhou ? 14 : 12}
                  fontFamily="sans-serif"
                  fontWeight={isHovered || isSuzhou ? "600" : "400"}
                  letterSpacing="0.05em"
                  style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)", transition: "all 0.3s ease" }}
                >
                  {isSuzhou ? `✦ ${city.name}` : city.name}
                </text>
              </Annotation>
            </g>
          );
        })}
      </ComposableMap>
    </div>
  );
}
