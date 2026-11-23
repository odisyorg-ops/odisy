import React from "react";
import { BedDouble, CheckCircle2 } from "lucide-react";

const FacilityCapacityCard = ({ data }) => (
  <div className="card bg-white shadow-xl border border-black/5 p-6 flex flex-col justify-between font-['Comfortaa'] rounded-3xl">
    <div>
      {/* Header matching the reference aesthetic */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-teal-50 text-[#536878]">
            <BedDouble className="size-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {data.title || "Bed Availability"}
          </h3>
        </div>
        <span className="badge bg-emerald-50 text-emerald-700 border-none font-bold text-xs px-2.5 py-2">
          {data.openBadge || "23 Open"}
        </span>
      </div>

      {/* Facility Rows structured like floating sub-cards */}
      <div className="space-y-3">
        {data.items.map((item, idx) => {
          const percentage = Math.round((item.available / item.total) * 100);
          
          return (
            <div 
              key={idx} 
              className="flex items-center justify-between p-3 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-2xs hover:bg-slate-100/70 transition-all gap-3"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 truncate">{item.label}</span>
                  <span className="text-[11px] font-bold text-slate-700 shrink-0">
                    {item.available} <span className="text-slate-400 font-normal">/ {item.total} free</span>
                  </span>
                </div>
                {/* Modern subtle progress track */}
                <div className="w-full h-1.5 bg-slate-200/70 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${item.color || "bg-[#536878]"}`} 
                    style={{ width: `${percentage}%` }} 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Footer summary matching dashboard flow */}
    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
      <span className="flex items-center gap-1">
        <CheckCircle2 className="size-3 text-emerald-600" /> {data.totalCapacityText || "Total Capacity: 65 Beds"}
      </span>
      <span className="font-bold text-[#536878]">{data.occupancyRateText || "64.6% Occupied"}</span>
    </div>
  </div>
);

export default FacilityCapacityCard;