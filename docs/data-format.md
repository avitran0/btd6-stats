# JSON Data Format

stats and upgrade data is stored as json in the static folder, with the corresponding id of the tower.
data that is needed faster is stored in src/lib/json, so it does not need to be fetched separately in a load script, but can instead be imported directly.

every interface is also defined in src/lib/jsonInterfaces.ts, but here is a quick overview anyway.

## Stats

most stats are directly taken from [advanced popology](https://www.reddit.com/r/btd6/comments/atomg3/advanced_popology_vol_1_primary_towers/)

```ts
{
    "000": { // path is always written as `$top$middle$bottom`, so 520 is 5 upgrades top, 2 upgrades middle, none bottom
    // paragons are 600, as represented internally in-game
        "attacks": [
            {
                "name": string,
                "damage": number, // different damages to different types
                "damageMOAB": number,
                "damageCeramic": number,
                "damageBoss": number,
                "pierce": number, // how many bloons it can hit before the projectile disappears
                "projectiles": number, // number of projectiles per use
                "range": number, // idk what unit this is
                "reloadSpeed": number, // time between shots, -1 for once (shows as infinity)
                "damageType": string, // defined in lib/json/damageTypes.json
                "camo": boolean, // whether the attack can see camo
                "crosspath": [
                    {
                        "path": string, // as specified above
                        "damage": number,
                        "damageMOAB": number,
                        "damageCeramic": number,
                        "damageBoss": number,
                        "pierce": number,
                        "projectiles": number,
                        "range": number,
                        "reloadSpeed": number,
                        "damageType": string,
                        "camo": boolean,
                    },
                ],
            },
        ],
        "ability": {
            "name": string,
            "damage": number,
            "damageMOAB": number,
            "damageCeramic": number,
            "damageBoss": number,
            "pierce": number,
            "projectiles": number,
            "range": number,
            "reloadSpeed": number,
            "damageType": string,
            "camo": boolean,
            "duration": number, // in seconds
            "cooldown": number,
        }
    },
    ...
}
```

## Upgrades

```ts
{
    "000": { // as described for stats
    // 000 has no name or description, this is just tower size and build cost
        "size": number, // idk what unit again, but probably the same as range
        "costs": {
            "easy": number,
            "medium": number,
            "hard": number,
            "impoppable": number
        }
    },
    "100": {
        "name": string, // upgrade name
        "description": string, // description, as in-game
        "costs": {
            "easy": number,
            "medium": number,
            "hard": number,
            "impoppable": number
        }
    },
    ...
}
```

## Images

are stored per tower id and path, with "u" prefixed for upgrades. the original folder just contains uncompressed images.
