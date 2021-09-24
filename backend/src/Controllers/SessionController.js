const connection = require('../database/connection');

module.exports = {
    async createCompany(request, response){
        const {email, password} = request.body;

        const loginCompany = await connection('loginCompany')
            .where('email', email )
            .andWhere('password', password)
            .select('nameCompany', 'id')
            .first();

        if(!loginCompany){
            return response.status(400).json({error: 'No user foung with this E-mail'});
        }

        return response.json(loginCompany);
    },

    async createUser(request, response){
        const {email, password} = request.body;

        const registerUser = await connection('RegisterUser')
            .where('email', email )
            .andWhere('password', password)
            .select('name', 'id')
            .first();

        if(!registerUser){
            return response.status(400).json({error: 'No user foung with this E-mail'});
        }

        return response.json(registerUser);
    },
}