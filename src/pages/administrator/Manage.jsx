import React, { useState } from "react";

// ================= PATIENT DATA =================

const initialUsers = [
  {
    id: 1,
    firstName: "Chikondi",
    lastName: "Phiri",
    condition: "normal",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 2,
    firstName: "Grace",
    lastName: "Banda",
    condition: "prediabetic",
    password: "******",
    active: false,
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: 3,
    firstName: "James",
    lastName: "Phiri",
    condition: "diabetic",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 4,
    firstName: "Esther",
    lastName: "Mbewe",
    condition: "normal",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 5,
    firstName: "Peter",
    lastName: "Kaunda",
    condition: "prediabetic",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 6,
    firstName: "Martha",
    lastName: "Mwale",
    condition: "diabetic",
    password: "******",
    active: false,
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    id: 7,
    firstName: "Brian",
    lastName: "Nyirenda",
    condition: "normal",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 8,
    firstName: "Joyce",
    lastName: "Chirwa",
    condition: "prediabetic",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 9,
    firstName: "Daniel",
    lastName: "Banda",
    condition: "diabetic",
    password: "******",
    active: false,
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: 10,
    firstName: "Helen",
    lastName: "Phiri",
    condition: "normal",
    password: "******",
    active: true,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

// ================= HELPERS =================

const getConditionStyle = (condition) => {
  switch (condition) {
    case "normal":
      return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    case "prediabetic":
      return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
    case "diabetic":
      return "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const getRiskLevel = (condition) => {
  switch (condition) {
    case "normal":
      return { label: "Low", style: "text-emerald-600 dark:text-emerald-400" };
    case "prediabetic":
      return { label: "Medium", style: "text-amber-600 dark:text-amber-400" };
    case "diabetic":
      return { label: "High", style: "text-red-600 dark:text-red-400" };
    default:
      return { label: "Unknown", style: "text-muted-foreground" };
  }
};

// ================= COMPONENT =================

export default function PatientManagement() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, active: !u.active } : u
      )
    );
  };

  const filteredUsers = users.filter((u) =>
    `${u.firstName} ${u.lastName} ${u.condition}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-background text-foreground p-6">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-base font-semibold">
          Patient Management
        </h1>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search patients..."
          className="w-80 px-4 py-2 rounded-lg border border-border bg-background
                     focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* TABLE */}
      <div className="border border-border rounded-xl bg-card shadow overflow-x-auto">

        <table className="w-full min-w-[900px] text-sm">

          {/* HEADER */}
          <thead className="bg-muted text-foreground">
            <tr>
              <th className="p-4 text-left">Patient</th>
              <th className="p-4 text-left">Condition</th>
              <th className="p-4 text-left">Risk Level</th>
              <th className="p-4 text-left">Password</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {filteredUsers.map((user) => {
              const risk = getRiskLevel(user.condition);

              return (
                <tr
                  key={user.id}
                  className="border-t border-border hover:bg-muted/40 transition"
                >

                  {/* PATIENT */}
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={user.avatar}
                      className="w-10 h-10 rounded-full border border-border"
                    />
                    <span className="font-medium">
                      {user.firstName} {user.lastName}
                    </span>
                  </td>

                  {/* CONDITION */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize border ${getConditionStyle(
                        user.condition
                      )}`}
                    >
                      {user.condition}
                    </span>
                  </td>

                  {/* RISK LEVEL */}
                  <td className="p-4">
                    <span className={`font-semibold ${risk.style}`}>
                      {risk.label} Risk
                    </span>
                  </td>

                  {/* PASSWORD */}
                  <td className="p-4 text-muted-foreground">
                    {user.password}
                  </td>

                  {/* STATUS (UPDATED) */}
                  <td className="p-4">
                    {user.active ? (
                      <span className="text-emerald-500 dark:text-emerald-400 font-medium">
                        Activated
                      </span>
                    ) : (
                      <span className="text-red-500 dark:text-red-400 font-medium">
                        Deactivated
                      </span>
                    )}
                  </td>

                  {/* ACTION */}
                  <td className="p-4 text-center">
                    <button
                      onClick={() => toggleStatus(user.id)}
                      className="px-4 py-1.5 rounded-lg text-xs font-medium
                                 bg-primary text-primary-foreground
                                 hover:bg-primary/90 transition"
                    >
                      Toggle
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}