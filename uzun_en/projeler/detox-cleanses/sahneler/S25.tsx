// Sahne 25 — Kan şekeri: meyve suyu ve diyabet riski (Muraki 2013). Solda görsel, sağda başlık + sayılar.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sayac, sol } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1780]);
  const tH = K(2, "Harvard"), tN = K(2, "187,382"), t8 = K(2, "8 percent");
  const aN = eout(ilerle(t, tN - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/25" pencere={cam}>
        <Etiket t={t} bas={K(0, "blood")} bitis={1.6} capa={[975, 650]} konum={[1330, 760]} metin="BLOOD SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "less fiber")} bitis={4.2} capa={[935, 330]} konum={[1330, 330]} metin="LESS FIBER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "whole fruit")} bitis={4.2} capa={[900, 700]} konum={[1330, 560]} metin="WHOLE FRUIT" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} bas={tH} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={tH} satirlar={b.satirlar} x={1230} y={210} boyut={92} />
      <div style={{ position: "absolute", left: 1230, top: 410, opacity: aN * sol(t, 1e9), transform: `translateY(${(1 - aN) * 12}px)`,
        background: "#FCF8EC", border: `3px solid ${RENK.lacivert}`, borderRadius: 18, padding: "8px 22px", fontFamily: INTER,
        color: RENK.lacivert, whiteSpace: "nowrap" }}>
        <div style={{ fontWeight: 800, fontSize: 44 }}>{Number(sayac(t, tN, 187382, 1.3)).toLocaleString("en-US")}</div>
        <div style={{ fontWeight: 600, fontSize: 24 }}>American health professionals</div>
      </div>
      <VurguRozet t={t} bas={t8} vurgu={b.vurgu!} not={b.not} x={1500} y={610} genislik={440} boyut={120} />
    </>
  );
};

export default S25;
