function getDataByKodeToko(kodeToko) {
  var sheet = SpreadsheetApp.openById('18ex3alhCcNg03kd572-lkSCCCazXfROdGI2p6CD6dRk').getSheetByName('RESUME'); // Ganti dengan ID dan nama sheet Anda
  var data = sheet.getDataRange().getValues(); // Ambil semua data di sheet

  // Mencari data per toko
  var result = [];
  for (var i = 1; i < data.length; i++) { // Mulai dari baris kedua untuk mengabaikan header
    if (data[i][0] === kodeToko) { // Kolom pertama (kode toko)
      result = data[i]; // Ambil seluruh baris data untuk toko yang sesuai
      break;
    }
  }
  
  return result;
}

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Cek Data Per Toko')
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
