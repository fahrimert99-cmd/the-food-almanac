// Sahne 52 — alışkanlık 3: düzenli ol. Takvimin bozuk harfleri kâğıt yamayla örtülü.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "three"), 0.5);
  const bitisBaslik = K(2, "steady") - 0.15;
  const aKutu = al * sol(t, bitisBaslik, 0.4);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* takvim üstündeki bozuk gün harfleri */}
        <div style={{ position: "absolute", left: 1100, top: 367, width: 400, height: 72, transform: "rotate(11deg)", borderRadius: 10,
          background: "linear-gradient(#F4F1E8, #EFEBDF)" }} />
        <Etiket t={t} bas={K(2, "steady")} capa={[680, 520]} konum={[640, 230]} metin="STEADY HABIT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(2, "not")} capa={[1400, 760]} konum={[1400, 890]} metin="NOT A ONE-OFF" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 110, top: 100, width: 920, height: 170, borderRadius: 26, background: "rgba(251,248,241,0.94)",
        opacity: aKutu, boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }} />
      <div style={{ position: "absolute", left: 150, top: 135, width: 100, height: 100, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc})`, opacity: aKutu, border: `4px solid ${RENK.kagitAcik}` }}>3</div>
      <Baslik t={t} bas={K(1, "make")} bitis={bitisBaslik} metin="MAKE IT REGULAR" x={280} y={185} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "ten")} vurgu="10 WEEKS" not="EATEN REGULARLY" x={1450} y={120} genislik={460} boyut={88} />
    </>
  );
};

export default S52;
