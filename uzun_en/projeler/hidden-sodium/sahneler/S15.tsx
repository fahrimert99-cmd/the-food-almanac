// Sahne 15 — su ve takviye <%0,5; asıl kaldıraç: ne aldığınız ve sipariş ettiğiniz. Sağ boş kâğıtta rozet + başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tAz = K(0, "less than"), tSupp = K(0, "supplements");
  const tKaldirac = K(1, "lever"), tEl = K(1, "hand");
  const tBaslik = K(2, "what you buy"), tAl = K(2, "buy"), tSiparis = K(2, "order");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        {/* 1. vuruş sonrası: tuzluk (masanın üstünde, küçük) */}
        <Etiket t={t} bas={tEl} bitis={tBaslik - 0.2} capa={[1010, 785]} konum={[1420, 880]} metin="TABLE SHAKER" renk={RENK.altin} />
        {/* 3. vuruş: satın alınan / sipariş edilen gerçek nesneler */}
        <Etiket t={t} bas={tAl} capa={[925, 548]} konum={[1330, 450]} metin="BREAD" renk={RENK.mercan} />
        <Etiket t={t} bas={tAl + 0.25} capa={[880, 380]} konum={[1330, 300]} metin="CANNED SOUP" renk={RENK.mercan} />
        <Etiket t={t} bas={tSiparis} capa={[800, 650]} konum={[1330, 790]} metin="DELI MEAT" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tAz} bitis={tKaldirac - 0.3} vurgu="< 0.5%" not="TAP WATER · SUPPLEMENTS (EACH)" x={1500} y={330} genislik={600} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={b.satirlar} x={1860} y={560} boyut={96} hiza="sag" />
    </>
  );
};

export default S15;
