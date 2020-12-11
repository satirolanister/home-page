const home = {
    template: `
    <div>
            
        <div class=" mt-2 jumbotron jumbotron-fluid">
        <h3 class="display-4 mx-4">Hola, mi nombre es Jonathan Garzón</h3>
        <div class="container mt-2">
            <div class="row mx-2">
                    <div class="col-4">
                        <img src="../media/img/foto-perfil.jpg" id="img" class="card-img">
                    </div>
                    <div class="col-8">
                        <p>{{mensaje}}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class=" mt-2 jumbotron jumbotron-fluid">
        <h3 class="display-4 mx-4">Mi formación académica</h3>
            <div class="container mt-2">
                <div class="mx-3 mt-4">
                    <p>
                        <strong>Tecnólogo en sistemas</strong>
                    <br>
                        Fundación Universitaria minuto de dios Actualmente    
                    </p>
                    <br>
                    <p>
                        <strong>Scrum Foundation Professional Certificate (SFPC)</strong>
                    <br>
                        CertiProf 2020
                    </p>
                    <br>
                    <p>
                        <strong>Técnico en sistemas</strong>
                    <br>
                        Servicio Nacional de Aprendizaje SENA 2011
                    </p>
                    <br>
                    <p>
                        <strong>Bachiller académico</strong>
                    <br>
                        I.E.D Republica de Colombía 2010    
                    </p>
                </div>
            </div>
        </div>           
    </div>
    `,
    data(){
        return{
            mensaje:`Estudiante de Tecnología en informática de la universidad minuto de dios, adicional cuento con una titulación como técnico en sistemas 
            del servicio nacional de aprendizaje SENA con experiencia de más 5 años en el área de sistemas desempeñando diferentes roles en el transcurso de 
            mi experiencia laboral, poseo conocimientos en diferentes tecnologías tales como SQL con gestores como Oracle, MySQL y SQL Server, pero también 
            HTML5, CSS3 y BootStrap, pero a su vez también lenguajes de programación tales como JavaScript con frameworks como vue.js, express.js a su vez 
            conocimientos en entornos de ejecución de JavaScript orientado a eventos (node.js), tecnologías de control de versiones (GIT), también conocimiento en sistemas operativos tales como Linux, Windows.`
        }
    }
}

export default home;