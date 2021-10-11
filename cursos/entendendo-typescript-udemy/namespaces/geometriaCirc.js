"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        Area.PI = 3.14;
        function circunferencia(raio) {
            return Area.PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map