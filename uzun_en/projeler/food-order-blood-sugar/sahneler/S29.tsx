// Sahne 29 — mide boşalması: boş mideye meyve suyu hızlı, lif/protein/yağ dolu mide yavaş.
import React from "react";
import { ANTON, AdimAkisi, Baslik, Etiket, INTER, Kamera, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop,
  sol } from "../kutuphane";

// Görsel 29: sol sayfa meyve suyu + portakal, sağ sayfa yiyecek dolu mide (kesit). Yazı/imza kusuru yok.
// Boş sütunlar: sol x 600-935 (bardak ile cilt arası), sağ x 985-1295 (cilt ile yemek borusu arası).
const SOLX = 770, SAG = 1137, KART_Y = 330;

const Cip: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
      display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: "7px 20px 7px 14px", fontFamily: INTER, fontWeight: 800,
      fontSize: 26, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: renk }} />
      {metin}
    </div>
  );
};

/** Hız kartı: zarfla (quickly / more slowly) kart + akış şeridi gelir, büyük kelime maskeden kayar. */
const HizKarti: React.FC<{
  t: number; bas: number; kelimeBas: number; kelime: string; not: string; renk: string; x: number; hiz: number; aralik: number;
}> = ({ t, bas, kelimeBas, kelime, not, renk, x, hiz, aralik }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  const w = 310, sw = 262, sh = 30;
  const pk = eout(ilerle(t, kelimeBas, 0.5));
  // şeritte akan taneler: hızlı = sık ve çabuk, yavaş = seyrek ve ağır
  const kay = Math.max(0, t - bas) * hiz;
  const n = Math.ceil(sw / aralik) + 1;
  const taneler: React.ReactNode[] = [];
  for (let k = 0; k < n; k++) {
    const px = ((k * aralik + kay) % (n * aralik)) - aralik / 2;
    if (px < 10 || px > sw - 26) continue;
    const kenar = Math.min(1, (px - 10) / 24, (sw - 26 - px) / 24);
    taneler.push(<circle key={k} cx={px} cy={sh / 2} r={8} fill={RENK.altinAcik} stroke={RENK.murekkep} strokeWidth={2.5} opacity={kenar} />);
  }
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: KART_Y, width: w, boxSizing: "border-box", transform: `scale(${sc})`,
      transformOrigin: "50% 0", opacity: al, padding: "4px 18px 16px", textAlign: "center", background: "#FCF8EC",
      border: `4px solid ${renk}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ height: 104, overflow: "hidden" }}>
        <div style={{ fontFamily: ANTON, fontSize: 88, lineHeight: "104px", color: renk, whiteSpace: "nowrap",
          transform: `translateY(${(1 - pk) * 100}%)`, opacity: Math.min(1, pk * 1.5) }}>{kelime}</div>
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 23, lineHeight: 1.2, color: RENK.lacivert, whiteSpace: "nowrap" }}>{not}</div>
      <svg width={sw} height={sh} style={{ display: "block", margin: "12px auto 0" }}>
        <rect x={1.5} y={1.5} width={sw - 3} height={sh - 3} rx={(sh - 3) / 2} fill="#EFE7D6" stroke={renk} strokeOpacity={0.55} strokeWidth={2.5} />
        {taneler}
        <polygon points={`${sw - 20},${sh / 2 - 7} ${sw - 9},${sh / 2} ${sw - 20},${sh / 2 + 7}`} fill={renk} />
      </svg>
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pencere = kameraYolu(t, s.sure, [40, 30, 1840], [80, 50, 1760]);
  // 1. cümle: kâğıt örtü üstünde başlık + akış ("your blood" sonrası 2. cümle başında kalkar)
  const bitis1 = c[1].bas + 0.02;
  const aOrtu = sol(t, bitis1, 0.6);
  // 2. cümle: meyve suyu
  const tSu = K(1, "juice"), tBos = K(1, "empty stomach"), tHizli = K(1, "quickly");
  // 3. cümle: dolu mide
  const tMide = K(2, "stomach already"), tLif = K(2, "fiber"), tProt = K(2, "protein"), tYag = K(2, "fat");
  const tYavas = K(2, "more slowly");
  // midedeki yiyeceği çevreleyen halka ("A stomach already holding")
  const pHalka = eout(ilerle(t, tMide, 0.9));
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pencere}>
        {pHalka > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <ellipse cx={1418} cy={676} rx={268} ry={172} fill="none" stroke={RENK.kagitAcik} strokeWidth={10} opacity={0.75}
              pathLength={1} strokeDasharray={`${pHalka} 1`} transform="rotate(-14 1418 676)" />
            <ellipse cx={1418} cy={676} rx={268} ry={172} fill="none" stroke={RENK.altin} strokeWidth={5}
              pathLength={1} strokeDasharray={`${pHalka} 1`} transform="rotate(-14 1418 676)" />
          </svg>
        )}
        <Etiket t={t} bas={tSu - 0.05} capa={[392, 500]} konum={[392, 128]} metin="JUICE" renk={RENK.mercan} boyut={28} />
        <Cip t={t} bas={tBos} metin="EMPTY STOMACH" renk={RENK.gri} x={SOLX} y={276} />
        <HizKarti t={t} bas={tHizli - 0.12} kelimeBas={tHizli} kelime="FAST" not="passes through quickly" renk={RENK.mercan}
          x={SOLX} hiz={300} aralik={32} />
        <Cip t={t} bas={tLif} metin="FIBER" renk={RENK.yesil} x={SAG} y={132} />
        <Cip t={t} bas={tProt} metin="PROTEIN" renk={RENK.altin} x={SAG} y={204} />
        <Cip t={t} bas={tYag} metin="FAT" renk={RENK.lacivert} x={SAG} y={276} />
        <HizKarti t={t} bas={tYavas - 0.12} kelimeBas={tYavas} kelime="SLOWER" not="empties more slowly" renk={RENK.yesil}
          x={SAG} hiz={34} aralik={74} />
      </Kamera>
      {aOrtu > 0 && <Ortu a={0.9 * aOrtu} />}
      <Baslik t={t} bas={K(0, "gastric")} bitis={bitis1} metin="GASTRIC" x={960} y={330} boyut={136} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "emptying")} bitis={bitis1} metin="EMPTYING" x={960} y={480} boyut={136} renk={RENK.koyuYesil} hiza="orta" />
      {aOrtu > 0 && (
        <div style={{ opacity: sol(t, bitis1) }}>
          <AdimAkisi t={t} x={960} y={700} boyut={40} numarali={false} adimlar={[
            { bas: K(0, "speed"), metin: "EMPTYING SPEED", renk: RENK.altin },
            { bas: K(0, "glucose"), metin: "GLUCOSE", renk: RENK.altin },
            { bas: K(0, "your blood"), metin: "YOUR BLOOD", renk: RENK.mercan },
          ]} />
        </div>
      )}
    </>
  );
};

export default S29;
