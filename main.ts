import {Aprendiz, NivelEducativo} from './aprendiz.js'
import {Curso} from './curso.js';

let cursos=[new Curso("Practicas escenciales para el agilismo",20,90,true,2019)
,new Curso("Ingenieria de Software para la web",25,80,true,2019)
,new Curso("Principios de diseño y arquitectura",20,50,true,2029)]


export const ap = new Aprendiz("Juan","Perez","avatar.png",30, NivelEducativo.POSTGRADO,cursos)
console.log(ap.cursos)

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!

btnFiltro.onclick=() =>{
    let text:string= textoBusqueda.value;
    text=(text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltraods: Curso[]= ap.cursos.filter((c)=>c.nombre.match(text))
    mostrarCursos(cursosFiltraods);
};
mostrarDatosAprendiz(ap)
mostrarEstadisticas(ap)
mostrarCursos(ap.cursos)


function mostrarDatosAprendiz(aprendiz:Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML=`<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz)
}

function mostrarEstadisticas(aprendiz:Aprendiz):void{
    let numeroCertificados:number = aprendiz.darCursosCertificados()
    let trElement:HTMLElement = document.createElement("tr")
    trElement.innerHTML=  `<tr><td>Cursos Certificados:</td><td>${numeroCertificados}</td></tr>`
    estadisticasTable.appendChild(trElement)
}

function mostrarCursos(cursos:Curso[]):void{
    
    let cursosTbody:HTMLElement = document.createElement("tbody")
    let index:number=0;
    let estado: string[] =cursos.map(c=>c.calificacion>60?'green':'red')
    for (let curso of cursos)
    {
        
        let trElement : HTMLElement = document.createElement("tr")
        
        trElement.innerHTML=`<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`
        cursosTbody.appendChild(trElement)
        index++
    }
    cursosTable.appendChild(cursosTbody)
}