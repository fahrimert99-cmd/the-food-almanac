// Sahne 57 — ipucu 5: karaciğer hastalığı varsa sor.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 110, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`, borderRadius: 999, padding: "10px 30px", fontFamily: INTER,
      fontWeight: 800, fontSize: 36, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.5);
  const pP = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [200, 90, 1650])}>
        <Etiket t={t} bas={K(1, "cinnamon")} capa={[1400, 565]} konum={[1560, 330]} metin="CINNAMON" renk={RENK.altin} />
      </Kamera>
      <Panel a={pP} taraf="sol" genislik={980} opak={0.96} />
      <div style={{ position: "absolute", left: 110, top: 110, transform: `scale(${sb})`, opacity: ab, transformOrigin: "0% 50%", width: 100, height: 100,
        borderRadius: "50%", background: RENK.altin, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 70, border: `5px solid ${RENK.kagitAcik}` }}>5</div>
      <Baslik t={t} bas={K(1, "liver")} metin="LIVER" x={110} y={310} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "disease,")} metin="DISEASE?" x={110} y={440} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "ask")} metin="ASK YOUR" x={110} y={540} boyut={30} renk={RENK.altin} agirlik={800} />
      <Hap t={t} bas={K(1, "doctor")} metin="DOCTOR" y={590} />
      <Hap t={t} bas={K(1, "pharmacist")} metin="PHARMACIST" y={690} />
      <Not t={t} bas={K(1, "before")} metin="BEFORE MAKING CINNAMON" x={110} y={800} boyut={34} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={K(1, "daily")} metin="A DAILY HABIT" x={110} y={846} boyut={34} renk={RENK.lacivert} agirlik={800} />
    </>
  );
};

export default S57;
