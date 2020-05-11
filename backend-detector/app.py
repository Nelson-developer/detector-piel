from flask import  Flask
from routes import rutas # importando rutas de el archivo routes.py

app = Flask(__name__)
#resgistrando las rutas con blueprint
app.register_blueprint(rutas)





if __name__ == "__main__":
    app.run(debug=True, port=4000)