import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas escenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingenieria de Software para la web", 25, 80, true, 2019),
    new Curso("Principios de diseño y arquitectura", 20, 90, true, 2029)];
export var ap = new Aprendiz("Juan", "Perez", "avatar.png", 30, NivelEducativo.POSTGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursos(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos:</td><td>" + aprendiz.apellidos + "</td></tr>\n    <tr><td>Nivel educativo:</td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad:</td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<tr><td>Cursos Certificados:</td><td>" + numeroCertificados + "</td></tr>";
    estadisticasTable.appendChild(trElement);
}
function mostrarCursos(aprendiz) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, _a = aprendiz.cursos; _i < _a.length; _i++) {
        var curso = _a[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + curso.nombre + "</td>\n        <td>" + curso.horas + "</td>\n        <td>" + curso.calificacion + "</td>\n        <td>" + curso.certificado + "</td>\n        <td>" + curso.anio + "</td>";
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
