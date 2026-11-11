// Sahne 47 — efsane: haberler kanser/obezite/diyabet dedi; Stanford çalışması bunları ölçmedi.
import React from "react";
import { Baslik, Etiket, INTER, Ikon, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStan = K(2, "Stanford"), tOlc = K(2, "measure");
  const hapla = [
    { ifade: "cancer,", metin: "CANCER", y: 150 },
    { ifade: "obesity", metin: "OBESITY", y: 238 },
    { ifade: "diabetes.", metin: "DIABETES", y: 326 },
  ];
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 24, 1840])}>
        <Etiket t={t} bas={K(1, "news")} bitis={tStan - 0.2} capa={[560, 640]} konum={[240, 800]} metin="NEWS COVERAGE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "myth")} bitis={tStan - 0.2} metin="A MYTH" x={80} y={170} boyut={110} renk={RENK.mercan} />
      {hapla.map((h) => {
        const [sc, al] = pop(t, K(1, h.ifade), 0.5);
        const cizgi = eout(ilerle(t, tOlc, 0.5));
        if (al <= 0) return null;
        return (
          <React.Fragment key={h.metin}>
            <div style={{ position: "absolute", left: 1560 - 190, top: h.y - 36, width: 380, height: 72, transform: `scale(${sc})`, opacity: al,
              boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "center", background: RENK.kagitAcik,
              border: `3px solid ${RENK.murekkep}`, borderRadius: 999, fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2,
              color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{h.metin}</div>
            <div style={{ position: "absolute", left: 1560 - 160, top: h.y - 2, width: 320 * cizgi, height: 5, background: RENK.mercan, borderRadius: 3 }} />
            <Ikon t={t} bas={tOlc + 0.1} ad="carpi" x={1560 + 235} y={h.y} boyut={52} zemin={RENK.mercan} />
          </React.Fragment>
        );
      })}
      <Baslik t={t} bas={tStan} metin="STANFORD TRIAL" x={80} y={150} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "did not")} metin="NOT MEASURED" x={80} y={232} boyut={64} renk={RENK.mercan} />
    </>
  );
};

export default S47;
