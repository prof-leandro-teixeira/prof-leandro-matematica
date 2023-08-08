  // src/pages/Contato.js
  import React from 'react';
  import emailjs from 'emailjs-com';

  function Contato() {
    const handleSubmit = (event) => {
      event.preventDefault();

      const serviceID = 'default_service';
      const templateID = 'template_e1npdcf';
      const userID = 'TMONep5GDB-l9bZyI';

      emailjs.sendForm(serviceID, templateID, event.target, userID)
        .then(
          (result) => {
            console.log('Email enviado com sucesso:', result.text);
            alert('Email enviado com sucesso!');
          },
          (error) => {
            console.error('Erro ao enviar o email:', error.text);
            alert('Erro ao enviar o email. Por favor, tente novamente.');
          }
        );

      event.target.reset();
    };

    return (
      <div className="contato">
        <h1>CONTATO</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="from_name">Nome:</label>
            <input type="text" name="from_name" id="from_name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="telefone">Telefone:</label>
            <input type="text" name="telefone" id="telefone" required />
          </div>
          <div className="field">
            <label htmlFor="idade">Data de nascimento:</label>
            <input type="text" name="idade" id="idade" required placeholder="dd/mm/aaaa" pattern="\d{2}/\d{2}/\d{4}" />
          </div>
          <div className="field">
            <label htmlFor="limitacao">Informe se possui alguma limitação:</label>
            <input type="text" name="limitacao" id="limitacao" />
          </div>
          <input type="submit" id="button" value="Enviar" />
        </form>
      </div>
    );
  }

  export default Contato;
