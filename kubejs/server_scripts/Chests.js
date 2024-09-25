ServerEvents.recipes(allthemods => {
    [
    'ancient',      'azalea',       'blossom',          'oak',
    'spruce',       'birch',        'jungle',           'acacia',
    'dark_oak',     'crimson',      'warped',           'mangrove',
    'bamboo',       'cherry',       'nether_brick',     'prismarine',
    'purpur'
    ].forEach(type => {
        allthemods.shapeless(`quark:${type}_chest`, 'minecraft:chest')
        allthemods.shapeless('minecraft:chest', `quark:${type}_chest`)
        allthemods.shapeless(`quark:${type}_trapped_chest`, [`quark:${type}_chest`, 'minecraft:tripwire_hook'])
    })
})
