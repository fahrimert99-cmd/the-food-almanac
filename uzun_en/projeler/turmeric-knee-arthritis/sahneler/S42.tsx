// Sahne 42 — belirtiler: dur ve sağlık uzmanına başvur (NCCIH).
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, einout, ilerle, kagit, kelimeZamani, pencereAra } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = einout(ilerle(t, 0.1, 1.1));
  const pen = pencereAra([0, 0, 1920], [-480, -40, 2100], p);
  const bit = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={pen} sinirla={false}>
        {/* şişe etiketindeki anlamsız yazıyı boş etiketle örter */}
        <div style={{ position: "absolute", left: 1024, top: 642, width: 106, height: 100, background: "#F4F1EA", borderRadius: 3 }} />
        <Etiket t={t} bas={K(0, "stop")} capa={[1075, 700]} konum={[1000, 400]} metin="STOP TAKING IT" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(0, "contact")} capa={[1290, 700]} konum={[1300, 490]} metin="CONTACT A PROVIDER" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <AbsoluteFill style={{ opacity: p, background: `linear-gradient(to right, ${kagit(0.97)} 0%, ${kagit(0.95)} 30%, ${kagit(0)} 40%)` }} />
      <Baslik t={t} bas={K(0, "notice")} metin="IF YOU NOTICE" x={90} y={190} boyut={80} renk={RENK.lacivert} />
      <Liste t={t} isaret="nokta" x={80} y={270} aralik={96} boyut={40} genislik={640} ogeler={[
        { bas: K(0, "tiredness"), metin: "UNUSUAL TIREDNESS", renk: RENK.altin },
        { bas: K(0, "nausea"), metin: "NAUSEA", renk: RENK.altin },
        { bas: K(0, "poor appetite"), metin: "POOR APPETITE", renk: RENK.altin },
        { bas: K(0, "dark urine"), metin: "DARK URINE", renk: RENK.altin },
        { bas: K(0, "yellow"), metin: "YELLOW SKIN OR EYES", renk: RENK.altin },
      ]} />
      <KaynakEtiketi t={t} metin="NCCIH · NIH · Turmeric" bas={K(1, "advice")} />
    </>
  );
};

export default S42;
