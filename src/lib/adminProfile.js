export const adminProfile = {
  name: "Admin User",
  email: "admin@hospital.mw",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  initials: "AU",
};

export const handleSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("userId");
  localStorage.removeItem("expireTime");
};