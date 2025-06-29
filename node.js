const databaseHoaks = [
  "vaksin menyebabkan magnet",
  "chip dalam vaksin",
  "5g penyebab corona",
  "bumi itu datar",
  "dokter dibayar untuk menutupi",
  "pemilu akan dibatalkan",
  "makanan halal mengandung babi",
];

function deteksiHoaks() {
  const input = document.getElementById("konten").value.toLowerCase();
  const sumber = document.getElementById("sumber").value;
  const bukti = document.getElementById("bukti").value;
  const bahasa = document.getElementById("bahasa").value;
  const hasil = document.getElementById("hasil");

  let skor = 0;

  // Logika proposisi berbobot
  if (sumber === "netizen" || sumber === "grup") skor += 2;
  if (bukti === "tidak") skor += 2;
  if (bahasa === "provokatif") skor += 1;

  // Cek frasa hoaks populer
  for (let frasa of databaseHoaks) {
    if (input.includes(frasa)) {
      skor += 3;
      break;
    }
  }

  // Evaluasi hasil
  let pesan = "";
  if (skor >= 6) {
    pesan =
      "<span style='color:red;'>⚠️ Konten ini kemungkinan besar HOAKS.</span><br>Skor: " +
      skor;
    hasil.style.background = "#ffe6e6";
  } else if (skor >= 4) {
    pesan =
      "<span style='color:orange;'>⚠️ Konten ini berpotensi hoaks, periksa lebih lanjut.</span><br>Skor: " +
      skor;
    hasil.style.background = "#fff4e6";
  } else {
    pesan =
      "<span style='color:green;'>✅ Konten ini tidak terindikasi hoaks.</span><br>Skor: " +
      skor;
    hasil.style.background = "#e6ffe6";
  }

  hasil.innerHTML = pesan;
}
