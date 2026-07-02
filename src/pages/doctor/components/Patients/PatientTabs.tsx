import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Activity,
  MapPin,
  User,
} from "lucide-react";

import { Patient } from "@/types/patient";

interface PatientTabsProps {
  selected: Patient | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  medical: Activity,
  personal: User,
  location: MapPin,
};

const DetailItem = ({
  label,
  value,
}: {
  label: string;
  value?: unknown;
}) => (
  <div
    className="
      flex items-center justify-between
      py-4
      border-b border-border/40
      last:border-0
      gap-4
    "
  >
    <span className="text-sm text-muted-foreground">
      {label}
    </span>

    <span className="font-medium text-right text-sm">
      {value !== undefined && value !== null && value !== ""
        ? String(value)
        : "-"}
    </span>
  </div>
);

export const PatientTabs: React.FC<PatientTabsProps> = ({
  selected,
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    {
      value: "personal",
      label: "Personal",
    },
    {
      value: "location",
      label: "Location",
    },
    {
      value: "medical",
      label: "Medical",
    },
  ];

  return (
    <div
      className="
        mt-16
        px-6
        pb-6
        flex-1
        relative
        z-10
        h-full
        flex
        flex-col
        overflow-hidden
      "
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col h-full min-h-0"
      >
        {/* TAB HEADER */}
        <div className="sticky top-0 z-20 pb-4 bg-background/40 backdrop-blur-xl">
          <TabsList
            className="
              w-full
              grid
              grid-cols-3
              rounded-2xl
              border border-border/60
              bg-card/20
              backdrop-blur-xl
              shadow-sm
              p-1
              gap-2
            "
          >
            {tabs.map((tab) => {
              const Icon = iconMap[tab.value];

              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="py-2.5 rounded-xl whitespace-nowrap gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {/* TAB CONTENT */}
        <div className="flex-1 overflow-hidden mt-4">

          {/* MEDICAL */}
          <TabsContent
            value="medical"
            className="h-full mt-0 overflow-y-auto no-scrollbar outline-none"
          >
            <div className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm p-6">
              <DetailItem
                label="Diagnosis Date"
                value={selected?.dateOfDiagnosis}
              />

              <DetailItem
                label="Diabetes Type"
                value={selected?.diabetesType}
              />

              <DetailItem
                label="Next of Kin Number"
                value={selected?.nextOfKinNumber}
              />
            </div>
          </TabsContent>

          {/* PERSONAL */}
          <TabsContent
            value="personal"
            className="h-full mt-0 overflow-y-auto no-scrollbar outline-none"
          >
            <div className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm p-6">
              <DetailItem
                label="Patient ID"
                value={selected?.id}
              />

              <DetailItem
                label="First Name"
                value={selected?.firstName}
              />

              <DetailItem
                label="Last Name"
                value={selected?.lastName}
              />

              <DetailItem
                label="Sex"
                value={selected?.sex}
              />

              <DetailItem
                label="Phone Number"
                value={selected?.phone}
              />
            </div>
          </TabsContent>

          {/* LOCATION */}
          <TabsContent
            value="location"
            className="h-full mt-0 overflow-y-auto no-scrollbar outline-none"
          >
            <div className="rounded-2xl border border-border/60 bg-card/20 backdrop-blur-sm p-6">
              <DetailItem
                label="Region"
                value={selected?.region}
              />

              <DetailItem
                label="District"
                value={selected?.district}
              />

              <DetailItem
                label="Traditional Authority"
                value={selected?.traditionalAuthority}
              />

              <DetailItem
                label="Village"
                value={selected?.village}
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};