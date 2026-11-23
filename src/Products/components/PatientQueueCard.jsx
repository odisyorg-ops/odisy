import React from "react";
import { FlaskConical } from "lucide-react";

const PatientQueueCard = ({ data, onNewOrder }) => {
  const getStatusDotStyle = (status) => {
    switch (status) {
      case "Critical Alert":
        return "bg-rose-500 ring-4 ring-rose-500/15 animate-pulse";
      case "Results Ready":
        return "bg-emerald-500 ring-4 ring-emerald-500/15";
      case "Processing":
      default:
        return "bg-amber-400 ring-4 ring-amber-400/15";
    }
  };

  return (
    <div className="card bg-white shadow-xl border border-black/5 p-6 flex flex-col justify-between font-['Comfortaa'] rounded-3xl">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-[#536878] shrink-0">
              <FlaskConical className="size-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 truncate">
              {data.title || "Lab Diagnostics"}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="badge bg-teal-50 text-[#536878] border-none font-bold text-xs px-2.5 py-2">
              {data.badgeText || `${data.reports.length} Reports`}
            </span>
            {data.ctaLabel && (
              <button
                type="button"
                onClick={onNewOrder}
                className="btn btn-xs h-7 rounded-xl bg-[#536878] hover:bg-[#435563] text-white border-none font-bold text-[11px] px-2.5 normal-case"
              >
                {data.ctaLabel}
              </button>
            )}
          </div>
        </div>

        {/* Left-Column Timestamp + Soft Floating Sub-Card Layout */}
        <div className="space-y-4">
          {data.reports.map((report, idx) => (
            <div
              key={report.id || idx}
              className="flex items-center justify-between gap-4"
            >
              {/* Left Column: Timestamp & Priority */}
              <div className="shrink-0 w-16 text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  {report.timestamp}
                </p>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    report.priority === "STAT"
                      ? "text-rose-500"
                      : report.priority === "Urgent"
                      ? "text-amber-500"
                      : "text-slate-400"
                  }`}
                >
                  {report.priority}
                </span>
              </div>

              {/* Floating Soft Sub-Card (Text-Only Layout) */}
              <div className="flex-1 flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-100 shadow-2xs hover:bg-slate-100/70 transition-all min-w-0 cursor-pointer">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-slate-900 truncate">
                      {report.testName}
                    </p>
                    <span className="text-[10px] font-semibold text-[#536878] bg-teal-50/80 px-1.5 py-0.5 rounded-md shrink-0">
                      {report.department}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate mt-0.5">
                    {report.patientName} • {report.orderingDoctor}
                  </p>
                </div>

                {/* Minimal Live Status Dot */}
                <span
                  title={report.status}
                  className={`size-2.5 rounded-full shrink-0 ${getStatusDotStyle(
                    report.status
                  )}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientQueueCard;