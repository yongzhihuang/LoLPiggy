function lolNexusclickHandler(e) {
    chrome.extension.sendMessage({directive: "lolNexus-click"}, function(response) {
        _gaq.push(['_trackEvent', 'Button Clicked', 'defaultLoLNexus']);
        this.close(); // close the popup when the background finishes processing request
    });
}

function lolKingclickHandler(e) {
    chrome.extension.sendMessage({directive: "lolKing-click"}, function(response) {
        _gaq.push(['_trackEvent', 'Button Clicked', 'defaultLoLKing']);
        this.close(); // close the popup when the background finishes processing request
    });
}

function summonerSearchclickHandler(e) {
    var summonerName = document.getElementById('summonerName').value;
    var searchSourceEl = document.getElementById("summonerSearchSource");
    var searchSource = searchSourceEl.children[searchSourceEl.selectedIndex].text;

    var searchServerEl = document.getElementById("SummonerServer");
    var searchServer = searchServerEl.children[searchServerEl.selectedIndex].text;

    _gaq.push(['_trackEvent', 'Search Summoner', searchServer, summonerName]);
    chrome.extension.sendMessage({directive: "summonerSearch-click", summonerName: summonerName, searchSource: searchSource, searchServer: searchServer}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function summonerSearchkeyHandler(e) {
    if (typeof e === 'undefined' && window.event) { e = window.event; }
      if (e.keyCode === 13)
      {
        document.getElementById('SummonerSearch').click();
      }
}

function championSearchclickHandler(e) {
    var championName = document.getElementById('championName').value;
    var searchSourceEl = document.getElementById("championSearchSource");
    var searchSource = searchSourceEl.children[searchSourceEl.selectedIndex].text;

    _gaq.push(['_trackEvent', 'Search Guide', searchSource, championName]);
    chrome.extension.sendMessage({directive: "championSearch-click", championName: championName, searchSource: searchSource}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}



function counterChampionSearchclickHandler(e) {
    var championName = document.getElementById('counterChampionName').value;

    _gaq.push(['_trackEvent', 'Counter Search', championName]);
    chrome.extension.sendMessage({directive: "counterChampionSearch-click", championName: championName}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('oinkme').addEventListener('click', lolNexusclickHandler);
    document.getElementById('lolkingme').addEventListener('click', lolKingclickHandler);
    document.getElementById('SummonerSearch').addEventListener('click', summonerSearchclickHandler);

    //inputbox enter keypress
    document.getElementById('summonerName').onkeypress = function(e) {
      var event = e || window.event;
      var charCode = event.which || event.keyCode;
      if ( charCode == '13' ) {
        // Enter pressed
        document.getElementById('SummonerSearch').click();
      }
    }

    document.getElementById('ChampionSearch').addEventListener('click', championSearchclickHandler);
    //inputbox enter keypress
    document.getElementById('championName').onkeypress = function(e) {
      var event = e || window.event;
      var charCode = event.which || event.keyCode;
      if ( charCode == '13' ) {
        // Enter pressed
        document.getElementById('ChampionSearch').click();
      }
    }


    document.getElementById('counterChampionSearch').addEventListener('click', counterChampionSearchclickHandler);
    //inputbox enter keypress
    document.getElementById('counterChampionName').onkeypress = function(e) {
      var event = e || window.event;
      var charCode = event.which || event.keyCode;
      if ( charCode == '13' ) {
        // Enter pressed
        document.getElementById('counterChampionSearch').click();
      }
    }
})

    var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-44775393-1']);
      _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = 'https://ssl.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
