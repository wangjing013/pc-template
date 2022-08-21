const testKey = '106412F2807CF45F'
const prodKey = 'D9A0CF224BF92F5B'
export const siteid = process.env.EXT_ENV === 'test' ? testKey : prodKey
