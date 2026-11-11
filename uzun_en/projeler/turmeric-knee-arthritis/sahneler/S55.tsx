// Sahne 55 — doktora/eczacıya danış, riskli durumlar
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDok = K(0, "doctor"), tKan = K(0, "blood thinners"), tSafra = K(0, "gallbladder"), tKaraciger = K(0, "liver problems");
  const tDur = K(0, "stop and call");
  const pP = eout(ilerle(t, 0.1, 0.6));
  const [sc, al] = pop(t, tDur, 0.55);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 70, 1800])} />
      <Panel a={pP} taraf="sag" genislik={1000} />
      <Baslik t={t} bas={0.1} metin="CHECK FIRST" x={1860} y={170} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={tDok} capa={[400, 650]} konum={[330, 880]} metin="DOCTOR OR PHARMACIST" renk={RENK.lacivert} />
      <Liste t={t} x={1290} y={330} aralik={100} boyut={38} isaret="nokta" genislik={580} ogeler={[
        { bas: tKan, metin: "BLOOD THINNERS", renk: RENK.mercan },
        { bas: tSafra, metin: "GALLBLADDER", renk: RENK.altin },
        { bas: tKaraciger, metin: "LIVER PROBLEMS", renk: RENK.mercan },
      ]} />
      {al > 0.01 && (
        <div style={{ position: "absolute", left: 1290, top: 700, width: 530, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
          background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 22, padding: "16px 24px",
          display: "flex", alignItems: "center", gap: 18, boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
          <IkonYol ad="uyari" boyut={60} renk={RENK.mercan} />
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, lineHeight: 1.2, color: RENK.lacivert }}>
            STOP AND CALL
            <div style={{ fontWeight: 500, fontSize: 26 }}>if you notice signs of liver trouble</div>
          </div>
        </div>
      )}
    </>
  );
};

export default S55;
