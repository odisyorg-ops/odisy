import React from "react";

const PatientTableSection = ({ data }) => (
  <div className="card bg-white shadow-xl border border-black/5 p-6 mt-8 font-['Comfortaa'] rounded-3xl">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900">{data.title}</h3>
        <p className="text-xs text-slate-500 mt-0.5">{data.subtitle}</p>
      </div>
      <button className="btn btn-sm bg-[#0a0a0a] text-white hover:bg-[#536878] rounded-xl border-none">
        {data.ctaLabel}
      </button>
    </div>

    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-slate-400 text-xs uppercase">
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-xs rounded" />
              </label>
            </th>
            <th>Patient</th>
            <th>Consultation Type</th>
            <th>Queue Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.patients.map((p, idx) => (
            <tr key={idx} className="hover:bg-neutral-50 transition-colors">
              <th>
                <label>
                  <input type="checkbox" className="checkbox checkbox-xs rounded" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={p.avatar} alt={p.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{p.name}</div>
                    <div className="text-xs opacity-50">{p.location}</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="font-medium text-slate-700">{p.consultationType}</span>
              </td>
              <td>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#536878]/10 text-[#536878]">
                  {p.status}
                </span>
              </td>
              <th>
                <button className="btn btn-ghost btn-xs text-[#536878] font-bold">Open EMR</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PatientTableSection;