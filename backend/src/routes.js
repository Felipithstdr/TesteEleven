const express = require ('express');

const LoginCompanyController = require('./controllers/LoginCompanyController');
const RegisterUserController = require('./controllers/RegisterUserController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/logon', SessionController.createCompany);
routes.post('/logonUser', SessionController.createUser);

routes.get('/listCompany', LoginCompanyController.index);
routes.get('/listCompany/:id', LoginCompanyController.companyDetails);
routes.post('/registerCompany/', LoginCompanyController.create);

routes.get('/listUser', RegisterUserController.index);
routes.get('/listUser/:id', RegisterUserController.userDetails);
routes.post('/registerUser/', RegisterUserController.create);

module.exports = routes;