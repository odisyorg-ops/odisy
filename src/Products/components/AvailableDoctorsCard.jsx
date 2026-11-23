import React from "react";
import { Stethoscope } from "lucide-react";

const AvailableDoctorsCard = ({ data }) => (
  <div className="card bg-white shadow-xl border border-black/5 p-6 flex flex-col justify-between font-['Comfortaa'] rounded-3xl">
    <div>
      {/* Header matching the clean reference design */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-teal-50 text-[#536878]">
            <Stethoscope className="size-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">
            {data.title || "Doctors on Duty"}
          </h3>
        </div>
        <span className="badge bg-teal-50 text-[#536878] border-none font-bold text-xs px-2.5 py-2">
          {data.doctors.length} Active
        </span>
      </div>

      {/* Left-Column Room + Soft Floating Sub-Card Layout */}
      <div className="space-y-4">
        {data.doctors.map((doc, idx) => (
          <div key={idx} className="flex items-center justify-between gap-4">
            
            {/* Left Column: Room Number */}
            <span className="text-xs font-bold text-slate-800 shrink-0 w-16 text-left">
              {doc.room}
            </span>

            {/* Floating Soft Sub-Card for Doctor Profile */}
            <div className="flex-1 flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-2xs hover:bg-slate-100/70 transition-all min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="avatar shrink-0">
                  <div className="w-10 h-10 rounded-full ring-1 ring-slate-200">
                    <img src={doc.avatar} alt={doc.name} />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">{doc.name}</p>
                  <p className="text-[11px] text-slate-400 truncate">
                    {doc.specialty}
                  </p>
                </div>
              </div>

              {/* Minimal Live Status Dot */}
              <span
                title={doc.status}
                className={`size-2.5 rounded-full shrink-0 ${
                  doc.status === "Available"
                    ? "bg-emerald-500 ring-4 ring-emerald-500/15"
                    : doc.status === "In Session"
                    ? "bg-[#536878] ring-4 ring-[#536878]/15"
                    : "bg-amber-400 ring-4 ring-amber-400/15"
                }`}
              />
            </div>

          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AvailableDoctorsCard;