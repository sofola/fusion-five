# app.py (Flask backend)
from flask import Flask, request, jsonify
import os
from PIL import Image

app = Flask(__name__)

# Define the upload folder
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# API endpoint for image upload and modification
@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # Save the uploaded image
    filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filename)

    # Convert the image to greyscale
    img = Image.open(filename).convert('L')
    greyscale_filename = os.path.join(app.config['UPLOAD_FOLDER'], 'greyscale_' + file.filename)
    img.save(greyscale_filename)

    print(greyscale_filename)
    return jsonify({'greyscale_image_path': greyscale_filename})

if __name__ == '__main__':
    app.run(debug=True)
