// FORMULARIO LOGIN
$('#login-form').on('submit', function (e) {
  e.preventDefault();
  var email = $('#email').val();
  var pass = $('#password').val();

  if (email === 'admin@alkewallet.com' && pass === '123456') {
    window.location.href = 'pages/menu.html';
  } else {
    alert('Usuario no registrado');
  }
});
