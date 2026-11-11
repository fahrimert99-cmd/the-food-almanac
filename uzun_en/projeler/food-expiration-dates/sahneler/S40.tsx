// Sahne 40 — use by yeniden: soğukta bile Listeria üreyebilir; yüksek riskliler için temkinli okuma (federal kural değil).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit1 = c[2].bas - 0.2, bit3 = c[3].bas - 0.3;
  const [sc, al] = pop(t, K(3, "our"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 100, 1780])}>
        <Etiket t={t} bas={K(1, "ready-to-eat")} bitis={bit3} capa={[450, 480]} konum={[1450, 650]} metin="READY-TO-EAT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Listeria")} bitis={bit3} capa={[880, 520]} konum={[1450, 790]} metin="LISTERIA GROWS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} bitis={bit1} satirlar={["USE BY,", "REVISITED"]} x={1200} y={230} boyut={92} />
      <BaslikBlok t={t} bas={K(2, "firm")} satirlar={["A FIRM", "LIMIT"]} x={1200} y={230} boyut={92}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(2, "cautious")} metin="a cautious choice for higher-risk people" x={1204} y={450} boyut={34} genislik={600} />
      <div style={{ position: "absolute", left: 1204, top: 880, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 26px", whiteSpace: "nowrap",
        fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>
        OUR READING · NOT A FEDERAL RULE
      </div>
    </>
  );
};

export default S40;
