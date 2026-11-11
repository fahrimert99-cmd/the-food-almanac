// Sahne 52 — mekanizma: jel → safra asitleri kaybı; sağda adım listesi, sonra "MODEST" rozeti.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, Not, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol }
  from "../kutuphane";

const ADIMLAR = [
  { ifade: "forming", metin: "FORMS A GEL IN THE GUT", renk: RENK.altin },
  { ifade: "lose", metin: "BILE ACIDS ARE LOST", renk: RENK.mercan },
  { ifade: "made", metin: "MADE FROM CHOLESTEROL", renk: RENK.koyuYesil },
];

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tModest = K(1, "modest,");
  const cikis = tModest - 0.15;
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        <Etiket t={t} bas={K(0, "gel")} bitis={cikis} capa={[515, 785]} konum={[250, 890]} metin="OAT GEL" renk={RENK.altin} />
        <Parcaciklar t={t} bas={K(0, "bile")} kaynak={[700, 760]} hedef={[300, 930]} adet={16} aralik={0.14} omur={1.6} yayilma={160}
          kavis={0} renk={RENK.mercan} tohum="bile" />
      </Kamera>
      {ADIMLAR.map((a, i) => {
        const bas = K(0, a.ifade) - 0.05;
        const [sc, al] = pop(t, bas, 0.5);
        const o = al * sol(t, cikis);
        if (o <= 0) return null;
        return (
          <div key={a.metin} style={{ position: "absolute", left: 1500, top: 230 + i * 150, width: 380, opacity: o,
            transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 56, height: 56, flex: "none", borderRadius: "50%", background: a.renk, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 32 }}>{i + 1}</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, lineHeight: 1.2, color: RENK.lacivert }}>{a.metin}</div>
          </div>
        );
      })}
      <VurguRozet t={t} bas={tModest} vurgu="MODEST" not="EFFECT" x={1690} y={240} genislik={380} boyut={80} renk={RENK.altin} />
      <Not t={t} bas={K(1, "larger") - 0.1} metin="MAY BE LARGER WHEN LDL STARTS HIGH" x={1500} y={470} genislik={380} boyut={34} agirlik={800} />
    </>
  );
};

export default S52;
