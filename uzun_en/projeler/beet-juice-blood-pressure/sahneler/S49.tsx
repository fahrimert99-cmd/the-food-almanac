// Sahne 49 — "Three." Haftalar, günler değil: 2+ hafta daha büyük etki, bırakınca azalır.
import React from "react";
import { ANTON, AltSis, Baslik, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThree = K(0, "Three");
  const tThink = K(1, "Think"), tNot = K(1, "not");
  const tTwo = K(2, "two weeks"), tFade = K(2, "faded");
  const [sc, al] = pop(t, tThree, 0.5);
  const pPanel = eout(ilerle(t, 0, 0.5));
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 60, 1700])}>
        <Etiket t={t} bas={tTwo} bitis={tFade - 0.1} capa={[960, 640]} konum={[1130, 330]} metin="2+ WEEKS: BIGGER" renk={RENK.yesil} />
        <Etiket t={t} bas={tFade} capa={[960, 700]} konum={[1130, 330]} metin="FADES WHEN STOPPED" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.8} />
      {/* takvimdeki bozuk rakamlar panelle örtülür */}
      <Panel a={pPanel} taraf="sol" genislik={1000} opak={1} />
      <div style={{ position: "absolute", left: 120, top: 190, width: 150, height: 150, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 110,
        transform: `scale(${sc})`, opacity: al }}>3</div>
      <Baslik t={t} bas={tThink} metin="THINK IN WEEKS," x={110} y={480} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="NOT DAYS" x={110} y={600} boyut={120} renk={RENK.mercan} />
    </>
  );
};

export default S49;
