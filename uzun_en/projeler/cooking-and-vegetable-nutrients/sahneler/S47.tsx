// Sahne 47 — güvenlik notu: K vitamini ve varfarin
import React from "react";
import { Etiket, Ikon, Kamera, KaynakEtiketi, Liste, RENK, SP, BaslikBlok, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* hap kutusundaki sahte etiket yaması */}
        <div style={{ position: "absolute", left: 868, top: 360, width: 110, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "leafy")} />
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1130} y={250} boyut={118} renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(0, "note")} ad="uyari" x={1560} y={235} boyut={92} zemin={RENK.altin} />
      <Etiket t={t} bas={K(1, "vitamin")} capa={[720, 230]} konum={[1000, 120]} metin="VITAMIN K" renk={RENK.yesil} boyut={28} />
      <Etiket t={t} bas={K(1, "warfarin.")} capa={[800, 540]} konum={[1200, 480]} metin="WARFARIN" renk={RENK.mercan} boyut={28} />
      <Liste t={t} x={1130} y={560} boyut={34} isaret="onay" genislik={720} aralik={100} ogeler={[
        { bas: K(2, "steady"), metin: "STEADY VITAMIN K INTAKE" },
        { bas: K(2, "talk"), metin: "ASK YOUR DOCTOR OR PHARMACIST", renk: RENK.altin },
      ]} />
    </>
  );
};
export default S47;
