// Sahne 26 — GLUT4: glikoz hücre duvarından geçemez, taşıyıcı ister; dinlenen kasta çoğu depoda.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const [sc, al] = pop(t, K(1, "transporter"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [140, 20, 1640], [200, 60, 1540])}>
        {/* alttaki bozuk yazı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 420, top: 925, width: 320, height: 90,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} opak={0.97} />
      <Etiket t={t} bas={K(0, "wall")} bitis={K(1, "needs")} capa={[800, 225]} konum={[1130, 190]} metin="CELL WALL" renk={RENK.mercan} />
      <Etiket t={t} bas={K(0, "muscle")} bitis={K(1, "needs")} capa={[620, 560]} konum={[1130, 660]} metin="MUSCLE CELL" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1130, top: 480, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="NEEDS A TRANSPORTER" renk={RENK.altin} boyut={32} />
      </div>
      <BaslikBlok t={t} bas={K(1, "GLUT4")} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={250} boyut={150} hiza="sag"
        renkler={[RENK.koyuYesil]} />
      {s.meta.baslik?.not && <Not t={t} bas={K(1, "GLUT4") + 0.4} metin={s.meta.baslik.not} x={1860} y={340} hiza="sag" genislik={800} boyut={32} />}
      <Etiket t={t} bas={K(1, "storage")} capa={[640, 775]} konum={[1130, 830]} metin="IN STORAGE" renk={RENK.yesil} />
    </>
  );
};

export default S26;
