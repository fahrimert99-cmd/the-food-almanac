// Sahne 52 — adım 2: çölyak testi, sağ panelde akış.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800]);
  const adimlar = [
    { ifade: "negative", metin: "NEGATIVE TEST", renk: RENK.gri },
    { ifade: "irritable bowel", metin: "OTHER CAUSES: IRRITABLE BOWEL SYNDROME", renk: RENK.altin },
    { ifade: "decide", metin: "DECIDE THE NEXT STEP TOGETHER", renk: RENK.yesil },
  ];
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kam}>
        <Etiket t={t} bas={K(1, "still eating gluten")} bitis={K(2, "If") - 0.1} capa={[790, 610]} konum={[1330, 560]} metin="STILL EATING GLUTEN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "celiac testing")} bitis={K(2, "If") - 0.1} capa={[780, 420]} konum={[1330, 330]} metin="CELIAC TESTING" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Two.")} metin="STEP TWO" x={1280} y={150} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "Two.") + 0.4} metin="ask about celiac testing first" x={1284} y={225} boyut={36} renk={RENK.lacivert} />
      {adimlar.map((a, i) => {
        const p = eout(ilerle(t, K(2, a.ifade), 0.5));
        if (p <= 0) return null;
        return (
          <div key={a.ifade} style={{ position: "absolute", left: 1240, top: 520 + i * 130, opacity: p, transform: `translateX(${(1 - p) * 30}px)`, width: 600 }}>
            <Hap metin={a.metin} renk={a.renk} boyut={26} style={{ whiteSpace: "normal" }} />
          </div>
        );
      })}
    </>
  );
};
export default S52;
