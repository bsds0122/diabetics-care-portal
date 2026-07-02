import { useProfile } from "./use-Profile";

export const useLayout = () => {
  const {
    profile,
    logout,
  } = useProfile();

  return {
    profile,
    handleSignOut: logout,
  };
};