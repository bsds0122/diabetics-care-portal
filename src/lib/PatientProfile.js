export const doctorProfile = {
    name: "Patient john",
    avatar:
      "https://randomuser.me/api/portraits/men/9.jpg",
    initials: "DT",
  };
  
  export const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("expireTime");
  };