// Sahne 48 — görev gücü tavsiyesinin sınırı: kapsanmayanlar listesi.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pKart = eout(ilerle(t, K(0, "advice") - 0.25, 0.5));
  const [sc, al] = pop(t, K(2, "decision"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(2, "supplements")} capa={[1475, 540]} konum={[1500, 330]} metin="SUPPLEMENTS?" renk={RENK.altin} />
      </Kamera>
      {/* randevu defterindeki anlamsız yazıyı opak kart örter */}
      <div style={{ position: "absolute", left: 70, top: 190, width: 900, height: 730, opacity: pKart, background: RENK.kagitAcik,
        border: `4px solid ${RENK.lacivert}`, borderRadius: 28, boxShadow: "0 18px 40px rgba(48,40,34,0.28)" }} />
      <Baslik t={t} bas={K(0, "advice")} metin="ADVICE STOPS HERE" x={120} y={285} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "doesn't")} metin="DOESN'T APPLY TO PEOPLE WITH" x={124} y={365} boyut={30} agirlik={800} renk={RENK.gri} />
      <Liste t={t} x={124} y={430} aralik={84} boyut={38} isaret="carpi" genislik={820} ogeler={[
        { bas: K(1, "osteoporosis"), metin: "OSTEOPOROSIS", renk: RENK.mercan },
        { bas: K(1, "past fractures"), metin: "PAST FRACTURES", renk: RENK.mercan },
        { bas: K(1, "high fall risk"), metin: "HIGH FALL RISK", renk: RENK.mercan },
        { bas: K(1, "low vitamin D"), metin: "LOW VITAMIN D", renk: RENK.mercan },
      ]} />
      <div style={{ position: "absolute", left: 120, top: 812, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="DECISION WITH A DOCTOR" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S48;
