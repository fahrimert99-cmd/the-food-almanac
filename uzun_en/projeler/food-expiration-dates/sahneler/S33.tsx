// Sahne 33 — use by tarihi güvenlik garantisi değildir; soğuk zincir kusursuz denetlenemez.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, kagit, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUse = K(0, "use by date");
  const [sc, al] = pop(t, tUse, 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        {/* paket üzerindeki anlamsız yazıyı örten buğu */}
        <div style={{ position: "absolute", left: 590, top: 610, width: 700, height: 260,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.97)} 0%, ${kagit(0.95)} 62%, ${kagit(0)} 100%)` }} />
        {/* USE BY kartı */}
        <div style={{ position: "absolute", left: 940 - 190, top: 740 - 62, width: 380, transform: `scale(${sc})`, opacity: al, textAlign: "center",
          background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 18, padding: "8px 0 10px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 66, lineHeight: 1.05, color: RENK.lacivert }}>USE BY</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4, color: RENK.altin }}>DATE</div>
        </div>
        <Etiket t={t} bas={K(0, "temperature")} capa={[1093, 420]} konum={[1590, 330]} metin="TEMPERATURE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "2014") - 0.2} />
      <BaslikBlok t={t} bas={K(0, "cannot")} satirlar={["NOT A", "SAFETY", "GUARANTEE"]} x={60} y={330} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} adim={0.5} />
      <Not t={t} bas={K(0, "perfectly")} metin="Temperature can't be perfectly controlled along the supply chain" x={1530} y={560} genislik={340}
        boyut={30} renk={RENK.lacivert} />
    </>
  );
};

export default S33;
