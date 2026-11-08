// Sahne 24 — eller: çapraz bulaşma zinciri (çiğ tavuk → eller → dokunulan her şey). Sağ panel.
import React from "react";
import { BaslikBlok, Etiket, INTER, IkonYol, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780]);
  const tH = K(0, "hands"), tRaw = K(1, "raw chicken");
  const ZINCIR = [
    { bas: tRaw, metin: "RAW CHICKEN", renk: RENK.mercan },
    { bas: K(1, "hands"), metin: "HANDS", renk: RENK.altin },
    { bas: K(1, "everything"), metin: "EVERYTHING HANDS TOUCH", renk: RENK.koyuYesil },
  ];
  return (
    <>
      <Kamera gorsel="tam/24" pencere={w}>
        <Etiket t={t} bas={tRaw + 0.2} capa={[480, 420]} konum={[1140, 740]} metin="RAW CHICKEN" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0, 0.6))} genislik={700} />
      <BaslikBlok t={t} bas={tH} satirlar={s.meta.baslik?.satirlar ?? []} x={1340} y={190} boyut={90} />
      {ZINCIR.map((z, i) => {
        const [sc, al] = pop(t, z.bas, 0.5);
        return (
          <React.Fragment key={z.metin}>
            {i > 0 && (
              <div style={{ position: "absolute", left: 1590 - 15, top: 452 + (i - 1) * 118 + 52, opacity: al, transform: "rotate(90deg)" }}>
                <IkonYol ad="ok" boyut={30} renk={RENK.altin} kalinlik={7} />
              </div>
            )}
            <div style={{ position: "absolute", left: 1590, top: 440 + i * 118, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${z.renk}`, borderRadius: 999, padding: "10px 28px",
              fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{z.metin}</div>
          </React.Fragment>
        );
      })}
      <Not t={t} bas={K(1, "may explain")} x={1590} y={810} hiza="orta" boyut={30} genislik={520} agirlik={800}
        metin="MAY EXPLAIN MUCH OF THE LETTUCE CONTAMINATION" renk={RENK.lacivert} />
    </>
  );
};
export default S24;
