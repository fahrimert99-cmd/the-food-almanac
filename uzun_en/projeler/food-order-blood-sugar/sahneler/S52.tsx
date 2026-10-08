// Sahne 52 — Güvenlik notu: insülin ya da kan şekerini düşürebilen ilaç kullananlar önce doktora danışsın; ilaç zamanlaması
// karbonhidrat zamanlamasıyla uyumlu olmalı. Sakin, ortalanmış kartlar; uyarı simgesi ya da kırmızı yok.
import React from "react";
import { ANTON, Baslik, INTER, Kamera, Not, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop,
  sol } from "../kutuphane";

const CX = 930; // içerik sütununun ortası (ekran)

// Kâğıt kart (ortası x, üstü y)
const Kart: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; w: number; h: number; renk?: string;
  children?: React.ReactNode }> = ({ t, bas, bitis = 1e9, x, y, w, h, renk = RENK.lacivert, children }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: y, width: w, height: h, transform: `scale(${sc})`, opacity: a,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxSizing: "border-box", padding: "0 20px",
      textAlign: "center" }}>
      {children}
    </div>
  );
};

// Kart içinde sonradan beliren satır
const Belir: React.FC<{ t: number; bas: number; children: React.ReactNode; style?: React.CSSProperties }> = ({ t, bas, children, style }) => {
  const p = eout(ilerle(t, bas, 0.45));
  return <div style={{ opacity: p, transform: `translateY(${(1 - p) * 10}px)`, ...style }}>{children}</div>;
};

// Saat simgesi: akrep/yelkovan açıları derece (0 = saat 12)
const Saat: React.FC<{ akrep: number; yelkovan: number; r?: number; renk?: string }> = ({ akrep, yelkovan, r = 50, renk = RENK.lacivert }) => {
  const uc = (aci: number, boy: number) => [r + 6 + boy * Math.sin((aci * Math.PI) / 180), r + 6 - boy * Math.cos((aci * Math.PI) / 180)];
  const [ax, ay] = uc(akrep, r * 0.5), [yx, yy] = uc(yelkovan, r * 0.78);
  const m = r + 6;
  return (
    <svg width={2 * m} height={2 * m} style={{ display: "block" }}>
      <circle cx={m} cy={m} r={r} fill={RENK.kagitAcik} stroke={renk} strokeWidth={6} />
      {[0, 90, 180, 270].map((k) => {
        const [x1, y1] = uc(k, r * 0.8), [x2, y2] = uc(k, r * 0.92);
        return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke={renk} strokeWidth={4} strokeLinecap="round" />;
      })}
      <line x1={m} y1={m} x2={ax} y2={ay} stroke={renk} strokeWidth={7} strokeLinecap="round" />
      <line x1={m} y1={m} x2={yx} y2={yy} stroke={RENK.altin} strokeWidth={5} strokeLinecap="round" />
      <circle cx={m} cy={m} r={6} fill={renk} />
    </svg>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const Z = (ifade: string) => K(1, ifade); // 2. cümlenin vuruşları (düzeltilmiş virgül hizalaması)
  const tOnemli = K(0, "important"), tGuven = K(0, "safety");
  const tKullan = Z("If you use"), tInsulin = Z("insulin"), tVeya = Z("or medicines"), tIlac = Z("medicines");
  const tDusuk = Z("low blood"), tOrnek = Z("sulfonylureas");
  const tKonus = Z("talk"), tEkip = Z("or diabetes team"), tOnce = Z("before"), tDegis = Z("changing"), tKarb = Z("when you");
  const tIlacZ = Z("medication"), tUyum = Z("may need"), tEsit = Z("match");
  const tFaz2 = tKonus - 0.3;
  const pCizgi = eout(ilerle(t, tGuven + 0.3, 0.8));
  const [so, ao] = pop(t, tVeya, 0.45);
  const aVeya = ao * sol(t, tFaz2);
  // saatler: sol saat "değişir", sağ saat "eşleşir" (aynı saate döner)
  const pDegis = einout(ilerle(t, tKarb, 1.2));
  const pEsit = einout(ilerle(t, tEsit, 0.6));
  const solAkrep = 300 + 90 * pDegis, solYelkovan = 360 * pDegis;
  const sagAkrep = 240 + 150 * pEsit, sagYelkovan = 180 + 180 * pEsit;
  const [se, ae] = pop(t, tEsit + 0.2, 0.45);
  const renkEsit = pEsit > 0.95 ? RENK.koyuYesil : RENK.lacivert;
  const satir = (st: React.CSSProperties): React.CSSProperties => ({ fontFamily: INTER, color: RENK.lacivert, ...st });
  return (
    <>
      {/* pencere x >= 255: kitap sırtındaki siyah boşluk, y >= 60: üstteki kesik metal parça kadraj dışında */}
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [262, 60, 1640], [280, 100, 1580])} />

      {/* başlık: önemli not + SAFETY FIRST */}
      {(() => {
        const [sc, al] = pop(t, tOnemli, 0.5);
        return al > 0 ? (
          <div style={{ position: "absolute", left: CX, top: 100, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, display: "flex",
            alignItems: "center", gap: 14, whiteSpace: "nowrap" }}>
            <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 26 }}>i</span>
            <span style={satir({ fontWeight: 800, fontSize: 28, letterSpacing: 5, color: RENK.altin })}>AN IMPORTANT NOTE</span>
          </div>
        ) : null;
      })()}
      <Baslik t={t} bas={tGuven} metin="SAFETY" x={CX - 575 / 2} y={200} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={tGuven + 0.18} metin="FIRST" x={CX - 575 / 2 + 340} y={200} boyut={120} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: CX - 120 * pCizgi, width: 240 * pCizgi, top: 290, height: 6, background: RENK.altin }} />

      {/* 1. faz: kimler için? */}
      <Not t={t} bas={tKullan} bitis={tFaz2} metin="IF YOU USE" x={CX} y={352} hiza="orta" boyut={28} agirlik={800} renk={RENK.gri}
        genislik={600} />
      <Kart t={t} bas={tInsulin} bitis={tFaz2} x={CX - 260} y={420} w={330} h={250}>
        <div style={{ fontFamily: ANTON, fontSize: 80, lineHeight: 1.1, color: RENK.lacivert }}>INSULIN</div>
      </Kart>
      {aVeya > 0 && (
        <div style={{ position: "absolute", left: CX - 50 - 34, top: 545 - 34, width: 68, height: 68, borderRadius: "50%", background: RENK.lacivert,
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 24,
          letterSpacing: 1, transform: `scale(${so})`, opacity: aVeya, border: `4px solid ${RENK.kagitAcik}`, zIndex: 2 }}>OR</div>
      )}
      <Kart t={t} bas={tIlac} bitis={tFaz2} x={CX + 210} y={420} w={430} h={250}>
        <div style={{ fontFamily: ANTON, fontSize: 66, lineHeight: 1.1, color: RENK.lacivert }}>MEDICINES</div>
        <Belir t={t} bas={tDusuk} style={satir({ fontWeight: 600, fontSize: 28, lineHeight: 1.25 })}>that can cause<br />low blood sugar</Belir>
        <Belir t={t} bas={tOrnek} style={satir({ fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.altin, marginTop: 8 })}>
          such as SULFONYLUREAS
        </Belir>
      </Kart>

      {/* 2. faz: doktorla konuş, zamanlama uyumu */}
      <Baslik t={t} bas={tKonus} metin="TALK TO YOUR DOCTOR" x={CX} y={400} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tEkip} metin="or diabetes team" x={CX} y={462} hiza="orta" boyut={36} genislik={600} />
      <Not t={t} bas={tOnce} metin="BEFORE CHANGING" x={CX} y={548} hiza="orta" boyut={24} agirlik={800} renk={RENK.gri} genislik={600} />
      <Kart t={t} bas={tDegis} x={CX - 200} y={600} w={300} h={236}>
        <Saat akrep={solAkrep} yelkovan={solYelkovan} renk={renkEsit} />
        <div style={satir({ fontWeight: 800, fontSize: 25, letterSpacing: 1.5, lineHeight: 1.2, marginTop: 10 })}>WHEN YOU EAT<br />CARBS</div>
      </Kart>
      <Kart t={t} bas={tIlacZ} x={CX + 200} y={600} w={300} h={236}>
        <Saat akrep={sagAkrep} yelkovan={sagYelkovan} renk={renkEsit} />
        <div style={satir({ fontWeight: 800, fontSize: 25, letterSpacing: 1.5, lineHeight: 1.2, marginTop: 10 })}>MEDICATION<br />TIMING</div>
      </Kart>
      {ae > 0 && (
        <div style={{ position: "absolute", left: CX - 36, top: 718 - 36, width: 72, height: 72, borderRadius: "50%", background: RENK.altin,
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52, lineHeight: 1,
          transform: `scale(${se})`, opacity: ae, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>=</div>
      )}
      <Not t={t} bas={tUyum} metin="MAY NEED TO MATCH" x={CX} y={862} hiza="orta" boyut={30} agirlik={800} renk={RENK.altin} genislik={700} />
    </>
  );
};

export default S52;
