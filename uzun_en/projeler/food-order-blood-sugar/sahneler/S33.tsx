// Sahne 33 — üçüncü mekanizma: hormonal. Protein ve yağ bağırsağa ulaşınca bağırsak hormonları salınır; biri GLP-1.
import React from "react";
import { ANTON, Baslik, Etiket, GorselKart, INTER, IkonYol, Kamera, Ortu, Parcaciklar, RENK, SP, eback, einout, eout, ilerle,
  kameraYolu, kelimeZamani, kis, pop, sol } from "../kutuphane";

type N = [number, number];

// Görsel 33: solda zeytinyağı şişesi (yağ), sağda kesilmiş et rulosu (protein). Üst bant (y < 380) boş kâğıt.
// Sağ alttaki imza (x 1720-1790, y 960-985) kâğıt yamayla örtülür.
const KART_UST: N = [620, 212];   // "intestine": üst boş bantta belirir
const KART: N = [720, 515];       // "trigger": şemadaki yerine kayar
const MERKEZ: N = [1440, 545];
// hormon taneleri: kartın sağından çıkıp GLP-1'in çevresine dağılır (ilk öğe = GLP-1)
const TANELER: N[] = [MERKEZ, [1230, 395], [1655, 385], [1195, 615], [1690, 610], [1300, 750], [1585, 755], [1445, 345]];

/** Çip: renkli daire (numara / simge) + metin. sol=true ise x sol kenar. */
const Cip: React.FC<{
  t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; no?: string;
  boyut?: number; solaYasla?: boolean; harfAraligi?: number;
}> = ({ t, bas, bitis = 1e9, x, y, metin, renk, no, boyut = 26, solaYasla = false, harfAraligi = 1.5 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const d = boyut * 1.42;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${solaYasla ? 0 : -50}%, -50%) scale(${sc})`,
      transformOrigin: solaYasla ? "0 50%" : "50% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 11, whiteSpace: "nowrap", background: RENK.kagitAcik,
      border: `3px solid ${renk}`, borderRadius: 999, padding: `7px ${boyut * 0.85}px 7px 8px`, fontFamily: INTER, fontWeight: 800,
      fontSize: boyut, letterSpacing: harfAraligi, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: d, height: d, borderRadius: "50%", background: renk, color: "#fff", display: "flex", flex: "none",
        alignItems: "center", justifyContent: "center", fontSize: boyut * 0.82 }}>{no}</span>
      {metin}
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [60, 40, 1800], [100, 60, 1720]);

  const tUcuncu = K(0, "third"), tHormonal = K(0, "hormonal"), tIlginc = K(0, "most interesting");
  const bitis0 = K(1, "When") - 0.2;
  const tProt = K(1, "protein"), tYag = K(1, "fat"), tBag = K(1, "intestine");
  const tTetik = K(1, "trigger"), tSalim = K(1, "release"), tHormon = K(1, "gut hormones");
  const tBir = K(1, "one called"), tAdi = K(1, "called"), tGlp = K(1, "GLP-1");

  // görsel -> şema geçişi ("trigger" ile)
  const pKay = einout(ilerle(t, tTetik + 0.02, 0.6));
  const pOrtu = eout(ilerle(t, tTetik, 0.55));
  const bitisEt = tTetik + 0.05;
  const kart: N = [KART_UST[0] + (KART[0] - KART_UST[0]) * pKay, KART_UST[1] + (KART[1] - KART_UST[1]) * pKay];
  const tCip = tTetik + 0.3;

  // ok: protein + yağ -> bağırsak
  const pOk1 = eout(ilerle(t, tCip + 0.15, 0.4));
  // tetik halkası
  const halka = ilerle(t, tTetik, 1.0);
  // GLP-1 öne çıkar
  const pBir = eout(ilerle(t, tBir, 0.6));
  const pGlp = eback(ilerle(t, tGlp - 0.05, 0.6));
  const pGlpA = eout(ilerle(t, tGlp - 0.05, 0.35));
  const halkaGlp = ilerle(t, tGlp, 1.1);

  const kaynak: N = [KART[0] + 190, KART[1] + 10];
  const tCikis = Math.max(tSalim, tTetik + 0.5);
  const taneler = TANELER.map(([hx, hy], k) => {
    const t0 = tCikis + k * 0.1;
    const u = ilerle(t, t0, 1.3);
    if (u <= 0) return null;
    const e = eout(u);
    const cx = kaynak[0] + (hx - kaynak[0]) * 0.5, cy = Math.min(kaynak[1], hy) - 90;
    let x = (1 - e) ** 2 * kaynak[0] + 2 * (1 - e) * e * cx + e * e * hx;
    let y = (1 - e) ** 2 * kaynak[1] + 2 * (1 - e) * e * cy + e * e * hy;
    x += Math.sin(t * 1.3 + k * 1.7) * 6 * e;
    y += Math.cos(t * 1.1 + k * 2.3) * 6 * e;
    const r = k === 0 ? 24 + 22 * pBir + 80 * pGlp : 22 + (k % 3) * 3;
    const a = kis(u * 4) * (k === 0 ? 1 : 1 - 0.55 * pBir);
    return { x, y, r, a, k };
  });

  return (
    <>
      <Kamera gorsel="tam/33" pencere={pencere}>
        {/* imza örtüsü */}
        <div style={{ position: "absolute", left: 1755 - 110, top: 972 - 70, width: 220, height: 140,
          background: "radial-gradient(ellipse closest-side at 50% 50%, rgba(251,248,219,1) 0%, rgba(251,248,219,1) 60%, rgba(251,248,219,0) 100%)" }} />
        {/* protein ve yağdan bağırsağa akış (etiket haplarının altında kalır) */}
        {t < tTetik + 0.6 && (
          <div style={{ opacity: sol(t, tTetik, 0.35) }}>
            <Parcaciklar t={t} bas={tBag - 0.05} kaynak={[1180, 340]} hedef={[700, 230]} adet={10} aralik={0.06}
              omur={0.75} yayilma={50} hedefYayilma={110} kavis={-40} renk={RENK.mercan} boyut={7} tohum="p33" />
            <Parcaciklar t={t} bas={tBag} kaynak={[226, 600]} hedef={[600, 260]} adet={10} aralik={0.06}
              omur={0.75} yayilma={50} hedefYayilma={110} kavis={-120} renk={RENK.altin} boyut={7} tohum="y33" />
          </div>
        )}
        <Etiket t={t} bas={tProt} bitis={bitisEt} capa={[1175, 330]} konum={[1010, 222]} metin="PROTEIN" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tYag} bitis={bitisEt} capa={[226, 790]} konum={[420, 445]} metin="FAT" renk={RENK.lacivert} boyut={28} />
      </Kamera>

      {/* 1. cümle: üçüncü mekanizma = hormonal */}
      <Cip t={t} bas={tUcuncu} bitis={bitis0} x={86} y={128} no="3" metin="THIRD MECHANISM" renk={RENK.altin} solaYasla harfAraligi={3} boyut={27} />
      <Baslik t={t} bas={tHormonal - 0.05} bitis={bitis0} metin="HORMONAL" x={80} y={262} boyut={172} renk={RENK.lacivert} />
      <Baslik t={t} bas={tIlginc} bitis={bitis0} metin="THE MOST INTERESTING" x={88} y={384} boyut={32} renk={RENK.altin} font="inter" aralik={5} />

      {/* 2. cümle: bağırsak şeması */}
      {pOrtu > 0 && <Ortu a={0.92 * pOrtu} />}
      <Cip t={t} bas={tCip} x={330} y={455} metin="PROTEIN" renk={RENK.altin} no="" boyut={28} />
      <Baslik t={t} bas={tCip + 0.08} metin="+" x={330} y={512} boyut={44} renk={RENK.altin} hiza="orta" font="inter" />
      <Cip t={t} bas={tCip + 0.12} x={330} y={570} metin="FAT" renk={RENK.lacivert} no="" boyut={28} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        <defs>
          <filter id="parilti33" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {pOk1 > 0 && (
          <g>
            <line x1={462} y1={512} x2={462 + (505 - 462) * pOk1} y2={512} stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
            <polygon points={`${462 + (505 - 462) * pOk1 + 20},512 ${462 + (505 - 462) * pOk1},498 ${462 + (505 - 462) * pOk1},526`} fill={RENK.altin} />
          </g>
        )}
        {halka > 0 && halka < 1 && (
          <circle cx={kart[0]} cy={kart[1] + 20} r={190 + 140 * halka} fill="none" stroke={RENK.altin} strokeWidth={6} opacity={(1 - halka) * 0.8} />
        )}
      </svg>
      <GorselKart t={t} bas={tBag} gorsel="tam/34" kirp={[0, 230, 640, 710]} x={kart[0]} y={kart[1]} w={300 + 40 * pKay} h={225 + 30 * pKay} aci={-2}
        etiket="INTESTINE" />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
        {taneler.map((d) => d && (
          <g key={d.k} opacity={d.a}>
            {d.k === 0 && pBir > 0 && (
              <circle cx={d.x} cy={d.y} r={d.r + 12} fill="none" stroke={RENK.altin} strokeWidth={4} strokeDasharray="10 8"
                opacity={pBir * (1 - pGlpA)} />
            )}
            <circle cx={d.x} cy={d.y} r={d.r} fill={RENK.altinAcik} filter={d.k === 0 && pGlp > 0 ? undefined : "url(#parilti33)"} />
            <circle cx={d.x} cy={d.y} r={d.r} fill={RENK.altin} opacity={d.k === 0 ? pGlpA : 0} />
            <circle cx={d.x - d.r * 0.3} cy={d.y - d.r * 0.3} r={d.r * 0.32} fill="#fff" opacity={0.45 * (d.k === 0 ? 1 - pGlpA : 1)} />
            {d.k === 0 && pGlpA > 0 && (
              <circle cx={d.x} cy={d.y} r={d.r} fill="none" stroke={RENK.kagitAcik} strokeWidth={7} />
            )}
          </g>
        ))}
        {halkaGlp > 0 && halkaGlp < 1 && (
          <circle cx={MERKEZ[0]} cy={MERKEZ[1]} r={130 + 120 * halkaGlp} fill="none" stroke={RENK.altin} strokeWidth={6} opacity={(1 - halkaGlp) * 0.85} />
        )}
      </svg>
      <Baslik t={t} bas={tHormon - 0.05} metin="GUT HORMONES" x={MERKEZ[0]} y={238} boyut={86} renk={RENK.lacivert} hiza="orta" />
      {pGlpA > 0 && (
        <div style={{ position: "absolute", left: MERKEZ[0], top: MERKEZ[1], transform: `translate(-50%, -50%) scale(${0.6 + 0.4 * pGlp})`,
          opacity: pGlpA, fontFamily: ANTON, fontSize: 88, color: "#fff", whiteSpace: "nowrap", letterSpacing: 1,
          textShadow: "0 3px 10px rgba(48,40,34,0.25)" }}>GLP-1</div>
      )}
      {/* "one called ..." anında küçük soru işareti */}
      {(() => {
        const a = eout(ilerle(t, tAdi, 0.4)) * (1 - pGlpA);
        return a > 0 ? (
          <div style={{ position: "absolute", left: MERKEZ[0] - 22, top: MERKEZ[1] - 22, opacity: a }}>
            <IkonYol ad="soru" boyut={44} renk="#fff" kalinlik={6} />
          </div>
        ) : null;
      })()}
    </>
  );
};

export default S33;
