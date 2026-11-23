// Sahne 41 — 63 glütensiz ürün, 126 sıradan karşılığı; proteinin yarısından azı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t63 = K(0, "63"), t126 = K(0, "126"), t12 = K(0, "12");
  const t57 = K(1, "57");
  const tYari = K(1, "less than half");
  const [sc, al] = pop(t, t12, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1780])}>
        <Etiket t={t} bas={t63} capa={[360, 520]} konum={[360, 215]} metin="63 GLUTEN-FREE" renk={RENK.yesil} />
        <Etiket t={t} bas={t126} capa={[820, 500]} konum={[900, 215]} metin="126 REGULAR" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <div style={{ opacity: 1 }}>
        <Baslik t={t} bas={t63 - 0.05} bitis={8.7} metin="63 VS 126" x={1480} y={250} boyut={104} renk={RENK.lacivert} hiza="orta" />
        <Baslik t={t} bas={t63 + 0.15} bitis={8.7} metin="PRODUCTS" x={1480} y={365} boyut={104} renk={RENK.koyuYesil} hiza="orta" />
        <div style={{ position: "absolute", left: 1480, top: 520, transform: `translate(-50%,0) scale(${sc})`, opacity: al * (t < 8.7 ? 1 : 0) }}>
          <Hap metin="12 SUPERMARKETS" renk={RENK.altin} boyut={30} />
        </div>
      </div>
      <VurguRozet t={t} bas={t57 - 0.05} vurgu="57%" not="of food categories: gluten-free had less than half the protein"
        x={1480} y={280} renk={RENK.mercan} genislik={560} boyut={150} />
      <Baslik t={t} bas={tYari} metin="LESS THAN HALF" x={1480} y={700} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tYari + 0.15} metin="THE PROTEIN" x={1480} y={770} boyut={64} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S41;
