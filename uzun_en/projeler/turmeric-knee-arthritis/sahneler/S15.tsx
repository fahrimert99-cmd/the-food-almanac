// Sahne 15 — iki uyarı: kısa süre, çoğu kadın; ibuprofenle aynı aralık ama yerine geçmez.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Terazinin iki yanındaki boşlukta numaralı uyarı kartı
const Uyari: React.FC<{ t: number; bas: number; bitis: number; no: string; buyuk: string; kucuk: string; x: number; y: number }> = ({
  t, bas, bitis, no, buyuk, kucuk, x, y,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 440, boxSizing: "border-box", transform: `scale(${sc})`, transformOrigin: "50% 0", opacity: a,
      background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "14px 22px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: RENK.altin, color: "#fff", fontFamily: ANTON, fontSize: 30,
          display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{no}</span>
        <span style={{ fontFamily: ANTON, fontSize: 52, color: RENK.lacivert, lineHeight: 1.1, whiteSpace: "nowrap" }}>{buyuk}</span>
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1, color: RENK.gri, marginTop: 4 }}>{kucuk}</div>
    </div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "cautions");
  const tKisa = K(1, "Four weeks"), tKadin = K(1, "most volunteers");
  const tKok = K(2, "turmeric"), tIbu = K(2, "ibuprofen"), tAyni = K(2, "same range");
  const tDegis = K(3, "replace");
  const kartSon = s.cumleler[2].bas - 0.15;
  const ayniSon = s.cumleler[3].bas - 0.1;
  const [sd, ad] = pop(t, tDegis, 0.55);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={tKok} capa={[1340, 650]} konum={[1640, 470]} metin="TURMERIC EXTRACT" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tIbu} capa={[640, 630]} konum={[250, 500]} metin="IBUPROFEN" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tBaslik} metin="TWO CAUTIONS" x={80} y={120} boyut={96} renk={RENK.lacivert} />
      <Uyari t={t} bas={tKisa} bitis={kartSon} no="1" buyuk="4 WEEKS" kucuk="A SHORT TRIAL" x={70} y={330} />
      <Uyari t={t} bas={tKadin} bitis={kartSon} no="2" buyuk="MOSTLY WOMEN" kucuk="MOST VOLUNTEERS" x={1410} y={330} />
      <VurguRozet t={t} bas={tAyni} vurgu="≈ SAME RANGE" not="as ibuprofen, for a month" x={960} y={400} genislik={520} boyut={70} bitis={ayniSon} />
      <div style={{ position: "absolute", left: 960, top: 880, transform: `translate(-50%, -50%) scale(${sd})`, opacity: ad, display: "flex", alignItems: "center", gap: 14 }}>
        <Hap metin="NOT A REPLACEMENT" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S15;
