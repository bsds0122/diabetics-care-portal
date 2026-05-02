import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const PatientTableRow = ({
  patient,
  getStatusColor,
  onRowClick,
}) => {
  return (
    <tr
      onClick={() => onRowClick(patient)}
      className="group cursor-pointer border-b border-border/40 bg-card/20 backdrop-blur-xl hover:bg-muted/30 transition-all duration-200"
    >
      {/* Patient Avatar */}
      <td className="px-6 py-4 whitespace-nowrap">
        <Avatar className="h-10 w-10 border border-primary/20">
          <AvatarImage src={patient.avatar} alt={`${patient.firstName} ${patient.lastName}`} />
          <AvatarFallback className="bg-primary/10 text-primary font-bold">
            {patient.firstName?.charAt(0)}{patient.lastName?.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </td>

      {/* First Name */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">
          {patient.firstName}
        </span>
      </td>

      {/* Last Name */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="font-medium text-foreground/90 group-hover:text-foreground transition-colors">
          {patient.lastName}
        </span>
      </td>

      {/* Health Status */}
      <td className="px-6 py-4 text-right whitespace-nowrap">
        <span
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border shadow-sm ${getStatusColor(
            patient.status
          )}`}
        >
          <span className="w-2 h-2 rounded-full bg-current opacity-70"></span>
          {patient.status}
        </span>
      </td>
    </tr>
  );
};