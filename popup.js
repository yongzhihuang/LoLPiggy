function lolNexusclickHandler(e) {
    chrome.extension.sendMessage({directive: "lolNexus-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function lolKingclickHandler(e) {
    chrome.extension.sendMessage({directive: "lolKing-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function summonerSearchclickHandler(e) {
    var summonerName = document.getElementById('summonerName').value;
    var searchSourceEl = document.getElementById("summonerSearchSource");
    var searchSource = searchSourceEl.children[searchSourceEl.selectedIndex].text;

    var searchServerEl = document.getElementById("SummonerServer");
    var searchServer = searchServerEl.children[searchServerEl.selectedIndex].text;
    chrome.extension.sendMessage({directive: "summonerSearch-click", summonerName: summonerName, searchSource: searchSource, searchServer: searchServer}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function championSearchclickHandler(e) {
    var championName = document.getElementById('championName').value;
    var searchSourceEl = document.getElementById("championSearchSource");
    var searchSource = searchSourceEl.children[searchSourceEl.selectedIndex].text;
    chrome.extension.sendMessage({directive: "championSearch-click", championName: championName, searchSource: searchSource}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('oinkme').addEventListener('click', lolNexusclickHandler);
    document.getElementById('lolkingme').addEventListener('click', lolKingclickHandler);
    document.getElementById('SummonerSearch').addEventListener('click', summonerSearchclickHandler);
    document.getElementById('ChampionSearch').addEventListener('click', championSearchclickHandler);
})
