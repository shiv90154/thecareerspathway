export const isAdmin = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("cps_admin_token") === "yes";
  }
  return false;
};
