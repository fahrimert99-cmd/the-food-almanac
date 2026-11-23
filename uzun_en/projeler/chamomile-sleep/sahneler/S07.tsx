import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Senkron hap (renkli noktalı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (1 - eout(ilerle(t, bitis, 0.4)));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 20px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

// Sahne 7 — gündüz bakımevi odası: 2017 çalışması, 60 yaş üstü
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1780]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kam} />
      {/* görselin sağ kenarını örten zemin */}
      <div style={{ position: "absolute", left: 930, top: 0, right: 0, bottom: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 12%, ${kagit(1)} 100%)` }} />
      <Etiket t={t} bas={K(0, "day care")} capa={[900, 650]} konum={[1330, 840]} metin="DAY CARE NURSING HOME" renk={RENK.altin} boyut={26} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Adib-Hajbaghery")} y={130} />
      <VurguRozet t={t} bas={K(0, "2017")} vurgu="2017" x={1330} y={150} genislik={300} boyut={84} />
      <Baslik t={t} bas={K(0, "60")} metin="60 OLDER" x={1090} y={470} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "adults,")} metin="ADULTS" x={1090} y={595} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "aged")} metin="aged 60 or more, Iran" x={1094} y={680} boyut={34} renk={RENK.gri} />
    </>
  );
};
export default S07;
