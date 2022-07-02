module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['lIHG4sUPJQt2gcc0tDogeQ==',
      'FAOBW0NAXORQ6zWjNK3JKw==',
      'Xe7ICc3iVwB05MwPrMmu5g==',
      'DqqPbWg0730Pp+aXZDieMA==']),
  },
});
