import tensorflow as tf
from PIL import Image, ImageOps
import numpy as np
# funcion para predecir enfermedades de la piel

def prediccion_piel(archivo_imagen):
    # Desabilita la notación científica para mayor claridad.
    np.set_printoptions(suppress=True)

    # Carga el modelo
    model = tf.keras.models.load_model(filepath="keras_model.h5", compile=False)

    # Cree la matriz de la forma correcta para alimentar el modelo keras
    # La 'longitud' o el número de imágenes que puede poner en la matriz está 
    # # determinada por la primera posición en la tupla de forma, en este caso 1
    # solo podemos analizar una imagen a la vez
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)

    # Replace this with the path to your image
    image = Image.open(archivo_imagen) # recibe la imagen obtenida por parametro

    #cambie el tamaño de la imagen a 224x224 con la misma estrategia que en TM2
    #cambiar el tamaño de la imagen para que sea al menos 224x224 y luego recortar desde el centro
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.ANTIALIAS)

    #convierte la imagen en una matriz numpy
    image_array = np.asarray(image)

    # mostrar la imagen redimensionada
    #image.show() #abre una ventana con la imagen
    # Normalize the image
    normalized_image_array = (image_array.astype(np.float32) / 127.0) - 1
    # Carga la imagen en el array o matriz
    data[0] = normalized_image_array
    # run the inference
    prediction = model.predict(data)
    # devolvemos la prediccion
    return prediction


data = prediccion_piel('messi.jpg')

print(data)