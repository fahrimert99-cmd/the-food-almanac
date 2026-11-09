// Sahne 16 — iki kadeh: ayarlama öncesi %15, sonrası %7 (anlamlı değil).
import React from "react";
import { Hap, IkonYol, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t15 = K(0, "15 percent") - 0.1, t7 = K(1, "7 percent") - 0.1;
  const tAdj = K(1, "After adjusting");
  const tNs = K(1, "no longer");
  const aOk = eout(ilerle(t, tAdj, 0.5));
  const [sn, an] = pop(t, tNs, 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={t15} vurgu="15%" not="BEFORE ADJUSTING" x={950} y={190} genislik={420} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 950, top: 405, transform: `translate(-50%,0) rotate(90deg)`, opacity: aOk }}>
        <IkonYol ad="ok" boyut={56} renk={RENK.lacivert} kalinlik={7} />
      </div>
      <VurguRozet t={t} bas={t7} vurgu="7%" not="AFTER ADJUSTING" x={950} y={500} genislik={420} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 950, top: 730, transform: `translate(-50%,0) scale(${sn})`, opacity: an }}>
        <Hap metin="NOT SIGNIFICANT" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S16;
