from flask import Blueprint, request, jsonify, Response
from flask_cors import CORS
from model import prediccion_piel # importamos la funcion para predecir datos de piel humana
from pymongo import MongoClient
from datetime import datetime
from bson import  json_util, ObjectId #para que convierta el bson de la base de datos a JSON
rutas = Blueprint('rutas', __name__)
CORS(rutas)

#conexion de la base de datos MongoDB

client = MongoClient('mongodb://localhost:27017')
db = client['iaDeteccion']
collection_prediccion = db['predicciones']

#metodo para consultar todos los datos de la base de datos
@rutas.route('/', methods=['GET'])
def getPredicciones():
      predicciones = []
      for doc in collection_prediccion.find():
          predicciones.append({
              '_id': str(ObjectId(doc['_id'])),
              'enfermedad': doc['enfermedad'],
              'probabilidad': doc['probabilidad'],
              'fecha': doc['fecha']
          })
      return jsonify(predicciones)


#metodo para recibir la imagen desde el cliente
@rutas.route('/file', methods=["POST"])
def file():
    archivo = request.files['imagen']
    extension = "png"
    print(archivo)
    #archivo.filename[-3:] busco en el string la extension de la imagen para luego validar
    if archivo.filename[-3:] == extension:
        return jsonify({"mensaje": "archivo no valido"})
    else:
        datos_predecidos = prediccion_piel(archivo) # le pasamos la imagen y nos devuelve un array con la prediccion
        predicciones = str(datos_predecidos[0])
        predicciones_cortadas = predicciones[1:78] # corto el array para quitarle las los corchetes [ ]
        data = predicciones_cortadas.split(sep=" ", maxsplit=7) # parto en 7 y le coloco commilas a cada prediccion
        guardando_prediccion(max(data), data)
        return jsonify({"prediccion": str(datos_predecidos[0])})



lista = ["acne", "cancer de piel", "esclerodermia",
         "herpes", "pie de atleta", "rostro sano", "pie sano"]

# obtengo la prediccion maxima para guardar esa en la base de datos
# obtengo la predicciones totales para saber en que posicion esta la 
# probabilidad alta

def guardando_prediccion(predicciones_maxima, predicciones_totales):
    for p in predicciones_totales:
        if p == predicciones_maxima: # si una de las probabilidades_totales es igual a la maxima
            #predicciones_totales.index(p) obtengo el indice para luego buscarlo en la lista
            data = {
                "_id": ObjectId(),
                "enfermedad": str(lista[predicciones_totales.index(p)]), # busco en la lista que enfermedad es con el indice previemente obtenido
                "probabilidad": p,
                "fecha": datetime.now()
            }
            collection_prediccion.insert_one(data)
            return "guardado correctamente"
