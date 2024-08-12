# TripVisor AI


https://github.com/user-attachments/assets/58904059-a72f-4561-b454-ed93e672ac52


TripVisor AI is a comprehensive travel planning application that uses AI to generate itineraries, provide visa information, and recommend local cuisine.

## Table of Contents
1. Project Structure
2. Frontend Setup
3. Backend Setup
4. Running the Complete Application
5. Troubleshooting
6. Additional Notes
7. Contributing
8. License
9. Acknowledgments

## Project Structure

The project consists of two main components:
- **Frontend**: React-based web application (in the `travelai` folder)
- **Backend**: Django-based API (in the `TripVisorAI` folder)

## Frontend Setup (`travelai`)

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation and Running
1. Navigate to the frontend directory:
    ```bash
    cd travelai
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Backend Setup (`TripVisorAI`)

### Prerequisites
- Python 3.10.6
- pip
- virtualenv

### Installation and Running
1. Navigate to the backend directory:
    ```bash
    cd TripVisorAI
    ```
2. Create a virtual environment:
    ```bash
    python3.10 -m venv venv
    ```
3. Activate the virtual environment:
    - On Unix or MacOS:
        ```bash
        source venv/bin/activate
        ```
    - On Windows:
        ```bash
        venv\Scripts\activate
        ```
4. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
5. Set up the database:
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
6. Start the Django development server:
    ```bash
    python manage.py runserver 0.0.0.0:8000
    ```
7. The backend API will now be accessible at [http://localhost:8000](http://localhost:8000).

## Running the Complete Application

1. Start the backend server as described in the Backend Setup section.
2. In a new terminal, start the frontend development server as described in the Frontend Setup section.
3. The full application should now be running, with the front end communicating with the backend API.

## Troubleshooting
- If you encounter any package-related issues, ensure you're using the correct versions of Node.js, npm, and Python.
- For backend issues, please check that your virtual environment is activated when you install packages and run the server.
- For frontend issues, try deleting the `node_modules` folder and re-running `npm install`.

## Additional Notes
- The backend uses Django's built-in development server. For production, consider using a production-grade server like Gunicorn.
- Make sure to set up proper environment variables for any sensitive information or API keys before deploying.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments
- Hat tip to anyone whose code was used
- Inspiration
- etc
