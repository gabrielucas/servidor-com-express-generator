const UserController = {
    index: (req, res, next) => {
        res.render('users', { titulo: 'Usuários',
    subtitulo: 'Página de Usuários' });
      }
}

module.exports = UserController