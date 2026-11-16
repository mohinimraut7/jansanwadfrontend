// ─────────────────────────────────────────────────────────────
// Role helpers — Applications section कोणाला दिसू नये ते इथे ठरते.
// Mayor, Dy. Mayor, Corporator (नगरसेवक) → Applications hidden.
// नवीन role add करायचा असेल तर फक्त NO_APPLICATIONS_ROLES मध्ये टाका.
// ─────────────────────────────────────────────────────────────

const NO_APPLICATIONS_ROLES = [
  "mayor", "महापौर",
  "dy mayor", "deputy mayor", "dymayor", "उपमहापौर", "उप महापौर",
  "corporator", "ward councillor", "councillor", "नगरसेवक",
];

// "Dy. Mayor", "DY MAYOR", "Deputy-Mayor" → सगळे एकसारखे compare होतात
const normalize = (v) =>
  String(v || "").toLowerCase().replace(/[._\-]+/g, " ").replace(/\s+/g, " ").trim();

// Redux user नसेल (page refresh) तर localStorage मधला authUser वापरतो
export const getCurrentUser = (user) => {
  if (user) return user;
  try { return JSON.parse(localStorage.getItem("authUser") || "null"); }
  catch { return null; }
};

export const canSeeApplications = (user) => {
  const u = getCurrentUser(user);
  if (!u) return false;
  const values = [u.role, u.designation, u.post, u.officeBearerType].map(normalize);
  return !values.some((v) => NO_APPLICATIONS_ROLES.includes(v));
};