// Sahne 16 — bağlantı kanıt değildir: büyüteç ve numune şişesi, sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "link,"), tGozlem = K(0, "observational"), tPep = K(1, "pepsinogen");
  const tTarama = K(1, "screening"), tYine = K(2, "pattern");
  const [sc, al] = pop(t, tTarama, 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [30, 70, 1700])}>
        {/* sol alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 90, top: 995, width: 190, height: 60,
          background: "rgb(250,249,221)", borderRadius: 30, boxShadow: "0 0 24px 18px rgb(250,249,221)" }} />
        <Etiket t={t} bas={tGozlem} bitis={tPep - 0.2} capa={[440, 560]} konum={[800, 300]} metin="OBSERVATIONAL STUDY" renk={RENK.altin} />
        <Etiket t={t} bas={tPep} bitis={tYine - 0.2} capa={[150, 690]} konum={[430, 190]} metin="PEPSINOGEN RATIO" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={eout(ilerle(t, tBaslik - 0.2, 0.6))} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["A LINK,", "NOT PROOF"]} x={1860} y={260} boyut={118} hiza="sag" bitis={tYine - 0.1} />
      <div style={{ position: "absolute", right: 60, top: 560, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al * (t < tYine - 0.1 ? 1 : 0) }}>
        <Hap metin="SCREENING TOOL, NOT A DIAGNOSIS" renk={RENK.mercan} boyut={30} />
      </div>
      <Not t={t} bas={tYine} metin="The pattern fits what we know about stomach acid." x={1860} y={300} hiza="sag" genislik={640} boyut={46} />
    </>
  );
};

export default S16;
