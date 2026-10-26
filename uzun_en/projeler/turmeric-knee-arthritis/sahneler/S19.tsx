// Sahne 19 — M R I cihazı: ağrı hafifledi, eklem değişmedi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string }> = ({ t, bas, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al, background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: "12px 32px", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780])} />
      <Etiket t={t} bas={K(0, "M")} bitis={5.4} capa={[580, 300]} konum={[1150, 260]} metin="M R I SCAN" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "did not change")} satirlar={s.meta.baslik!.satirlar} x={1860} y={140} boyut={96} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1180} y={540} aralik={86} boyut={38} genislik={680}
        ogeler={[{ bas: K(1, "swelling"), metin: "JOINT SWELLING", renk: RENK.altin, bitis: 5.5 },
                 { bas: K(1, "cartilage"), metin: "CARTILAGE", renk: RENK.altin, bitis: 5.5 }]} />
      <Etiket t={t} bas={K(2, "extract")} bitis={8.0} capa={[880, 650]} konum={[1250, 850]} metin="EXTRACT" renk={RENK.altin} />
      <Hap t={t} bas={K(2, "ease pain")} metin="PAIN EASED" y={540} renk={RENK.yesil} />
      <Hap t={t} bas={K(2, "without")} metin="JOINT UNCHANGED" y={640} renk={RENK.lacivert} />
    </>
  );
};

export default S19;
