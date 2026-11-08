// Sahne 30 — zayıf raporlama, tutarsız sonuçlar; LDL için 6 çalışma çıkarılınca etki kayboluyor
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(1, "disappear"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        {/* sağ alttaki imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 1760, top: 1010, width: 160, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "methods")} bitis={c[1].bas} metin="METHODS REPORTED POORLY" x={100} y={150} boyut={80} renk={RENK.lacivert} />
      <Etiket t={t} bas={K(0, "differed")} bitis={c[1].bas + 0.3} capa={[1560, 640]} konum={[1640, 300]} metin="RESULTS DIFFERED" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "LDL")} metin="LDL CHOLESTEROL" x={100} y={150} boyut={80} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "six")} vurgu="6" not="TRIALS" x={1660} y={130} genislik={300} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1660, top: 440, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="EFFECT DISAPPEARED" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S30;
