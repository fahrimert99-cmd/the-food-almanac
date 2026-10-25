// Sahne 16 — süre: iki hafta ve üzeri deneyler.
import React from "react";
import { BaslikBlok, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const KAGIT = "rgb(248,237,190)";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(1, "two");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [330, 60, 1560])}>
        {/* bozuk takvim yazıları örtülür; yerine temiz bir 2 haftalık ızgara çizilir */}
        <div style={{ position: "absolute", left: 1130, top: 168, width: 366, height: 312, background: KAGIT }} />
        <div style={{ position: "absolute", left: 1130, top: 178, width: 366, textAlign: "center", fontFamily: ANTON, fontSize: 56,
          color: RENK.koyuYesil }}>2 WEEKS</div>
        {Array.from({ length: 14 }, (_, i) => {
          const [sc, al] = pop(t, tIki + 0.1 + i * 0.07, 0.4);
          const x = 1166 + (i % 7) * 46, y = 320 + Math.floor(i / 7) * 80;
          return <div key={i} style={{ position: "absolute", left: x - 19, top: y - 19, width: 38, height: 38, borderRadius: "50%",
            background: RENK.mercan, transform: `scale(${sc})`, opacity: al }} />;
        })}
      </Kamera>
      <BaslikBlok t={t} bas={tIki} satirlar={["2 WEEKS", "OR MORE"]} x={140} y={200} boyut={100} adim={0.3}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "five")} vurgu="–5.1" not="systolic points in longer trials" x={360} y={440} genislik={460} boyut={120} />
      <VurguRozet t={t} bas={K(1, "under")} vurgu="<3" not="shorter trials" x={770} y={440} genislik={280} boyut={120} renk={RENK.gri} />
    </>
  );
};

export default S16;
