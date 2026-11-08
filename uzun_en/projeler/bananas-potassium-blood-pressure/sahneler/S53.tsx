// Sahne 53 — İpucu 4: tuz ikamelerine dikkat. Raftaki kavanoz ve ilaç şişesi etiketlenir; alta doktora danış + risk çipleri.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc4, al4] = pop(t, K(0, "Four"), 0.55);
  const tCare = K(1, "careful");
  const tSalt = K(2, "potassium salt"), tAsk = K(2, "ask"), tEsp = K(2, "especially");
  const tKid = K(2, "kidney"), tAce = K(2, "ACE"), tArb = K(2, "angiotensin"), tTake = K(2, "take");
  const pAsk = eout(ilerle(t, tAsk, 0.5));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tSalt} capa={[1300, 540]} konum={[930, 300]} metin="SALT SUBSTITUTE" renk={RENK.altin} />
        <Etiket t={t} bas={tTake} capa={[1600, 540]} konum={[1625, 300]} metin="MEDICINES" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
        transform: `scale(${sc4})`, opacity: al4, border: `4px solid ${RENK.kagitAcik}` }}>4</div>
      <Baslik t={t} bas={tCare} metin="CAREFUL WITH" x={170} y={80} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tCare + 0.2} metin="SALT SUBSTITUTES" x={170} y={150} boyut={64} renk={RENK.mercan} />
      {pAsk > 0 && (
        <div style={{ position: "absolute", left: 960, top: 832, transform: "translate(-50%, -50%)", opacity: pAsk, background: "#FCF8EC",
          border: `4px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 34px 10px 14px", display: "flex", alignItems: "center", gap: 16,
          whiteSpace: "nowrap", boxShadow: "0 10px 26px rgba(48,40,34,0.2)", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5,
          color: RENK.murekkep }}>
          <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={34} renk="#fff" kalinlik={7} />
          </span>
          ASK YOUR DOCTOR OR PHARMACIST FIRST
        </div>
      )}
      <div style={{ position: "absolute", left: 0, right: 0, top: 905, display: "flex", justifyContent: "center", gap: 20, alignItems: "center" }}>
        {[[tKid, "KIDNEY DISEASE"], [tAce, "ACE INHIBITOR"], [tArb, "ANGIOTENSIN RECEPTOR BLOCKER"]].map(([b, m]) => {
          const [sc, al] = pop(t, b as number, 0.5);
          return <div key={m as string} style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={m as string} renk={RENK.mercan} boyut={27} /></div>;
        })}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", top: 866, opacity: eout(ilerle(t, tEsp, 0.4)), fontFamily: INTER, fontWeight: 800, fontSize: 24,
        letterSpacing: 3, color: RENK.altin }}>ESPECIALLY IF</div>
    </>
  );
};

export default S53;
