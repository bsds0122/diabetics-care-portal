import {
  ActiveIndicator,
  HoverGlow,
  PatientAvatar,
  PatientInfo,
} from "./Item";

export const PatientListItem = ({
  patient: p,
  selectedId,
  setSelectedId,
}) => {
  const isSelected = selectedId === p.id;

  return (
    <button
      onClick={() => setSelectedId(p.id)}
      className={`group relative w-full flex items-center gap-3 p-3 rounded-xl overflow-hidden ${
        isSelected
          ? "bg-card/20 backdrop-blur-xl shadow-md shadow-primary/10 ring-1 ring-primary/20"
          : "hover:bg-muted/40"
      }`}
    >
      <ActiveIndicator isSelected={isSelected} />
      <HoverGlow />

      <PatientAvatar
        avatar={p.avatar}
        firstName={p.firstName}
        lastName={p.lastName}
        isSelected={isSelected}
      />

      <PatientInfo
        firstName={p.firstName}
        lastName={p.lastName}
        isSelected={isSelected}
      />
    </button>
  );
};