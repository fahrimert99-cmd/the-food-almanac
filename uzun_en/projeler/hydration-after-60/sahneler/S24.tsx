// Sahne 24 — sınırlama: laboratuvar testiydi; düzenli içenler genelde dengede.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [20, 10, 1880]);
  const [sc, al] = pop(t, K(0, "lab test"), 0.5);
  const a = al * sol(t, c[1].bas - 0.1);
  const gec2 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={p}>
        <Etiket t={t} bas={K(2, "drink regularly")} capa={[610, 480]} konum={[250, 330]} metin="DRINK REGULARLY" renk={RENK.yesil} boyut={26} />
      </Kamera>
      {a > 0 && (
        <div style={{ position: "absolute", left: 680, top: 90, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
          <Hap metin="LAB TEST · HEALTHY VOLUNTEERS" renk={RENK.altin} boyut={28} />
        </div>
      )}
      <BaslikBlok t={t} bas={K(1, "doesn't")} bitis={gec2} satirlar={["NOT EVERYONE", "OVER 60", "IS DEHYDRATED"]} x={1500} y={190} boyut={60}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(2, "balance")} vurgu="IN BALANCE" not="USUALLY, IF THEY DRINK REGULARLY" x={1700} y={150} genislik={340} boyut={68} renk={RENK.yesil} />
    </>
  );
};

export default S24;
