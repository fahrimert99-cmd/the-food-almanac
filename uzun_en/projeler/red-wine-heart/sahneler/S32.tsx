// Sahne 32 — resveratrol sırrı değil; AHA: kanıtlanmış neden-sonuç yok.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOther = K(1, "other"), tAHA = K(1, "american");
  const [sc, al] = pop(t, tAHA, 0.5);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "secret")} bitis={tOther} capa={[1050, 420]} konum={[420, 130]} metin="SECRET INGREDIENT?" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, tOther - 0.2, 0.6))} taraf="sag" genislik={660} />
      <BaslikBlok t={t} bas={tOther} bitis={tAHA - 0.1} satirlar={["OTHER GRAPE", "COMPOUNDS"]} x={1860} y={190} boyut={84} hiza="sag" />
      <Not t={t} bas={K(1, "still")} bitis={tAHA - 0.1} metin="STILL BEING STUDIED" x={1860} y={400} hiza="sag" genislik={560} />
      <div style={{ position: "absolute", left: 1560, top: 190, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="AMERICAN HEART ASSOCIATION" renk={RENK.mercan} boyut={26} />
      </div>
      <BaslikBlok t={t} bas={K(1, "direct") - 0.3} satirlar={["NO DIRECT", "CAUSE & EFFECT"]} x={1860} y={310} boyut={80} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "drinking")} metin="DRINKING → BETTER HEART HEALTH" x={1860} y={560} hiza="sag" genislik={560} boyut={32} agirlik={800} />
    </>
  );
};

export default S32;
