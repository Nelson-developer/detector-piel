from flask import  Flask
from routes import rutas # importando rutas de el archivo routes.py

app = Flask(__name__)



if __name__ == "__main__":
    #resgistrando las rutas con blueprint
    app.register_blueprint(rutas)
    app.run(debug=True, port=5000, threaded=True, host="0.0.0.0")