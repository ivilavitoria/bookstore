<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $users = [];

    if (file_exists('users.txt')) {
        $users = json_decode(file_get_contents('users.txt'), true);
    }

    if (array_key_exists($username, $users) && password_verify($password, $users[$username])) {
        $_SESSION['username'] = $username;
        echo "Login bem-sucedido!";
    } else {
        echo "Usuário e/ou senha inválido(s), tente novamente!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <script src="js/script.js"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devicewidth, initial-scale=1.0">
        <title>Livros LivrariaWebDev</title>
        <link rel="stylesheet" href="styleloginpage.css">
        <link href="Logo.ico" rel="icon"> <!--Link para o ícone da página-->
    </head>
    <body>        
        <header>
            <!--Menu-->
            <div class="container">
                <div class="logo">
                <img src="Logo.ico" alt="Logo da Livraria WebDev"> <h1>Livraria WebDev</h1>
                </div>
                <nav id="menu-h">
                    <ul>
                        <li><a href="../Index.html">Home</a></li>
                        <li><a href="Todos-os-livros.html">Todos os Livros</a></li>
                        <li><a href="Ficcao-cientifica.html">Ficção Científica</a></li>
                        <li><a href="Fantasia.html">Fantasia</a></li>
                        <li><a href="Romance.html">Romance</a></li>
                        <li><a href="Terror.html">Terror</a></li>
                        <li><a href="Nao-Ficcao.html">Não Ficção</a></li>
                        <li><a href="Manga.html">Mangá</a></li>
                        <li><a href="Sobre.html">Sobre</a></li>
                        <li><a href="Login.php">Login</a></li>
                    </ul>
                </nav>
            
        </header>
        <section id="Login">
            <h2>Login</h2>
            <form action="login.php" method="post">
                <label for="username">Usuário:</label>
                <input type="text" name="username" required><br>
                <label for="password">Senha:</label>
                <input type="password" name="password" required><br>
                <input type="submit" value="Entrar">
            </form>
        </section>
    </body>
    <footer>
        <img src="Nome.ico" alt="Nome estilizado da Livraria WebDev">
    </footer>
</html>
'