// Sahne 30 — kahve ve çay da toplam sıvıya sayılır: tepsi + sağ panelde onay listesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const LISTE = [
  { i: "water,", m: "WATER" }, { i: "milk,", m: "MILK" }, { i: "juice,", m: "JUICE" },
  { i: "coffee", m: "COFFEE" }, { i: "tea", m: "TEA" },
];

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780]);
  const t2 = K(2, "water,") - 0.15;
  const aP = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/30" pencere={p}>
        <Etiket t={t} bas={K(1, "caffeinated")} bitis={t2} capa={[400, 640]} konum={[250, 330]} metin="CAFFEINATED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "non-caffeinated")} bitis={t2} capa={[880, 560]} konum={[950, 230]} metin="NON-CAFFEINATED" renk={RENK.yesil} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "coffee")} bitis={t2} satirlar={s.meta.baslik?.satirlar ?? ["COFFEE", "AND TEA COUNT"]} x={1260} y={250} boyut={84} />
      {LISTE.map((l, k) => {
        const [sc, al] = pop(t, K(2, l.i), 0.45);
        if (al <= 0) return null;
        return (
          <div key={l.m} style={{ position: "absolute", left: 1260, top: 220 + k * 84, display: "flex", alignItems: "center", gap: 18,
            transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
            <span style={{ width: 56, height: 56, borderRadius: 14, background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="onay" boyut={38} renk="#fff" kalinlik={7} />
            </span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 44, letterSpacing: 3, color: RENK.lacivert }}>{l.m}</span>
          </div>
        );
      })}
      <Baslik t={t} bas={K(2, "count")} metin="COUNT TOWARD THE TOTAL" x={1260} y={700} boyut={50} renk={RENK.koyuYesil} />
    </>
  );
};

export default S30;
