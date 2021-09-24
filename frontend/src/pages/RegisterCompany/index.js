import React, {useState, useEffect} from 'react';
import {Redirect,useHistory} from 'react-router-dom';
//import './style.css';
import api from '../../services/api';

function RegisterCompany(){
    const [email, setEmail] = useState('');
    const [nameCompany, setNameCompany] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');

    const [redirect,setRedirect] = useState(false);
    const [loginId,setLoginId] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        const data ={
            email,
            password,
            cnpj,
            nameCompany,
            cellphone
        };
        try{
            
            const response = await api.post('registerCompany', data);
            //console.log(response.data.id);
            //setLoginId(response.data.id);
            //localStorage.setItem('login_id',response.data.id)
            //setRedirect(true);
            history.push('/login');
        }catch(err){
            alert('ERrooooor');
        }   
    }

    //if(redirect) return <Redirect to={`/RegisterAddress/${loginId}`}/>

    return(
        <div>
            <section id="barDefault">
                <div class="d-flex justify-content-center align-items-center container" id="bar">
                    <p className="title">Cadastro do cliente</p>
                </div>
            </section>
            <form onSubmit={handleRegister}>
                <fieldset class="form-group container" id="boxRegister">
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-row col-md-7 mb-4 container" id="fieldSpace">
                            <label for="inputEmail" id="fieldRegister" >E-mail:</label>
                            <input type="email" class="form-control" id="inputEmail" 
                                placeholder="Insira seu e-mail" required
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-group col-md-3">
                            <label for="inputName" id="fieldRegister" >Nome da empresa:</label>
                            <input type="text" class="form-control" id="inputName" 
                                placeholder="Insira seu nome" required
                                value={nameCompany}
                                onChange={e=> setNameCompany(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-group col-md-3">
                            <label for="inputCPF" id="fieldRegister">CNPJ:</label>
                            <input type="text" class="form-control" id="inputCPF" 
                                minLength="11" maxLength="11" required
                                placeholder="00000000000" 
                                value={cnpj}
                                onChange={e=> setCnpj(e.target.value)}
                            />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPhone" id="fieldRegister">Celular:</label>
                            <input class="form-control" id="inputPhone"  
                            placeholder="(DDD) 9-9999.9999" required
                            value={cellphone}
                            onChange={e=> setCellphone(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <div class="form-group col-md-3">
                            <label for="inputPassword" id="fieldRegister">Senha:</label>
                            <input type="password" class="form-control" id="inputPassword" minLength="6" maxLength="8" 
                                placeholder="(Máx 6 a 8 dígitos)" name="senha" required
                                value={password}
                                onChange={e=> setPassword(e.target.value)}
                            />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputPassword" id="fieldRegister">Confirmar senha:</label>
                            <input type="password" class="form-control" name="senha2" id="inputPassword2"  minLength="6" maxLength="8" placeholder="Confirme sua senha" required/>
                        </div>
                    </div>
                    <div class="form-row d-flex justify-content-center align-items-center container">
                        <button type="submit" id="button" class="btn btn-primary mb-3 col-md-2" >Cadastrar</button>
                    </div>
                </fieldset>
            </form>

        </div>
    );
};

export default RegisterCompany;