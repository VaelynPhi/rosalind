
var big = require("big-number").n;

function generations(n,k){
	console.log("Generations: "+ n +"; Mortality: "+ k );
	var g = [ big(1) ];
	var r = [ big(1) ];
	for(var i=1; i<k; i++) r.push( big(0) );

	// console.log("0: "+ g.slice(-1)[0].toString() );
	// console.log("0: "+ JSON.stringify( r ) +" / "+ g.slice(-1)[0].toString() );
	for(var i=1; i<n; i++){
		var born = big( r.slice(1).reduce(function(previous,current){ return previous.add(current); },big(0)) );
		for(var j=k-1; j>0; j--) r[j] = r[j-1]; // console.log("\t- "+ j +": "+ JSON.stringify( r ) );
		r[0] = born;
		g.push( big(r.reduce(function(previous,current){ return previous.add(current); },big(0)) ) );
		// console.log(i +": "+ JSON.stringify( r ) +" / "+ g.slice(-1)[0] );
		// console.log(i +": "+ g.slice(-1)[0].toString() );
	}
	var res = g.slice(-1)[0].toString();
	console.log("Results: "+ res );
	return res;
}

// generations(6,3);
generations(94,20);
