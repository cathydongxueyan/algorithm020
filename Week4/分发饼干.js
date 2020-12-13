/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
	var res = 0;
	for (let i = 0; i< s.length; i++){
		if (s[i] >= g[res]){
			res++;
		}
        if(res == g.length){
            return res;
        }
	}
	return res;
};
