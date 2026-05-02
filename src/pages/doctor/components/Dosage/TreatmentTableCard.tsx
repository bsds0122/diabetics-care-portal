import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const DosagePage = () => {
  const [search, setSearch] = useState("");

  const patients = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      drug: "Metformin",
      dateIssued: "2026-04-20",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      firstName: "Mary",
      lastName: "Smith",
      drug: "Insulin",
      dateIssued: "2026-04-18",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      firstName: "Alex",
      lastName: "Johnson",
      drug: "Metformin",
      dateIssued: "2026-04-15",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      id: 4,
      firstName: "Grace",
      lastName: "Phiri",
      drug: "Glyburide",
      dateIssued: "2026-04-14",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 5,
      firstName: "William",
      lastName: "Banda",
      drug: "Insulin",
      dateIssued: "2026-04-12",
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 6,
      firstName: "Esther",
      lastName: "Kumwenda",
      drug: "Metformin",
      dateIssued: "2026-04-10",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 7,
      firstName: "Daniel",
      lastName: "Chirwa",
      drug: "Sulfonylureas",
      dateIssued: "2026-04-09",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
      id: 8,
      firstName: "Patricia",
      lastName: "Mkandawire",
      drug: "Insulin",
      dateIssued: "2026-04-07",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    {
      id: 9,
      firstName: "Joseph",
      lastName: "Nyirenda",
      drug: "Metformin",
      dateIssued: "2026-04-05",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    },
    {
      id: 10,
      firstName: "Catherine",
      lastName: "Manda",
      drug: "GLP-1 agonists",
      dateIssued: "2026-04-03",
      avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      id: 11,
      firstName: "Friday",
      lastName: "Jere",
      drug: "Metformin",
      dateIssued: "2026-04-01",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      id: 12,
      firstName: "Janet",
      lastName: "Likoma",
      drug: "Insulin",
      dateIssued: "2026-03-30",
      avatar: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    {
      id: 13,
      firstName: "Owen",
      lastName: "Chidanti",
      drug: "SGLT2 inhibitors",
      dateIssued: "2026-03-28",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
      id: 14,
      firstName: "Martha",
      lastName: "Msukwa",
      drug: "Metformin",
      dateIssued: "2026-03-26",
      avatar: "https://randomuser.me/api/portraits/women/37.jpg",
    },
    {
      id: 15,
      firstName: "Peter",
      lastName: "Mwale",
      drug: "Insulin",
      dateIssued: "2026-03-25",
      avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    },
  ];

  const filteredPatients = patients.filter((p) =>
    `${p.firstName} ${p.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Card className="p-6 rounded-2xl border border-border/60 bg-card/20 backdrop-blur-xl shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-end mb-6">

        {/* SEARCH */}
        <div className="relative w-[280px]">
          <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search patient by name..."
            className="pl-9 rounded-xl"
          />
        </div>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* HEADER */}
          <thead>
            <tr className="text-left text-muted-foreground border-b">
              <th className="py-3">Patient</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Drug Name</th>
              <th>Date Issued</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {filteredPatients.map((p) => (
              <tr
                key={p.id}
                className="border-b hover:bg-muted/30 transition"
              >

                {/* AVATAR */}
                <td className="py-4">
                  <img
                    src={p.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                </td>

                {/* FIRST NAME */}
                <td className="font-medium text-foreground">
                  {p.firstName}
                </td>

                {/* LAST NAME */}
                <td className="font-medium text-foreground">
                  {p.lastName}
                </td>

                {/* DRUG */}
                <td className="font-medium text-primary">
                  {p.drug}
                </td>

                {/* DATE */}
                <td className="text-muted-foreground">
                  {p.dateIssued}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
};