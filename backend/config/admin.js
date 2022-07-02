module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a8a21ce43af0fbf3471ff938163e74a'),
  },
});
