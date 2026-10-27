// Sahne 44 — Amerikan çalışmaları: salata, ekmek, fırın ürünü ve kızartma birlikte sayıldı.
import React from "react";
import { BaslikBlok, Etiket, Hap, KaynakEtiketi, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSal = K(0, "salad dressings"), tEk = K(0, "bread"), tFir = K(0, "baking"), tKiz = K(0, "frying"), tHep = K(0, "all"), tYol = K(1, "many ways");
  const [sc, al] = pop(t, tKiz, 0.5);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* alt kenardaki imza kalıntıları kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1280, top: 954, width: 300, height: 60, background: kagit(1) }} />
        <div style={{ position: "absolute", left: 400, top: 954, width: 160, height: 60, background: kagit(1) }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={tSal} bitis={tYol - 0.2} capa={[700, 450]} konum={[225, 330]} metin="SALAD DRESSING" renk={RENK.yesil} boyut={26} />
      <Etiket t={t} bas={tEk} bitis={tYol - 0.2} capa={[860, 650]} konum={[225, 560]} metin="ON BREAD" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={tFir} bitis={tYol - 0.2} capa={[1230, 480]} konum={[1700, 400]} metin="BAKING" renk={RENK.mercan} boyut={26} />
      <div style={{ position: "absolute", left: 1700, top: 560, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * (t < tYol - 0.2 ? 1 : 0) }}>
        <Hap metin="FRYING" renk={RENK.mercan} boyut={26} />
      </div>
      <BaslikBlok t={t} bas={tYol} satirlar={["MANY", "WAYS"]} x={1880} y={250} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "not only")} metin="NOT ONLY RAW" x={1880} y={470} hiza="sag" boyut={32} agirlik={800} />
    </>
  );
};

export default S44;
