// Sahne 53 — Son güvenlik notu.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStop = K(1, "stop"), tMedc = K(1, "sleep medicine"), tThin = K(2, "blood thinners");
  const tChk = K(2, "check with");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [100, 30, 1760]);
  const bit = tThin - 0.2;
  const [sc, al] = pop(t, tStop, 0.5);
  const a1 = al * sol(t, bit);
  const [sc2, al2] = pop(t, tChk, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kam} />
      <Baslik t={t} bas={0.0} metin="SAFETY" x={1840} y={150} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={0.2} metin="FIRST" x={1840} y={270} boyut={120} hiza="sag" renk={RENK.mercan} />
      <Etiket t={t} bas={tMedc} bitis={bit} capa={[1200, 420]} konum={[1590, 470]} metin="SLEEP MEDICINE" renk={RENK.altin} />
      {a1 > 0 && (
        <div style={{ position: "absolute", right: 80, top: 580, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a1,
          display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${RENK.mercan}`, borderRadius: 999,
          padding: "10px 30px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
          <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={28} renk="#fff" kalinlik={6} /></span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>DON'T STOP OR CHANGE</span>
        </div>
      )}
      <Liste t={t} x={1410} y={440} aralik={92} boyut={27} isaret="onay" genislik={460} ogeler={[
        { bas: tThin, metin: "BLOOD THINNERS", renk: RENK.altin },
        { bas: K(2, "sedatives,"), metin: "SEDATIVES", renk: RENK.altin },
        { bas: K(2, "ragweed"), metin: "RAGWEED / DAISY ALLERGY", renk: RENK.altin },
      ]} />
      {al2 > 0 && (
        <div style={{ position: "absolute", left: 1410, top: 760, transform: `scale(${sc2})`, transformOrigin: "0% 50%", opacity: al2,
          fontFamily: INTER, fontWeight: 800, fontSize: 29, lineHeight: 1.3, color: RENK.koyuYesil, width: 460 }}>
          CHECK WITH YOUR DOCTOR<br />OR PHARMACIST FIRST
        </div>
      )}
    </>
  );
};
export default S53;
