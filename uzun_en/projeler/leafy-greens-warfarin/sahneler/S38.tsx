// Sahne 38 — ARISTOTLE: 18.201 hasta; apixaban 1,27 vs varfarin 1,60 %/yıl. Sol görsel, sağ panel.
import React from "react";
import { BaslikBlok, CubukGrafik, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Baslik } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPan = eout(ilerle(t, 0.3, 0.8));
  const cik = c[1].bas - 0.2;
  const hap = (bas: number, metin: string, renk: string, x: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: 640, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * (1 - eout(ilerle(t, cik, 0.4))),
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
        borderRadius: 999, padding: "10px 26px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.murekkep }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk }} />{metin}
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 40, 1800])} />
      <Panel a={pPan} taraf="sag" genislik={940} opak={0.98} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <BaslikBlok t={t} bas={K(0, "18,201")} bitis={cik} satirlar={s.meta.baslik!.satirlar} x={1100} y={230} boyut={136} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "atrial")} bitis={cik} metin={s.meta.baslik!.not!} x={1100} y={470} boyut={32} renk={RENK.gri} />
      {hap(K(0, "apixaban"), "APIXABAN", RENK.yesil, 1100)}
      {hap(K(0, "warfarin"), "WARFARIN", RENK.altin, 1460)}
      {/* ikinci vuruş: yıllık olay oranı */}
      <Baslik t={t} bas={K(1, "stroke")} metin="STROKE OR CLOTS" x={1100} y={190} boyut={76} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "Over")} metin="% per year · median follow-up 1.8 years" x={1100} y={265} boyut={30} renk={RENK.gri} />
      <CubukGrafik t={t} bas={K(1, "1.27")} x={1150} y={430} w={640} h={380} maks={1.8}
        cubuklar={[
          { etiket: "APIXABAN", deger: 1.27, metin: "1.27%", renk: RENK.yesil, bas: K(1, "1.27") },
          { etiket: "WARFARIN", deger: 1.6, metin: "1.60%", renk: RENK.altin, bas: K(1, "1.60") },
        ]} />
    </>
  );
};

export default S38;
