// Sahne 7 — "best if used by" = kalite; sağ sütunda sıralı vurgular.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Liste, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUsda = K(0, "USDA"), tKal = K(1, "quality"), tAbout = K(2, "About");
  const aK = eout(ilerle(t, K(1, "2019"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(0, "used")} bitis={3.9} capa={[487, 440]} konum={[240, 175]} metin="BEST IF USED BY" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={["BEST IF", "USED BY"]} x={1860} y={200} boyut={108} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tUsda} bitis={tKal - 0.2} vurgu="QUALITY" not="the USDA's recommended phrase" x={1560} y={450} genislik={470} />
      {/* kaynak hapı sağ altta (sol üst saati kapatırdı) */}
      <div style={{ position: "absolute", right: 60, top: 870, opacity: aK, display: "flex", alignItems: "center", gap: 14,
        background: RENK.lacivert, borderRadius: 999, padding: "12px 28px 12px 20px", color: "#fff", fontFamily: INTER,
        fontWeight: 800, fontSize: 26, transform: `translateY(${(1 - aK) * 10}px)` }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        {s.meta.etiket}
      </div>
      <Liste t={t} isaret="onay" x={1330} y={470} aralik={110} boyut={36} genislik={540}
        ogeler={[{ bas: tKal, metin: "SIGN OF QUALITY", renk: RENK.yesil, bitis: tAbout - 0.2 },
                 { bas: K(1, "safety"), metin: "NOT OF SAFETY", renk: RENK.mercan, bitis: tAbout - 0.2 }]} />
      <VurguRozet t={t} bas={K(2, "70")} vurgu="≈ 70%" not="of adults surveyed got that right" x={1560} y={450} genislik={470} />
    </>
  );
};

export default S07;
