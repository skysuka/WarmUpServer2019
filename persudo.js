
var marketMcoef = [[1,1,1],
                [0.5,1,0.5],
                [1,0.3,0.7],
                [1,0.2,0.3],
                [0.3,0.3,0.5]]

var marketPcoef = [[3,3,3],
                [2,3,2.5],
                [3,1.5,2.5],
                [3,1,1.5],
                [1,1,1.5]]

var priceExcept = [7000,5000,4000,3000,1000]

var MarketCapacity = [[],
                        [],
                        [],
                        [],
                        []]

function preferValue(ka,kb,kc,marketType) {
    // 即为文档中的f
    var thisM = marketMcoef[marketType];
    var thisP = marketPcoef[marketType];
    var tmp = thisM[0]*Math.abs(thisP[0]-ka) +
                thisM[1]*Math.abs(thisP[1]-kb) + 
                thisM[2]*Math.abs(thisP[2]-kc) + 1;
    return 1/tmp;
}

function competitionValue(xxx,ka,kb,kc,priceActual,marketType) {
    // TO DO 3: xxx 是广告系数，这里需要一个计算
    // 即为文档中的g
    return xxx*preferValue(ka,kb,kc,marketType)*priceExcept[marketType]/priceActual;
}

function calSumOfCompValue() {
    // 计算各个玩家的g之和。需要用到通信
}

function 

function calActualMarketForOneUser() {
    // 计算单个玩家的实际买出量

}