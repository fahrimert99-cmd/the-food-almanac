// Sahne 41 — Açık sorular: en kısa ara ve uzun vadeli sonuçlar bilinmiyor; büyük çalışmalar henüz yok.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, Img, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop,
  staticFile } from "../kutuphane";

type Uc = { metin: string; renk: string; bas: number };

// "A ⇢ ? ⇢ B" bağlantısı: kesikli ok çizilir, ortadaki soru dairesi belirir
const Bag: React.FC<{ t: number; bas: number; ikon: "saat" | "soru" }> = ({ t, bas, ikon }) => {
  const p = eout(ilerle(t, bas, 0.6));
  const [sc, al] = pop(t, bas + 0.25, 0.5);
  const w = 140;
  return (
    <div style={{ position: "relative", width: w, height: 70, flex: "none" }}>
      <svg width={w} height={70} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={6} y1={35} x2={6 + (w - 24) * p} y2={35} stroke={RENK.murekkep} strokeWidth={4} strokeDasharray="10 8" strokeLinecap="round" />
        {p > 0.95 && <polyline points={`${w - 24},25 ${w - 12},35 ${w - 24},45`} fill="none" stroke={RENK.murekkep} strokeWidth={4}
          strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
      <div style={{ position: "absolute", left: w / 2 - 35, top: 6, width: 58, height: 58, borderRadius: "50%", background: RENK.altin,
        border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 6px 16px rgba(48,40,34,0.22)", display: "flex", alignItems: "center",
        justifyContent: "center", transform: `scale(${sc})`, opacity: al, boxSizing: "border-box" }}>
        <IkonYol ad={ikon} boyut={36} renk="#fff" kalinlik={6} />
      </div>
    </div>
  );
};

const Uchap: React.FC<{ t: number; u: Uc }> = ({ t, u }) => {
  const [sc, al] = pop(t, u.bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap", flex: "none",
      background: RENK.kagitAcik, border: `3px solid ${u.renk}`, borderRadius: 999, padding: "8px 18px 8px 13px",
      fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 1.2, color: RENK.murekkep, boxShadow: "0 6px 16px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: u.renk }} />
      {u.metin}
    </div>
  );
};

// soru kartı: soru simgesi + başlık + "A ⇢ ? ⇢ B" diyagramı
const SoruKarti: React.FC<{
  t: number; bas: number; baslikBas: number; bagBas: number; x: number; y: number; baslik: string; a: Uc; b: Uc; ikon: "saat" | "soru";
}> = ({ t, bas, baslikBas, bagBas, x, y, baslik, a, b, ikon }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, width: 660, height: 232, transform: `scale(${0.9 + 0.1 * sc})`, opacity: al,
      background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 26, boxShadow: "0 14px 32px rgba(48,40,34,0.18)",
      boxSizing: "border-box" }}>
      <div style={{ position: "absolute", left: 26, top: 24, width: 62, height: 62, borderRadius: "50%", background: RENK.lacivert,
        display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="soru" boyut={44} renk="#fff" kalinlik={6} />
      </div>
      <Baslik t={t} bas={baslikBas} metin={baslik} x={108} y={56} boyut={54} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 124, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        <Uchap t={t} u={a} />
        <Bag t={t} bas={bagBas} ikon={ikon} />
        <Uchap t={t} u={b} />
      </div>
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tAcik = K(0, "open questions"), tSoru = K(0, "questions");
  const tBil = K(1, "we don't know");
  const tAra = K(1, "shortest gap"), tGap = K(1, "gap that"), tIs = K(1, "still works");
  const tAli = K(1, "this habit"), tDeg = K(1, "changes"), tUzun = K(1, "long-term outcomes"), tKalp = K(1, "heart disease");
  const tCal = K(2, "those studies"), tYok = K(2, "haven't been done"), tOlcek = K(2, "at scale");
  // damga: önce "NOT YET DONE", sonra "AT SCALE"
  const [sd, ad] = pop(t, tYok, 0.55);
  const aOlcek = eout(ilerle(t, tOlcek, 0.45));
  const pCiz = kis(eout(ilerle(t, tOlcek + 0.2, 0.5)));
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1800])}>
        {/* alttaki kitabın sırtındaki sahte yazı: komşu sırt şeridiyle örtülür */}
        <div style={{ position: "absolute", left: 410, top: 924, width: 46, height: 74, overflow: "hidden",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)" }}>
          <Img src={staticFile("img/tam/41.jpg")} style={{ position: "absolute", left: -366, top: -924, width: 1920, height: 1080 }} />
        </div>
        {/* açık kitap sayfalarındaki silik sahte satırlar: sayfa rengiyle örtülür */}
        <div style={{ position: "absolute", left: 600, top: 888, width: 120, height: 58,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(246,241,208,0.97) 0%, rgba(246,241,208,0.9) 55%, rgba(246,241,208,0) 100%)" }} />
        <div style={{ position: "absolute", left: 512, top: 908, width: 78, height: 44,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(226,220,188,0.95) 0%, rgba(226,220,188,0.85) 55%, rgba(226,220,188,0) 100%)" }} />
        <Etiket t={t} bas={tCal} capa={[395, 848]} konum={[690, 800]} metin="THOSE STUDIES" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      {/* başlık: OPEN QUESTIONS tek satırda, iki renk */}
      <Baslik t={t} bas={tAcik} metin="OPEN" x={1000} y={230} boyut={136} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tSoru} metin="QUESTIONS" x={1036} y={230} boyut={136} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tBil} metin="WE DON'T KNOW" x={494} y={408} boyut={28} renk={RENK.altin} font="inter" aralik={6} />
      <SoruKarti t={t} bas={tAra - 0.05} baslikBas={tAra} bagBas={tGap} x={490} y={448} baslik="SHORTEST GAP"
        a={{ metin: "VEG + PROTEIN", renk: RENK.yesil, bas: tGap - 0.05 }} b={{ metin: "CARBS", renk: RENK.mercan, bas: tIs }} ikon="saat" />
      <SoruKarti t={t} bas={tAli - 0.05} baslikBas={tUzun} bagBas={tDeg} x={1180} y={448} baslik="LONG-TERM OUTCOMES"
        a={{ metin: "THIS HABIT", renk: RENK.yesil, bas: tAli }} b={{ metin: "HEART DISEASE", renk: RENK.mercan, bas: tKalp }} ikon="soru" />
      {/* damga: büyük ölçekli çalışmalar henüz yok */}
      {ad > 0 && (
        <div style={{ position: "absolute", left: 880, top: 770, transform: `rotate(-2deg) scale(${sd})`, transformOrigin: "0% 50%", opacity: ad,
          display: "flex", alignItems: "center", padding: "8px 26px", border: `5px solid ${RENK.mercan}`, borderRadius: 14,
          background: kagit(0.9), whiteSpace: "nowrap" }}>
          <span style={{ fontFamily: ANTON, fontSize: 58, lineHeight: 1.15, color: RENK.mercan }}>NOT YET DONE</span>
          {/* damga "AT SCALE" gelince genişler (önceden boş yer kalmasın) */}
          <span style={{ display: "inline-block", overflow: "hidden", maxWidth: 240 * aOlcek, marginLeft: 16 * aOlcek }}>
            <span style={{ position: "relative", fontFamily: ANTON, fontSize: 58, lineHeight: 1.15, color: RENK.lacivert, opacity: aOlcek,
              display: "inline-block" }}>
              AT SCALE
              <span style={{ position: "absolute", left: 0, bottom: 4, height: 6, width: `${pCiz * 100}%`, background: RENK.altin, borderRadius: 3 }} />
            </span>
          </span>
        </div>
      )}
    </>
  );
};

export default S41;
