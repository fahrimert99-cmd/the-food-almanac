// Sahne 49 — sirke ve ekşi tat: dilim + sirke sürahisi
import React from "react";
import { BaslikBlok, BolumKarti, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, ANTON, INTER, SP, VurguRozet, KaynakEtiketi,
  Baslik, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Zıplayarak gelen hap
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

// Numara rozeti (ipucu sırası)
const No: React.FC<{ t: number; bas: number; n: string; x: number; y: number; bitis?: number }> = ({ t, bas, n, x, y, bitis = 1e9 }) => {
  const [sc, al] = pop(t, bas, 0.6);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, textAlign: "center" }}>
      <div style={{ width: 130, height: 130, borderRadius: "50%", background: RENK.altin, border: `5px solid ${RENK.kagitAcik}`,
        boxShadow: "0 10px 26px rgba(48,40,34,0.25)", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 96, color: "#fff", lineHeight: 1 }}>{n}</div>
      <div style={{ marginTop: 8, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.lacivert }}>TIP</div>
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOst = K(1, "Östman's");
  const tEksi = K(2, "sour taste");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [150, 90, 1700])}>
        <Etiket t={t} bas={K(1, "Vinegar")} bitis={tOst - 0.2} capa={[1370, 700]} konum={[1000, 440]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "slow")} capa={[620, 700]} konum={[520, 470]} metin="SLOW FERMENTATION?" renk={RENK.mercan} />
      </Kamera>
      <Pil t={t} bas={tOst} bitis={tEksi - 0.2} metin="ÖSTMAN · SMALL TRIAL" renk={RENK.lacivert} x={500} y={170} />
      <Pil t={t} bas={K(1, "healthy")} bitis={tEksi - 0.2} metin="HEALTHY ADULTS" renk={RENK.yesil} x={420} y={250} />
      <BaslikBlok t={t} bas={tEksi} satirlar={["SOUR TASTE", "IS NOT PROOF"]} x={90} y={150} boyut={96} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S49;
