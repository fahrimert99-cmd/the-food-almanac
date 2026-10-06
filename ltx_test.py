#!/usr/bin/env python3
"""LTX-Video açık kaynak model denemesi (ücretsiz, GitHub Actions CPU). YouTube'a YÜKLEMEZ.
RAM 16 GB olduğu için iki aşama: önce T5 ile metin kodlanır ve bellekten atılır,
sonra video modeli yüklenir. Çıktı: onizleme/ltx/ (ltx.mp4, ltx_1080.mp4, rapor.txt)"""
import gc, os, subprocess, time
import torch
from diffusers import LTXPipeline
from diffusers.utils import export_to_video

REPO = os.environ.get("LTX_REPO", "Lightricks/LTX-Video")
ADIM = int(os.environ.get("LTX_ADIM", "30"))
W, H, KARE = 480, 832, 65          # 9:16'ya yakın, 32'nin katı; 65 kare ≈ 2,7 sn @24fps
CIKTI = "onizleme/ltx"
os.makedirs(CIKTI, exist_ok=True)
torch.set_num_threads(os.cpu_count())
PROMPT = ("A cinematic documentary shot inside a large electronics factory. A conveyor belt carries "
          "hundreds of tiny individually wrapped parcels with cheap wireless earbuds. Workers in blue "
          "uniforms quickly seal the parcels. The camera slowly dollies forward along the belt. "
          "Realistic lighting, shallow depth of field, high detail.")
NEG = "worst quality, inconsistent motion, blurry, jittery, distorted, text, letters, watermark, logo"
rapor = []


def yaz(s):
    print(s, flush=True)
    rapor.append(s)
    open(os.path.join(CIKTI, "rapor.txt"), "w", encoding="utf-8").write("\n".join(rapor) + "\n")


t0 = time.time()
yaz(f"Model: {REPO}  adım: {ADIM}  boyut: {W}x{H}  kare: {KARE}  çekirdek: {os.cpu_count()}")
p = LTXPipeline.from_pretrained(REPO, transformer=None, vae=None, torch_dtype=torch.bfloat16)
with torch.no_grad():
    pe, pm, ne, nm = p.encode_prompt(PROMPT, NEG, do_classifier_free_guidance=True,
                                     max_sequence_length=128, device="cpu")
pe, ne = pe.float(), ne.float()
del p
gc.collect()
yaz(f"Metin kodlandı: {time.time() - t0:.0f} sn")

pipe = LTXPipeline.from_pretrained(REPO, text_encoder=None, tokenizer=None, torch_dtype=torch.float32)
yaz(f"Video modeli yüklendi: {time.time() - t0:.0f} sn")
t1 = time.time()


def adim_cb(pipe_, i, t, kw):
    if i in (0, 1, 4) or (i + 1) % 5 == 0:
        yaz(f"  adım {i + 1}/{ADIM}: {time.time() - t1:.0f} sn")
    return kw


with torch.no_grad():
    kareler = pipe(prompt_embeds=pe, prompt_attention_mask=pm,
                   negative_prompt_embeds=ne, negative_prompt_attention_mask=nm,
                   width=W, height=H, num_frames=KARE, num_inference_steps=ADIM,
                   guidance_scale=3.0, decode_timestep=0.03, decode_noise_scale=0.025,
                   generator=torch.Generator().manual_seed(7),
                   callback_on_step_end=adim_cb).frames[0]
yol = os.path.join(CIKTI, "ltx.mp4")
export_to_video(kareler, yol, fps=24)
# Shorts boyutuna büyütülmüş hali (karşılaştırma için)
import imageio_ffmpeg
subprocess.run([imageio_ffmpeg.get_ffmpeg_exe(), "-v", "error", "-y", "-i", yol,
                "-vf", "scale=1080:1920:flags=lanczos", "-c:v", "libx264", "-crf", "18",
                "-pix_fmt", "yuv420p", os.path.join(CIKTI, "ltx_1080.mp4")], check=True)
yaz(f"BİTTİ. Üretim: {time.time() - t1:.0f} sn, toplam: {time.time() - t0:.0f} sn")
