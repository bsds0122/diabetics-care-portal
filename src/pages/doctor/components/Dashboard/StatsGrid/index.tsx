import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

/* ✅ TYPES */
type DiabetesTypeStat = {
  type: string;
  male: number;
  female: number;
  percentage: string;
};

type RiskLevelStat = {
  level: string;
  male: number;
  female: number;
  percentage: string;
};

type StatsGridProps = {
  diabetesTypeStats: DiabetesTypeStat[];
  riskLevelStats: RiskLevelStat[];
};

export const StatsGrid = ({
  diabetesTypeStats,
  riskLevelStats,
}: StatsGridProps) => {
  return (
    <Card>
      <CardContent>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 bg-card/20 backdrop-blur-xl">

          {/* ---------------- DIABETES TABLE ---------------- */}
          <div className="bg-card/20 backdrop-blur-xl">

            <h3 className="mb-3 font-semibold">
              Diabetes Type Distribution
            </h3>

            <Table>

              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {diabetesTypeStats.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.male}</TableCell>
                    <TableCell>{row.female}</TableCell>
                    <TableCell>{row.percentage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>

          {/* ---------------- RISK TABLE ---------------- */}
          <div>

            <h3 className="mb-3 font-semibold">
              Cardiovascular Risk Level
            </h3>

            <Table>

              <TableHeader>
                <TableRow>
                  <TableHead>Level</TableHead>
                  <TableHead>Male</TableHead>
                  <TableHead>Female</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {riskLevelStats.map((row) => (
                  <TableRow key={row.level}>
                    <TableCell>{row.level}</TableCell>
                    <TableCell>{row.male}</TableCell>
                    <TableCell>{row.female}</TableCell>
                    <TableCell>{row.percentage}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </div>

        </div>

      </CardContent>
    </Card>
  );
};