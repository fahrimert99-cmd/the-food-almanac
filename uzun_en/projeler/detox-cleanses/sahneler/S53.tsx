// Sahne 53 — İpucu 5: böbrek hastalığı, diyabet, taş öyküsü, ACE inhibitörü -> önce doktor; reçeteyi asla bırakma.
import React from "react";
import { ANTON, BaslikBlok, Etiket, IkonYol, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "talk");
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const [sc, al] = pop(t, K(2, "never"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 120, 1500], [60, 150, 1400])}>
        <Etiket t={t} bas={K(1, "kidney")} capa={[620, 700]} konum={[800, 820]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "medicines")} capa={[170, 390]} konum={[200, 190]} metin="MEDICINES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={500} />
      <div style={{ position: "absolute", left: 1450, top: 140, opacity: eout(ilerle(t, 0.1, 0.5)), width: 130, height: 130,
        borderRadius: "50%", background: RENK.lacivert, color: "#fff", fontFamily: ANTON, fontSize: 84, display: "flex",
        alignItems: "center", justifyContent: "center", border: `4px solid ${RENK.kagitAcik}` }}>5</div>
      <BaslikBlok t={t} bas={0.35} satirlar={["SAFETY", "FIRST"]} x={1590} y={200} boyut={96} />
      <Liste t={t} x={1450} y={440} aralik={84} boyut={30} isaret="nokta" genislik={420} ogeler={[
        { bas: K(1, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.mercan },
        { bas: K(1, "diabetes,"), metin: "DIABETES", renk: RENK.mercan },
        { bas: K(1, "history"), metin: "KIDNEY STONES", renk: RENK.mercan },
        { bas: K(1, "ACE"), metin: "ACE INHIBITORS", renk: RENK.altin },
      ]} />
      <div style={{ position: "absolute", left: 1450, top: 800, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="carpi" boyut={36} renk="#fff" />
        </div>
        <span style={{ fontFamily: ANTON, fontSize: 30, color: RENK.lacivert }}>NEVER STOP A PRESCRIPTION</span>
      </div>
    </>
  );
};
export default S53;
