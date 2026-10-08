// Sahne 47 — Üç: ekmek, pirinç, makarna, patates ve tatlıyı sona bırak. Çalışmalarda ara ~10–15 dk; kronometre gerekmez;
// amaç sebze ve proteine önden başlama payı vermek.
import React from "react";
import { ANTON, Baslik, Etiket, GorselKart, Hap, Ikon, IkonYol, Kamera, Ortu, Panel, Pencere, RENK, SP, VurguRozet,
  einout, eout, ilerle, kameraYolu, kelimeZamani, pencereSinirla, pop, sol } from "../kutuphane";

// İpucu numarası: büyük daire + altında 5'li ilerleme noktaları (S49/S50 ile aynı)
const IpucuNo: React.FC<{ t: number; no: number; x: number; y: number; nabizBitis?: number; bitis?: number }> = ({
  t, no, x, y, nabizBitis = 0, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, 0.02, 0.6);
  const a = sol(t, bitis);
  if (a <= 0) return null;
  const u = (t % 1.3) / 1.3;
  return (
    <div style={{ opacity: a }}>
      <div style={{ position: "absolute", left: x - 92, top: y - 92, width: 184, height: 184, borderRadius: "50%",
        background: RENK.lacivert, border: `7px solid ${RENK.altin}`, boxSizing: "border-box", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: ANTON, fontSize: 118, lineHeight: 1, color: "#fff", transform: `scale(${sc})`, opacity: al,
        boxShadow: "0 12px 28px rgba(48,40,34,0.25)" }}>{no}</div>
      {[1, 2, 3, 4, 5].map((i) => {
        const [s2, a2] = pop(t, 0.3 + i * 0.08, 0.45);
        const r = i === no ? 19 : 14;
        const cx = x + (i - 3) * 48, cy = y + 132;
        return (
          <React.Fragment key={i}>
            {i === no && t > 0.8 && t < nabizBitis && (
              <div style={{ position: "absolute", left: cx - 19 - 22 * u, top: cy - 19 - 22 * u, width: 38 + 44 * u, height: 38 + 44 * u,
                borderRadius: "50%", border: `4px solid ${RENK.altin}`, boxSizing: "border-box", opacity: (1 - u) * 0.8 }} />
            )}
            <div style={{ position: "absolute", left: cx - r, top: cy - r, width: r * 2, height: r * 2, borderRadius: "50%",
              boxSizing: "border-box", transform: `scale(${s2})`, opacity: a2, display: "flex", alignItems: "center", justifyContent: "center",
              background: i < no ? RENK.yesil : i === no ? RENK.altin : RENK.kagitAcik,
              border: i > no ? `3px solid ${RENK.murekkep}` : `3px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(48,40,34,0.18)" }}>
              {i < no && <IkonYol ad="onay" boyut={20} renk="#fff" kalinlik={7} />}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Görsel koordinatı -> ekran koordinatı (Kamera dışındaki etiketin çapası için)
const ekrana = (p: Pencere, [x, y]: [number, number]): [number, number] => {
  const [wx, wy, w] = pencereSinirla(p);
  const k = 1920 / w;
  return [(x - wx) * k, (y - wy) * k];
};

// Cep saatinin kadranındaki anlamsız rakam/yazıların üstüne temiz kadran (görsel koordinatı)
const TemizKadran: React.FC = () => (
  <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
    <g transform="translate(510 876) rotate(-12) scale(1 0.818)">
      <circle r={78} fill="#F7F1DF" />
      <circle r={74} fill="none" stroke="#B9A98A" strokeWidth={3} opacity={0.6} />
      {Array.from({ length: 12 }, (_, k) => {
        const a = (k * Math.PI) / 6, buyuk = k % 3 === 0;
        const r0 = buyuk ? 52 : 58, r1 = 66;
        return <line key={k} x1={r0 * Math.sin(a)} y1={-r0 * Math.cos(a)} x2={r1 * Math.sin(a)} y2={-r1 * Math.cos(a)}
          stroke={RENK.murekkep} strokeWidth={buyuk ? 6 : 3.5} strokeLinecap="round" />;
      })}
      {/* 10:10 */}
      <line x1={0} y1={0} x2={34 * Math.sin(-Math.PI / 3 - 0.09)} y2={-34 * Math.cos(-Math.PI / 3 - 0.09)} stroke={RENK.murekkep} strokeWidth={6} strokeLinecap="round" />
      <line x1={0} y1={0} x2={54 * Math.sin(Math.PI / 3)} y2={-54 * Math.cos(Math.PI / 3)} stroke={RENK.murekkep} strokeWidth={4} strokeLinecap="round" />
      <circle r={6} fill={RENK.murekkep} />
    </g>
  </svg>
);

// Ara diyagramı: saat kadranı, 0–10 dk dolu, 10–15 dk açık dilim. x,y = merkez
const AraSaati: React.FC<{ t: number; bas: number; t10: number; t15: number; bitis: number; x: number; y: number; r: number }> = ({
  t, bas, t10, t15, bitis, x, y, r,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  const p10 = eout(ilerle(t, t10, 0.45)), p15 = eout(ilerle(t, t15, 0.45));
  const nokta = (dk: number, rr: number) => [x + rr * Math.sin((dk / 60) * 2 * Math.PI), y - rr * Math.cos((dk / 60) * 2 * Math.PI)];
  const dilim = (d0: number, d1: number) => {
    if (d1 <= d0 + 0.01) return "";
    const [x0, y0] = nokta(d0, r - 10), [x1, y1] = nokta(d1, r - 10);
    return `M ${x} ${y} L ${x0} ${y0} A ${r - 10} ${r - 10} 0 0 1 ${x1} ${y1} Z`;
  };
  const dk = 10 * p10 + 5 * p15;
  const [ux, uy] = nokta(dk, r - 26);
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
      <g transform={`translate(${x} ${y}) scale(${sc}) translate(${-x} ${-y})`}>
        <circle cx={x} cy={y} r={r} fill={RENK.kagitAcik} stroke={RENK.lacivert} strokeWidth={8} />
        <path d={dilim(10, 10 + 5 * p15)} fill={RENK.altinAcik} opacity={0.55} />
        <path d={dilim(0, 10 * p10)} fill={RENK.altin} opacity={0.9} />
        {Array.from({ length: 12 }, (_, k) => {
          const [x0, y0] = nokta(k * 5, r - (k % 3 === 0 ? 30 : 22)), [x1, y1] = nokta(k * 5, r - 10);
          return <line key={k} x1={x0} y1={y0} x2={x1} y2={y1} stroke={RENK.lacivert} strokeWidth={k % 3 === 0 ? 7 : 4} strokeLinecap="round" />;
        })}
        <line x1={x} y1={y} x2={ux} y2={uy} stroke={RENK.lacivert} strokeWidth={9} strokeLinecap="round" />
        <circle cx={x} cy={y} r={12} fill={RENK.lacivert} />
      </g>
    </svg>
  );
};

// Kesikli ok (soldan sağa). y = orta
const KesikOk: React.FC<{ t: number; bas: number; bitis: number; x0: number; x1: number; y: number }> = ({ t, bas, bitis, x0, x1, y }) => {
  const p = eout(ilerle(t, bas, 0.5));
  const a = p * sol(t, bitis);
  if (a <= 0) return null;
  const xe = x0 + (x1 - x0) * p;
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
      <line x1={x0} y1={y} x2={xe - 14} y2={y} stroke={RENK.altin} strokeWidth={6} strokeDasharray="14 11" strokeLinecap="round" />
      <polygon points={`${xe},${y} ${xe - 22},${y - 14} ${xe - 22},${y + 14}`} fill={RENK.altin} />
    </svg>
  );
};

const NISASTA = [
  { ifade: "bread", ad: "BREAD" },
  { ifade: "rice", ad: "RICE" },
  { ifade: "pasta", ad: "PASTA" },
  { ifade: "potatoes", ad: "POTATOES" },
  { ifade: "dessert", ad: "DESSERT" },
];

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const CX = 1685; // sağ sütunun ortası
  const pen = kameraYolu(t, s.sure, [20, 10, 1880], [30, 40, 1850]);
  // 1) sona bırak
  const tSave = K(1, "Save"), tLast = K(1, "for last");
  // 2) ara: kâğıt örtü + diyagram
  const tB0 = c[2].bas - 0.2, tB1 = K(3, "You") - 0.25;
  const pOrtu = einout(ilerle(t, tB0, 0.6)) * (1 - einout(ilerle(t, tB1, 0.6)));
  const tStud = K(2, "studies"), tGap = K(2, "gap"), t10 = K(2, "ten"), t15 = K(2, "fifteen");
  // 3) kronometre gerekmez
  const tYou = K(3, "You"), tWatch = K(3, "stopwatch"), cC = K(4, "give") - 0.35;
  // 4) önden başlama payı
  const tGive = K(4, "give"), tVeg = K(4, "vegetables"), tProt = K(4, "protein"), tHead = K(4, "head start");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={pen}>
        <TemizKadran />
        <Ikon t={t} bas={tWatch} bitis={cC} ad="carpi" x={610} y={790} boyut={78} zemin={RENK.mercan} />
        <Etiket t={t} bas={tVeg} capa={[545, 410]} konum={[470, 125]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={tProt} capa={[830, 335]} konum={[880, 125]} metin="PROTEIN" renk={RENK.yesil} />
      </Kamera>
      {/* sağ sütun paneli baştan açık: bıçak hiç görünmez */}
      <Panel a={1} taraf="sag" genislik={560} opak={1} />

      {/* 1) sağ sütun: sona bırakılanlar */}
      <Baslik t={t} bas={tSave} bitis={tB0} metin="SAVE THE" x={CX} y={170} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="orta" />
      {NISASTA.map((n, i) => {
        const b = K(1, n.ifade), y = 262 + i * 76;
        if (n.ad === "RICE") {
          return <Etiket key={n.ad} t={t} bas={b - 0.3} bitis={tB0} capa={ekrana(pen, [1170, 545])} konum={[CX, y]} metin={n.ad} renk={RENK.mercan} boyut={30} />;
        }
        const [sc, al] = pop(t, b + 0.05, 0.5);
        const a = al * sol(t, tB0);
        if (a <= 0) return null;
        return (
          <div key={n.ad} style={{ position: "absolute", left: CX, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
            <Hap metin={n.ad} renk={RENK.mercan} boyut={30} />
          </div>
        );
      })}
      <Baslik t={t} bas={tLast} bitis={tB0} metin="FOR LAST" x={CX} y={690} boyut={104} renk={RENK.mercan} hiza="orta" />

      {/* 2) çalışmalardaki ara: 10–15 dk */}
      <Ortu a={0.95 * pOrtu} />
      <Baslik t={t} bas={tStud} bitis={tB1} metin="IN THE STUDIES" x={960} y={170} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="orta" />
      <Baslik t={t} bas={tGap} bitis={tB1} metin="THE GAP" x={960} y={262} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <GorselKart t={t} bas={c[2].bas + 0.1} bitis={tB1} gorsel="tam/47" kirp={[440, 170, 1000, 590]} x={430} y={545} w={360} h={270} aci={-2} />
      <Baslik t={t} bas={c[2].bas + 0.25} bitis={tB1} metin="VEG + PROTEIN" x={430} y={748} boyut={46} renk={RENK.koyuYesil} hiza="orta" />
      <GorselKart t={t} bas={tStud} bitis={tB1} gorsel="tam/47" kirp={[930, 380, 1370, 710]} x={1490} y={545} w={360} h={270} aci={2} />
      <Baslik t={t} bas={tStud + 0.15} bitis={tB1} metin="SAVED FOR LAST" x={1490} y={748} boyut={46} renk={RENK.mercan} hiza="orta" />
      <KesikOk t={t} bas={tGap} bitis={tB1} x0={640} x1={812} y={545} />
      <KesikOk t={t} bas={tGap + 0.25} bitis={tB1} x0={1110} x1={1282} y={545} />
      <AraSaati t={t} bas={tGap} t10={t10} t15={t15} bitis={tB1} x={960} y={545} r={135} />
      <VurguRozet t={t} bas={t15} bitis={tB1} vurgu="≈ 10–15 MIN" x={960} y={712} genislik={470} boyut={92} />

      {/* 3) kronometre gerekmez */}
      <Baslik t={t} bas={tYou} bitis={cC} metin="YOU DON'T NEED A" x={CX} y={170} boyut={28} renk={RENK.altin} font="inter" aralik={4} hiza="orta" />
      <Baslik t={t} bas={tWatch} bitis={cC} metin="STOPWATCH" x={CX} y={268} boyut={84} renk={RENK.lacivert} hiza="orta" />

      {/* 4) önden başlama payı */}
      <Baslik t={t} bas={tGive} metin="GIVE THEM A" x={CX} y={170} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="orta" />
      <Baslik t={t} bas={tHead} metin="HEAD" x={CX} y={285} boyut={130} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tHead + 0.15} metin="START" x={CX} y={425} boyut={130} renk={RENK.koyuYesil} hiza="orta" />

      {/* ipucu rozeti örtünün de üstünde kalır */}
      <IpucuNo t={t} no={3} x={175} y={160} nabizBitis={tSave} />
    </>
  );
};

export default S47;
