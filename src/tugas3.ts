class Lingkaran {
  jariJari: number;

  constructor(jariJari: number) {
    this.jariJari = jariJari;
  }

  hitungLuas(): number {
    return Math.PI * this.jariJari * this.jariJari;
  }
}
const lingkaran = new Lingkaran(8);
const luas = lingkaran.hitungLuas();
console.log("Luas lingkaran:", luas.toFixed(2));