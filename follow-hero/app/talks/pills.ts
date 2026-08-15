// The topic pills. Each carries its own fill and text colour — the set mixes
// saturated fills with white text against pale tints with saturated text, and
// one with no fill at all, so the pile reads as varied rather than as a block
// of colour.

export interface Pill {
  label: string;
  /** Fill. `transparent` renders as an outline-less, text-only pill. */
  bg: string;
  fg: string;
}

export const PILLS: Pill[] = [
  { label: "Product Management", bg: "#3b5bf6", fg: "#ffffff" },
  { label: "Blockchain", bg: "#22bf68", fg: "#ffffff" },
  { label: "Mobile Development", bg: "#8b5cf6", fg: "#ffffff" },
  { label: "Machine Learning", bg: "#ece9fe", fg: "#7c3aed" },
  { label: "Data Analysis", bg: "#f97316", fg: "#ffffff" },
  { label: "AI", bg: "#8e8e8e", fg: "#ffffff" },
  { label: "Fintech", bg: "#111111", fg: "#ffffff" },
  { label: "Cloud & DevOps", bg: "#d3f8e2", fg: "#16a34a" },
  { label: "Cybersecurity", bg: "#f5b400", fg: "#ffffff" },
  { label: "Product Design", bg: "transparent", fg: "#f5b400" },
  { label: "Design Engineering", bg: "#dee7ff", fg: "#3b5bf6" },
  { label: "Engineering", bg: "#ffe4e6", fg: "#ef4444" },
];
