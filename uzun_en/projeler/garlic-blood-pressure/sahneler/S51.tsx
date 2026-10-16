// Sahne 51 — güvenlik: mide, kanama, doktor; ciltte çiğ sarımsak yok.
import React from "react";
import { Etiket, Kamera, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSkin = K(1, "Never") - 0.15;
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [20, 60, 1600])} />
      <Panel a={pPanel} taraf="sag" genislik={760} opak={0.96} />
      <Liste t={t} x={1290} y={300} aralik={110} boyut={34} isaret="nokta" genislik={600} ogeler={[
        { bas: K(0, "upsets"), metin: "STOMACH UPSET", renk: RENK.altin, bitis: tSkin },
        { bas: K(0, "unusual"), metin: "UNUSUAL BLEEDING", renk: RENK.mercan, bitis: tSkin },
        { bas: K(0, "talk"), metin: "TALK TO YOUR DOCTOR", renk: RENK.yesil, bitis: tSkin },
      ]} />
      <Liste t={t} x={1290} y={300} aralik={96} boyut={34} isaret="carpi" genislik={600} ogeler={[
        { bas: K(1, "Never"), metin: "RAW GARLIC ON SKIN", renk: RENK.mercan, bitis: K(2, "NIH") - 0.15 },
      ]} />
      <VurguRozet t={t} bas={K(2, "NIH")} vurgu="NIH" not="warns of chemical burns" x={1540} y={290} genislik={420} renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "garlic")} bitis={K(2, "NIH") - 0.15} capa={[930, 760]} konum={[760, 420]} metin="RAW GARLIC" renk={RENK.mercan} />
    </>
  );
};

export default S51;
