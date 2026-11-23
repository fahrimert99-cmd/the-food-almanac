// Sahne 6 — tehlike bölgesi: termometre yanında şematik aralık işareti ve 40–140°F rozeti.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const yama = (x: number, y: number, r = 24) => (
  <div key={`${x}-${y}`} style={{ position: "absolute", left: x - r, top: y - r, width: 2 * r, height: 2 * r, borderRadius: "50%",
    background: `radial-gradient(circle, ${kagit(1)} 0%, ${kagit(1)} 65%, ${kagit(0)} 100%)` }} />
);

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1780]);
  const tOrta = K(1, "between"), t40 = K(1, "40"), t140 = K(1, "140");
  const p = eout(ilerle(t, tOrta, 0.9));
  const [s40, a40] = pop(t, t40, 0.5);
  const [s140, a140] = pop(t, t140, 0.5);
  const xb = 380, yUst = 330, yAlt = 720;
  const hap = (m: string, y: number, sc: number, al: number) => (
    <div style={{ position: "absolute", right: 1920 - (xb - 24), top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      background: RENK.lacivert, color: "#fff", borderRadius: 14, padding: "6px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 34 }}>{m}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/06" pencere={w}>
        {/* termometre üzerindeki anlamsız rakamları örter */}
        {[[536, 229], [507, 293], [571, 307], [573, 383], [587, 507], [496, 640]].map(([x, y]) => yama(x, y))}
        <Etiket t={t} bas={K(0, "range")} bitis={K(0, "danger") - 0.1} capa={[540, 560]} konum={[200, 440]} metin="THERMOMETER" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "danger")} satirlar={["THE DANGER", "ZONE"]} x={1330} y={190} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "unsafe")} metin="CDC: UNSAFE HOLDING TEMPERATURES" x={1330} y={400} boyut={30} agirlik={800} genislik={540} renk={RENK.gri} />
      {/* şematik aralık işareti (ölçeğe sadık değildir) */}
      {p > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={xb} y1={yAlt} x2={xb} y2={yAlt - (yAlt - yUst) * p} stroke={RENK.mercan} strokeWidth={10} strokeLinecap="round" />
          <line x1={xb - 16} y1={yAlt} x2={xb + 16} y2={yAlt} stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" />
          <line x1={xb - 16} y1={yUst} x2={xb + 16} y2={yUst} stroke={RENK.mercan} strokeWidth={8} strokeLinecap="round" opacity={a140} />
        </svg>
      )}
      {hap("40°F", yAlt, s40, a40)}
      {hap("140°F", yUst, s140, a140)}
      <VurguRozet t={t} bas={t140} vurgu="40–140°F" x={1590} y={540} genislik={480} renk={RENK.mercan} />
      <Baslik t={t} bas={t140 + 0.4} metin="ILLUSTRATIVE SCALE" x={xb - 24} y={780} boyut={20} renk={RENK.gri} font="inter" aralik={2} hiza="sag" />
    </>
  );
};

export default S06;
