// Sahne 37 — ilaçlar ve alkol: görsel (yedek: 36) solda, sağda panel; kadeh etiketi + başlık + durum listesi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const yama = (x: number, y: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
  background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,245,228,1) 0%, rgba(249,245,228,1) 62%, rgba(249,245,228,0) 100%)`,
});

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlk = K(0, "alcohol"), tYasli = K(0, "older"), tIlac = K(1, "medicines");
  const [sc, al] = pop(t, tYasli, 0.5);
  const aY = al * sol(t, tIlac - 0.2);
  const tYok = K(1, "not");
  const [sc2, al2] = pop(t, tYok, 0.5);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 200, 1500], [0, 230, 1420])}>
        <div style={yama(690, 866, 120, 46)} />
        <div style={yama(858, 950, 140, 96)} />
        <Etiket t={t} bas={tAlk} capa={[310, 500]} konum={[700, 330]} metin="ALCOHOL" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={780} />
      {aY > 0 && (
        <div style={{ position: "absolute", left: 1300, top: 280, opacity: aY, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
          <Hap metin="OLDER ADULTS" renk={RENK.altin} boyut={40} />
        </div>
      )}
      <BaslikBlok t={t} bas={tIlac} satirlar={["MEDICINES", "AND ALCOHOL"]} x={1300} y={240} boyut={92} />
      <Liste t={t} isaret="nokta" x={1300} y={500} aralik={104} boyut={30} genislik={560} ogeler={[
        { bas: K(1, "heart"), metin: "HEART FAILURE", renk: RENK.mercan },
        { bas: K(1, "uncontrolled"), metin: "UNCONTROLLED HIGH BLOOD PRESSURE", renk: RENK.mercan },
        { bas: K(1, "liver"), metin: "LIVER DISEASE", renk: RENK.mercan },
      ]} />
      {al2 > 0 && (
        <div style={{ position: "absolute", left: 1300, top: 840, opacity: al2, transform: `scale(${sc2})`, transformOrigin: "0 50%" }}>
          <Hap metin="NOT TO DRINK" renk={RENK.mercan} boyut={38} />
        </div>
      )}
      <Ikon t={t} bas={tYok + 0.1} ad="carpi" x={1790} y={860} boyut={72} zemin={RENK.mercan} />
    </>
  );
};

export default S37;
