const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const loginCompany = await connection('loginCompany').select('*');
        return response.json(loginCompany);
    },

    async companyDetails (request, response) {
        const {id} = request.params;
        const company = await connection('loginCompany').where('id', id);
        return response.json(company[0]);
    },

    async create(request, response){
        const {id, email, password, cnpj, nameCompany, cellphone} = request.body;

        const loginCompany  = await connection('loginCompany').insert({
            id,
            email,
            password,
            cnpj,
            nameCompany,
            cellphone,
        });
        
        return response.json({id: loginCompany [0]});
    },
}