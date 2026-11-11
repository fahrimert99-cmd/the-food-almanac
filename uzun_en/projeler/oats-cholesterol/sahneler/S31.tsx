// Sahne 31 — yaklaşık iki porsiyon = 3 g; tek kase yarı yol; ambalajı kontrol et.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER, ANTON } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTwo = K(0, "two servings"), tThree = K(0, "three grams");
  const tBowl = K(1, "One bowl"), tHalf = K(1, "halfway");
  const tPack = K(2, "package"), tBeta = K(2, "beta-glucan"), tSol = K(2, "soluble fiber");
  const bBas = s.cumleler[1].bas;
  const bTit = s.cumleler[2].bas - 0.05;
  const hap = (bas: number, metin: string, renk: string, y: number, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    return a > 0 ? (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={30} />
      </div>
    ) : null;
  };
  // temsili ilerleme çubuğu: 3 G hedefi, tek kase = yarı
  const bx = 1400, bw = 440, by = 560, bh = 54;
  const pB = eout(ilerle(t, bBas - 0.1, 0.5)), pD = eout(ilerle(t, tHalf - 0.2, 0.9));
  const [sh, ah] = pop(t, tHalf + 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 30, 1700], [40, 70, 1600])}>
        <Etiket t={t} bas={tBowl} bitis={bTit} capa={[500, 560]} konum={[480, 250]} metin="ONE BOWL" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} taraf="sag" genislik={700} />
      <BaslikBlok t={t} bas={tTwo} bitis={bBas} satirlar={["ABOUT TWO", "BOWLS"]} x={1860} y={200} boyut={92} hiza="sag" />
      {hap(tThree, "≈ 3 G A DAY", RENK.altin, 440, bBas)}
      {/* yarı yol çubuğu */}
      {pB > 0 && (
        <div style={{ opacity: pB * sol(t, bTit, 0.4) }}>
          <div style={{ position: "absolute", left: bx, top: by - 60, fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert, letterSpacing: 2 }}>3 G A DAY</div>
          <div style={{ position: "absolute", left: bx, top: by, width: bw, height: bh, borderRadius: 27, background: "#fff", border: `4px solid ${RENK.lacivert}` }} />
          <div style={{ position: "absolute", left: bx + 4, top: by + 4, width: (bw - 8) * 0.5 * pD, height: bh - 8, borderRadius: 23, background: RENK.yesil }} />
          <div style={{ position: "absolute", left: bx + bw / 2 - 2, top: by - 12, width: 4, height: bh + 24, background: RENK.lacivert }} />
          <div style={{ position: "absolute", left: bx + bw / 2, top: by + bh + 22, transform: `translateX(-50%) scale(${sh})`, opacity: ah, fontFamily: ANTON, fontSize: 56, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>ABOUT HALFWAY</div>
        </div>
      )}
      {hap(tPack, "CHECK THE PACKAGE", RENK.lacivert, 300)}
      {hap(tBeta, "BETA-GLUCAN", RENK.yesil, 400)}
      {hap(tSol, "SOLUBLE FIBER", RENK.yesil, 500)}
    </>
  );
};

export default S31;
