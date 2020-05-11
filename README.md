# detector-piel
Aplicación de Escritorio que detecta enfermedades de la piel

La inteligencia artificial esta entrenada con [Tensorflow](https://www.tensorflow.org/)

#### ¿Como funciona?

Basicamente los usuarios introducen imagenes las cuales son procesadas por medio de Tensorflow y Pillow.
Luego obtenemos la 7 probabilidades que son las enfermedades que detecta las cuales son:

* acné
* cancer de piel
* esclerodermia
* herpes
* pie de atleta
* rostro sano
* pie sano

#### ¿Quieres probarlo? 

Para esto debes seguir los siguientes pasos 

**backend-detector/**
```
Crea un entorno virtual
pip install virtualenv
virtualenv venv
source ./venv/bin/activate // esto activa el entorno virtual
pip install -r requirements.txt
```
**frontend/**
```
Instala las dependencias 
npm install 
npm start // servidor de desarrollo
```
