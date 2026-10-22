// Sahne 53 — alışkanlık 4: fermente gıdaları çeşitlendir. Tepsideki dört gıda sırayla etiketlenir.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "four"), 0.5);
  const bitisB = K(2, "yogurt") - 0.2;
  const [sv, av] = pop(t, K(2, "variety"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(2, "yogurt")} capa={[640, 420]} konum={[330, 215]} metin="YOGURT" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "kefir")} capa={[1080, 300]} konum={[1080, 85]} metin="KEFIR" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "fermented")} bitis={K(3, "kimchi") - 0.1} capa={[1240, 640]} konum={[1250, 900]} metin="FERMENTED VEGETABLES" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(3, "kimchi")} capa={[1240, 640]} konum={[1250, 900]} metin="KIMCHI COUNTS TOO" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(2, "kombucha")} capa={[1330, 390]} konum={[1600, 160]} metin="KOMBUCHA" renk={RENK.koyuYesil} />
        <div style={{ position: "absolute", left: 470, top: 900, transform: `translate(-50%, -50%) scale(${sv})`, opacity: av }}>
          <Hap metin="VARIETY MAY MATTER" renk={RENK.altin} boyut={26} />
        </div>
      </Kamera>
      <div style={{ position: "absolute", left: 420, top: 70, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>4</div>
      <Baslik t={t} bas={K(1, "mix")} bitis={bitisB} metin="MIX YOUR FERMENTS" x={550} y={122} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
