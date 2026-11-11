// Sahne 51 — lipid paneli: tüpler etiketlenir, ardından tekrar test sorusu.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, K(0, "your doctor") - 0.4, 0.6));
  const tAsk = K(1, "Ask");
  const bit = tAsk - 0.2;
  const aMg = eout(ilerle(t, K(0, "reported"), 0.5)) * sol(t, bit);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])}>
        <Etiket t={t} bas={K(0, "lipid panel")} capa={[270, 640]} konum={[760, 480]} metin="LIPID PANEL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" />
      <BaslikBlok t={t} bas={K(0, "your doctor")} satirlar={["CHECK YOUR", "LDL"]} x={1860} y={190} boyut={92} hiza="sag" bitis={tAsk + 99} />
      <Not t={t} bas={K(0, "reported")} bitis={bit} metin="lipid panel · mg/dL" x={1860} y={400} hiza="sag" boyut={34} genislik={600} />
      <div style={{ position: "absolute", left: 1500, top: 520, transform: "translateX(-50%)", opacity: aMg }}>
        <Hap metin="MG/DL" renk={RENK.altin} boyut={34} />
      </div>
      <Ikon t={t} bas={tAsk} ad="soru" x={1250} y={560} zemin={RENK.yesil} />
      <Not t={t} bas={tAsk + 0.1} metin="ASK ABOUT A" x={1330} y={500} boyut={34} agirlik={800} genislik={540} />
      <Not t={t} bas={K(1, "repeat test") } metin="REPEAT TEST" x={1330} y={548} boyut={50} agirlik={800} renk={RENK.koyuYesil} genislik={540} />
    </>
  );
};

export default S51;
