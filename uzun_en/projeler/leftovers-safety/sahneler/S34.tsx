// Sahne 34 — sığ kaplar, 3 inç
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, IkonYol, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu,
  kelimeZamani, kis, pop, sol } from "../kutuphane";

// Yerel hap: pop ile gelir, isteğe bağlı simge
const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon?: "onay" | "carpi" | "saat" | "uyari"; bitis?: number; boyut?: number }> = ({
  t, bas, x, y, metin, renk, ikon, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: ikon ? "8px 26px 8px 10px" : "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" kalinlik={6} /></span>}
      {metin}
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKap = K(0, "shallow"), tUc = K(1, "three"), tInc = K(1, "inches");
  const pc = eout(ilerle(t, tInc - 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tKap} capa={[913, 600]} konum={[960, 850]} metin="SHALLOW CONTAINERS" renk={RENK.altin} boyut={28} />
        {/* derinlik ölçüsü: sağdaki kabın yanında dikey köşeli ayraç */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <g opacity={pc} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" fill="none">
            <line x1={1150} y1={455} x2={1150} y2={455 + 270 * pc} />
            <line x1={1130} y1={455} x2={1170} y2={455} />
            <line x1={1130} y1={455 + 270 * pc} x2={1170} y2={455 + 270 * pc} />
          </g>
        </svg>
        <Pill t={t} bas={tInc} x={1260} y={590} metin="≤ 3 IN" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <BaslikBlok t={t} bas={tUc - 0.1} satirlar={["3 INCHES", "OR LESS"]} x={1330} y={230} boyut={120} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Nebraska")} />
    </>
  );
};
export default S34;
