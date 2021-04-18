$(() => {
    //vars marked with SELF are self explanatory
    let $kata = 0; // kata goes brrrr
    let $fBlood; // var used to store info regarding user's match, basically it check if the user got first blood  boolean
    let $gResult; // var means Game Result, ends w Victory or Defeat
    let $summoner1; // var used to store info regarding SUMMONER SPELL 1
    let $summoner2; //  var used to store info regarding SUMMONER SPELL 2
    let $userChampLevel; // var used to store users level during the match
    let $totalMagicDmgDealt; // SELF
    let $totalMagicDmgDealtToChamp; // SELF
    let $totalPhyDmgDealt; // SELF
    let $totalPhyDmgDealtToChamp; // SELF
    let $totalTrueDmgDealt; // not used yet
    let $totalTrueDmgDealtToChamp; // SELF not used yet
    let $killingSprees; // SELF not used yet
    let $longestTimeSpentLiving; // SELF
    let $pentaKill; // SELF not used yet
    let $quadraKill; // SELF not used yet
    let $primaryRunePerk0; // SELF SADLY NOT USED YET T____T
    let $timeApplyingCC; // Time spent applying CROWD CONTROL 
    let $totalDmgDealt; // SELF 
    let $totalDmgTaken; // SELF
    let $totalHeal; // Total amount of healing done to SELF
    let $totalTimeCced; // total time spent being CROWD CONTROLLED
    let $triplekills; // SELF
    let $turretkills; //user
    let $wardsPlaced; // SELF
    let $doubleKills; // SELF
    let $goldSpent; // Total amount of gold used during the match
    let $firstBloodKill; //check the user not the team 
    let $firstBloodAssist; // SELF
    let $dmgSelfMitigated; //SELF
    //team vars
    let $baronKills; // SELF
    let $dragonKills; // SELF
    let $firstBaron; // SELF
    let $firstBlood; // SELF
    let $firstDragon; // SELF
    let $firstInbh; // SELF 
    let $firstRiftHerald; // SELF
    let $firstTower; //SELF
    let $renamedForWikiaSumm0;
    let $renamedForWikiaSumm1;
    let $renamedForWikiaSumm2;
    let $renamedForWikiaSumm3;
    let $renamedForWikiaSumm4;
    let $renamedForWikiaSumm5;
    //end team vars
    let $sname; // user's summoner name from input
    let $sname2; // user summoner name
    let $slevel; // summoner account level
    let $server; // user's server from input
    let $accid; // encypted account id from user used to get MATCH HISTORY.
    let $smmid; // encypted summoner id from user used to get RANK information.
    let $rank; // RANK meaning SILVER etc. you get this rank from the user information used to compare average
    let $division; // empty var that will be used to store the division
    let $userRank; //  users rank literally same as $rank, but this one is used for display acct info
    let $userTier; // same as above
    let $userrankdivision; // user rank and division formatted as "SILVER III", as example 
    let $accountInfoAppend; // name of the function to append account info
    let $championList; // list of champions obtained from the JSON
    let $userunranked; // if rank not found, then this var will be used to display UNRANKED
    let $totalGames; // total amount of gamed played in the current season (13)
    let $matchesId = [] // array used to store the ids of the current number of match history requested
    let $matchesIdwl = []; //  array used to store the ids of the matches that will be shown
    let $matchesIdWon = []; // array used to count wins from the previous array of id matches
    let $championId; // var used to store information regarding the CHAMPION USED by the user in the match
    let $playerPosition; // the most important var in this file, currently 43 mentiones, it literally saves the position of the user that requested the info, used to find where the user is
    let $tierWins = 0; // amount of wins of all the players in the user tier e.g. challenger x
    let $tierLosses = 0; // amount of losses of all player in the user rank e.g. (tier) I (one)
    let $totalTierGames = 0; // $tierWins + $tierLosses 
    let $win = 0; // used to count the amount of wins from the match history
    let $winrate = ""; // used to calculate the winrate of match history, this var goes means winrate = wins / number of games multiply it for 100 to make it fanceh
    let $recentMatches = 0; // by recent matches, meaning total number of matches requested
    let $daListChamp = ""; // basically the list of champions, however, object.value.champion.data used here
    let $individualMatchId; // SELF
    let $championPosition; // used to find champion in the JSON and log their name
    let $gameCreationDate; // SELF int stored as UNIX
    let $gameDateLocation; // basically game creation but this var stores it as localedatestring us
    let $gameDurationMin; // basically game duration game duration / 60 gives you the mins of the match
    let $gameDurationSec; // basically game duration game duration % 60 gives you the secs of the match
    let $goldEarned; // SELF 
    let $goldEarnedLocale; // Adds comma to gold values INT
    let $ornnItemPresent; // nightmare var pls delete ornn items
    let $participantXitems0to6; // basically makes it easy to find the items used loop 2 to 9 and you will find items 0 to 6 $items = Object.values(Object.values(Object.entries(data3.participants[$playerPosition].stats))) end me pls, this basically 
    let $itemr; // var used to store let r from loop  BASICALLY GOES FROM 2 TO 9
    let $itemnum = 0; // it becomes 1 later on which is the position INDEX where item name is found
    let $itemsnoOrnn; // list from 0 to 7k searches for all item values 
    let $itemindex = 0; // it literally stores index 0, which is used to append things to the html
    let $ornnItemNotPresent; // yay, jk basically it checks that the item num id is not 7000 to 7023, which are ornn items
    let $wikiaItem; // var used to compose a working wikia item URL
    let $daListIcon; // icon list from the JSON
    let $playerIcon; // used to store player icon ID
    let $playerIconFullUrl; // url to access image of player icon ids
    let $summlocationjson; // location of the summoner spell in the summoner spell JSON
    let $summ1name; // stores summoner 1 from the user as a string
    let $summ2name; // stores summoner 2 from the user as a string
    let $summ1Img; // url used to append summoner1 image 
    let $summ2Img; // url used to append summoner2 image
    let $tooltipItemDescription; // SELF
    let $tooltipItemName; // SELF
    let $tooltipItemPrice; // SELF
    let $tooltipItemSell; // SELF 
    let $searchAgain = 0; // uwu
    // let $tierWinrate = 0; // overall winrate of the tier $tierWins / $totalTierGames
    // let $tTierWrResult = "";
    let $numgames = 10; // it displays the number of games stored in this var
    let $http = "https://"; // empty http for url merge purposes
    let $baseurlSu = ".api.riotgames.com/lol/summoner/v4/summoners/by-name/"; // url used to get information using only users summoners name
    let $api_key = "?api_key=RGAPI-5dd35c5a-07f9-4173-99ff-c30aed1e75e7"; // my api key
    let $magic = "https://cross-anywhere.herokuapp.com/" //heroku bruh byebye cross ERR UWU
    let $baseurlRank = ".api.riotgames.com/lol/league/v4/entries/by-summoner/";
    let $baseurlRankTier = ".api.riotgames.com/lol/league-exp/v4/entries/"; // base url to get the rank info of all the players in the tier and division
    let $baseurlRankedQueue = "RANKED_SOLO_5x5/" // for now it will only support ranked games
    let $baseurlAcc = ".api.riotgames.com/lol/match/v4/matchlists/by-account/"; // url used to get information of match history from user using encrypted account id
    let $baseurlMatchId = ".api.riotgames.com/lol/match/v4/matches/"; // url used to get information about a specific match from the user
    let $championImg = "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/champion/";
    let $ornnItems = "https://ddragon.bangingheads.net/cdn/latest/img/item/"; // rito so good they don't add ornn item images in the database 
    let $itemImg = "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/item/"; //SELF
    let $playerIconUrl = "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/profileicon/" // SELF
    let $summImgUrl = "https://ddragon.leagueoflegends.com/cdn/11.7.1/img/spell/" // SELF
    let $champJSON;
    let $champNameBeforeAllyT
    let $champAllyTips; // pls no go away uwu bad variables
    let $champAllyTipsJSON;
    let $itemImgLocal = "img/item";
    let $championImgLocal ="img/champion/";


    let $eggs = () => { // first ajax request, everything begins with your summoner name, since it's the only public info that you have before this call
        $call = $.ajax({ // INPUT SUMMONER NAME GET ACCOUNT ID 
            type: "GET",

            url: $magic + $http + $server + $baseurlSu + $sname + $api_key,
        }).then(function(data) {
            console.log(data)
            console.log($http + $server + $baseurlSu + $sname + $api_key)
            $sname2 = data.name;
            $slevel = data.summonerLevel;
            $accid = data.accountId;
            $smmid = data.id;
            // console.log(data, $smmid);
            $playerIcon = data.profileIconId;

            $.getJSON("https://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion.json", function(championList) { // json provided by api developer, it contains a list of all champions nested in an object
                $championList = championList;

            })
            $.getJSON("https://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/item.json", function(itemList) {
                $daListItem = Object.entries(itemList.data)
            })
            $.getJSON("https://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/profileicon.json", function(iconList) {
                $daListIcon = iconList;

            })
            $.getJSON("https://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/summoner.json", function(summonerList) {
                $daListSum = summonerList;
            })

            $pepper();
        })


    }
    let $pepper = () => {
        $.ajax({ // once you get the encrypted account id, then you can call for match history 
            type: "GET",
            url: $magic + $http + $server + $baseurlAcc + $accid + $api_key,
        }).then(function(data2) {
            console.log(data2)
            console.log($http + $server + $baseurlAcc + $accid + $api_key)
                // console.log(data2);
            $totalGames = data2.totalGames;
            // $("#totalgames").text("Total Games on S13: " + data2.totalGames) // display total number of games in the current season
            // console.log("alive")
            for (let i = 0; i < $numgames; i++) { // this for loop basically defines the number of matches that will be displayed
                $matchesId.push(data2.matches[i].gameId) // pushes the number specified in numgames of matches, and are stored in ascending order
            }
            for (let e = 0; e < 10; e++) { // this for loop basically defines the number of matches that will be displayed
                $matchesIdwl.push(data2.matches[e].gameId) // pushes the number specified in numgames of matches, and are stored in ascending order
            }
            $playerIconFullUrl = (`${$playerIconUrl}${$playerIcon}.png`)
                // console.log($daListIcon.data[$playerIcon])
                // console.log($daListSum)

            $milk();
        })

    }

    let $milk = () => {
        // console.log('hi');
        $.ajax({ // if the user is !== unranked then throw the following ajax call to get users rank info
            type: "GET",
            url: $magic + $http + $server + $baseurlRank + $smmid + $api_key,
        }).then(function(data5) {
            console.log(data5)
            console.log($http + $server + $baseurlRank + $smmid + $api_key)

            for (let q of data5) { // used for/of loop just to try to see if i could optimize the code
                $userRankLoses = data5[0].losses;
                $userRankWins = data5[0].wins;
                $totalRankMatches = $userRankLoses + $userRankWins;
                $tRankWrResult = (($userRankWins / $totalRankMatches) * 100).toFixed(2);

                // console.log($userRankWins, $userRankLoses, $totalRankMatches, $tRankWrResult)
                $userrankedwinrate = `Ranked Winrate: ${$tRankWrResult}% <br>`;
            }
            // gets rank data
            if (data5 == "") {
                $userunranked = "Unranked"; // appends unranked if user has no rank data
                $ham();

            } else {
                $rank = data5[0].tier;
                $division = data5[0].rank;
                $userRank = `${$rank}/`
                $userTier = `${$division}/`
                $userrankdivision = `Rank:  ${$rank} ${data5[0].rank}`;
                // console.log("success")
                $bread();
            }

        })
    }
    let $bread = () => {
        $.ajax({ // if the user is !== unranked then throw the following ajax call to determine the winrate of the user in the same tier and division 
            type: "GET",
            url: $magic + $http + $server + $baseurlRankTier + $baseurlRankedQueue + $userRank + $userTier + $api_key,
        }).then(function(data7) {
            console.log(data7)
            console.log($http + $server + $baseurlRankTier + $baseurlRankedQueue + $userRank + $userTier + $api_key)
                // console.log(data7) NEEEEEDEDEDEDEDEDEDEDE
            for (let f = 0; f < data7.length; f++) {
                $tierWins += data7[f].wins;
                $tierLosses += data7[f].losses;
                $totalTierGames = $tierWins + $tierLosses;
                $tierWinrate = (($tierWins / $totalTierGames) * 100).toFixed(2);


            }

            $ham();

        })


    }
    let $ham = () => { // ham goes brrr, basically this call gets all the information in regards to the match, this call is executed the number of times that the user request on contrary to the others which are only needed once
        $accountInfoAppend();
        for (let p = 0; p < $matchesId.length; p++) {

            // console.log($individualMatchId, [p])
            $.ajax({
                type: "GET",
                url: $magic + $http + $server + $baseurlMatchId + $matchesId[p] + $api_key,
            }).then(function(data3) {

                console.log(data3)
                console.log($http + $server + $baseurlMatchId + $matchesId[p] + $api_key)
                $individualMatchId = [p];
                // console.log(data3) NEEEEEDEDEDEDEDEDEDEDE
                for (let j = 0; j < 10; j++) {
                    if (data3.participantIdentities[j].player.currentAccountId == $accid) {
                        $playerPosition = [j];
                        $championId = data3.participants[$playerPosition].championId;
                        break;
                    } //else { console.log(`${$snameClear} not found`) }
                }
                for (let w = 0; w < 10; w++) {
                    if (data3.participants[$playerPosition].stats.win == true) {
                        $matchesIdWon.push("W");
                        $win += 1;
                    } else {
                        $matchesIdWon.push("L");
                    }
                    // console.log($matchesIdWon.length, $matchesIdWon) NEEEEEDEDEDEDEDEDEDEDE

                    $recentMatches = $matchesIdWon.length;
                    break;
                }

                if (data3.participants[$playerPosition].stats.win == true) { // sets if the game was won or lost
                    $gResult = "Victory!"
                } else {
                    $gResult = "Defeat!"
                }

                if (data3.participants[$playerPosition].stats.firstBloodKill == true) { // sets if the game was won or lost
                    $fBlood = "You got first blood!"
                } else {
                    $fBlood = "";
                }
                // console.log(Object.entries($daListSum.data)) NEEEEEDEDEDEDEDEDEDEDE
                //compare participants[0].spell2Id to [0][1].key
                //participants[0].spell1Id 
                //data.SummonerBarrier.key [$SUMMONER][0]
                $summlocationjson = Object.entries($daListSum.data)
                    // console.log($summlocationjson[0][1].key, $playerPosition) NEEEEEDEDEDEDEDEDEDEDE

                for (let s = 0; s < 14; s++) {
                    if (data3.participants[$playerPosition].spell1Id == $summlocationjson[s][1].key) {
                        $summ1name = $summlocationjson[s][0]

                        // console.log($summlocationjson[s][0])
                        // $summ1key = $summlocationjson[s][1].key
                        $summ1Img = `${$summImgUrl}${$summ1name}.png`
                            // console.log($summlocationjson[s][1].key)

                    }
                    if (data3.participants[$playerPosition].spell2Id == $summlocationjson[s][1].key) {
                        $summ2name = $summlocationjson[s][0]
                        $summ2Img = `${$summImgUrl}${$summ2name}.png`
                            // console.log(`${$summImgUrl}${$summ2name}.png`)

                    }

                }
                // console.log($champJSON)
                $winrate = (($win * 100) / $recentMatches).toFixed(2);
                // console.log($winrate)
                $summoner1 = data3.participants[$playerPosition].spell1Id
                $summoner2 = data3.participants[$playerPosition].spell2Id
                $userChampLevel = data3.participants[$playerPosition].stats.champLevel
                $totalMagicDmgDealt = data3.participants[$playerPosition].stats.magicDamageDealt.toLocaleString()
                $totalMagicDmgDealtToChamp = data3.participants[$playerPosition].stats.magicDamageDealtToChampions.toLocaleString()
                $totalPhyDmgDealt = data3.participants[$playerPosition].stats.physicalDamageDealt.toLocaleString()
                $totalPhyDmgDealtToChamp = data3.participants[$playerPosition].stats.physicalDamageDealtToChampions.toLocaleString()
                $totalTrueDmgDealt = data3.participants[$playerPosition].stats.trueDamageDealt.toLocaleString()
                $totalTrueDmgDealtToChamp = data3.participants[$playerPosition].stats.trueDamageDealtToChampions.toLocaleString()
                    // $killingSprees = data3.participants[$playerPosition].stats.killingSprees
                $longestTimeSpentLiving = data3.participants[$playerPosition].stats.longestTimeSpentLiving
                $pentaKill = data3.participants[$playerPosition].stats.pentaKills
                $quadraKill = data3.participants[$playerPosition].stats.quadraKills
                $primaryRunePerk0 = data3.participants[$playerPosition].stats.perk0
                $timeApplyingCC = data3.participants[$playerPosition].stats.timeCCingOthers
                $totalDmgDealt = data3.participants[$playerPosition].stats.totalDamageDealt.toLocaleString()
                $totalDmgDealtToChampion = data3.participants[$playerPosition].stats.totalDamageDealtToChampions.toLocaleString()
                $totalDmgTaken = data3.participants[$playerPosition].stats.totalDamageTaken.toLocaleString()
                $totalHeal = data3.participants[$playerPosition].stats.totalHeal.toLocaleString()
                $totalTimeCced = data3.participants[$playerPosition].stats.totalTimeCrowdControlDealt
                $triplekills = data3.participants[$playerPosition].stats.tripleKills
                $turretkills = data3.participants[$playerPosition].stats.turretKills //user
                $wardsPlaced = data3.participants[$playerPosition].stats.wardsPlaced
                $doubleKills = data3.participants[$playerPosition].stats.doubleKills
                $goldSpent = data3.participants[$playerPosition].stats.goldSpent.toLocaleString()
                $firstBloodKill = data3.participants[$playerPosition].stats.firstBloodKill //bool 
                $firstBloodAssist = data3.participants[$playerPosition].stats.firstBloodAssist //
                $dmgSelfMitigated = data3.participants[$playerPosition].stats.damageSelfMitigated

                $("#rank").text(`Winrate of the last ${$recentMatches} games, ${$winrate}%`)
                $daListChamp = Object.values($championList.data)
                    // $daListItem = Object.values($championList.data)
                    // console.log($daListChamp.length);
                $assists = data3.participants[$playerPosition].stats.assists;
                $kills = data3.participants[$playerPosition].stats.kills;
                $deaths = data3.participants[$playerPosition].stats.deaths;

                // console.log($kills, $deaths, $assists)  NEEEEEDEDEDEDEDEDEDEDE
                // console.log($playerPosition, $championId) NEEEEEDEDEDEDEDEDEDEDE

                $gameCreationDate = data3.gameCreation;
                $gameDateLocation = new Date($gameCreationDate).toLocaleDateString("en-us");
                $gameDurationMin = Math.round(data3.gameDuration / 60);
                $gameDurationSec = Math.round(data3.gameDuration % 60);
                $goldEarned = data3.participants[$playerPosition].stats.goldEarned;
                $goldEarnedLocale = $goldEarned.toLocaleString();
                $items = Object.values(Object.values(Object.entries(data3.participants[$playerPosition].stats)))
                for (let x = 0; x < $daListChamp.length; x++) {
                    if (data3.participants[$playerPosition].championId == $daListChamp[x].key) {
                        $championPosition = x;
                        // console.log($daListChamp[x].id) //logs champions name NEEEEEDEDEDEDEDEDEDEDE
                        $championName = $daListChamp[x].id;
                        break; // if finds the champ stop
                    }

                }

                // console.log($champJSON.data.$championName)

                // console.log($champAllyTipsJSON)

                // console.log($champAllyTips)
                // $.getJSON(`http://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion/${$championName}.json`, function(championJSONinfo) { SOMEWHAT WORKS
                //     $champJSON = championJSONinfo;

                // }).then(function() {
                //     for (let d = 0; d < $champJSON.data.length; d++) {

                //     }
                //     $champNameBeforeAllyT = Object.entries($champJSON.data)
                //     console.log($champNameBeforeAllyT[0][1].allytips)
                // })
                $matchsInfoAppend(); /// LOOOP FOR ITEEEEEEEEMS HEREEEEEEEEEEEE


                for (let r = 2; r < 9; r++) {
                    // console.log($items)
                    $participantXitems0to6 = $items;
                    $itemr = r;
                    $itemnum = 1;

                    if ($items[r][1] >= 7000 && $items[r][1] < 7023) { // check for ornn items which arent in the database and use external source to append them
                        $ornnItemPresent = true;
                    } else if ($items[r][1] !== 0) {
                        $ornnItemNotPresent = true;
                        for (let c = 0; c < $daListItem.length; c++) {
                            $ornnItemNotPresent = true;
                            $itemsnoOrnn = c;
                            $itemindex = 0;
                            $wikiaItem = $daListItem[$itemsnoOrnn][$itemnum].name
                            $tooltipItemDescription = $daListItem[c][1].description;
                            $tooltipItemName = $daListItem[c][1].name;
                            $tooltipItemPrice = $daListItem[c][1].gold.total.toLocaleString();
                            $tooltipItemSell = $daListItem[c][1].gold.sell.toLocaleString();
                            // console.log($daListItem[c][0]) // goes to the index of the list of items to child index 0 which is the item id
                            if ($daListItem[c][0] == $items[r][1]) {
                                break;
                            }
                        }
                    }
                    $appendItems();
                    // console.log($daListItem)
                }






            })


        }
    }

    $accountInfoAppend = () => {
        // $("#accountinfo").attr("display", "block")
        $("#accountinfo").append(`<img class="usericon" src=${$playerIconFullUrl}><br>`)
        $("#accountinfo").append(`IGN: ${$sname2} <br> Summoner Level: ${$slevel}<br>`);
        $("#accountinfo").append("Total Games on S13: " + $totalGames)
        if ($userunranked == "Unranked") {
            $("#accountinfo").append(`<br>Unranked<br>`);
        } else {
            // console.log("pls show")
            $("#accountinfo").append(`<br>${$userrankdivision}`)
            $("#accountinfo").append(`<br>Average ${$rank} ${$division} Winrate: ${$tierWinrate}%<br>`);
        }
        $("#accountinfo").show();

    }

    $matchsInfoAppend = () => {
        // console.log($individualMatchId)
        $("#matchlist").append(`<div class="matchnum" id=match${$individualMatchId}>
        <br>
        <a href="https://leagueoflegends.fandom.com/wiki/${$daListChamp[$championPosition].id}/LoL" target="_blank"> 
        <img class="champImg" src="${$championImgLocal}/${$daListChamp[$championPosition].id}.png"/></a>
        <br>
        <img class="summIcons" src="${$summ1Img}"><img class="summIcons" src="${$summ2Img}"<br>
        <p>${$gResult}</p>
        <p>Champion: ${$championName}</p>
        <p>Level: ${$userChampLevel}</p>
        <p>Date: ${$gameDateLocation}</p>
        <p>Game Duration: ${$gameDurationMin} mins, ${$gameDurationSec} sec.</p>
        <p>Gold Earned: ${$goldEarnedLocale} </p>
        <p> Kills: ${$kills} | Deaths: ${$deaths} | Assists: ${$assists}</p>
        <button id="buttonshow">Match Details</button><br>
        <div class="details hidden">
        <p>Gold Spent: ${$goldSpent}
        <p>Damage Done: ${$totalDmgDealt}</p>
        <p Damage Done to Champions: ${$totalDmgDealtToChampion}</p>
        <p>Magic Damage Done: ${$totalMagicDmgDealt}</p>
        <p>Magic Damage Done to Champions: ${$totalMagicDmgDealtToChamp}</p>
        <p>Physical Damage Done: ${$totalPhyDmgDealt}</p>
        <p>Physical Damage Done to Champions: ${$totalPhyDmgDealtToChamp}</p>
        <p>Longest Time Spent Alive: ${$longestTimeSpentLiving} secs.</p>
        <p>Time Applying CC: ${$timeApplyingCC} secs.</p>
        <p>Time Being CCed: ${$totalTimeCced} secs.</p>
        <p>Healing Done: ${$totalHeal}</p>
        <p>Wards Placed: ${$wardsPlaced}</p>
        </div>
        <br>
        </div>
        `);
        if ($gResult == "Victory!") {
            $(".matchnum").addClass("matchnumblue")
            $(".matchnum").removeClass("matchnum")
        } else {
            $(".matchnum").addClass("matchnumred")
            $(".matchnum").removeClass("matchnum")
                // console.log("red")
        }
        // if ($fBlood == "You got first blood!") {
        //     $(".details").append($fBlood);
        // } else {

        // }


        // $.getJSON(`http://ddragon.leagueoflegends.com/cdn/11.7.1/data/en_US/champion/${$championName}.json`, function(championJSONinfo) { plsno
        //     $champJSON = championJSONinfo;

        // }).then(function() {
        //     for (let d = 0; d < $champJSON.data.length; d++) {

        //     }
        //     $champNameBeforeAllyT = Object.entries($champJSON.data)
        //     console.log($champNameBeforeAllyT[0][1].allytips)
        // })

    }

    $appendItems = () => {
        // console.log("hi")
        if ($participantXitems0to6[$itemr][$itemnum] == 0) {} else if ($ornnItemPresent == true) {
            $(`#match${$individualMatchId}`).append(`<img class="itemImg tooltip" src="${$ornnItems}${$items[$itemr][$itemnum]}.png">`)
        } else if ($ornnItemNotPresent == true) {
            $(`#match${$individualMatchId}`).append(`<div class="tooltip"><a href="https://leagueoflegends.fandom.com/wiki/${$wikiaItem}" target="_blank">
            <img class="itemImg"  src="${$itemImgLocal}/${$participantXitems0to6[$itemr][$itemnum]}.png">
            <span class="tooltiptext">Name: ${$tooltipItemName}<br><br>Cost: ${$tooltipItemPrice}g<br><br>Sells For: ${$tooltipItemSell}g<br><br>${$tooltipItemDescription}</span></div>`)
        }

    }

    $(document).on("click", "#buttonshow", function() {

        if ($(".details").hasClass("hidden")) {
            // console.log("hi")
            // console.log(this)
            $(".details").removeAttr("display", "none");
            $(".details").show();
            $(".details").removeClass("hidden");
        } else {
            $(".details").hide();
            $(".details").addClass("hidden");
            // console.log("hi2") NEEEEEDEDEDEDEDEDEDEDE
        }



    })

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
        $searchAgain = 1;
        if ($searchAgain == 1) {
            console.log("I love my class uwu <3");
            $("#searchAgain").css("visibility", "visible");
        }
        $kata = 1;
        if (kata == 1) {
            console.log("got here")
            $("#kata").css("visibility", "visible");
        }
    })
    $("#searchAgain").on("click", function() {
        location.reload();
    })
})