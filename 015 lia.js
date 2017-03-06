var bdlib = require("bigdecimal");
var bd = bdlib.BigDecimal;
var bi = bdlib.BigInteger;

// function binomial(n,k){
// 	n = bd(n).add(1); //n++;
// 	k++;
// 	var a = bd(1);
// 	while(k-->1){
// 		a = a.multiply( n.divide(k).add(1) );
// 		// a *= 1 + n/k; 
// 	}
// 	return a;
// }

function P(n,gp){
	// console.log(n +", "+ gp);
	var p = bd(1).divide(bd(4)); //0.25;
	// console.log(p.toString());
	var g = bd(2).pow(gp); //Math.pow(2,gp);
	// console.log(g.toString());
	var A = p.pow(n); //Math.pow(p,n);
	// console.log(A.toString());

	var exp = bi(g).subtract(bi(n));
	console.log(exp.toString());

	var B = p.negate().add(bd(1)).pow(exp);
	// var B = bd(1-p).pow(g.subtract(bd(n))); //Math.pow(1-p, g-n);
	console.log(B.toString());
	// var C = binomial(g, n);
	var pr = bd(1);
	// var pr = A.multiply(B).multiply(C);
	// console.log("P("
	// 	+ n +","
	// 	+ gp +") = "
	// 	+ pr.toDecimal() +" { "
	// 	+ g.toDecimal() +", "
	// 	+ A.toDecimal() +", "
	// 	+ B.toDecimal() +", "
	// 	+ C.toDecimal() +" } "
	// );
	return pr;
}

function independence(k,n){
	if(k>7){ console.log("! k <= 7"); return; }
	if( Math.pow(2,k) < n ){ console.log("! n <= 2^k"); return; }
	var prob = bd(1);
	while(n--) P(n,k);
	// while(n--) prob = prob.subtract(P(n,k));
	return prob;
}

// var v = independence(2,1);

// console.log(v ? v.toString() : "Nil");

function bigPow(base, exponent){
	var max = bd(Number.MAX_VALUE);
	var res = bd(base).pow(exponent);
	return res;
}

var pkmax = Math.pow(2,7);
var gpmax = bigPow(2,pkmax); //bi(2).pow(pkmax);
// var gpmax = bd(2).pow(pkmax);
console.log(
	"pkmax: "+ pkmax
	+"\ngpmax: "+ gpmax
);
// var b = bd(4);
// console.log(a);
// var c = a.pow(b.intValue());
// console.log(c);

