// Sahne 36 — anahtar nokta: takviye tedavinin yerine geçmez (sol panel, sağda cam şişe).
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, INTER, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKey = K(0, "key point"), tAdd = K(1, "add-on"), tPres = K(1, "prescribed"), tStop = K(2, "stop"), tRep = K(2, "replace");
  const tSup = K(2, "supplement"), tDoc = K(3, "doctor");
  const [sc, al] = pop(t, tDoc, 0.5);
  return (
    <>
      {/* kitabın sahte yazıları sol panelin altında kalır; sağda cam şişe */}
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [900, 260, 1020], [940, 270, 980])} />
      <Panel a={1} taraf="sol" genislik={1000} opak={1} />
      <Baslik t={t} bas={tKey} metin="KEY POINT" x={70} y={210} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAdd} metin="GARLIC = ADD-ON" x={70} y={330} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={tPres} metin="to prescribed treatment" x={74} y={392} boyut={34} renk={RENK.gri} />
      <Liste t={t} isaret="carpi" x={70} y={520} aralik={110} boyut={34} genislik={760}
        ogeler={[
          { bas: tStop, metin: "DON'T STOP A MEDICINE", renk: RENK.mercan },
          { bas: tRep, metin: "DON'T REPLACE IT", renk: RENK.mercan },
        ]} />
      <Etiket t={t} bas={tSup} capa={[1650, 680]} konum={[1560, 340]} metin="SUPPLEMENT" renk={RENK.altin} boyut={26} />
      <div style={{ position: "absolute", left: 70, top: 790, display: "flex", alignItems: "center", gap: 18,
        transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "12px 34px 12px 16px", fontFamily: INTER, fontWeight: 800,
        fontSize: 36, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        ASK YOUR DOCTOR
      </div>
    </>
  );
};

export default S36;
