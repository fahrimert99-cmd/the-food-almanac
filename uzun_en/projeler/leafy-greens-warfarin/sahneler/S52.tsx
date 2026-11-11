// Sahne 52 — İpucu 4: alım miktarını değiştiren şeyler, sağda liste, blender etiketi.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "four"), tWatch = K(1, "watch");
  const tDiet = K(2, "new diet"), tSmooth = K(2, "smoothie"), tVit = K(2, "vitamin"), tApp = K(2, "poor appetite");
  const tKlinik = K(3, "tell your clinic");
  const aPanel = eout(ilerle(t, 0.3, 0.7));
  const [sb, ab] = pop(t, tDort, 0.5);
  const [sk, ak] = pop(t, tKlinik, 0.55);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 80, 1760], [60, 120, 1640])}>
        <Etiket t={t} bas={tSmooth} capa={[860, 380]} konum={[380, 190]} metin="DAILY SMOOTHIE" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={700} opak={0.97} />
      <div style={{ position: "absolute", left: 1290, top: 120, width: 84, height: 84, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
        transform: `scale(${sb})`, opacity: ab }}>4</div>
      <Baslik t={t} bas={tWatch} metin="WATCH FOR CHANGES" x={1400} y={162} boyut={60} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={1290} y={290} aralik={110} boyut={32} genislik={600} ogeler={[
        { bas: tDiet, metin: "NEW DIET", renk: RENK.altin },
        { bas: tSmooth, metin: "DAILY SMOOTHIE", renk: RENK.altin },
        { bas: tVit, metin: "VITAMIN OR SUPPLEMENT", renk: RENK.altin },
        { bas: tApp, metin: "POOR APPETITE", renk: RENK.altin },
      ]} />
      <div style={{ position: "absolute", left: 1580, top: 840, transform: `translate(-50%, -50%) scale(${sk})`, opacity: ak }}>
        <Hap metin="TELL YOUR CLINIC" renk={RENK.yesil} boyut={38} />
      </div>
    </>
  );
};

export default S52;
