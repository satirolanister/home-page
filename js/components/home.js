const home = {
    template: `
<div>
    <div class=" mt-4 jumbotron">
        <h3 class="display-4 mx-4">Hola, mi nombre es Jonathan Garzón</h3>
        <div class="container mt-4">
            <div class="row mx-2">
                <div class="col-4">
                    <img src="../media/img/foto-perfil.jpg" id="img" class="card-img">
                </div>
                <div class="col-8">
                    <p>{{mensaje}}</p>
                </div>
            </div>
            <hr>

        </div>
    </div>
</div>   
    `,
    data(){
        return{
            mensaje:`Estudiante de Tecnología en informática de la universidad minuto de dios, adicional cuento con una titulación como técnico en sistemas 
            del servicio nacional de aprendizaje SENA con experiencia de más 5 años en el área de sistemas desempeñando diferentes roles en el transcurso de 
            mi experiencia laboral, poseo conocimientos en diferentes tecnologías tales como SQL con gestores como Oracle, MySQL y SQL Server, pero también 
            HTML5, CSS3 y BootStrap, a su vez también lenguajes de programación tales como JavaScript con frameworks como vue.js, express.js, además tengo  
            conocimientos en entornos de ejecución de JavaScript orientado a eventos (node.js), tecnologías de control de versiones (GIT), por otro lado también cuento
            con conocimiento en sistemas operativos tales como Linux, Windows.`,
            
            estudios:[
                {
                    titulo:'Bachiller académico',
                    instituto: 'I.E.D Republica de Colombía',
                    year: 2010
                },
                {
                    titulo:'Técnico en sistemas',
                    instituto: 'Servicio Nacional de Aprendizaje SENA',
                    year: 2011
                },
                {
                    titulo:'Scrum Foundation Professional Certificate (SFPC)',
                    instituto: 'CertiProf',
                    year: 2020
                },
                {
                    titulo:'Tecnólogo en sistemas',
                    instituto: 'Fundación Universitaria minuto de dios',
                    year: 'Actualmente'
                },

            ],
           experiencia:[
               {
                   cargo:'',
                   empresa: '',
                   years: 0
               }
           ] 

        }
    }
}

export default home;