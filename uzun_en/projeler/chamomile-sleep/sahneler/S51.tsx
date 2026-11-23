// Sahne 51 — İpucu 4: çay bakımın yerini tutmasın; ACP: önce CBT-I.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTea = K(1, "tea"), tDoc = K(2, "talk to your doctor"), tPoor = K(2, "poor sleep");
  const tACP = K(3, "American College"), tCog = K(3, "cognitive"), tFirst = K(3, "first treatment"), tChr = K(3, "chronic");
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1780]);
  const bit = tCog - 0.3;
  const pill = (b: number, m: string, renk: string, y: number, ik: "uyari" | "onay") => {
    const [sc, al] = pop(t, b, 0.5);
    const a = al * (t < bit ? 1 : Math.max(0, 1 - (t - bit) / 0.4));
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 1090, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999,
        padding: "10px 30px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ik} boyut={30} renk="#fff" kalinlik={5} /></span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert }}>{m}</span>
      </div>
    );
  };
  const pBar = eout(ilerle(t, tFirst, 0.7));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kam} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tACP} />
      <Etiket t={t} bas={tTea} bitis={tPoor - 0.2} capa={[640, 535]} konum={[860, 380]} metin="TEA" renk={RENK.altin} />
      <Baslik t={t} bas={0.0} metin="4" x={1080} y={190} boyut={200} renk={RENK.altin} />
      <Baslik t={t} bas={0.85} bitis={bit} metin="DON'T LET TEA" x={1080} y={370} boyut={72} renk={RENK.lacivert} />
      <Baslik t={t} bas={1.05} bitis={bit} metin="STAND IN FOR CARE" x={1080} y={450} boyut={72} renk={RENK.mercan} />
      {pill(tPoor, "POOR SLEEP FOR WEEKS?", RENK.altin, 560, "uyari")}
      {pill(tDoc, "TALK TO YOUR DOCTOR", RENK.yesil, 680, "onay")}
      <Baslik t={t} bas={tCog} metin="CBT-I" x={1080} y={430} boyut={180} renk={RENK.lacivert} />
      <Not t={t} bas={K(3, "insomnia as")} metin="Cognitive behavioral therapy for insomnia" x={1086} y={520} boyut={34} genislik={720} />
      <div style={{ position: "absolute", left: 1086, top: 600, height: 8, width: 330 * pBar, background: RENK.altin, borderRadius: 4 }} />
      <Baslik t={t} bas={tFirst} metin="FIRST" x={1080} y={700} boyut={150} renk={RENK.koyuYesil} />
      <Not t={t} bas={tChr} metin={s.meta.baslik?.not ?? ""} x={1086} y={800} boyut={34} genislik={760} agirlik={700} />
    </>
  );
};
export default S51;
