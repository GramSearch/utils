import config from '@unbird/eslint-config'

export default await config({
  ignores: [
    'cspell.config.yaml',
    '**/drizzle/**/*.json',
  ],
})
