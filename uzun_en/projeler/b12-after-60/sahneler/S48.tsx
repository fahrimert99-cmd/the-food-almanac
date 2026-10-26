// Sahne 48 — 50 üstü: güçlendirilmiş gıda / takviye, doktora sor.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Anlamsız yazılı hap şişesi etiketini düz krem yamayla örter (görsel koordinatı)
const Yama: React.FC = () => (
  <div style={{ position: "absolute", left: 1114, top: 738, width: 152, height: 90, borderRadius: 12, background: "#E8E2D2",
    border: "3px solid #8C8270", transform: "rotate(-2deg)" }} />
);

const Pil: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; y: number }> = ({ t, bas, bitis, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "Ask") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Yama />
        <Etiket t={t} bas={K(0, "fortified")} bitis={K(1, "doctor")} capa={[640, 760]} konum={[960, 520]} metin="FORTIFIED FOODS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "supplements")} bitis={K(1, "doctor")} capa={[1010, 950]} konum={[1500, 860]} metin="SUPPLEMENTS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "over")} bitis={cik} satirlar={["OVER 50:", "FORTIFIED"]} x={1860} y={200} boyut={120} hiza="sag" />
      <Pil t={t} bas={K(0, "National")} bitis={cik} metin="NIH ADVICE" renk={RENK.altin} y={400} />
      <Baslik t={t} bas={K(1, "doctor")} metin="ASK YOUR DOCTOR" x={1860} y={200} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "doctor") + 0.15} metin="OR PHARMACIST" x={1860} y={312} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "form")} bitis={1e9} metin="FORM" renk={RENK.yesil} y={430} />
      <Pil t={t} bas={K(1, "amount")} bitis={1e9} metin="AMOUNT" renk={RENK.altin} y={520} />
    </>
  );
};
export default S48;
