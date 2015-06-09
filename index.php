<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ReactJS + RefluxJS • TodoMVC</title>
    <!-- CSS overrides - remove if you don't need it -->
    <link rel="stylesheet" href="css/app.css">

<style>
	table{border:2px solid red;  width:700px; text-align:center; margin:auto;}
	td{border:2px solid blue;}
	footer{
		margin:auto;
		background-color:black; text-align: center;
		width:700px;
		color:white;
		padding:20px;
		box-sizing:border-box;
	}
</style>

</head>
<body>
    <section id="todoapp">
        <!-- Bootstrap code will add components here, see js/components.jsx.js -->
    </section>
    <footer id="info">

    <p>footer</p>
    
    </footer>
    <!-- <script src="bower_components/todomvc-common/base.js"></script> -->
    <script src="app/bower_components/react/react-with-addons.js"></script>
    <script src="app/bower_components/react/JSXTransformer.js"></script>
    <script src="app/bower_components/lodash/lodash.js"></script>
    <script type="text/jsx" src="js/components.jsx.js"></script>
</body>
</html>
