
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";

import {
  PatientTableHeader,
  PatientTableHead,
  PatientTableEmpty,
} from "@/pages/doctor/components/Manage/Table";

import { PatientTableRow} from "@/pages/doctor/components/Manage/Table/PatientTableRow/PatientTableRow";

export const PatientTable = ({
  search,
  setSearch,
  filtered,
  onStatusChange,
}) => {
  return (
    <Card className="rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden">

      {/* Header (search bar) */}
      <PatientTableHeader search={search} setSearch={setSearch} />

      {/* Table */}
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <PatientTableHead />

            <TableBody>
              {filtered.length === 0 ? (
                <PatientTableEmpty />
              ) : (
                filtered.map((p) => (
                  <PatientTableRow
                    key={p.id}
                    patient={p}
                    onStatusChange={onStatusChange}
                  />
                ))
              )}
            </TableBody>

          </Table>
        </div>
      </CardContent>

    </Card>
  );
};