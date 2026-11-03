// Sahne 17 — Cochrane 2015: susuzluk tek başına güvenilir rehber değil.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.1;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={p}>
        {/* defter: Cochrane derlemesi */}
        <Etiket t={t} bas={K(0, "Cochrane")} bitis={cikis} capa={[1200, 660]} konum={[880, 860]} metin="COCHRANE REVIEW" renk={RENK.altin} />
        {/* steteskop: basit belirtiler */}
        <Etiket t={t} bas={K(0, "simple signs")} bitis={cikis} capa={[880, 580]} konum={[560, 360]} metin="SIMPLE SIGNS" renk={RENK.koyuYesil} />
        {/* bardak: susuzluk hissi */}
        <Etiket t={t} bas={K(1, "thirsty,")} capa={[1370, 330]} konum={[1020, 150]} metin="THIRST" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "24")} bitis={cikis} vurgu="24" not="STUDIES ANALYZED" x={300} y={560} genislik={340} />
      <Baslik t={t} bas={K(1, "Feeling thirsty,")} metin="THIRST ALONE" x={70} y={240} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not a reliable")} metin="ISN'T A GUIDE" x={70} y={365} boyut={110} renk={RENK.koyuYesil} />
    </>
  );
};

export default S17;
