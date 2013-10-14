chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        var defaultSummonerName = localStorage["defaultSummonerName"];
        var defaultSummonerServer = localStorage["defaultSummonerServer"];
        switch (request.directive) {
        case "lolNexus-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            if (!defaultSummonerName) {
               document.getElementById('announcement').innerHTML = "Summoner Name not set up, please Click Here to set it up"; 
               return;
            }
            var newURL = 'http://www.lolnexus.com/NA/search?name=' + defaultSummonerName + '&server=' + defaultSummonerServer;
            chrome.tabs.create({ url: newURL });
        break;

        case "lolKing-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            if (!defaultSummonerName) {
               document.getElementById('announcement').innerHTML = "Summoner Name not set up, please Click Here to set it up"; 
               alert('no summoner');
               return;
            }
            
            var newURL = 'http://www.lolking.net/search?name=' + defaultSummonerName;
            chrome.tabs.create({ url: newURL });

        break;

        case "counterChampionSearch-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender

            var counterChampionName = request.championName;
            var newURL = 'http://www.championselect.net/champ/' + counterChampionName;
            chrome.tabs.create({ url: newURL });

        break;

        case "summonerSearch-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            if (!request.summonerName) {
              return;
            }
              var searchUrl;
              var searchSummoner = request.summonerName.replace(/\s/g, "+");
              var searchSource = request.searchSource.toLowerCase();
              var summonerServer = request.searchServer || 'NA';

              //parse source
              switch (searchSource) {
                case 'lolnexus':
                  searchUrl = 'http://www.lolnexus.com/NA/search?name=' + searchSummoner + '&server=' + summonerServer;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'lolteam':
                  searchUrl = 'http://www.lolteam.net/game/' + searchSummoner;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'lolking':
                  searchUrl = 'http://www.lolking.net/search?name=' + searchSummoner;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'kassadin':
                  searchUrl = 'http://quickfind.kassad.in/profile/na/' + searchSummoner;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'summoning':
                  searchUrl = 'http://summoning.net/v1/lyralei/na/' + searchSummoner;
                  chrome.tabs.create({ url: searchUrl });
                break;

                default:
                  searchUrl = 'http://www.ggwallpaper.com?source=extensionerror';
                  chrome.tabs.create({ url: searchUrl });
              }
        break;

        case "championSearch-click":
            // execute the content script
            chrome.tabs.executeScript(null, { // defaults to the current tab
                file: "contentscript.js", // script to inject into page and run in sandbox
                allFrames: true // This injects script into iframes in the page and doesn't work before 4.0.266.0.
            });
            sendResponse({}); // sending back empty response to sender
            if (!request.championName) {
              return;
            }

            //Guide formats:
            //http://www.solomid.net/guides.php?champ=aatrox
            //http://www.lolpro.com/guides/amumu
            //http://leaguecraft.com/strategies/guides/ashe-guides/
              var searchUrl;
              var searchChampion = request.championName;
              var searchSource = request.searchSource.toLowerCase();
              //parse source
              switch (searchSource) {
                case 'solomid':
                  searchUrl = 'http://www.solomid.net/guides.php?champ=' + searchChampion;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'mobafire':
                  searchUrl = 'http://www.lolking.net/search?name=' + searchChampion;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'probuilds':
                  searchUrl = 'http://www.probuilds.net/champions/' + searchChampion;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'lolpro':
                  searchUrl = 'http://www.lolpro.com/guides/' + searchChampion;
                  chrome.tabs.create({ url: searchUrl });
                break;

                case 'leaguecraft':
                  searchUrl = 'http://leaguecraft.com/strategies/guides/' + searchChampion + '-guides/';
                  chrome.tabs.create({ url: searchUrl });
                break;

                default:
                  searchUrl = 'http://www.ggwallpaper.com?source=extensionerror';
                  chrome.tabs.create({ url: searchUrl });
              }
        break;

        default:
            // helps debug when request directive doesn't match
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);
