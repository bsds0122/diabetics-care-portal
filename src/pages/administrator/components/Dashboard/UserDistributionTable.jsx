import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users, User, UserCheck, Percent } from "lucide-react";

export const UserDistributionTable = ({ data }) => {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Users className="w-3 h-3 text-primary" />
        </div>
        <h2 className="text-base font-bold tracking-tight">User Distribution</h2>
      </div>

      <div className="rounded-xl border border-border/40 overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow>
              <TableHead className="w-[200px] font-bold">User Type</TableHead>
              <TableHead className="font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Male
                </div>
              </TableHead>
              <TableHead className="font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                  Female
                </div>
              </TableHead>
              <TableHead className="text-right font-bold">
                 <div className="flex items-center justify-end gap-2">
                  <Percent className="w-4 h-4 text-muted-foreground" />
                  Growth
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 ? (
              data.map((row, index) => (
                <TableRow key={index} className="hover:bg-muted/20 transition-colors">
                  <TableCell className="font-semibold text-foreground/90 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                          <UserCheck className="w-4 h-4 text-muted-foreground" />
                       </div>
                       {row.user}
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-base font-medium">{row.men}</span>
                  </TableCell>
                  <TableCell className="py-4">
                     <span className="text-base font-medium">{row.female}</span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success border border-success/20">
                      {row.percentage}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="h-32 text-center text-muted-foreground">
                   <div className="flex flex-col items-center gap-2">
                      <Users className="w-8 h-8 opacity-20" />
                      <p>No distribution data available</p>
                   </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};