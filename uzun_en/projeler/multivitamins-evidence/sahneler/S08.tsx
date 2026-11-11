// Sahne 8 — rastgele atama: kişiler şansla gerçek hap / plasebo kolu; sağda diyagram.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; x: number; y: number; w: number; metin: string; renk: string }> = ({ t, bas, x, y, w, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: y - 40, width: w, height: 80, transform: `scale(${sc})`, opacity: al,
      display: "flex", alignItems: "center", justifyContent: "center", background: RENK.kagitAcik, border: `4px solid ${renk}`,
      borderRadius: 20, fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAta = K(0, "assigned"), tSans = K(0, "chance"), tGercek = K(0, "real"), tPlasebo = K(0, "look-alike");
  const tAlis = K(1, "healthier habits");
  const pOk = eout(ilerle(t, tAta, 0.7));
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={cam} />
      <Panel a={eout(ilerle(t, 0.1, 0.8))} genislik={900} />
      <BaslikBlok t={t} bas={0.4} satirlar={s.meta.baslik!.satirlar} x={1100} y={190} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* şansla atama: kişiler → iki kol */}
      <Kutu t={t} bas={tAta} x={1210} y={560} w={230} metin="PEOPLE" renk={RENK.lacivert} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {[470, 650].map((y) => (
          <line key={y} x1={1330} y1={560} x2={1330 + 150 * pOk} y2={560 + (y - 560) * pOk} stroke={RENK.murekkep} strokeWidth={4} strokeDasharray="12 9" />
        ))}
      </svg>
      <Kutu t={t} bas={tSans} x={1210} y={680} w={230} metin="BY CHANCE" renk={RENK.altin} />
      <Kutu t={t} bas={tGercek} x={1700} y={470} w={300} metin="REAL PILL" renk={RENK.yesil} />
      <Kutu t={t} bas={tPlasebo} x={1700} y={650} w={300} metin="PLACEBO" renk={RENK.mercan} />
      <Etiket t={t} bas={tPlasebo} bitis={tAlis} capa={[310, 600]} konum={[320, 150]} metin="LOOK-ALIKE" renk={RENK.mercan} />
      <Ikon t={t} bas={tAlis} ad="onay" x={1150} y={850} boyut={80} />
      <Not t={t} bas={tAlis + 0.1} metin="HABITS CAN'T EXPLAIN THE RESULT" x={1215} y={822} boyut={34} agirlik={800} genislik={640} />
    </>
  );
};

export default S08;
