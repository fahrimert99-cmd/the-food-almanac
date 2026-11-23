// Sahne 42 — glütensiz ürünlerin fiyat farkı: tahıl +%205, ekmek/fırın +%267.
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFiyat = K(0, "price");
  const t205 = K(0, "205"), t267 = K(0, "267"), tEkmek = K(0, "bread");
  const t34 = K(1, "about three");
  const [sc, al] = pop(t, t34, 0.55);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={tEkmek} capa={[1000, 620]} konum={[1010, 470]} metin="BREAD" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tFiyat} metin="BREAD" x={1240} y={130} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFiyat + 0.18} metin="PRICE" x={1240} y={224} boyut={84} renk={RENK.koyuYesil} />
      <CubukGrafik t={t} bas={t205} x={1180} y={380} w={640} h={330} maks={300}
        birimEtiketi="GLUTEN-FREE PRICE PREMIUM"
        cubuklar={[
          { etiket: "CEREALS", deger: 205, metin: "+205%", renk: RENK.altin, bas: t205 },
          { etiket: "BREAD + BAKERY", deger: 267, metin: "+267%", renk: RENK.mercan, bas: t267 },
        ]} />
      <div style={{ position: "absolute", left: 1500, top: 810, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="ABOUT 3–4× THE PRICE" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S42;
