export const doctorProfile = {
    name: "Doctor Mwanza",
    email: "mwanza.dr@hospital.mw",
    avatar:
      "https://randomuser.me/api/portraits/men/65.jpg",
    initials: "DT",
  };
  
  export const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("expireTime");
  };