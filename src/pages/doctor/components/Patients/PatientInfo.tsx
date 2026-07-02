
export const PatientInfo = ({
  firstName,
  lastName,
  isSelected,
}) => {
  return (
    <div className="flex-1 text-left relative z-10">
      <p
        className={`text-sm font-semibold tracking-tight ${
          isSelected
            ? "text-primary"
            : "text-foreground group-hover:text-primary"
        }`}
      >
        {firstName} {lastName}
      </p>
    </div>
  );
};