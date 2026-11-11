// Sahne 20 — COSMOS-Mind: katılımcılar ve yıllık telefon testleri
import React from "react";
import { ANTON, Baslik, Hap, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPanel = s.cumleler[1].bas - 0.1;
  const tBig = K(1, "the biggest"), tMind = K(1, "cosmos-mind"), tN = K(1, "2,262"), tAge = K(1, "average age");
  const tMv = K(2, "multivitamin"), tPl = K(2, "placebo"), tTel = K(2, "telephone"), tYr = K(2, "every year"), tThree = K(2, "three years");
  const aP = eout(ilerle(t, tPanel, 0.7));
  const yil = [tYr, tYr + 0.4, tThree];
  const [sp, ap] = pop(t, tPl, 0.5), [sm, am] = pop(t, tMv, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1440])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      {/* sağ panel: çapraz bulmaca ve fincan örtülür */}
      <Panel a={aP} taraf="sag" genislik={900} opak={1} />
      <Not t={t} bas={tBig} metin="THE BIGGEST" x={1200} y={150} boyut={30} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={tMind} metin="COSMOS-MIND" x={1200} y={250} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tN} vurgu="2,262" not="ADULTS" x={1390} y={330} genislik={380} boyut={96} />
      <VurguRozet t={t} bas={tAge} vurgu="73" not="AVERAGE AGE" x={1735} y={330} genislik={290} boyut={96} renk={RENK.lacivert} />
      {/* 3. cümle: gerçek ve plasebo, telefon, yıllar */}
      <div style={{ position: "absolute", left: 1200, top: 590, display: "flex", gap: 20 }}>
        <div style={{ transform: `scale(${sm})`, opacity: am, transformOrigin: "0 50%" }}><Hap metin="MULTIVITAMIN" renk={RENK.yesil} boyut={28} /></div>
        <div style={{ transform: `scale(${sp})`, opacity: ap, transformOrigin: "0 50%" }}><Hap metin="PLACEBO" renk={RENK.gri} boyut={28} /></div>
      </div>
      <Not t={t} bas={tTel} metin="TELEPHONE COGNITIVE TESTS" x={1200} y={680} boyut={34} agirlik={800} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1260} x2={1260 + 520 * eout(ilerle(t, tYr, 1.2))} y1={815} y2={815} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="12 9" />
      </svg>
      {yil.map((b, i) => {
        const [sc, al] = pop(t, b, 0.5);
        const cx = 1260 + i * 260;
        return (
          <React.Fragment key={i}>
            <div style={{ position: "absolute", left: cx - 24, top: 791, width: 48, height: 48, borderRadius: "50%", background: RENK.altin,
              border: `4px solid ${RENK.kagitAcik}`, transform: `scale(${sc})`, opacity: al, color: "#fff", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 28 }}>{i + 1}</div>
            <div style={{ position: "absolute", left: cx - 80, width: 160, top: 850, textAlign: "center", opacity: al, fontFamily: INTER,
              fontWeight: 800, fontSize: 26, color: RENK.lacivert }}>YEAR {i + 1}</div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S20;
