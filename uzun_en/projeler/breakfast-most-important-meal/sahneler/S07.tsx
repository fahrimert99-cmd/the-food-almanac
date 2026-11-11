// Sahne 7 — Brown ve ark. 2013: inanç kanıtın önüne geçti.
import React from "react";
import { INTER, AdimAkisi, Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIddia = K(1, "skipping"), tGoz = K(1, "observational"), tYol = K(1, "had");
  const bitIddia = tYol - 0.5;
  const [sg, ag] = pop(t, tGoz, 0.5);
  const aG = ag * sol(t, bitIddia);
  const pYol = eout(ilerle(t, tYol - 0.4, 0.5));
  const pB = eout(ilerle(t, tYol, 1.5)), pE = eout(ilerle(t, tYol, 2.2)) * 0.35;
  const x0 = 1020, x1 = 1780, y = 470;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 70, 1760])}>
        <Etiket t={t} bas={K(0, "Andrew")} bitis={K(1, "They") - 0.2} capa={[420, 330]} konum={[760, 190]} metin="ANDREW BROWN" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "2013,")} bitis={K(1, "They") - 0.2} metin="2013" x={1860} y={250} boyut={150} hiza="sag" renk={RENK.altin} />
      <Baslik t={t} bas={K(1, "concluded")} metin="THEIR CONCLUSION" x={1860} y={190} boyut={36} hiza="sag" font="inter" renk={RENK.altin} aralik={4} />
      <div style={{ opacity: sol(t, bitIddia) }}>
        <AdimAkisi t={t} numarali={false} x={1380} y={320} boyut={30}
          adimlar={[{ bas: tIddia, metin: "SKIPPING BREAKFAST", renk: RENK.altin }, { bas: K(1, "weight"), metin: "WEIGHT GAIN", renk: RENK.mercan }]} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 410, transform: `scale(${sg})`, transformOrigin: "100% 50%", opacity: aG }}>
        <Hap metin="OBSERVATIONAL LINKS" renk={RENK.gri} boyut={34} />
      </div>
      {/* inanç kanıtın önüne geçer */}
      {pYol > 0 && (
        <div style={{ opacity: pYol }}>
          <div style={{ position: "absolute", left: x0, top: y, width: x1 - x0, height: 6, background: RENK.murekkep, opacity: 0.35, borderRadius: 3 }} />
          {[{ p: pB, c: RENK.mercan, ad: "BELIEF", dy: -80, bas: 0, ifade: "belief" },
            { p: pE, c: RENK.yesil, ad: "EVIDENCE", dy: 40, bas: K(1, "evidence."), ifade: "evidence." }].map((d) => (
            <React.Fragment key={d.ad}>
              <div style={{ position: "absolute", left: x0 + (x1 - x0 - 40) * d.p, top: y - 17, width: 40, height: 40, borderRadius: "50%",
                background: d.c, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.25)" }} />
              <div style={{ position: "absolute", left: x0 + (x1 - x0 - 40) * d.p + 20, top: y + d.dy, transform: "translateX(-50%)", fontFamily: INTER,
                fontWeight: 800, fontSize: 30, letterSpacing: 2, color: d.c, whiteSpace: "nowrap" }}>{d.ad}</div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default S07;
