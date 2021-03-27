//#region VARIABLES / OBJECTS SECTION 

let weapons = [
    {
        name: 'Bare Hands',
        atk: 5,
        img: "./Assets/Weapons/sword-0.png",
        gold: 0,
        shop: "./Assets/Info-Cards/template.png"
    },
    {
        name: 'Rusty Sword',
        atk: 10,
        img: "./Assets/Weapons/sword-1.png",
        gold: 50,
        shop: "./Assets/Money/money-1.png"
    },
    {
        name: 'Shiny Cutlass',
        atk: 15,
        img: "./Assets/Weapons/sword-2.png",
        gold: 250,
        shop: "./Assets/Money/money-2.png"
    },
    {
        name: 'Jeweled Sword',
        atk: 20,
        img: "./Assets/Weapons/sword-3.png",
        gold: 500,
        shop: "./Assets/Money/money-3.png"
    },
    {
        name: "SOLD OUT",
        atk: '',
        gold: '',
        img: "./Assets/Info-Cards/max.png",
        shop: "./Assets/Info-Cards/sold-out.png"
    }
]

let armor = [
    {
        name: 'Nude',
        hp: 100,
        img: "./Assets/Armor/armor-0.png",
        sprite: "./Assets/Characters/player-0.png",
        gold: 0,
        shop: "./Assets/Info-Cards/template.png"
    },
    {
        name: 'Leather Armor',
        hp: 150,
        img: "./Assets/Armor/armor-1.png",
        sprite: "./Assets/Characters/player-1.png",
        gold: 50,
        shop: "./Assets/Money/money-1.png"
    },
    {
        name: 'Steel Armor',
        hp: 200,
        img: "./Assets/Armor/armor-2.png",
        sprite: "./Assets/Characters/player-2.png",
        gold: 250,
        shop: "./Assets/Money/money-2.png"
    },
    {
        name: 'Adamant Armor',
        hp: 250,
        img: "./Assets/Armor/armor-3.png",
        sprite: "./Assets/Characters/player-3.png",
        gold: 500,
        shop: "./Assets/Money/money-3.png"
    },
    {
        name: "SOLD OUT",
        atk: '',
        gold: '',
        img: "./Assets/Info-Cards/max.png",
        shop: "./Assets/Info-Cards/sold-out.png"
    }
]

let food = [
    {
        name: 'Fish Bones',
        crit: 0,
        img: "./Assets/Food/food-0.png",
        gold: 0,
        shop: "./Assets/Info-Cards/template.png"
    },
    {
        name: 'Raw Carrot',
        crit: .05,
        img: "./Assets/Food/food-1.png",
        gold: 50,
        shop: "./Assets/Money/money-1.png"
    },
    {
        name: 'Fresh Bread',
        crit: .10,
        img: "./Assets/Food/food-2.png",
        gold: 250,
        shop: "./Assets/Money/money-2.png"
    },
    {
        name: 'Roast Mutton',
        crit: .20,
        img: "./Assets/Food/food-3.png",
        gold: 500,
        shop: "./Assets/Money/money-3.png"
    },
    {
        name: "SOLD OUT",
        atk: '',
        gold: '',
        img: "./Assets/Info-Cards/max.png",
        shop: "./Assets/Info-Cards/sold-out.png"
    }
]

let minions = [
    {
        name: 'Lone Wolf',
        atk: 0,
        img: "./Assets/Info-Cards/template.png",
        gold: 0,
        shop: "./Assets/Info-Cards/template.png"
    },
    {
        name: 'Tiny Minion',
        atk: 5,
        img: "./Assets/Minions/minion-1-card.png",
        gold: 50,
        shop: "./Assets/Money/money-1.png"
    },
    {
        name: 'Hardy Minion',
        atk: 10,
        img: "./Assets/Minions/minion-2-card.png",
        gold: 250,
        shop: "./Assets/Money/money-2.png"
    },
    {
        name: 'Mighty Minion',
        atk: 15,
        img: "./Assets/Minions/minion-3-card.png",
        gold: 500,
        shop: "./Assets/Money/money-3.png"
    },
    {
        name: "SOLD OUT",
        atk: '',
        gold: '',
        img: "./Assets/Info-Cards/max.png",
        shop: "./Assets/Info-Cards/sold-out.png"
    }
]

// Game Variables
let playerLevel = 0
let playerGold = 0

// Player Variables
let weaponLevel = 0
let armorLevel = 0
let foodLevel = 0
let minionLevel = 0

// Combat Variables
let playerName = ''
let playerHealth = armor[armorLevel].hp
let playerAtk = weapons[weaponLevel].atk
let playerCrit = food[foodLevel].crit
let playerImage = armor[armorLevel].sprite
let playerMinion = minions[minionLevel].atk

// Base Player Object
let player = {
    name: `${playerName}`,
    hp: `${playerHealth}`,
    atk: `${playerAtk}`,
    crit: `${playerCrit}`,
    img: `${playerImage}`,
    passive: `${playerMinion}`
}

//#endregion SECTION


//#region Game Start SECTION

function newGame() {
    document.getElementById("welcome-header").classList.add("hidden")
    document.getElementById("welcome-footer").classList.add("hidden")
    document.getElementById("body").classList.remove("bg-main")
    document.getElementById("body").classList.remove("section-border")
    document.getElementById("body").classList.add("bg-dark")
    document.getElementById("new-game").classList.remove("hidden")
}

function levelOne() {
    playerLevel = 1;
    document.getElementById("new-game").classList.remove("bg-main")
    document.getElementById("new-game").classList.remove("bg-main-2")
    document.getElementById("new-game").classList.remove("bg-main-3")
    document.getElementById("new-game").classList.add("bg-main-1")
    // @ts-ignore
    document.getElementById("start").disabled = false;
}

function levelTwo() {
    playerLevel = 2
    document.getElementById("new-game").classList.remove("bg-main")
    document.getElementById("new-game").classList.remove("bg-main-1")
    document.getElementById("new-game").classList.remove("bg-main-3")
    document.getElementById("new-game").classList.add("bg-main-2")
    // @ts-ignore
    document.getElementById("start").disabled = false;
}

function levelThree() {
    playerLevel = 3
    document.getElementById("new-game").classList.remove("bg-main")
    document.getElementById("new-game").classList.remove("bg-main-1")
    document.getElementById("new-game").classList.remove("bg-main-2")
    document.getElementById("new-game").classList.add("bg-main-3")
    // @ts-ignore
    document.getElementById("start").disabled = false;
}

function startGame(num) {
    document.getElementById("new-game").classList.add("hidden")
    document.getElementById("stats").classList.remove("hidden")
    if (num == 1) {
        playerGold = 50
        document.getElementById("shop-1").classList.remove("hidden")
        document.getElementById("welcome-message").innerText = "Your first item is on the house!"
    } else if (num == 2) {
        weaponLevel = 1
        armorLevel = 1
        foodLevel = 1
        minionLevel = 1
        document.getElementById("shop-2").classList.remove("hidden")
    } else if (num == 3) {
        weaponLevel = 2
        armorLevel = 2
        foodLevel = 2
        minionLevel = 2
        document.getElementById("shop-3").classList.remove("hidden")
    }
    drawStats()
    drawShop()
}

//#endregion SECTION

//#region DRAW FUNCTIONS SECTION
function drawStats() {
    document.getElementById("stats").innerText = `Gold: ${playerGold} --- Level: ${playerLevel}`
}

function drawShop() {
    let shops = [...document.getElementsByClassName('shop')]
    for (let i = 0; i < shops.length; i++) {
        let shopElement = shops[i]
        let shopTemplate = `
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${weapons[weaponLevel + 1].name} </u></p>
                    <img class="mx-1" src="${weapons[weaponLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Attack: ${weapons[weaponLevel + 1].atk}</small></p>
                    <img class="icon" onclick="buyWeapon(${weaponLevel + 1})" src="${weapons[weaponLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${weapons[weaponLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${armor[armorLevel + 1].name} </u></p>
                    <img class="mx-1" src="${armor[armorLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Health: ${armor[armorLevel + 1].hp}</small></p>
                    <img class="icon" onclick="buyArmor(${armorLevel + 1})" src="${armor[armorLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${armor[armorLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${food[foodLevel + 1].name} </u></p>
                    <img class="mx-1" src="${food[foodLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Crit: ${(food[foodLevel + 1].crit) * 100}%</small></p>
                    <img class="icon" onclick="buyFood(${foodLevel + 1})" src="${food[foodLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${food[foodLevel + 1].gold}</p>
                </div>
                <div class="col-2 card shadow bg-dark pt-1 mt-0 mx-2">
                    <p><u> ${minions[minionLevel + 1].name} </u></p>
                    <img class="mx-1" src="${minions[minionLevel + 1].img}" alt="">
                    <p class="pt-2"><small>Passive: ${minions[minionLevel + 1].atk}</small></p>
                    <img class="icon" onclick="buyMinion(${minionLevel + 1})" src="${minions[minionLevel + 1].shop}" alt="">
                    <p class="pt-1 pb-0">${minions[minionLevel + 1].gold}</p>
                </div>
    `
        shopElement.innerHTML = shopTemplate
    }

}



//#endregion SECTION 