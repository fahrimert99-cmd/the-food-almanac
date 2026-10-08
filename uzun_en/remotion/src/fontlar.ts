import { continueRender, delayRender, staticFile } from "remotion";

// Fontlar (OFL) yüklenmeden kare çizilmez.
const bekle = delayRender("fontlar");
const yukle = (aile: string, dosya: string, agirlik: string) =>
  new FontFace(aile, `url(${staticFile(`fonts/${dosya}`)})`, { weight: agirlik }).load().then((f) => {
    document.fonts.add(f);
  });
Promise.all([
  yukle("Anton", "Anton-Regular.ttf", "400"),
  yukle("Inter", "Inter-Medium.otf", "500"),
  yukle("Inter", "Inter-Bold.otf", "700"),
  yukle("Inter", "Inter-ExtraBold.otf", "800"),
]).then(() => continueRender(bekle));

export const ANTON = "Anton, sans-serif";
export const INTER = "Inter, sans-serif";
