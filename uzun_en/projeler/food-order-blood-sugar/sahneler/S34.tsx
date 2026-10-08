// Sahne 34 — GLP-1: mideyi yavaşlatır, insülini güçlendirir, tokluk hissi verir; bazı modern ilaçlar onu taklit eder.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Ikon, IkonYol, Kamera, Not, Parcaciklar, RENK, SP, eout, einout, ilerle,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Görsel 34: solda sindirim kanalı (x 80-640), oklarla mide (775-1035), daha büyük mide (1160-1445) ve beyin (1590-1885).
// Yazı/imza kusuru yok. Üst bant (y < 300) ve alt bant (y 720-950) boş kâğıt.
// Beyin sağ kenara yakın: pencere sağ kenarı >= 1890 tutulur.

/** Sola yaslı çip: renkli daire + simge + metin. y = orta. */
const Cip: React.FC<{
  t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; simge: React.ReactNode; boyut?: number;
}> = ({ t, bas, bitis = 1e9, x, y, metin, renk, simge, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.45;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "0 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: `8px ${boyut * 0.85}px 8px 9px`, fontFamily: INTER, fontWeight: 800,
      fontSize: boyut, letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, display: "flex", flex: "none",
        alignItems: "center", justifyContent: "center" }}>{simge}</span>
      {metin}
    </div>
  );
};

/** İki renkli kapsül simgesi (ilaç). */
const Kapsul: React.FC<{ boyut: number }> = ({ boyut }) => (
  <svg width={boyut} height={boyut} viewBox="0 0 100 100">
    <g transform="rotate(-35 50 50)">
      <rect x={12} y={33} width={76} height={34} rx={17} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={5} />
      <path d="M 50 33 L 29 33 A 17 17 0 0 0 29 67 L 50 67 Z" fill={RENK.altin} stroke={RENK.murekkep} strokeWidth={5} strokeLinejoin="round" />
      <rect x={58} y={39} width={20} height={6} rx={3} fill="#fff" opacity={0.7} />
    </g>
  </svg>
);

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1840]);

  const tYavas = K(0, "slows"), tDaha = K(0, "even further"), tInsulin = K(0, "release insulin"), tErken = K(0, "earlier");
  const tTok = K(0, "helps you feel full");
  const bitis1 = c[1].bas - 0.1;
  const tIsim = K(1, "familiar"), tIlac = K(1, "some modern"), tDiyabet = K(1, "diabetes"), tTaklit = K(1, "mimic");

  // başlığın altını çizen altın çizgi ("familiar")
  const pCizgi = einout(ilerle(t, tIsim - 0.15, 0.6));
  // ilaç kartı
  const [kSc, kAl] = pop(t, tIlac, 0.55);
  const aAlt = eout(ilerle(t, tDiyabet, 0.45));
  const pOk = eout(ilerle(t, tTaklit - 0.1, 0.5));
  const [mSc, mAl] = pop(t, tTaklit, 0.5);

  return (
    <>
      <Kamera gorsel="tam/34" pencere={pencere}>
        {/* bağırsaktan mideye ve mideden beyne sinyal */}
        <Parcaciklar t={t} bas={tYavas - 0.3} kaynak={[600, 552]} hedef={[835, 540]} adet={12} aralik={0.07} omur={0.9}
          yayilma={30} hedefYayilma={70} kavis={-50} boyut={7} tohum="s34a" />
        <Parcaciklar t={t} bas={tTok - 0.35} kaynak={[1440, 560]} hedef={[1680, 540]} adet={12} aralik={0.07} omur={0.9}
          yayilma={30} hedefYayilma={80} kavis={-50} boyut={7} tohum="s34b" />
        <Etiket t={t} bas={tYavas} bitis={bitis1} capa={[915, 540]} konum={[905, 800]} metin="SLOWS THE STOMACH" renk={RENK.altin} boyut={28} />
        <Ikon t={t} bas={tDaha} bitis={bitis1} ad="saat" x={1028} y={420} boyut={74} zemin={RENK.altin} />
        <Etiket t={t} bas={tTok} bitis={bitis1} capa={[1735, 545]} konum={[1590, 800]} metin="HELPS YOU FEEL FULL" renk={RENK.altin} boyut={28} />
      </Kamera>

      {/* başlık: GLP-1 */}
      <Baslik t={t} bas={0.05} metin="GLP-1" x={690} y={178} boyut={172} renk={RENK.altin} />
      {pCizgi > 0 && (
        <div style={{ position: "absolute", left: 694, top: 278, width: 330 * pCizgi, height: 9, borderRadius: 5, background: RENK.lacivert }} />
      )}

      {/* insülin: görselde pankreas yok -> üst bantta ayrı çip + not */}
      <Cip t={t} bas={tInsulin} bitis={bitis1} x={1150} y={146} metin="BOOSTS INSULIN" renk={RENK.yesil}
        simge={<span style={{ transform: "rotate(-90deg)", display: "flex" }}><IkonYol ad="ok" boyut={30} renk="#fff" kalinlik={7} /></span>} />
      <Not t={t} bas={tErken} bitis={bitis1} metin="earlier and more efficiently when glucose rises" x={1156} y={196} boyut={28}
        renk={RENK.lacivert} agirlik={600} />

      {/* üç etki tek satırda özetlenir (meta notu) */}
      <Not t={t} bas={bitis1 + 0.42} metin={s.meta.baslik?.not ?? ""} x={1240} y={824} boyut={34} hiza="orta" renk={RENK.lacivert}
        agirlik={700} genislik={1120} />

      {/* 2. cümle: modern ilaçlar onu taklit eder */}
      {kAl > 0 && (
        <div style={{ position: "absolute", left: 1180, top: 114, transform: `scale(${kSc})`, transformOrigin: "0 50%", opacity: kAl,
          display: "flex", alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 26,
          padding: "12px 30px 14px 16px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <Kapsul boyut={112} />
          <div>
            <div style={{ fontFamily: ANTON, fontSize: 62, lineHeight: 1.1, color: RENK.lacivert, whiteSpace: "nowrap" }}>MODERN MEDICINES</div>
            <div style={{ opacity: aAlt, transform: `translateY(${(1 - aAlt) * 8}px)`, fontFamily: INTER, fontWeight: 800, fontSize: 25,
              letterSpacing: 2, color: RENK.gri, whiteSpace: "nowrap" }}>FOR DIABETES &amp; WEIGHT LOSS</div>
          </div>
        </div>
      )}
      {pOk > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1166} y1={186} x2={1166 - 112 * pOk} y2={186} stroke={RENK.altin} strokeWidth={8} strokeLinecap="round" strokeDasharray="14 10" />
          <polygon points={`${1166 - 112 * pOk - 20},186 ${1166 - 112 * pOk},172 ${1166 - 112 * pOk},200`} fill={RENK.altin} />
        </svg>
      )}
      {mAl > 0 && (
        <div style={{ position: "absolute", left: 1110, top: 244, transform: `translate(-50%, 0) scale(${mSc})`, opacity: mAl,
          background: RENK.altin, color: "#fff", borderRadius: 999, padding: "6px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 24,
          letterSpacing: 3, whiteSpace: "nowrap", boxShadow: "0 6px 16px rgba(48,40,34,0.18)" }}>MIMIC</div>
      )}
    </>
  );
};

export default S34;
