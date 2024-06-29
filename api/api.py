from flask import Flask, request, jsonify
from flask_cors import CORS
from product_suggestion import suggest_products

app = Flask(__name__)
CORS(app)

@app.route('/submit', methods=['POST'])
def submit():
    print('Request received')
    data = request.json
    print('Received data:', data)
    if 'My skin type is' in data.keys():
        suggest_products(data['My skin type is'])
    if data is None:
        return jsonify({'status': 'error', 'message': 'No data received'}), 400
    return jsonify({'status': 'success', 'data': data})


if __name__ == '__main__':
    app.run(debug=True)
