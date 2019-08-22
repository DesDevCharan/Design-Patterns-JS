function Fedex() {
  this.calc = () => 238;
}
function UPS() {
  this.calc = () => 290;
}
function PRO() {
  this.calc = () => 400;
}

function Strategy() {
  this.company = '';
  this.setStrategy = (comp) => this.company = comp;
  this.calc = () => this.calc = this.company.calc();
}

const fed = new Fedex();
const ups = new UPS();
const prof = new PRO();

const st =  new Strategy();
st.setStrategy(fed);
console.log(st.calc())