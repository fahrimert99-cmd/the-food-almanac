// Özet kartı: THE TAKEAWAY.
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/51", kirp: [240, 330, 1200, 1050] },
    { gorsel: "tam/56", kirp: [300, 80, 1300, 830] },
    { gorsel: "tam/54", kirp: [140, 130, 1040, 805] },
  ]} />
);

export default S57;
