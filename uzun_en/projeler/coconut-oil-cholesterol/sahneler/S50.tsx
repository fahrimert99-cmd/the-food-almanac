// Sahne 50 — güvenlik notu. Kusurlar: kopuk yazılı pano kâğıdı (boş kâğıtla örtülü), sol alt imza (kamera dışı).
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const tListe = K(2, "talk");
  const cik = tListe - 0.2;
  // pano kâğıdı köşeleri (görsel koordinatı) ve içine kendi çizgilerimiz
  const A = [190, 771], B = [349, 696], C = [593, 816], D = [387, 949];
  const lerp = (p: number[], q: number[], v: number) => [p[0] + (q[0] - p[0]) * v, p[1] + (q[1] - p[1]) * v];
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [20, 0, 1840], [80, 30, 1720])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <polygon points={[A, B, C, D].map((p) => p.join(",")).join(" ")} fill="#F3EFE2" stroke="#3A3530" strokeWidth={3} strokeLinejoin="round" />
          {[0.2, 0.35, 0.5, 0.65, 0.8].map((v) => {
            const p = lerp(A, D, v), q = lerp(B, C, v);
            const a = lerp(p, q, 0.1), b = lerp(p, q, 0.9);
            return <line key={v} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#3A3530" strokeOpacity={0.35} strokeWidth={3} />;
          })}
        </svg>
        <Etiket t={t} bas={K(2, "diabetes,")} capa={[850, 700]} konum={[1010, 860]} metin="DIABETES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" />
      <BaslikBlok t={t} bas={0.35} satirlar={["SAFETY", "FIRST"]} x={1860} y={190} boyut={92} hiza="sag" />
      <Ikon t={t} bas={K(1, "stop")} ad="uyari" x={1250} y={520} zemin={RENK.altin} bitis={cik} />
      <Not t={t} bas={K(1, "stop") + 0.15} bitis={cik} metin="DON'T CHANGE MEDICINE" x={1330} y={483} boyut={38} agirlik={800} genislik={540} />
      <Not t={t} bas={K(1, "because")} bitis={cik} metin="BECAUSE OF A VIDEO" x={1330} y={535} boyut={30} genislik={540} />
      <Not t={t} bas={tListe} metin="TALK WITH YOUR:" x={1860} y={440} hiza="sag" boyut={30} agirlik={800} genislik={700} />
      <Liste t={t} x={1230} y={520} aralik={86} boyut={38} isaret="onay" genislik={640} ogeler={[
        { bas: K(2, "doctor,"), metin: "DOCTOR" },
        { bas: K(2, "pharmacist"), metin: "PHARMACIST" },
        { bas: K(2, "dietitian"), metin: "DIETITIAN" },
      ]} />
    </>
  );
};

export default S50;
