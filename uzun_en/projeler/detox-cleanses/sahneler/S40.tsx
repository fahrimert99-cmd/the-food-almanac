// Sahne 40 — bölüm kartı: dürüst kısım
import React from "react";
import { BolumKarti, SP } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => (
  <BolumKarti t={t} s={s} gorseller={[
    { gorsel: "tam/41", kirp: [420, 60, 1420, 810] },
    { gorsel: "tam/42", kirp: [200, 330, 1200, 1080] },
    { gorsel: "tam/45", kirp: [900, 200, 1900, 950] },
  ]} />
);

export default S40;
