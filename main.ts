import {Aprendiz, NivelEducativo} from './aprendiz.js'
import {Curso} from './curso.js';

let cursos=[new Curso("Practicas escenciales para el agilismo",20,90,true,2019)
,new Curso("Ingenieria de Software para la web",25,80,true,2019)
,new Curso("Principios de diseño y arquitectura",20,90,true,2029)]


export const ap = new Aprendiz("Juan","Perez","avatar.png",30, NivelEducativo.POSTGRADO,cursos)
console.log(ap.cursos)

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosAprendiz(ap)
mostrarEstadisticas(ap)

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