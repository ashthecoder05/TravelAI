import json
import google.generativeai as genai
from _Gemini.settings import GEMINI_API_KEY
import logging

genai.configure(api_key="AIzaSyAOqkiOaAC6YZ4zIb0QZKuzm_UhmPbTd-c")
default_model = genai.GenerativeModel('models/gemini-1.5-flash')

class NLP:
    def __init__(self, model=default_model, prompt="", from_param=""):
        self.model = model
        self.prompt = prompt
        self.from_param = from_param

    def set_prompt(self, input_data):
        # Check if input_data is a string (text input or button value)
        # if isinstance(input_data, str):
        #     # Parse the string input into a dictionary
        #     try:
        #         input_data = json.loads(input_data)
        #     except json.JSONDecodeError:
        #         # If it's not valid JSON, treat it as a simple destination query
        #         input_data = {"destination": input_data}
        
        # If input_data is already a dictionary (from input fields), use it directly
        print(f"Setting prompt with input_data: {input_data}")
        print(f"From parameter: {input_data.get('from_param')}")
        print(f"prompt parameter: {input_data.get('prompt')}")
        
        if input_data.get('from_param') == "service":
            print("Generating visa prompt")
            self.prompt = self.generate_visa_prompt(input_data)
        elif input_data.get('from_param') == "RecommendationFood":
            print("Generating restaurant prompt")
            self.prompt = self.generate_restaurant_prompt(input_data)
        else:
            print("Generating travel prompt")
            self.prompt = self.generate_travel_prompt(input_data)
        
        print(f"Generated prompt: {self.prompt[:100]}...")  # Print first 100 characters of prompt
        return self.prompt  # Return the generated prompt

    def generate_travel_prompt(self, input_data):
        return f"""
        I am planning a trip with the following details:
        Destination: {input_data.get('destination')}
        Start Date: {input_data.get('start_date', 'Not specified')}
        End Date: {input_data.get('end_date', 'Not specified')}
        Interests: {", ".join(input_data.get('interests', ['Not specified']))}
        Number of Travelers: {input_data.get('travelers', 'Not specified')}
        Budget: {input_data.get('budget', 'Not specified')}

        As an expert travel planner, please create a detailed and personalized itinerary for {input_data.get('prompt')} trip. If no specific details like destination, travel dates, or interests are provided, or if the above input data is not found, please act as the travel planner and select an inspiring destination and create an itinerary of your choice. Consider the following aspects:

        1. Optimal duration of stay based on the destination (if not specified, suggest a suitable duration)
        2. Must-see attractions and hidden gems that align with general travel interests
        3. A range of accommodation options to suit different budgets and group sizes
        4. Local cuisine and unique dining experiences
        5. Transportation options within the destination
        6. Cultural events or festivals that make the trip special
        7. Day trips or excursions to nearby points of interest
        8. A balance of planned activities and free time for exploration
        9. Seasonal considerations and appropriate activities
        10. General travel tips and advice for a smooth experience
         Please return the travel plan in the following JSON format:
        {{
            "title": "Trip Title",
            "welcome_message": "Welcome message and general trip overview",
            "accommodation": [
                {{
                    "type": "Budget/Mid-Range/Luxury",
                    "description": "Accommodation details",
                    "price": "Price per night",
                    "coordinates": {{
                        "x": "Longitude",
                        "y": "Latitude"
                    }}
                }}
            ],
            "budget_management": [
                {{
                    "title": "Category (e.g., Flights, Food, etc.)",
                    "description": "Tips and details"
                }}
            ],
            "itinerary": [
                {{
                    "day": "Day number",
                    "title": "Day title",
                    "activities": [
                        {{
                            "name": "Activity name",
                            "description": "Activity description",
                            "coordinates": {{
                                "x": "Longitude",
                                "y": "Latitude"
                            }}
                        }}
                    ]
                }}
            ],
            "local_tips": [
                {{
                    "tip": "Tip title",
                    "description": "Tip details"
                }}
            ],
            "visa_requirements": "Visa information",
            "famous_restaurants": [
                {{
                    "name": "Restaurant name",
                    "description": "Restaurant description",
                    "coordinates": {{
                        "x": "Longitude",
                        "y": "Latitude"
                    }}
                }}
            ],
            "destination_coordinates": {{
                "x": "Longitude",
                "y": "Latitude"
            }}
        }}

        IMPORTANT: Please ensure that your response is a valid JSON object. Do not include any text before or after the JSON object. The response should start with '{{' and end with '}}' without any additional content.

        If the user has simply requested to "build an itinerary" or "inspire me" without providing specific details, please create an enticing plan for a popular or up-and-coming destination that showcases diverse experiences and activities.

        Please ensure that the itinerary is well-paced, allowing for a balance between planned activities and free time. Also, consider any time differences or jet lag if applicable, and adjust the first day's activities accordingly.
        Based on the above details, please provide a comprehensive travel plan that includes:
        - Suggested itinerary with key attractions
        - Recommended hotels and accommodations
        - Budget management tips
        - Travel advice and local tips
        - Visa requirements for traveling from {input_data.get('source', 'your home country')} to {input_data.get('destination', 'the destination')}, including:
          * A detailed step-by-step process for obtaining the visa
          * Required documents and forms
          * Processing times and fees
          * Any special conditions or restrictions
          * Official government website links for visa application and information
        - Famous restaurants and food places to try in {input_data.get('destination', 'the destination')}
        - The map coordinates (x and y) for the destination and key points of interest

        Please return the travel plan in the following JSON format:
        {{
            "title": "Trip Title",
            "welcome_message": "Welcome message and general trip overview",
            "accommodation": [
                {{
                    "type": "Budget/Mid-Range/Luxury",
                    "description": "Accommodation details",
                    "price": "Price per night",
                    "coordinates": {{
                        "x": "Longitude",
                        "y": "Latitude"
                    }}
                }}
            ],
            "budget_management": [
                {{
                    "title": "Category (e.g., Flights, Food, etc.)",
                    "description": "Tips and details"
                }}
            ],
            "itinerary": [
                {{
                    "day": "Day number",
                    "title": "Day title",
                    "activities": [
                        {{
                            "name": "Activity name",
                            "description": "Activity description",
                            "coordinates": {{
                                "x": "Longitude",
                                "y": "Latitude"
                            }}
                        }}
                    ]
                }}
            ],
            "local_tips": [
                {{
                    "tip": "Tip title",
                    "description": "Tip details"
                }}
            ],
            "visa_requirements": "Visa information",
            "famous_restaurants": [
                {{
                    "name": "Restaurant name",
                    "description": "Restaurant description",
                    "coordinates": {{
                        "x": "Longitude",
                        "y": "Latitude"
                    }}
                }}
            ],
            "destination_coordinates": {{
                "x": "Longitude",
                "y": "Latitude"
            }}
        }}

        IMPORTANT: Please ensure that your response is a valid JSON object. Do not include any text before or after the JSON object. The response should start with '{{' and end with '}}' without any additional content.
        """

    def generate_visa_prompt(self, input_data):
        return f"""
        Please provide detailed visa information for {input_data.get('prompt')} in the following JSON format:

        {{
            "COUNTRY_VISA_INFO": {{
                "country": "Country name",
                "visa_type": "Type of visa (e.g., tourist, business)",
                "application_process": [
                    "Step 1: ...",
                    "Step 2: ...",
                    "Step 3: ..."
                ],
                "required_documents": [
                    "Document 1",
                    "Document 2",
                    "Document 3"
                ],
                "processing_time": "Estimated processing time",
                "fees": "Visa application fees",
                "special_conditions": "Any special conditions or restrictions",
                "official_links": [
                    {{
                        "description": "Official embassy website",
                        "url": "https://example.com"
                    }},
                    {{
                        "description": "Visa application portal",
                        "url": "https://visa.example.com"
                    }}
                ],
                "coordinates": {{
                    "longitude": "Longitude value",
                    "latitude": "Latitude value"
                }}
            }}
        }}

        IMPORTANT: Please ensure that your response is a valid JSON object. Do not include any text before or after the JSON object. The response should start with '{{' and end with '}}' without any additional content.
        """

    def generate_restaurant_prompt(self, input_data):
        return f"""
        Please provide detailed restaurant recommendations for "{input_data.get('restaurant_query')}" in the following JSON format:

        {{
            "RESTAURANT_RECOMMENDATIONS": {{
                "query": "{input_data.get('prompt')}",
                "location": "City, Country",
                "restaurants": [
                    {{
                        "name": "Restaurant name",
                        "cuisine": "Type of cuisine",
                        "rating": "Average rating (e.g., 4.5/5)",
                        "price_range": "Budget category (e.g., $, $$, $$$)",
                        "description": "Brief description of the restaurant",
                        "famous_for": "Signature dishes or specialties",
                        "address": "Full address",
                        "coordinates": {{
                            "x": "Longitude",
                            "y": "Latitude"
                        }},
                        "opening_hours": "Operating hours",
                        "contact": "Phone number or website"
                    }}
                ],
                "local_food_tips": [
                    "Tip 1: ...",
                    "Tip 2: ...",
                    "Tip 3: ..."
                ],
                "coordinates": {{
                    "x": "Longitude",
                    "y": "Latitude"
                }}
            }}
        }}

        IMPORTANT: Please ensure that your response is a valid JSON object. Do not include any text before or after the JSON object. The response should start with '{{' and end with '}}' without any additional content.
        """

    def get_prompt(self):
        return self.prompt

    def process(self):
        response = self.model.generate_content([self.get_prompt()])
        data = response.text.strip()
        
        try:
            return json.loads(data)
        except json.JSONDecodeError:
            return data  # Return raw response if JSON parsing fails