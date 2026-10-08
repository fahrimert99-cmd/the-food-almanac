// Sahne 51 — Bonus alışkanlık: yemekten sonra kısa yürüyüş. Çalışan kas kandaki glukozu çeker, tepe daha da düşer.
import React from "react";
import { Baslik, Etiket, INTER, IkonYol, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kis, pop,
  sol } from "../kutuphane";

// Görseldeki nesneler (görsel koordinatı, ızgaradan)
const BALDIR: [number, number] = [598, 478]; // sağ bacağın baldırı
const DAIRE = { x: 1443.5, y: 576.5, r: 260 }; // kas kesiti dairesi
const AYAKKABI: [number, number] = [578, 868]; // arkadaki ayakkabının tabanı
const SEKER: [number, number] = [1440, 640]; // kandaki glukoz küreleri
const KAS_UST: [number, number] = [1610, 465]; // sağ üst kas lifleri
const KAS_ALT: [number, number] = [1268, 708]; // sol alt kas lifleri

// Büyüteç: baldırdan daireye iki teğet (yakınlaştırma çizgisi)
const tegetler = (): [number, number][] => {
  const [px, py] = BALDIR;
  const dx = DAIRE.x - px, dy = DAIRE.y - py, d = Math.hypot(dx, dy);
  const a0 = Math.atan2(dy, dx), al = Math.asin(DAIRE.r / d), L = Math.sqrt(d * d - DAIRE.r * DAIRE.r);
  return [a0 - al, a0 + al].map((a) => [px + L * Math.cos(a), py + L * Math.sin(a)] as [number, number]);
};
const TEGET = tegetler();
const HALKA = 58;

// Üst satır hapları
const UstHap: React.FC<{ t: number; bas: number; bitis: number; metin: string; dolu?: boolean }> = ({ t, bas, bitis, metin, dolu }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap",
      background: dolu ? RENK.altin : RENK.kagitAcik, color: dolu ? "#fff" : RENK.murekkep, border: `3px solid ${dolu ? RENK.altin : RENK.murekkep}`,
      borderRadius: 999, padding: dolu ? "8px 24px" : "6px 22px 6px 8px", fontFamily: INTER, fontWeight: 800, fontSize: 25,
      letterSpacing: dolu ? 4 : 2, boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      {!dolu && (
        <span style={{ width: 36, height: 36, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={24} renk="#fff" kalinlik={7} />
        </span>
      )}
      {metin}
    </div>
  );
};

// Sol üstte küçük temsili grafik kartı: yürüyüşle yemek sonrası tepe daha düşük
const TepeKarti: React.FC<{ t: number; bas: number; tYesil: number; tOk: number; tNot: number }> = ({ t, bas, tYesil, tOk, tNot }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  const pGri = eout(ilerle(t, bas + 0.15, 0.7));
  const pYesil = eout(ilerle(t, tYesil, 0.9));
  const pOk = eout(ilerle(t, tOk, 0.5));
  const [sn, an] = pop(t, tNot, 0.5);
  const gri = "M 18 192 C 70 192 92 66 140 66 C 190 66 214 170 282 180";
  const yesil = "M 18 192 C 70 192 96 128 140 128 C 190 128 216 182 282 186";
  return (
    <div style={{ position: "absolute", left: 44, top: 128, width: 300, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al,
      background: RENK.kagitAcik, borderRadius: 18, padding: "16px 0 14px", boxShadow: "0 16px 36px rgba(48,40,34,0.28)",
      border: `3px solid ${RENK.lacivert}` }}>
      <div style={{ paddingLeft: 18, fontFamily: INTER, fontWeight: 800, fontSize: 23, letterSpacing: 1, color: RENK.lacivert }}>AFTER-MEAL PEAK</div>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", right: 14, top: 4, fontFamily: INTER, fontWeight: 800, fontSize: 15, letterSpacing: 1.5,
          color: RENK.altin, border: `2px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "3px 10px" }}>ILLUSTRATIVE</span>
        <svg width={300} height={208} style={{ display: "block" }}>
          <line x1={14} y1={194} x2={286} y2={194} stroke={RENK.murekkep} strokeWidth={3} opacity={0.6} />
          <path d={gri} fill="none" stroke={RENK.gri} strokeWidth={6} strokeLinecap="round" strokeDasharray="3 13"
            opacity={pGri} />
          <path d={yesil} fill="none" stroke={RENK.yesil} strokeWidth={9} strokeLinecap="round" pathLength={1} strokeDasharray={1}
            strokeDashoffset={1 - pYesil} />
          {pOk > 0 && (
            <g opacity={pOk}>
              <line x1={140} y1={78} x2={140} y2={78 + 30 * pOk} stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" />
              <polygon points={`128,${84 + 28 * pOk} 152,${84 + 28 * pOk} 140,${100 + 28 * pOk}`} fill={RENK.altin} />
            </g>
          )}
        </svg>
      </div>
      <div style={{ display: "flex", gap: 18, paddingLeft: 18, fontFamily: INTER, fontWeight: 800, fontSize: 18, letterSpacing: 1, color: RENK.lacivert,
        alignItems: "center" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 8, opacity: pGri, color: RENK.gri }}>
          <span style={{ width: 26, borderTop: `4px dotted ${RENK.gri}` }} />NO WALK
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 8, opacity: kis(pYesil * 2), color: RENK.yesil }}>
          <span style={{ width: 26, height: 6, borderRadius: 3, background: RENK.yesil }} />WALK
        </span>
      </div>
      <div style={{ padding: "10px 18px 0", transform: `scale(${sn})`, transformOrigin: "0 50%", opacity: an, fontFamily: INTER, fontWeight: 800,
        fontSize: 21, letterSpacing: 1.5, color: RENK.altin, whiteSpace: "nowrap" }}>EVEN LOWER PEAK</div>
    </div>
  );
};

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBonus = K(0, "bonus habit"), tKanit = K(0, "good evidence");
  const tKisa = K(1, "short, easy walk"), tYuru = K(1, "walk after");
  const tKas = K(2, "muscles"), tCek = K(2, "pull glucose"), tGlu = K(2, "glucose out");
  const tDusur = K(2, "lower"), tTepe = K(2, "peak"), tDaha = K(2, "even further");
  const tUstCikis = K(2, "Working") - 0.2;
  // büyüteç çizgileri baldırdan daireye çizilir
  const pBuyutec = eout(ilerle(t, tKas + 0.25, 0.8));
  const [hs] = pop(t, tKas + 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 40, 1850])}>
        {pBuyutec > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
            {TEGET.map(([ex, ey], i) => {
              const a = Math.atan2(ey - BALDIR[1], ex - BALDIR[0]);
              const sx = BALDIR[0] + HALKA * Math.cos(a), sy = BALDIR[1] + HALKA * Math.sin(a);
              const x2 = sx + (ex - sx) * pBuyutec, y2 = sy + (ey - sy) * pBuyutec;
              return (
                <g key={i}>
                  <line x1={sx} y1={sy} x2={x2} y2={y2} stroke={RENK.kagitAcik} strokeWidth={8} strokeLinecap="round" opacity={0.85} />
                  <line x1={sx} y1={sy} x2={x2} y2={y2} stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="10 9" />
                </g>
              );
            })}
            <circle cx={BALDIR[0]} cy={BALDIR[1]} r={HALKA * hs} fill="none" stroke={RENK.kagitAcik} strokeWidth={8} opacity={0.85} />
            <circle cx={BALDIR[0]} cy={BALDIR[1]} r={HALKA * hs} fill="none" stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="10 9" />
            <circle cx={DAIRE.x} cy={DAIRE.y} r={DAIRE.r + 6} fill="none" stroke={RENK.murekkep} strokeWidth={3} strokeDasharray="10 9"
              opacity={kis(pBuyutec * 2 - 1)} />
          </svg>
        )}
        {/* kandaki glukoz kaslara çekilir */}
        <Parcaciklar t={t} bas={tCek} kaynak={[SEKER[0] + 20, SEKER[1] - 50]} hedef={KAS_UST} adet={52} aralik={0.09} omur={1.6}
          yayilma={110} hedefYayilma={70} kavis={-40} boyut={8} tohum="s51a" />
        <Parcaciklar t={t} bas={tCek + 0.18} kaynak={[SEKER[0] - 60, SEKER[1] + 10]} hedef={KAS_ALT} adet={52} aralik={0.09} omur={1.6}
          yayilma={90} hedefYayilma={60} kavis={-20} boyut={8} tohum="s51b" />
        <Etiket t={t} bas={tKisa} bitis={tUstCikis} capa={AYAKKABI} konum={[860, 795]} metin="SHORT, EASY WALK" renk={RENK.yesil} />
        <Etiket t={t} bas={tKas} bitis={tDusur - 0.3} capa={BALDIR} konum={[860, 300]} metin="WORKING MUSCLES" renk={RENK.mercan} />
        <Etiket t={t} bas={tGlu - 0.25} capa={SEKER} konum={[1450, 905]} metin="GLUCOSE" renk={RENK.altin} />
      </Kamera>
      {/* üst satır: bonus + kanıt hapları */}
      <div style={{ position: "absolute", left: 1050, top: 104, display: "flex", gap: 16, alignItems: "center" }}>
        <UstHap t={t} bas={tBonus} bitis={tUstCikis} metin="BONUS HABIT" dolu />
        <UstHap t={t} bas={tKanit} bitis={tUstCikis} metin="GOOD EVIDENCE" />
      </div>
      <Baslik t={t} bas={tYuru} metin="WALK AFTER" x={1050} y={222} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tYuru + 0.2} metin="MEALS" x={1519} y={222} boyut={100} renk={RENK.koyuYesil} />
      <TepeKarti t={t} bas={tDusur} tYesil={K(2, "after-meal")} tOk={tTepe} tNot={tDaha} />
    </>
  );
};

export default S51;
