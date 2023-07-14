const PijarFood = (harga, voucher, jarak, pajak) => {
    const potongan = CalculateDiscount(harga, voucher);
    const biayaAntar = CalculateDeliveryCost(jarak);
    const pajakAmount = CalculateTax(harga, pajak);
    const subtotal = CalculateSubtotal(harga, potongan, biayaAntar, pajakAmount);
  
    PrintResult(harga, potongan, biayaAntar, pajakAmount, subtotal);
  };
  
  const CalculateDiscount = (harga, voucher) => {
    if (voucher === 'PIJARFOOD5' && harga >= 50000) {
      const potongan = Math.min(harga * 0.5, 50000);
      return potongan;
    } else if (voucher === 'DITRAKTIRPIJAR' && harga >= 25000) {
      const potongan = Math.min(harga * 0.6, 30000);
      return potongan;
    } else {
      return 0;
    }
  };
  
  const CalculateDeliveryCost = (jarak) => {
    const tarifPertama = 5000;
    const tarifPerKm = 3000;
  
    if (jarak <= 2) {
      return tarifPertama;
    } else {
      const jarakSelanjutnya = jarak - 2;
      const biayaAntar = tarifPertama + jarakSelanjutnya * tarifPerKm;
      return biayaAntar;
    }
  };
  
  const CalculateTax = (harga, pajak) => {
    if (pajak) {
      const pajakAmount = harga * 0.05;
      return pajakAmount;
    } else {
      return 0;
    }
  };
  
  const CalculateSubtotal = (harga, potongan, biayaAntar, pajakAmount) => {
    const subtotal = harga - potongan + biayaAntar + pajakAmount;
    return subtotal;
  };
  
  const PrintResult = (harga, potongan, biayaAntar, pajakAmount, subtotal) => {
    console.log("Harga: " + harga);
    console.log("Potongan: " + potongan);
    console.log("Biaya Antar: " + biayaAntar);
    console.log("Pajak: " + pajakAmount);
    console.log("SubTotal: " + subtotal);
  };
  
  
  PijarFood(75000, "PIJARFOOD5", 5, true);
  