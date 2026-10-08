// Sahne 28 — İkinci anahtar: kasılma (kalsiyum, AMPK) GLUT4'ü insülinden bağımsız yüzeye taşır.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Hap, IkonYol, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "separate"), 0.5);
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <BaslikBlok t={t} bas={K(1, "contracts")} satirlar={b?.satirlar ?? []} x={1860} y={170} boyut={100} hiza="sag" renkler={[RENK.koyuYesil]} />
      {b?.not && <Not t={t} bas={K(1, "contracts") + 0.4} metin={b.not} x={1860} y={238} hiza="sag" genislik={760} boyut={32} />}
      <Etiket t={t} bas={K(0, "second")} bitis={K(1, "calcium")} capa={[1200, 560]} konum={[1200, 730]} metin="MUSCLE FIBER" renk={RENK.mercan} />
      <AdimAkisi t={t} x={960} y={880} boyut={32} numarali={false} adimlar={[
        { bas: K(1, "calcium"), metin: "CALCIUM", renk: RENK.altin },
        { bas: K(1, "AMPK"), metin: "AMPK", renk: RENK.altin },
        { bas: K(1, "move"), metin: "GLUT4 TO SURFACE", renk: RENK.yesil },
      ]} />
      <div style={{ position: "absolute", right: 60, top: 320, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%",
        display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={34} renk="#fff" />
        </span>
        <Hap metin="SEPARATE FROM INSULIN" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S28;
