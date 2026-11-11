// Sahne 17 — ikincil sonuç: çoklu karşılaştırma uyarısı
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Küçük hap kutusu (sahneye özel)
const Kutu: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; renk: string; dolu?: boolean }> = ({ t, bas, bitis = 1e9, metin, x, y, renk, dolu }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translateX(-100%) scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      background: dolu ? renk : "#FCF8EC", color: dolu ? "#fff" : RENK.lacivert, border: `4px solid ${renk}`, borderRadius: 999,
      padding: "10px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, whiteSpace: "nowrap" }}>{metin}</div>
  );
};

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 40, 1850], [60, 80, 1680]);
  const tBas = K(0, "headlines"), tSec = K(1, "secondary"), tSev = K(1, "several"), tAdj = K(1, "did not adjust");
  const tHip = K(2, "hypothesis-generating"), tAut = K(2, "authors");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={w}>
        <Etiket t={t} bas={tBas + 0.2} bitis={K(0, "away") + 0.3} capa={[640, 340]} konum={[960, 160]} metin="HEADLINES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tSec} satirlar={["SECONDARY", "RESULT"]} x={1860} y={250} boyut={100} hiza="sag" />
      <Kutu t={t} bas={tSev} bitis={tAut} metin="CV DEATH" x={1860} y={470} renk={RENK.altin} dolu />
      <Kutu t={t} bas={tSev + 0.25} bitis={tAut} metin="OTHER OUTCOME" x={1860} y={540} renk={RENK.gri} />
      <Kutu t={t} bas={tSev + 0.5} bitis={tAut} metin="OTHER OUTCOME" x={1860} y={610} renk={RENK.gri} />
      <Ikon t={t} bas={tAdj} bitis={tAut} ad="carpi" x={1250} y={415} boyut={64} zemin={RENK.mercan} />
      <Baslik t={t} bas={tAdj + 0.1} bitis={tAut} metin="NOT ADJUSTED" x={1300} y={415} boyut={46} renk={RENK.mercan} />
      <VurguRozet t={t} bas={tHip} vurgu="HYPOTHESIS-GENERATING" not="how the authors describe such results" x={1570} y={470} genislik={700} boyut={62} renk={RENK.koyuYesil} />
    </>
  );
};

export default S17;
