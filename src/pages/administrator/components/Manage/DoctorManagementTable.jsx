import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const DoctorManagementTable = ({ doctors }) => {
  return (
    <div className="w-full bg-card border border-border/50 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          {/* Header */}
          <TableHeader className="bg-muted/20">
            <TableRow>
            <TableHead className="w-[70px]"></TableHead>
              <TableHead className="text-sm font-semibold">Doctor</TableHead>
              <TableHead className="text-sm font-semibold">Email</TableHead>
              <TableHead className="text-sm font-semibold">Password</TableHead>
              <TableHead className="text-sm font-semibold">Action</TableHead>
              <TableHead className="text-sm font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>

          {/* Body */}
          <TableBody>
            {doctors.length > 0 ? (
              doctors.map((doc) => (
                <TableRow
                  key={doc.id}
                  className="hover:bg-muted/10 transition"
                >
                  {/* Avatar */}
                  <TableCell className="py-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={doc.avatar}
                        alt={`${doc.firstName} ${doc.lastName}`}
                      />
                      <AvatarFallback className="text-xs font-medium">
                        {doc.firstName?.charAt(0)}
                        {doc.lastName?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </TableCell>

                  {/* Doctor Name */}
                  <TableCell className="py-3 text-sm font-medium text-foreground">
                    Dr. {doc.firstName} {doc.lastName}
                  </TableCell>

                  {/* Email */}
                  <TableCell className="py-3 text-sm text-muted-foreground">
                    {doc.email}
                  </TableCell>

                  {/* License */}
                  <TableCell className="py-3 text-sm text-muted-foreground">
                    {doc.license}
                  </TableCell>

                  {/* Action */}
                  <TableCell className="py-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 text-xs min-w-[100px]"
                    >
                      {doc.status === "active"
                        ? "Deactivate"
                        : "Activate"}
                    </Button>
                  </TableCell>

                  {/* Status */}
                  <TableCell className="py-3">
                    <Badge
                      variant={
                        doc.status === "active" ? "success" : "secondary"
                      }
                      className="capitalize px-2 py-0.5 text-xs"
                    >
                      {doc.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-28 text-center text-muted-foreground text-sm"
                >
                  No doctors available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};