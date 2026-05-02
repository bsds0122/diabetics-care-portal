import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  UserCircle2,
  Activity,
  FileText,
  AlertTriangle,
} from "lucide-react";

import { AboutTab } from "@/pages/doctor/components/Patients/About/AboutTab";
import { TrendsTab } from "@/pages/doctor/components/Patients/Trends/TrendsTab";

export const PatientTabs = ({
  selected,
  activeMetric,
  setActiveMetric,
  activeTab,
  setActiveTab,
  trends,
}) => {
  return (
    <div className="mt-16 px-6 pb-6 flex-1 relative z-10 h-full flex flex-col overflow-hidden">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex flex-col h-full min-h-0"
      >
        {/* Fixed Professional Tabs Header */}
        <div className="sticky top-0 z-20 pb-4 bg-background/40 backdrop-blur-xl">
          <TabsList className="w-full grid grid-cols-4 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm p-1 gap-2">
            <TabsTrigger
              value="about"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl"
            >
              <UserCircle2 className="h-4 w-4" />
              About
            </TabsTrigger>

            <TabsTrigger
              value="medical"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl"
            >
              <FileText className="h-4 w-4" />
              Reports
            </TabsTrigger>

            <TabsTrigger
              value="complications"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl"
            >
              <AlertTriangle className="h-4 w-4" />
              Complications
            </TabsTrigger>

            <TabsTrigger
              value="trends"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl"
            >
              <Activity className="h-4 w-4" />
              Trends
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Scrollable Content Only */}
        <div className="flex-1 min-h-0 overflow-y-auto pt-2 pr-1">
          <TabsContent value="about" className="mt-0">
            <AboutTab selected={selected} />
          </TabsContent>

          <TabsContent value="medical" className="mt-0">
            <div className="rounded-2xl border bg-card/20 backdrop-blur-xl p-6 text-sm text-muted-foreground shadow-sm">
              No reports available.
            </div>
          </TabsContent>

          <TabsContent value="complications" className="mt-0">
            <div className="rounded-2xl border bg-card/20 backdrop-blur-xl p-6 shadow-sm">
              Complications content here
            </div>
          </TabsContent>

          <TabsContent value="trends" className="mt-0">
            <TrendsTab
              activeMetric={activeMetric}
              setActiveMetric={setActiveMetric}
              trends={trends}
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};