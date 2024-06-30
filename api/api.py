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
    products, ingredients = [], []

    if 'MY SKIN TYPE IS' in data.keys():
        products, ingredients = suggest_products(data['MY SKIN TYPE IS'])
        print([products, ingredients])

    if data is None:
        return jsonify({'status': 'error', 'message': 'No data received'}), 400
    #return jsonify({"product": product, "ingredient": ingredient})
    return jsonify({"products": products, "ingredients": ingredients})

@app.route('/gender', methods=['POST'])
def gender():
    data = request.json
    print('Received gender:', data)
    return jsonify({'status': 'success', 'data': data})

if __name__ == '__main__':
    app.run(debug=True)
