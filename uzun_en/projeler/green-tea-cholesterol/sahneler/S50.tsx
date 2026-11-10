// Sahne 50 — bölüm kartı: "The cup, not the capsule" (PART 7). Altta dört noktalık küçük sayaç.
import React from "react";
import { BolumKarti, INTER, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// Kart görselleri: bölüm sahnelerinden kusursuz 4:3 kırpımlar
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/51", kirp: [560, 120, 1360, 720] },
  { gorsel: "tam/52", kirp: [100, 150, 1300, 1050] },
  { gorsel: "tam/53", kirp: [150, 0, 1350, 900] },
];

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t4 = K(1, "four");
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      {/* "four practical points": dört sayı sırayla belirir */}
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((n) => {
          const [sc, al] = pop(t, t4 + (n - 1) * 0.28, 0.45);
          return (
            <div key={n} style={{ transform: `scale(${sc})`, opacity: al, width: 64, height: 64, borderRadius: "50%",
              background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: INTER, fontWeight: 800, fontSize: 32, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>{n}</div>
          );
        })}
      </div>
    </>
  );
};

export default S50;
