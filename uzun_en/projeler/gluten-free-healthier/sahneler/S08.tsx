// Sahne 8: 2 milyon / %1, kalabalık görseli ve rozetler
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "never"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} y={48} bas={0.3} />
      <Baslik t={t} bas={K(0, "estimates")} metin="ABOUT" x={1860} y={190} boyut={60} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <VurguRozet t={t} bas={K(0, "2")} vurgu="2M" not="people in the United States" x={1560} y={250} genislik={440} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "1")} vurgu="1%" not="of people worldwide" x={1560} y={560} genislik={440} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1560, top: 840, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 30px", fontFamily: "Inter, sans-serif",
        fontWeight: 800, fontSize: 30, letterSpacing: 2, whiteSpace: "nowrap" }}>MANY NEVER DIAGNOSED</div>
    </>
  );
};
export default S08;
