// Sahne 45 — varfarin vakası: solda sürahi ve ilaç şişesi, sağda başlık ve INR değerleri.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tInr = K(2, "INR");
  const tEski = K(2, "3.79"), tYeni = K(2, "1.37"), tYine = K(2, "rose");
  const [s1, a1] = pop(t, K(1, "44-year-old"), 0.5);
  const a1s = a1 * sol(t, tInr - 0.1);
  const [sp, ap] = pop(t, tInr, 0.5);
  const kutu = (bas: number, deger: string, renk: string, x: number) => {
    const [sc, al] = pop(t, bas, 0.55);
    return (
      <div style={{ position: "absolute", left: x, top: 520, width: 300, textAlign: "center", transform: `scale(${sc})`, opacity: al,
        background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 24, padding: "6px 0 10px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 110, lineHeight: 1.05, color: renk }}>{deger}</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>INR</div>
      </div>
    );
  };
  const pOk = eout(ilerle(t, tYeni + 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "1999")} />
      <Etiket t={t} bas={K(0, "blood")} bitis={K(1, "warfarin") - 0.1} capa={[760, 520]} konum={[1180, 560]} metin="BLOOD THINNER" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "warfarin")} bitis={tInr - 0.1} capa={[760, 600]} konum={[1180, 560]} metin="WARFARIN" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "green")} capa={[330, 600]} konum={[780, 230]} metin="GREEN TEA" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1000, top: 440, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1s }}>
        <Hap metin="44-YEAR-OLD MAN · 1999 CASE REPORT" renk={RENK.altin} boyut={26} />
      </div>
      <BaslikBlok t={t} bas={K(1, "half")} satirlar={["UP TO A GALLON", "A DAY"]} x={1000} y={140} boyut={104} />
      <Not t={t} bas={K(1, "half") + 0.9} metin="one case report · half a gallon to a gallon" x={1000} y={330} boyut={30} />
      <div style={{ position: "absolute", left: 1000, top: 440, transform: `scale(${sp})`, transformOrigin: "0 50%", opacity: ap }}>
        <Hap metin="INR · CLOTTING TEST" renk={RENK.lacivert} boyut={26} />
      </div>
      {kutu(tEski, "3.79", RENK.lacivert, 1000)}
      {kutu(tYeni, "1.37", RENK.mercan, 1500)}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {pOk > 0.02 && <line x1={1320} y1={650} x2={1320 + 150 * pOk} y2={650} stroke={RENK.murekkep} strokeWidth={8} strokeLinecap="round" />}
        {pOk > 0.9 && <polygon points="1470,632 1494,650 1470,668" fill={RENK.murekkep} />}
      </svg>
      <Not t={t} bas={tYine} metin="ROSE AGAIN AFTER HE STOPPED" x={1000} y={780} boyut={34} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S45;
