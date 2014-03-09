var bd = require("bigdecimal");
var br = bd.BigDecimal;
var bi = bd.BigInteger;

// function binomial(n,k){
// 	n = br(n).add(1); //n++;
// 	k++;
// 	var a = br(1);
// 	while(k-->1){
// 		a = a.multiply( n.divide(k).add(1) );
// 		// a *= 1 + n/k; 
// 	}
// 	return a;
// }

function P(n,gp){
	// console.log(n +", "+ gp);
	var p = br(1).divide(br(4)); //0.25;
	// console.log(p.toString());
	var g = br(2).pow(gp); //Math.pow(2,gp);
	// console.log(g.toString());
	var A = p.pow(n); //Math.pow(p,n);
	// console.log(A.toString());

	var exp = bi(g).subtract(bi(n));
	console.log(exp.toString());

	var B = p.negate().add(br(1)).pow(exp);
	// var B = br(1-p).pow(g.subtract(br(n))); //Math.pow(1-p, g-n);
	console.log(B.toString());
	// var C = binomial(g, n);
	var pr = br(1);
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
	var prob = br(1);
	while(n--) P(n,k);
	// while(n--) prob = prob.subtract(P(n,k));
	return prob;
}

// var v = independence(2,1);

// console.log(v ? v.toString() : "Nil");

var pkmax = bi(2).pow(7);
var gpmax = bi(2).pow(pkmax);
console.log(
	"pkmax: "+ pkmax
	+"\ngpmax: "+ gpmax
);
// var b = br(4);
// console.log(a);
// var c = a.pow(b.intValue());
// console.log(c);

