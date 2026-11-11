// Sahne 40 — kalp, sürahi, gazete: 6.550 kişilik ABD çalışması, HR 1.87 (ilişki).
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const tHead = K(0, "headlines"), t6550 = K(1, "6,550"), tAged = K(1, "aged"), tNever = K(2, "never"), t87 = K(2, "87"), tCv = K(2, "cardiovascular");
  const bit2 = K(2, "people") - 0.1;
  const m = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={p}>
        <Etiket t={t} bas={tHead} bitis={tNever - 0.1} capa={[1000, 760]} konum={[1320, 560]} metin="HEADLINES" renk={RENK.altin} />
        <Etiket t={t} bas={tCv} capa={[520, 660]} konum={[900, 450]} metin="CARDIOVASCULAR" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={t6550 - 0.1} bitis={bit2} metin="6,550 ADULTS" x={1000} y={170} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tAged - 0.1} bitis={bit2} metin="US study · aged 40 to 75 · about 17 years" x={1000} y={245} boyut={32} />
      <BaslikBlok t={t} bas={tNever - 0.1} satirlar={m?.satirlar ?? ["NEVER ATE", "BREAKFAST"]} x={1000} y={160} boyut={110} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={t87 - 0.1} vurgu={m?.vurgu ?? "HR 1.87"} not="87% higher risk of cardiovascular death vs daily eaters" x={1400} y={420} genislik={520} renk={RENK.mercan} />
    </>
  );
};

export default S40;
