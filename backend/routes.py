from flask import Blueprint, request, jsonify
from flask_cors import CORS
from model import prediccion_piel # importamos la funcion para predecir datos de piel humana
rutas = Blueprint('rutas', __name__)
CORS(rutas)

#metodo para recibir la imagen desde el cliente
@rutas.route('/checkout/prediction', methods=["POST"])
def file():
    archivo = request.files['imagen']
    extensions = ['txt', 'pdf', "png", "docx", "gif"]

    for extension in extensions:
        if archivo.filename[-3:] == extension:
            return jsonify({"mensaje": "archivo no valido"})
        else:
            datos_predecidos = prediccion_piel(archivo) # le pasamos la imagen y nos devuelve un array con la prediccion
            return jsonify({"prediccion": str(datos_predecidos[0])[1:78].split(" ") })
