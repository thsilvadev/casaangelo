import React from 'react';

import styles from '../css/Body.module.css';




const Contato = () => (
    <div class={`container w-100 ${styles.customContainer}`}>
        <h1>Contato</h1>

            <section>
                <div id="formulario" class="container" style={{marginBottom: "30px"}}>
                        <form name="formulario">
                            
                            <input type="hidden" name="destino" value="contato@senac.rj.br" />
                            
                            <input type="hidden" name="enviado" value="https://senac.rj.br/contatos.html" />
                            
                            <label for="nome"><strong>Nome completo:</strong></label><br/>
                            <input type="text" id="nome" name="nome" placeholder="Nome Sobrenome"/>
                            
                            <label for="email"><strong>Endereço de Email:</strong></label>
                            <input type="text" id="email" name="email" placeholder="exemplo@mail.com"/>
                            
                            <label for="assunto"><strong>Assunto:</strong></label>
                            <select id="assunto" name="assunto">
                                <option value selected disabled="select">Selecionar</option>
                                <option value="freela">Informações sobre produtos</option>
                                <option value="clt">Pedidos</option>
                                <option value="outro">Outro</option>
                            </select>
                            
                            <label for="mensagem"><strong>Mensagem:</strong></label>
                            <textarea class="mensagem" name="mensagem" placeholder="Deixe sua mensagem" maxlength="300"></textarea>
                            
                            <input type="submit" value="Enviar"/>
                        </form>
                </div>
            </section>
    </div>
);

export default Contato;