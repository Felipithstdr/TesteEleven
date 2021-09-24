const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
        const user = await connection('registerUser').select('*');
        return response.json(user);
    },

    async userDetails (request, response) {
        const {id} = request.params;
        const user = await connection('registerUser').where('id', id);
        return response.json(user[0]);
    },

    async create(request, response){
        const {id, email, password, name, lastName, loginCompany_id} = request.body;

        await connection('registerUser').insert({
            id,
            email,
            password,
            name,
            lastName,
            loginCompany_id,
        });
        
        const getId = await connection('registerUser').join('loginCompany', 'registerUser.loginCompany_id', '=', 'loginCompany.id')
        .select('registerUser.id', 'loginCompany.cnpj');
    
        return response.json(getId);
    },
}