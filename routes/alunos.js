var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function (request, response, next) {

	var query = "SELECT * FROM bksmlosyfgid6iwcckvm.alunos";

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		} else {
			response.render('alunos', { title: 'Alunos', action: 'list', alunos: data, message: request.flash('success') });
		}

	});

});

router.get("/add", function (request, response, next) {

	response.render("alunos", { title: 'Insert Data into MySQL', action: 'add' });

});

router.post("/adicionar_aluno", function (request, response, next) {

	var nome = request.body.nome;

	var query = `
	INSERT INTO alunos 
	(nome) 
	VALUES ("${nome}")`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		} else {
			request.flash('success', 'Aluno Adicionado');
			response.redirect("/alunos");
		}

	});

});

router.get('/edit/:id', function (request, response, next) {

	var id = request.params.id;

	var query = `SELECT * FROM alunos WHERE id = "${id}"`;

	database.query(query, function (error, data) {

		response.render('alunos', { title: 'Edit MySQL Table Data', action: 'edit', sampleData: data[0] });

	});

});

router.post('/edit/:id', function (request, response, next) {

	var id = request.params.id;

	var nome = request.body.nome;

	var query = `
		UPDATE alunos 
		SET nome = "${nome}", 
		WHERE id = "${id}"`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		} else {
			request.flash('success', 'Aluno Atualizado');
			response.redirect('/alunos');
		}

	});

});

router.get('/delete/:id', function (request, response, next) {

	var id = request.params.id;

	var query = `DELETE FROM alunos WHERE id = "${id}"`;

	database.query(query, function (error, data) {

		if (error) {
			throw error;
		} else {
			request.flash('success', 'Aluno Excluído');
			response.redirect("/alunos");
		}

	});

});

module.exports = router;