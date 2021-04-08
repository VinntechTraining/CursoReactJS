/*'use strict';*/

const servicios = {
    api: {},
    mailer: 'soy mailer',
    apollo: {},

}

const enviarCorreo = (srs) => {

    const { mailer } = srs
    console.log(mailer);
    //redactar texto de correo


}

enviarCorreo(servicios)