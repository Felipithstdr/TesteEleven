import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLoginCompany(e){
        e.preventDefault();

        try {
            
            const response= await api.post('logon', {email, password});
            const company = {email,nameCompany:response.data.nameCompany, id:response.data.id }
            localStorage.setItem('company', JSON.stringify(company))
            history.push('/logged');
        }catch(err){
            alert("falha no login");
        }
    }

    return(
        <div>
            <section id="barDefault">
                <div class="d-flex justify-content-center align-items-center container">
                    <p className="title">Login do Cliente</p>
                </div>
            </section>
            <form onSubmit={handleLoginCompany}>
                <fieldset class="form-group container" id="boxLogin">
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-row col-md-6 mb-4 container" id="fieldSpace">
                            <label for="inputEmail" id="fieldRegister" >E-mail:</label>
                            <input type="email" class="form-control" id="inputEmail" 
                                placeholder="Insira seu e-mail" required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-group col-md-6">
                            <label for="inputPassword" id="fieldRegister">Senha:</label>
                            <Link to="/ForgotPassword"><label for="inputForgotP" id="fieldForgot" className="float-right" >Esqueci minha senha</label></Link>
                            <input type="password" class="form-control" id="inputPassword" minLength="6" maxLength="8" 
                                placeholder="Insira sua senha" required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <button type="submit" id="button" class="btn btn-primary mb-3 col-md-2">Entrar</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;