var big = require("big-number").n;

function binomial(n,k){
	n = big(n).add(1);
	k++;
	var a = big(1);
	while(k-->1){
		var nk = big(n.toString()).divide(k).add(1);
		a.multiply(nk);
	}
	return a;
}

function P(n,gp){
	var p = big(1).divide(4); //0.25;
	var A = big(p);
	console.log(A);
	// var g = big(2).power(gp);// Math.pow(2,gp);
	// var A = big(p); //.power(n);
	// var B = big(1-p).power(g.minus(n));
	// var C = binomial(g.toString(), n);
	// var pr = A.multiply(B).multiply(C);
	// console.log("P("+ n +","+ gp +") = "+ pr +" { "+ g.toString() +", "+ A +", "+ B +", "+ C +" } ");
	// return pr;
}

function independence(k,n){
	if(k>7){ console.log("! k <= 7"); return; }
	if(big(2).power(k).lt(n)){ console.log("! n <= 2^k"); return; }
	var prob = 1;
	while(n--) prob -= P(n,k);
	return prob;
}

console.log(independence(2,1));
// console.log(independence(7,37));
