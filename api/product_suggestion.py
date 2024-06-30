import json

# Load skin type to ingredients mapping
with open('ingredients_skin.json', 'r') as f:
    skin_types = json.load(f)

# Load products data
with open('products.json', 'r') as f:
    products = json.load(f)

# Function to suggest products based on skin type
def suggest_products(skin_type):
    if skin_type not in skin_types:
        print(f"Sorry, we don't have recommendations for '{skin_type}' skin type.")
        return

    recommended_ingredients = skin_types[skin_type]

    print(f"Recommended ingredients for {skin_type} skin: {recommended_ingredients}")

    suggested_products = []
    active_ingredients = []

    for product in products:
        product_name = product['product_name']
        product_ingredients = product['ingredients']
        product_active_ingredients = product['active_ingredients']

        # Combine both ingredients and active ingredients into one list
        all_product_ingredients = product_ingredients + product_active_ingredients

        # Count how many recommended ingredients are in the product's ingredients
        count_matched_ingredients = sum(1 for ingredient in recommended_ingredients if ingredient in all_product_ingredients)

        # Check if at least two recommended ingredients are present in the product's ingredients
        if count_matched_ingredients >= 1:
            suggested_products.append({
                'product_name': product_name,
                'active_ingredients': product_active_ingredients,
                'ingredients': product_ingredients
            })

    if suggested_products:
        return suggested_products, recommended_ingredients
        print("\nSuggested products:")
        for product in suggested_products:
            print(f"- {product}")
    else:
        return [], recommended_ingredients
        print("\nNo products found matching the recommended ingredients.")

# Example usage:
if __name__ == "__main__":
    user_skin_type = input("Enter your skin type (e.g., Normal_Skin, Dry_Skin, Oily_Skin, Combination_Skin): ").strip()
    suggest_products(user_skin_type)
