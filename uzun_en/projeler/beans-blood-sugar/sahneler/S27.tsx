// Sahne 27 — Jenkins 1982: yedi gönüllü, mercimek mi tam buğday ekmeği mi; karbonhidrat eşit.
import React from "react";
import { Baslik, Etiket, Hap, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "same"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "1982")} metin="1982" x={850} y={140} boyut={120} hiza="orta" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "seven")} vurgu="7" not="HEALTHY VOLUNTEERS" x={1290} y={50} genislik={380} boyut={90} />
      <Etiket t={t} bas={K(0, "lentils")} capa={[590, 420]} konum={[470, 190]} metin="LENTILS" renk={RENK.yesil} boyut={32} />
      <Etiket t={t} bas={K(0, "whole")} capa={[1290, 440]} konum={[1460, 290]} metin="WHOLE WHEAT BREAD" renk={RENK.altin} boyut={32} />
      <div style={{ position: "absolute", left: 960, top: 890, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="SAME CARBOHYDRATE" renk={RENK.lacivert} boyut={42} />
      </div>
    </>
  );
};

export default S27;
