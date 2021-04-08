$(() => { // defined all variables that will be used in the api call 



    // Empty Variables, all of them will have their value changed!
    let $sname = ""; // user's summoner name from input
    let $server = ""; // user's server from input
    let $accid = ""; // encypted account id from user used to get MATCH HISTORY.
    let $smmid = ""; // encypted summoner id from user used to get RANK information.
    let $matchesId = []; // empty array of match history from user.
    let $playerPosition = ""; // player participant index from participant Identities object or from participant array (both same index).
    let $championId = ""; // users champion id from the match.
    let $daListChamp = ""; // complete list of champions from champion.json.
    let $daListItem = "";
    let $championName = ""; // name of the champion that the user used for that match.
    let $kills = ""; // empty var that will store the kills obtained from the user during the match.
    let $deaths = ""; // empty var that will store the deaths gained from the user during the match.
    let $assists = ""; // empty var that will store the assists obtained from the user during the match.
    let $gameCreationDate = ""; // empty var that will store the date and time of the game in UNIX.
    let $gameDurationMin = ""; // empty var that will store the minutes from the total game duration.
    let $gameDurationSec = ""; // empty var that will store the seconds from the total game duration.
    let $gameDateLocation = ""; // // empty var that will be used to convert the UNIX game creation provided to normal human date format .
    let $goldEarned = ""; // total gold earned by the user during the match.
    let $items = ""; // empty var that will be used to store the range of indexes where items 0 through 6 will be found.
    let $rank = ""; // empty var that will be used to store the TIER not "rank" as defined in the API documentation.
    let $matchesIdwl = [];
    let $matchesIdWon = []; // empty array, it will store list of match ids in order to get overall winrate of the user
    let $win = 0; // total games won
    let $winrate = ""; // == $matchesIdwl / $win
    let $userRankWins = 0; // empty number that will be used to get the total wins in rank from the user
    let $userRankLoses = 0; // empty number that will be used to get the total loses in rank from the user
    let $totalRankMatches = 0; // variable needed in order to calculate winrate which is winrate = number of wins / number of games
    let $tRankWrResult = 0; // literally (($userRankWins / $totalRankMatches) * 100).toFixed(2)
    let $userTier = ""; // user's tier e.g. SILVER
    let $userRank = ""; // user's rank e.g. I (one)
    let $division = ""; // empty var that will be used to store the division
    let $tierWins = 0; // amount of wins of all the players in the user tier e.g. challenger x
    let $tierLosses = 0; // amount of losses of all player in the user rank e.g. (tier) I (one)
    let $totalTierGames = 0; // $tierWins + $tierLosses 
    let $tierWinrate = 0; // overall winrate of the tier $tierWins / $totalTierGames
    let $tTierWrResult = 0;
    // Variables with a value! 
    let $matchdiv = "";
    let $http = "https://"; // empty http for url merge purposes
    let $baseurlSu = ".api.riotgames.com/lol/summoner/v4/summoners/by-name/"; // url used to get information using only users summoners name
    let $api_key = config.apiKey; // my api key
    let $baseurlAcc = ".api.riotgames.com/lol/match/v4/matchlists/by-account/"; // url used to get information of match history from user using encrypted account id
    let $numgames = 5; // number of games that will be displayed when submit button is clicked default will be 10
    let $baseurlMatchId = ".api.riotgames.com/lol/match/v4/matches/"; // url used to get information about a specific match from the user
    let $gameDuration1 = "<li> Game Duration: "; // li used to begin the wrap of li
    let $gameDuration2 = "</li>"; // li used to end the wrap of li
    let $gameW = "<li> Game Won! </li>"; // displays game won if condition is emet
    let $gameL = "<li> Game Lost! </li>"; // displays game lost if condition is meet
    let $championNameLi1 = "<li>Champion: "; // li used to begin the wrap of li champion name
    let $championNameLi2 = "</li>"; // li used to end the wrap of li champion name
    let $championImg = "http://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/";
    let $itemImg = "http://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/";
    let $baseurlRank = ".api.riotgames.com/lol/league/v4/entries/by-summoner/";
    let $ornnItems = "https://ddragon.bangingheads.net/cdn/latest/img/item/"; // rito so good they don't add ornn item images in the database 
    let $baseurlRankTier = ".api.riotgames.com/lol/league-exp/v4/entries/"; // base url to get the rank info of all the players in the tier and division
    let $baseurlRankedQueue = "RANKED_SOLO_5x5/" // for now it will only support ranked games
    let $sname2 = "";
    let $slevel = 0;
    let $userrankedwinrate = "";
    let $userunranked = "";
    let $userrankdivision = "";
    let $eggs = () => { // first ajax request, everything begins with your summoner name, since it's the only public info that you have before this call
        $.ajax({ // INPUT SUMMONER NAME GET ACCOUNT ID 
            type: "GET",
            url: $http + $server + $baseurlSu + $sname + $api_key,
            success: function(data) {
                $sname2 = data.name;
                $slevel = data.summonerLevel;
                // $("#sname2").append(data.name); // get's summoners name
                // $("#slevel").append(data.summonerLevel); // displays summoner account level
                $accid = data.accountId; // got the encrypted account id and saved to a variable
                // get account id
                $smmid = data.id;
                console.log(data);
                $("#sname2").append(`IGN: ${$sname2} <br> Summoner Level: ${$slevel}`);
            }
        })

        $.getJSON("http://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion.json", function(championList) { // json provided by api developer, it contains a list of all champions nested in an object
            setTimeout(function() {
                $.ajax({ // QUERY FOR RANK
                    type: "GET",
                    url: $http + $server + $baseurlRank + $smmid + $api_key,
                    success: function(data5) {
                        // console.log(data5);
                        for (let q of data5) { // used for/of loop just to try to see if i could optimize the code
                            $userRankLoses = data5[0].losses;
                            $userRankWins = data5[0].wins;
                            $totalRankMatches = $userRankLoses + $userRankWins;
                            $tRankWrResult = (($userRankWins / $totalRankMatches) * 100).toFixed(2);

                            console.log($userRankWins, $userRankLoses, $totalRankMatches, $tRankWrResult)
                            $userrankedwinrate = `Ranked Winrate: ${$tRankWrResult}% <br>`;
                        }
                        // gets rank data
                        if (data5 == "") {
                            $userunranked = "Unranked"; // appends unranked if user has no rank data
                            $("#rank").text($userunranked);
                        } else {
                            $rank = data5[0].tier;
                            $division = data5[0].rank;
                            $userRank = `${$rank}/`
                            $userTier = `${$division}/`
                            $userrankdivision = `Rank:  ${$rank} ${data5[0].rank}`;
                            $("#rank").append($userrankdivision);
                            // $("#rank").append(`Rank:  ${$rank} ${data5[0].rank}`)
                            setTimeout(function() {
                                    $.ajax({ // QUERY FOR RANK
                                        type: "GET",
                                        url: $http + $server + $baseurlRankTier + $baseurlRankedQueue + $userRank + $userTier + $api_key,
                                        success: function(data7) {
                                            console.log(data7[0].wins, data7[1].wins, data7.length, data7[0].wins + data7[1].wins)
                                            for (let f = 0; f < data7.length; f++) {
                                                $tierWins += data7[f].wins;
                                                $tierLosses += data7[f].losses;
                                                $totalTierGames = $tierWins + $tierLosses;
                                                $tierWinrate = (($tierWins / $totalTierGames) * 100).toFixed(2);
                                            }
                                            $("#rank").append(`<br>Average ${$rank} ${$division} Winrate: ${$tierWinrate}%<br>`);
                                        }
                                    })
                                    console.log(1)
                                }, 1000)
                                // data5.[0].rank means the number 1 to 4 aside from the tier
                        }

                    }
                })
                console.log(2)
            }, 700)

            setTimeout(function() { // INPUT ACCOUNT ID GET MATCHES HISTORY
                    $.ajax({ // once you get the encrypted account id, then you can call for match history
                        type: "GET",
                        url: $http + $server + $baseurlAcc + $accid + $api_key,
                        success: function(data2) {
                            // console.log(data2);
                            $("#totalgames").text("Total Games on S13: " + data2.totalGames) // display total number of games in the current season
                                // get match history
                                // console.log(data2.totalGames); // NUMBER OF TOTAL GAMES GOTTEN HERE
                            for (let i = 0; i < $numgames; i++) { // this for loop basically defines the number of matches that will be displayed
                                $matchesId.push(data2.matches[i].gameId) // pushes the number specified in numgames of matches, and are stored in ascending order
                            }
                            for (let e = 0; e < 10; e++) { // this for loop basically defines the number of matches that will be displayed
                                $matchesIdwl.push(data2.matches[e].gameId) // pushes the number specified in numgames of matches, and are stored in ascending order
                            }
                        }
                    })
                    console.log(3)
                }, 600)
                // waits 1 sec before executing second to run

            setTimeout(function() { // TRYING TO DISPLAY EACH MATCH DETAILS WITH ID FROM ARRAY
                for (let j = 0; j < $matchesId.length; j++) {
                    $.ajax({ // once you get the encrypted account id, then you can call for match history
                        type: "GET",
                        url: $http + $server + $baseurlMatchId + $matchesId[j] + $api_key,
                        success: function(data3) {
                            for (let j = 0; j < 10; j++) { // checks if mini bread is there
                                if (data3.participantIdentities[j].player.currentAccountId == $accid) {
                                    $playerPosition == j;
                                    $championId == data3.participants[j].championId;
                                } //else { console.log(`${$snameClear} not found`) }
                            }
                            for (let w = 0; w < 10; w++) {
                                if (data3.participants[j].stats.win == true) {
                                    $matchesIdWon.push("W");
                                    $win += 1;
                                } else {
                                    $matchesIdWon.push("L");
                                }
                                break;
                            }
                            $winrate = (($win * 100) / $matchesIdWon.length).toFixed(2);
                            $daListChamp = Object.values(championList.data)
                            $daListItem = Object.values(championList.data)
                                // console.log($daListChamp.length);
                            $assists = data3.participants[j].stats.assists;
                            $kills = data3.participants[j].stats.kills;
                            $deaths = data3.participants[j].stats.deaths;
                            $("#winrate").text(`From the last ${$matchesIdWon.length} games, your winrate is: ${$winrate}%`), 500
                                // gets champion name
                                // console.log(data3.participants[j])
                            for (let x = 0; x < $daListChamp.length; x++) {
                                if (data3.participants[j].championId == $daListChamp[x].key) {
                                    // console.log($daListChamp[x].id) logs champions name
                                    $championName == $daListChamp[x].id;
                                    $(`#matchesVol${j}`).append(`<br><a href="https://leagueoflegends.fandom.com/wiki/${$daListChamp[x].id}/LoL" target="_blank"> <img class="champImg" src="${$championImg}${$daListChamp[x].id}.png"/></a><br>`)
                                        // console.log("appending champion images")
                                    $(`#matchesVol${j}`).append($championNameLi1 + $daListChamp[x].id + $championNameLi2)
                                        // console.log("appending champion name")
                                    break; // if finds the champ stop
                                }
                            }
                            if (data3.participants[j].stats.win == true) { // sets if the game was won or lost
                                $(`#matchesVol${j}`).append($gameW).addClass("gamewon")

                            } else {
                                $(`#matchesVol${j}`).append($gameL).addClass("gamelost")

                            }
                            // console.log(data3.gameCreation);
                            $gameCreationDate = data3.gameCreation;
                            $gameDateLocation = new Date($gameCreationDate).toLocaleDateString("en-us");
                            $gameDurationMin = Math.round(data3.gameDuration / 60);
                            $gameDurationSec = Math.round(data3.gameDuration % 60);
                            $goldEarned = data3.participants[j].stats.goldEarned;
                            // console.log($assists, $kills, $deaths) displays KDA
                            $(`#matchesVol${j}`).append(`Date: ${$gameDateLocation}<br>`);
                            $(`#matchesVol${j}`).append($gameDuration1 + `${$gameDurationMin} Mins, ` + `${$gameDurationSec} Secs.` + $gameDuration2)
                            $(`#matchesVol${j}`).append("Gold Earned: " + $goldEarned.toLocaleString() + "<br>")
                                // console.log(data3)
                            $items = Object.values(Object.values(Object.entries(data3.participants[j].stats))) // this is pretty messy tbh but it works LOL
                            $(`#matchesVol${j}`).append(`Kills: ${$kills} | Deaths: ${$deaths} | Assists: ${$assists}  <br><br>`) // displays kills
                            $.getJSON("http://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/item.json",
                                function(itemList) {
                                    $daListItem = Object.entries(itemList.data)
                                        // console.log($daListItem) 

                                    for (let r = 2; r < 9; r++) {
                                        if ($items[r][1] >= 7000 && $items[r][1] < 7023) { // check for ornn items which arent in the database and use external source to append them
                                            $(`#matchesVol${j}`).append(`<img class="itemImg" src="${$ornnItems}${$items[r][1]}.png">`)
                                                // console.log("appending ornn items")
                                        } else if ($items[r][1] !== 0) {
                                            for (let c = 0; c < $daListItem.length; c++) {
                                                if ($daListItem[c][0] == $items[r][1]) {
                                                    $(`#matchesVol${j}`).append(`<a href="https://leagueoflegends.fandom.com/wiki/${$daListItem[c][1].name}" target="_blank"><img class="itemImg" src="${$itemImg}${$items[r][1]}.png">`)
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    // JSON ITEMS 
                                })
                        }
                    })

                }
                console.log(4)
            }, 1500);
        })

    }


    $("#submitbtn").on("click", (event) => {
        event.preventDefault()
        $sname = $("#sname").val();
        $snameClear = $("#sname").val();
        $server = $("#server").val();
        // console.log($sname)
        if ($sname.length < 3) {
            alert("Too short, please, try again!")
        } else {

            $sname = $sname.replace(/ /g, "%20")
                // console.log($sname)
            $eggs();
        }

    })



});