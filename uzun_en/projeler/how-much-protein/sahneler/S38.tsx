// Sahne 38 — Symons 2009: üstte soru, grup hapları ve 30 / 90 g rozetleri; masada iki tabak sığır.
import React from "react";
import { AltSis, Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, bitis, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: a, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER, fontWeight: 800,
      fontSize: 34, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(1, "17"), tRozet = K(1, "30");
  const tBitis = tRozet - 0.3;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "lean")} capa={[1230, 560]} konum={[1230, 810]} metin="LEAN BEEF" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "how")} bitis={K(1, "researchers") + 0.4} metin="HOW MUCH PER MEAL?" x={960} y={175} boyut={92}
        renk={RENK.koyuYesil} hiza="orta" />
      <Pil t={t} bas={tGrup} bitis={tBitis} metin="17 YOUNG ADULTS" x={560} y={120} renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "older")} bitis={tBitis} metin="17 OLDER ADULTS" x={1340} y={120} renk={RENK.altin} />
      <Not t={t} bas={K(1, "average")} bitis={tBitis} metin="average age 68" x={1340} y={190} hiza="orta" boyut={30} agirlik={700} renk={RENK.gri} />
      <VurguRozet t={t} bas={tRozet} vurgu="30 G" not="OF PROTEIN" x={720} y={105} genislik={320} boyut={84} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(1, "90")} vurgu="90 G" not="IN LEAN BEEF" x={1200} y={105} genislik={320} boyut={84} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "or")} metin="OR" x={960} y={140} hiza="orta" boyut={34} agirlik={800} renk={RENK.gri} />
    </>
  );
};

export default S38;
