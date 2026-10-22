// Sahne 49 — "Beş: moladan sonra yavaş dön."
import React from "react";
import { ANTON, Baslik, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [60, 60, 1800]);
  const [sn, an] = pop(t, 0.05, 0.5);
  const tB = K(2, "big strong") - 0.15, tF = c[3].bas;
  const pP = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={pen} />
      <Panel a={pP} taraf="sol" genislik={760} opak={0.96} />
      <div style={{ position: "absolute", left: 90, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76, transform: `scale(${sn})`, opacity: an,
        border: `4px solid ${RENK.kagitAcik}` }}>5</div>
      <Baslik t={t} bas={K(1, "return")} bitis={tB} metin="RETURN" x={90} y={360} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "gently")} bitis={tB} metin="GENTLY" x={90} y={490} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "after a break")} bitis={tB} metin="after a break from caffeine" x={94} y={580} boyut={36} renk={RENK.gri} />
      <Baslik t={t} bas={K(2, "big strong")} bitis={tF - 0.1} metin="BIG STRONG COFFEE" x={90} y={330} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "extra trip")} bitis={tF - 0.1} metin="EXTRA BATHROOM TRIP" x={90} y={420} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "at first")} bitis={tF - 0.1} metin="AT FIRST" x={90} y={500} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={K(3, "fades")} metin="THAT FADES" x={90} y={400} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(3, "body adapts")} metin="AS YOU ADAPT" x={90} y={520} boyut={64} renk={RENK.lacivert} />
      <Ikon t={t} bas={K(3, "body adapts")} ad="onay" x={160} y={640} boyut={84} />
    </>
  );
};

export default S49;
