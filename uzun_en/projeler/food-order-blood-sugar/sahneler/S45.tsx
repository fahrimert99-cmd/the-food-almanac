// Sahne 45 — Bir: sebzeyle başla. Yan salata, sebze çorbası, tabaktaki brokoli; önce onları ye.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop,
  sol } from "../kutuphane";

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

// Sağa yaslı onay satırı: yeşil onay dairesi + metin. R = sağ kenar, y = orta
const OnaySatiri: React.FC<{ t: number; bas: number; onayBas: number; metin: string; R: number; y: number }> = ({
  t, bas, onayBas, metin, R, y,
}) => {
  const p = eout(ilerle(t, bas, 0.5));
  if (p <= 0) return null;
  const [sc, al] = pop(t, onayBas, 0.5);
  return (
    <div style={{ position: "absolute", right: 1920 - R, top: y - 36, height: 72, display: "flex", alignItems: "center", gap: 20,
      opacity: p, transform: `translateX(${(1 - p) * 40}px)` }}>
      <div style={{ width: 66, height: 66, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center",
        justifyContent: "center", border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>
        <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex" }}><IkonYol ad="onay" boyut={42} renk="#fff" kalinlik={7} /></div>
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 46, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>
    </div>
  );
};

// Sebzelerin çapaları (görsel koordinatı)
const SEBZE = [
  { ifade: "side salad", ad: "SIDE SALAD", capa: [880, 520] as [number, number], konum: [1090, 470] as [number, number] },
  { ifade: "vegetable soup", ad: "VEGETABLE SOUP", capa: [1240, 735] as [number, number], konum: [1295, 575] as [number, number] },
  { ifade: "broccoli", ad: "BROCCOLI", capa: [1540, 835] as [number, number], konum: [1610, 665] as [number, number] },
];

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const R = 1860;
  const tStart = K(1, "Start"), tVeg = K(1, "vegetables");
  const tEat = K(3, "Eat"), tThose = K(3, "those"), tFirst = K(3, "first");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [100, 50, 1720])}>
        {/* kaşığın üst ucu ipucu rozetinin ve noktaların arkasına düşüyor: zemin renginde yumuşak yama */}
        <div style={{ position: "absolute", left: 185, top: 40, width: 250, height: 410,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(250,247,212) 0%, rgb(250,247,212) 58%, rgba(250,247,212,0) 100%)" }} />
        <div style={{ position: "absolute", left: 192, top: 50, width: 150, height: 140,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(250,245,210) 0%, rgb(250,245,210) 60%, rgba(250,245,210,0) 100%)" }} />
        {SEBZE.map((v) => (
          <Etiket key={v.ad} t={t} bas={K(2, v.ifade)} capa={v.capa} konum={v.konum} metin={v.ad} renk={RENK.yesil} />
        ))}
        {/* "those": üç sebzede yeşil nabız */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {SEBZE.map((v, i) => [0, 0.35].map((g) => {
            const u = ilerle(t, tThose + i * 0.12 + g, 0.9);
            if (u <= 0 || u >= 1) return null;
            return <circle key={`${i}-${g}`} cx={v.capa[0]} cy={v.capa[1]} r={16 + 52 * eout(u)} fill="none" stroke={RENK.yesil}
              strokeWidth={5} opacity={(1 - u) * 0.9} />;
          }))}
        </svg>
      </Kamera>
      <IpucuNo t={t} no={1} x={175} y={160} nabizBitis={tStart} />
      {/* başlık: sağ üst boşlukta */}
      <Baslik t={t} bas={tStart} metin="START WITH THE" x={R} y={165} boyut={30} renk={RENK.altin} font="inter" aralik={6} hiza="sag" />
      <Baslik t={t} bas={tVeg} metin="VEGETABLES" x={R} y={270} boyut={128} renk={RENK.koyuYesil} hiza="sag" />
      <OnaySatiri t={t} bas={tEat} onayBas={tFirst} metin="EAT THOSE FIRST" R={R} y={392} />
    </>
  );
};

export default S45;
