// Sahne 48 — 3. nokta: denemelerde kullanılan türler, sabır
import React from "react";
import { ANTON, AltSis, Baslik, Etiket, Kamera, Panel, RENK, SP, VurguRozet, einout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
);

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.55);
  const tSab = K(1, "be") - 0.3;
  const pPanel = einout(ilerle(t, tSab, 0.8));
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])}>
        <Yama x={690} y={885} w={560} h={62} />
        <Yama x={850} y={246} w={220} h={40} />
        <Etiket t={t} bas={K(1, "aged")} bitis={tSab} capa={[960, 540]} konum={[1580, 430]} metin="AGED GARLIC EXTRACT" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(1, "standardized")} bitis={tSab} capa={[1080, 800]} konum={[1480, 790]} metin="STANDARDIZED GARLIC POWDER" renk={RENK.altin} boyut={26} />
      </Kamera>
      <AltSis a={0.9} />
      <Panel a={pPanel} taraf="sol" genislik={760} opak={0.97} />
      <div style={{ position: "absolute", left: 90, top: 90, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, transform: `scale(${sc})`, opacity: al }}>3</div>
      <Baslik t={t} bas={K(1, "patient") - 0.2} metin="BE PATIENT" x={90} y={290} boyut={100} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "8")} vurgu="8–24" not="WEEKS IN THE TRIALS" x={310} y={400} genislik={460} />
    </>
  );
};

export default S48;
