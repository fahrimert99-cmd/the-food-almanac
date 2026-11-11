// Sahne 22 — Queenan 2007 sonucu: yulaf grubunda LDL düştü, plasebo neredeyse hiç oynamadı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOat = K(0, "oat group");
  const tPlc = K(0, "placebo");
  const tSig = K(1, "statistically significant");
  const tSmall = K(1, "small");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800])}>
        <Etiket t={t} bas={tOat} capa={[880, 720]} konum={[1010, 900]} metin="OATS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={K(0, "LDL") + 0.2} satirlar={["OAT FIBER", "VS PLACEBO"]} x={1860} y={200} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "0.3")} vurgu="–0.3 mmol/L" not="OAT GROUP · ≈ 12 mg/dL" x={1560} y={410} genislik={560}
        boyut={82} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", right: 60, top: 660 }}>
        {t >= tPlc && (
          <Hap metin="PLACEBO: BARELY MOVED" renk={RENK.gri} boyut={30}
            style={{ transform: `translateX(${Math.max(0, 1 - (t - tPlc) * 3) * 40}px)`, opacity: Math.min(1, (t - tPlc) * 3) }} />
        )}
      </div>
      <div style={{ position: "absolute", right: 60, top: 768, opacity: Math.min(1, Math.max(0, (t - tSig) * 3)) }}>
        <Hap metin="SIGNIFICANT DIFFERENCE" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 848, opacity: Math.min(1, Math.max(0, (t - tSmall) * 3)) }}>
        <Hap metin="BUT A SMALL STUDY" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S22;
