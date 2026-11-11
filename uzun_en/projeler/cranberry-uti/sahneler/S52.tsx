// Sahne 52 — Fikir 5: bakımevi (sağ panel, koridor ve araba solda kalır).
import React from "react";
import { ANTON, AltSis, Baslik, BaslikBlok, Kamera, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tHome = K(1, "care home");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={pencere} />
      <AltSis a={0.5} />
      <Panel a={1} taraf="sag" genislik={640} opak={0.97} />
      <div style={{ position: "absolute", left: 1340, top: 80, width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}` }}>5</div>
      <BaslikBlok t={t} bas={K(1, "someone")} satirlar={["IN A", "CARE HOME"]} x={1340} y={260} boyut={96} />
      <VurguRozet t={t} bas={K(1, "little or no")} vurgu="LITTLE OR NO" not="benefit found in the trials" x={1600} y={500} genislik={480} boyut={70} />
      <BaslikBlok t={t} bas={K(2, "ask the care team")} satirlar={["ASK THE", "CARE TEAM"]} x={1340} y={760} boyut={72}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S52;
