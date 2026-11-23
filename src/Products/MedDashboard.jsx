import React from "react";
import clinicData from "../Products/data/clinicData.json";
import SideNavigationCard from "../Products/components/SideNavigationCard";
import WelcomeBanner from "../Products/components/WelcomeBanner";
import FacilityCapacityCard from "../Products/components/FacilityCapacityCard";
import AvailableDoctorsCard from "../Products/components/AvailableDoctorsCard";
import PatientQueueCard from "../Products/components/PatientQueueCard";
import PatientTableSection from "../Products/components/PatientTableSection";

export const MedDashboard = () => {
  return (
    <div className="min-h-screen bg-neutral-100 font-['Comfortaa'] flex p-4 lg:p-6 gap-6">
      {/* 15vw Side Navigation Card */}
      <SideNavigationCard
        brand={clinicData.brand}
        navigation={clinicData.navigation}
        user={clinicData.user}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        <div className="w-full mx-auto" style={{ maxWidth: "min(100vw, 85rem)" }}>
          {/* Row 1: Hero Banner */}
          <WelcomeBanner
            badge={clinicData.brand.badge}
            title={clinicData.banner.title}
            subtitle={clinicData.banner.subtitle}
          />

          {/* Row 2: 3 Operational Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FacilityCapacityCard data={clinicData.facilityCapacity} />
            <AvailableDoctorsCard data={clinicData.doctorsOnDuty} />
            <PatientQueueCard data={clinicData.labDiagnostics} />
          </div>

          {/* Row 3: Patient Directory Table */}
          <PatientTableSection data={clinicData.patientDirectory} />
        </div>
      </main>
    </div>
  );
};

export default MedDashboard;