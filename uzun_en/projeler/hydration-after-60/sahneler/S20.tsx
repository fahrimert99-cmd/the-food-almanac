// Sahne 20 — Rowe 1976: 98 sağlıklı gönüllü, 20–79 yaş.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "none with"), 0.5);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740]);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={p}>
        {/* saat kadranındaki anlamsız küçük yazıyı örten krem yama */}
        <div style={{ position: "absolute", left: 1425, top: 528, width: 110, height: 40, borderRadius: "50%",
          background: "radial-gradient(ellipse, #F1EEE4 55%, rgba(241,238,228,0) 100%)" }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "1976,")} metin="1976" x={70} y={230} boyut={150} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "98")} vurgu="98" not="VOLUNTEERS" x={640} y={130} genislik={330} />
      <VurguRozet t={t} bas={K(0, "aged")} vurgu="20–79" not="YEARS OLD" x={1050} y={130} genislik={380} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO KNOWN KIDNEY DISEASE" renk={RENK.koyuYesil} boyut={30} />
      </div>
    </>
  );
};

export default S20;
