// Sahne 5 — tuz ile sodyum farkı
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, INTER, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// küçük hap kutusu (ekran koordinatı, x/y = orta)
const Kutu: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; vurgu?: number }> = ({ t, bas, metin, renk, x, y, vurgu }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  const v = vurgu != null ? eout(ilerle(t, vurgu, 0.5)) : 0;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc * (1 + 0.08 * v)})`, opacity: al,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800,
      fontSize: 34, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: `0 8px 22px rgba(48,40,34,0.2)${v ? `, 0 0 0 ${8 * v}px rgba(184,134,43,0.25)` : ""}` }}>
      {metin}
    </div>
  );
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tNa = K(1, "sodium"), tCl = K(1, "chloride");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 25, 1840])}>
        <Etiket t={t} bas={K(0, "Salt") + 0.15} capa={[490, 740]} konum={[190, 520]} metin="SALT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Table")} capa={[930, 270]} konum={[930, 570]} metin="TABLE SALT" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={K(0, "sodium")} satirlar={["SALT", "VS SODIUM"]} x={1860} y={190} boyut={112} hiza="sag" />
      <Kutu t={t} bas={tNa} metin="SODIUM" renk={RENK.altin} x={1370} y={490} vurgu={K(2, "sodium")} />
      <Kutu t={t} bas={tCl} metin="CHLORIDE" renk={RENK.yesil} x={1690} y={490} />
      <Liste t={t} isaret="onay" boyut={34} x={1220} y={640} aralik={92} genislik={640}
        ogeler={[{ bas: K(2, "labels"), metin: "COUNTED ON LABELS", renk: RENK.altin }, { bas: K(2, "affects"), metin: "AFFECTS BLOOD PRESSURE", renk: RENK.mercan }]} />
    </>
  );
};

export default S05;
