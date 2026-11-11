// Sahne 10 — COSMOS: ad, kaynak, 21.442 katılımcı, kadın/erkek yaş sınırları.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const tPosta = K(1, "across the United States");
  const tKadin = K(1, "women aged"), tErkek = K(1, "men aged");
  const [s1, a1] = pop(t, tKadin, 0.5);
  const [s2, a2] = pop(t, tErkek, 0.5);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={p}>
        <Etiket t={t} bas={K(0, "Cocoa Supplement")} bitis={K(1, "A research") - 0.2} capa={[1147, 640]} konum={[1520, 380]} metin="COCOA SUPPLEMENT" renk={RENK.altin} />
        <Etiket t={t} bas={tPosta} bitis={tKadin - 0.3} capa={[540, 450]} konum={[960, 200]} metin="ACROSS THE U.S." renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "COSMOS,")} bitis={K(1, "A research") - 0.2} metin="COSMOS" x={1060} y={150} boyut={130} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Howard")} />
      <VurguRozet t={t} bas={K(1, "21,442")} vurgu="21,442" not="OLDER ADULTS" x={1400} y={110} genislik={440} />
      <div style={{ position: "absolute", left: 1620, top: 470, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="WOMEN 65+" renk={RENK.mercan} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1620, top: 570, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="MEN 60+" renk={RENK.lacivert} boyut={34} />
      </div>
    </>
  );
};

export default S10;
