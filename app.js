//#region VARIABLES / OBJECTS SECTION 

let weapons = [
    {
        name: 'Bare Hands',
        atk: 5,
        img: "./assets/weapons/sword-0.png",
        gold: 0,
        shop: "./assets/info-cards/template.png"
    },
    {
        name: 'Rusty Sword',
        atk: 15,
        img: "./assets/weapons/sword-1.png",
        gold: 50,
        shop: "./assets/money/money-1.png"
    },
    {
        name: 'Shiny Cutlass',
        atk: 25,
        img: "./assets/weapons/sword-2.png",
        gold: 150,
        shop: "./assets/money/money-2.png"
    },
    {
        name: 'Jeweled Sword',
        atk: 50,
        img: "./assets/weapons/sword-3.png",
        gold: 300,
        shop: "./assets/money/money-3.png"
    },
    {
        name: "SOLD OUT",
        atk: 50,
        gold: 0,
        img: "./assets/info-cards/max.png",
        shop: "./assets/info-cards/sold-out.png"
    }
]

let armor = [
    {
        name: 'Nude',
        hp: 100,
        img: "./assets/armor/armor-0.png",
        sprite: "./assets/characters/player-0.png",
        gold: 0,
        shop: "./assets/info-cards/template.png"
    },
    {
        name: 'Leather Armor',
        hp: 150,
        img: "./assets/armor/armor-1.png",
        sprite: "./assets/characters/player-1.png",
        gold: 50,
        shop: "./assets/money/money-1.png"
    },
    {
        name: 'Steel Plate',
        hp: 200,
        img: "./assets/armor/armor-2.png",
        sprite: "./assets/characters/player-2.png",
        gold: 150,
        shop: "./assets/money/money-2.png"
    },
    {
        name: "Giant's Belt",
        hp: 250,
        img: "./assets/armor/armor-3.png",
        sprite: "./assets/characters/player-3.png",
        gold: 300,
        shop: "./assets/money/money-3.png"
    },
    {
        name: "SOLD OUT",
        hp: 250,
        gold: 0,
        img: "./assets/info-cards/max.png",
        shop: "./assets/info-cards/sold-out.png"
    }
]

let food = [
    {
        name: 'Fish Bones',
        crit: .01,
        img: "./assets/food/food-0.png",
        gold: 0,
        shop: "./assets/info-cards/template.png"
    },
    {
        name: 'Raw Carrot',
        crit: .1,
        img: "./assets/food/food-1.png",
        gold: 50,
        shop: "./assets/money/money-1.png"
    },
    {
        name: 'Fresh Bread',
        crit: .2,
        img: "./assets/food/food-2.png",
        gold: 150,
        shop: "./assets/money/money-2.png"
    },
    {
        name: 'Roast Mutton',
        crit: .3,
        img: "./assets/food/food-3.png",
        gold: 300,
        shop: "./assets/money/money-3.png"
    },
    {
        name: "SOLD OUT",
        crit: .3,
        gold: 0,
        img: "./assets/info-cards/max.png",
        shop: "./assets/info-cards/sold-out.png"
    }
]

let minions = [
    {
        name: 'The Lone Wolf',
        passive: 0,
        img: "./assets/info-cards/template.png",
        gold: 0,
        shop: "./assets/info-cards/template.png"
    },
    {
        name: 'Tiny Minion',
        passive: 10,
        img: "./assets/minions/minion-1-card.png",
        gold: 50,
        shop: "./assets/money/money-1.png"
    },
    {
        name: 'Hardy Minion',
        passive: 25,
        img: "./assets/minions/minion-2-card.png",
        gold: 150,
        shop: "./assets/money/money-2.png"
    },
    {
        name: 'Mighty Minion',
        passive: 50,
        img: "./assets/minions/minion-3-card.png",
        gold: 300,
        shop: "./assets/money/money-3.png"
    },
    {
        name: "SOLD OUT",
        passive: 50,
        gold: 0,
        img: "./assets/info-cards/max.png",
        shop: "./assets/info-cards/sold-out.png"
    }
]

let bosses = [
    {
        name: 'Bandit',
        hp: 50,
        atk: 5,
        crit: .01,
        miss: .01,
        passive: 0,
        img: "./assets/characters/boss-0.png",
        loot: 0,
        gold: 50,
        lootName: "Strong Drink",
        lootImg: "./assets/loot/loot-0.png",
        winImg: "./assets/win-lose/win-0.png"
    },
    {
        name: 'The Orc King',
        hp: 150,
        atk: 15,
        crit: .01,
        miss: .33,
        passive: 0,
        img: "./assets/characters/boss-1.png",
        loot: 20,
        gold: 100,
        lootName: "Orc Tusk",
        lootImg: "./assets/loot/loot-1.png",
        winImg: "./assets/win-lose/win-1.png"
    },
    {
        name: 'Wax Effigy',
        hp: 250,
        atk: 20,
        crit: .33,
        miss: .01,
        passive: 0,
        img: "./assets/characters/boss-2.png",
        loot: 50,
        gold: 250,
        lootName: "Wax Chunk",
        lootImg: "./assets/loot/loot-2.png",
        winImg: "./assets/win-lose/win-2.png"
    },
    {
        name: 'Aberration',
        hp: 500,
        atk: 25,
        crit: .01,
        miss: .01,
        passive: 15,
        img: "./assets/characters/boss-3.png",
        loot: 100,
        gold: 500,
        lootName: "Eerie Ash",
        lootImg: "./assets/loot/loot-3.png",
        winImg: "./assets/win-lose/win-3.png"
    }
]

// Game Variables
let bossLevel = 0
let playerLevel = 0
let playerGold = 0
let totalGold = 0

// Player Variables
let weaponLevel = 0
let armorLevel = 0
let foodLevel = 0
let minionLevel = 0

// Combat Variables
let playerName = 'Adventurer'
let playerHealth = armor[armorLevel].hp
let playerAtk = weapons[weaponLevel].atk
let playerCrit = (food[foodLevel].crit) * 100
let playerImg = armor[armorLevel].sprite
let playerPassive = minions[minionLevel].passive

let bossName = bosses[bossLevel].name
let bossHealth = bosses[bossLevel].hp
let bossAtk = bosses[bossLevel].atk
let bossCrit = bosses[bossLevel].crit
let bossMiss = bosses[bossLevel].miss
let bossImg = bosses[bossLevel].img
let bossPassive = bosses[bossLevel].passive
let bossLoot = bosses[bossLevel].loot
let bossLootImg = bosses[bossLevel].lootImg
let bossGold = bosses[bossLevel].gold
let bossWinImg = bosses[bossLevel].winImg
let bossLootName = bosses[bossLevel].lootName

// Base Player Object
let player = {
    name: playerName,
    hp: playerHealth,
    atk: playerAtk,
    miss: .01,
    crit: playerCrit,
    passive: playerPassive,
    gold: playerGold,
    img: playerImg
}

let boss = {
    name: bossName,
    hp: bossHealth,
    atk: bossAtk,
    crit: bossCrit,
    miss: bossMiss,
    passive: bossPassive,
    img: bossImg,
    loot: bossLoot,
    gold: bossGold,
    lootImg: bossLootImg,
    lootName: bossLootName,
    winImg: bossWinImg
}

let playerTempHealth = playerHealth
let playerHealthBar = Math.floor((playerTempHealth / player.hp) * 100)
let bossTempHealth = bossHealth
let bossHealthBar = Math.floor((bossTempHealth / boss.hp) * 100)
let playerTempAtk = null
let bossTempAtk = null
let random = null
let fightTimer = null
let fightStatus = ''
let fightMessage = ''
let lootMessage = ''
let lootImg = ''
let lootColor = ''
let onClick = ''
let fightColor = ''
let level = ''

let message1 = "Take what you want and go!"
let message2 = "What may I offer you...?"
let message3 = "What do you want?!"
let goldMessage = "You don't have enough gold!"

//#endregion

//#region GAME START SECTION

function newGame() {
    document.getElementById("shop-1").classList.add("hidden")
    document.getElementById("shop-2").classList.add("hidden")
    document.getElementById("shop-3").classList.add("hidden")
    document.getElementById("welcome-header").classList.add("hidden")
    document.getElementById("welcome-footer").classList.add("hidden")
    document.getElementById("body").classList.remove("bg-main")
    document.getElementById("body").classList.remove("section-border")
    document.getElementById("body").classList.add("bg-dark")
    document.getElementById("boss-0").classList.remove("hidden")
    document.getElementById("stats").classList.remove("hidden")
    drawStats()
    drawBattle()
}

function startLevel(num) {
    playerLevel = num
    document.getElementById("new-game").classList.remove("bg-main")
    document.getElementById("new-game").classList.remove("bg-main-0")
    document.getElementById("new-game").classList.remove("bg-main-2")
    document.getElementById("new-game").classList.remove("bg-main-3")
    document.getElementById("new-game").classList.add(`bg-main-${playerLevel}`)
    // @ts-ignore
    document.getElementById("start").disabled = false;
}

function startGame(num) {
    document.getElementById("new-game").classList.add("hidden")
    document.getElementById("stats").classList.remove("hidden")
    if (num == 0) {
        document.getElementById("boss-0").classList.remove("hidden")
    } else if (num == 2) {
        totalGold = 200
        bossLevel = 1
        weaponLevel = 1
        armorLevel = 1
        foodLevel = 1
        minionLevel = 1
        document.getElementById("boss-2").classList.remove("hidden")
    } else if (num == 3) {
        totalGold = 1200
        bossLevel = 2
        weaponLevel = 2
        armorLevel = 2
        foodLevel = 2
        minionLevel = 2
        document.getElementById("boss-3").classList.remove("hidden")
    }
    drawStats()
    drawBattle()
}

function startBattle(num) {
    level = num
    fightStatus = ''
    fightMessage = ''
    fightColor = ''
    lootImg = ''
    lootMessage = ''
    lootColor = ''
    document.getElementById("shop-1").classList.add("hidden")
    document.getElementById("shop-2").classList.add("hidden")
    document.getElementById("shop-3").classList.add("hidden")
    document.getElementById(`boss-${level}`).classList.remove("hidden")
}

function retreat(num) {
    level = num
    fightStatus = ''
    fightMessage = ''
    fightColor = ''
    lootImg = ''
    lootMessage = ''
    lootColor = ''
    document.getElementById("boss-0").classList.add("hidden")
    document.getElementById("boss-1").classList.add("hidden")
    document.getElementById("boss-2").classList.add("hidden")
    document.getElementById("boss-3").classList.add("hidden")
    document.getElementById(`shop-${level}`).classList.remove("hidden")
    if (num == 1) {
        document.getElementById("shop-message").innerText = message1
    } else if (num == 2) {
        document.getElementById("shop-message").innerText = message2
    } else if (num == 3) {
        document.getElementById("shop-message").innerText = message3
    }
    drawShop()
}

function newShop(num) {
    if (num < 3) {
        playerGold += boss.gold
        totalGold += boss.gold
        level = num + 1
        playerLevel = num + 1
        document.getElementById("boss-0").classList.add("hidden")
        document.getElementById("boss-1").classList.add("hidden")
        document.getElementById("boss-2").classList.add("hidden")
        document.getElementById("boss-3").classList.add("hidden")
        document.getElementById(`shop-${level}`).classList.remove("hidden")
        drawShop()
    } else {
        document.getElementById("boss-0").classList.add("hidden")
        document.getElementById("boss-1").classList.add("hidden")
        document.getElementById("boss-2").classList.add("hidden")
        document.getElementById("boss-3").classList.add("hidden")
        document.getElementById("win-game").classList.remove("hidden")
        youWin()
    }
    if (num == 0) {
        document.getElementById("shop-message").innerText = message1
    } else if (num == 1) {
        document.getElementById("shop-message").innerText = message2
    } else if (num == 2) {
        document.getElementById("shop-message").innerText = message3
    }
}

//#endregion

//#region DRAW FUNCTIONS SECTION

function drawStats() {
    playerHealth = armor[armorLevel].hp
    playerAtk = weapons[weaponLevel].atk
    playerCrit = food[foodLevel].crit
    playerImg = armor[armorLevel].sprite
    playerPassive = minions[minionLevel].passive
    playerTempHealth = playerHealth
    playerHealthBar = Math.floor((playerTempHealth / player.hp) * 100)
    player = {
        name: playerName,
        hp: playerHealth,
        atk: playerAtk,
        crit: playerCrit,
        miss: .01,
        passive: playerPassive,
        gold: playerGold,
        img: playerImg
    }

    bossName = bosses[bossLevel].name
    bossHealth = bosses[bossLevel].hp
    bossAtk = bosses[bossLevel].atk
    bossCrit = bosses[bossLevel].crit
    bossMiss = bosses[bossLevel].miss
    bossImg = bosses[bossLevel].img
    bossPassive = bosses[bossLevel].passive
    bossLoot = bosses[bossLevel].loot
    bossLootImg = bosses[bossLevel].lootImg
    bossLootName = bosses[bossLevel].lootName
    bossWinImg = bosses[bossLevel].winImg
    bossGold = bosses[bossLevel].gold
    bossTempHealth = bossHealth
    bossHealthBar = Math.floor((bossTempHealth / boss.hp) * 100)
    boss = {
        name: bossName,
        hp: bossHealth,
        atk: bossAtk,
        crit: bossCrit,
        miss: bossMiss,
        passive: bossPassive,
        img: bossImg,
        loot: bossLoot,
        gold: bossGold,
        lootImg: bossLootImg,
        lootName: bossLootName,
        winImg: bossWinImg
    }
    document.getElementById("stats").innerText = `Gold: ${playerGold} --- Level: ${playerLevel}`
}

function drawShop() {
    drawStats()
    let shops = [...document.getElementsByClassName('shop')]
    for (let i = 0; i < shops.length; i++) {
        let shopElement = shops[i]
        let shopTemplate = `
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${weapons[weaponLevel + 1].name} </u></p>
                    <img draggable="false" class="mx-1" src="${weapons[weaponLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Attack: ${weapons[weaponLevel + 1].atk}</small></p>
                    <img draggable="false" class="icon" onclick="buyWeapon(${weaponLevel + 1})" src="${weapons[weaponLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${weapons[weaponLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${armor[armorLevel + 1].name} </u></p>
                    <img draggable="false" class="mx-1" src="${armor[armorLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Health: ${armor[armorLevel + 1].hp}</small></p>
                    <img draggable="false" class="icon" onclick="buyArmor(${armorLevel + 1})" src="${armor[armorLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${armor[armorLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${food[foodLevel + 1].name} </u></p>
                    <img draggable="false" class="mx-1" src="${food[foodLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Crit: ${(food[foodLevel + 1].crit) * 100}%</small></p>
                    <img draggable="false" class="icon" onclick="buyFood(${foodLevel + 1})" src="${food[foodLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${food[foodLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${minions[minionLevel + 1].name} </u></p>
                    <img draggable="false" class="mx-1" src="${minions[minionLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Passive: ${minions[minionLevel + 1].passive}</small></p>
                    <img draggable="false" class="icon" onclick="buyMinion(${minionLevel + 1})" src="${minions[minionLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${minions[minionLevel + 1].gold}</p>
                </div>
    `
        shopElement.innerHTML = shopTemplate
    }
}

function drawBattle() {
    drawBattleStats()
    let battles = [...document.getElementsByClassName('battle')]
    for (let i = 0; i < battles.length; i++) {
        let battleElement = battles[i]
        let playerBar = 'bg-success'
        if (playerHealthBar <= 66) {
            playerBar = 'bg-warning'
        } else if (playerHealthBar <= 33) {
            playerBar = 'bg-danger'
        }
        let bossBar = 'bg-success'
        if (bossHealthBar <= 66) {
            bossBar = 'bg-warning'
        } else if (bossHealthBar <= 33) {
            bossBar = 'bg-danger'
        }
        let battleTemplate = `
            <div class="row justify-content-around  align-items-center m-3">
                <div class="col-5 bg-dark card shadow text-warning text-center">
                    <h3 class="py-2"><u>${player.name}</u></h3>
                    <div class="row">
                        <div class="col">
                            <h3 class="card ${playerBar} py-3" style="width: ${playerHealthBar}%"></h3>
                        </div>
                    </div>
                </div>
                <div class="col-2 bg-transparent text-light text-center">
                    <img draggable="false" class="icon" src="${fightStatus}" alt="">
                </div>
                <div class="col-5 bg-dark card shadow text-warning text-center">
                    <h3 class="py-2"><u>${boss.name}</u></h3>
                    <div class="row">
                        <div class="col">
                            <h3 class="card ${bossBar} py-3" style="width: ${bossHealthBar}%"></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-around m-3">
                <div class="col-5">
                    <div class="row justify-content-around">
                        <div class="col-3">
                            <img draggable="false" class="buff icon-border" src="${weapons[weaponLevel].img}" alt="">
                        </div>
                        <div class="col-3">
                            <img draggable="false" class="buff icon-border" src="${armor[armorLevel].img}" alt="">
                        </div>
                        <div class="col-3">
                            <img draggable="false" class="buff icon-border" src="${food[foodLevel].img}" alt="">
                        </div>
                        <div class="col-3">
                            <img draggable="false" class="buff icon-border" src="${minions[minionLevel].img}" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-2 bg-transparent">
                <h4 class="${fightColor} text-center py-1">${fightMessage}</h4>
                </div>
                <div class="col-5">
                    <div class="row justify-content-around">
                        <div class="col-8">
                            <button class="bg-warning text-dark pl-2 pt-2 mt-2">
                                <h1 onclick="fight()"><strong>ATTACK</strong></h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-around m-4">
                <div class="col-4 bg-transparent mx-2">
                    <img draggable="false" class="pb-3 battle-card" src="${player.img}" alt="">
                </div>
                <div class="col-3 bg-transparent text-center" ${onClick}>
                    <img draggable="false" class="icon my-4" src="${lootImg}" alt="">
                    <h4 class="py-2 px-0 text-center ${lootColor}">${lootMessage}</h4>
                </div>
                <div class="col-4 bg-transparent mx-2">
                    <img draggable="false" class="pb-3 battle-card" src="${boss.img}" alt="">
                </div>
            </div>
    `
        battleElement.innerHTML = battleTemplate
    }
}

function drawBattleStats() {
    playerHealthBar = Math.floor((playerTempHealth / player.hp) * 100)
    bossHealthBar = Math.floor((bossTempHealth / boss.hp) * 100)
    playerAtk = weapons[weaponLevel].atk
    playerCrit = food[foodLevel].crit
    playerPassive = minions[minionLevel].passive
    bossAtk = bosses[bossLevel].atk
    bossCrit = bosses[bossLevel].crit
    bossMiss = bosses[bossLevel].miss
    bossPassive = bosses[bossLevel].passive
    document.getElementById("stats").innerText = `Gold: ${playerGold} --- Level: ${playerLevel}`

}

function youWin() {
    drawStats()
    let winElement = document.getElementById("win")
    let winTemplate = `
                <div class="col-3 bg-transparent mx-2">
                    <h5><u> ${playerName} </u></h5>
                    <img draggable="false" class="mx-1 mb-4 buff " src="${player.img}" alt="">
                    <h5 class="py-1 card shadow bg-warning text-dark"><small>Total Gold: ${totalGold}</small></h5>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${weapons[weaponLevel].name} </u></p>
                    <img draggable="false" class="mx-1" src="${weapons[weaponLevel].img}" alt="">
                    <p class="pt-2"><small>Attack: ${weapons[weaponLevel].atk}</small></p>
                    <img draggable="false" class="icon" src="${weapons[weaponLevel].shop}" alt="">
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${armor[armorLevel].name} </u></p>
                    <img draggable="false" class="mx-1" src="${armor[armorLevel].img}" alt="">
                    <p class="pt-2"><small>Health: ${armor[armorLevel].hp}</small></p>
                    <img draggable="false" class="icon" src="${armor[armorLevel].shop}" alt="">
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${food[foodLevel].name} </u></p>
                    <img draggable="false" class="mx-1" src="${food[foodLevel].img}" alt="">
                    <p class="pt-2"><small>Crit: ${(food[foodLevel].crit) * 100}%</small></p>
                    <img draggable="false" class="icon" src="${food[foodLevel].shop}" alt="">
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${minions[minionLevel].name} </u></p>
                    <img draggable="false" class="mx-1" src="${minions[minionLevel].img}" alt="">
                    <p class="pt-2"><small>Passive: ${minions[minionLevel].passive}</small></p>
                    <img draggable="false" class="icon" src="${minions[minionLevel].shop}" alt="">
                </div>
    `
    winElement.innerHTML = winTemplate
}



//#endregion

//#region BUY FUNCTIONS SECTION

function buyWeapon(num) {
    if (playerGold >= weapons[num].gold) {
        playerGold -= weapons[num].gold
        weaponLevel = num
        playerAtk = weapons[weaponLevel].atk
    } else {
        document.getElementById("shop-message").innerText = goldMessage
    }
    drawShop()
}

function buyArmor(num) {
    if (playerGold >= armor[num].gold) {
        playerGold -= armor[num].gold
        armorLevel = num
        playerHealth = armor[armorLevel].health
        playerImg = armor[armorLevel].sprite
    } else {
        document.getElementById("shop-message").innerText = goldMessage
    }
    drawShop()
}

function buyFood(num) {
    if (playerGold >= food[num].gold) {
        playerGold -= food[num].gold
        foodLevel = num
        playerCrit = food[foodLevel].crit
    } else {
        document.getElementById("shop-message").innerText = goldMessage
    }
    drawShop()
}

function buyMinion(num) {
    if (playerGold >= minions[num].gold) {
        playerGold -= minions[num].gold
        minionLevel = num
        playerPassive = minions[minionLevel].passive
    } else {
        document.getElementById("shop-message").innerText = goldMessage
    }
    drawShop()
}

//#endregion

//#region BATTLE FUNCTIONS SECTION 

function toBattle(num) {
    startBattle(num)
    bossLevel = num
    drawStats()
    drawBattle()
    if (player.passive > 0 || boss.passive > 0) {
        fightInterval()
    }
}

function atkMod() {
    random = Math.random()
}

function critOrMiss() {
    atkMod()
    if (random <= `${player.crit}`) {
        playerAtk *= 2
        fightStatus = "./assets/info-cards/you-crit.png"
        fightMessage = "You Crit!"
        fightColor = 'bg-success'
    }
    atkMod()
    if (random <= `${boss.crit}`) {
        bossAtk *= 2
        fightStatus = "./assets/info-cards/crit.png"
        fightMessage = "Boss Crit!"
        fightColor = 'bg-danger'
    }
    atkMod()
    if (random <= `${player.miss}`) {
        playerAtk *= 0
        fightStatus = "./assets/info-cards/you-miss.png"
        fightMessage = "You Miss!"
        fightColor = 'bg-danger'
    }
    atkMod()
    if (random <= `${boss.miss}`) {
        bossAtk *= 0
        fightStatus = "./assets/info-cards/miss.png"
        fightMessage = "Boss Miss!"
        fightColor = 'bg-success'
    }
    atkMod()
    if (random <= .33) {
        lootColor = 'bg-warning'
        lootImg = boss.lootImg
        lootMessage = `Dropped ${bossLootName}!`
        playerGold += boss.loot
        totalGold += boss.loot
    }

}

function ifZero() {
    if (playerTempHealth <= 0 || playerHealthBar <= 0) {
        playerTempHealth = 0
        playerHealthBar = 0
    }
    if (bossTempHealth <= 0 || bossHealthBar <= 0) {
        bossTempHealth = 0
        bossHealthBar = 0
    }

    if (playerTempHealth <= 0 && bossTempHealth <= 0) {
        fightStatus = "./assets/info-cards/battle.png"
        lootImg = "./assets/win-lose/draw.png"
        lootColor = 'bg-light'
        lootMessage = "So close!"
        fightMessage = "DRAW!"
        fightColor = 'bg-light'
        onClick = `onclick = "retreat((${bossLevel}))"`
    } else if (playerTempHealth <= 0) {
        fightStatus = "./assets/info-cards/battle.png"
        lootImg = "./assets/win-lose/lose.png"
        lootColor = 'bg-danger'
        lootMessage = "Fly you fool!"
        fightMessage = 'YOU LOSE!'
        fightColor = 'bg-danger'
        onClick = `onclick = "retreat((${bossLevel}))"`
    } else if (bossTempHealth <= 0) {
        fightStatus = "./assets/info-cards/battle.png"
        lootImg = boss.winImg
        lootColor = 'bg-success'
        lootMessage = "Who's next?!"
        fightMessage = 'YOU WIN!'
        fightColor = 'bg-success'
        onClick = `onclick = "newShop((${bossLevel}))"`
    }
}

function fightInterval() {
    fightTimer = setInterval(() => { passiveFight() }, 1000)
}

function fight() {
    fightStatus = ''
    fightMessage = ''
    fightColor = ''
    lootMessage = ''
    lootImg = ''
    lootColor = ''
    if (playerTempHealth <= 0 || bossTempHealth <= 0) {
        clearInterval(fightTimer)
    } else {
        critOrMiss()
        playerTempHealth -= bossAtk
        bossTempHealth -= playerAtk
    }
    ifZero()
    drawBattle()
}

function passiveFight() {
    if (playerTempHealth <= 0 || bossTempHealth <= 0) {
        clearInterval(fightTimer)
    } else {
        bossTempHealth -= playerPassive
        playerTempHealth -= bossPassive
        atkMod()
        if (random <= .5) {
            critOrMiss()
            playerTempHealth -= bossAtk
        }
    }
    ifZero()
    drawBattle()
}

//#endregion