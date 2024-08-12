# Installation Guide

This guide will help you set up and run the project on your local machine.

## Prerequisites

- Python 3.10.6
- pip
- virtualenv

## Steps

### 1. Clone the Repository

First, clone the repository to your local machine:

```git clone <repository_url>```
```cd <repository_name>```


### 2. Create a Virtual Environment
Create a virtual environment for Python 3.10.6:


```python3.10 -m venv venv```
### 3. Activate the Virtual Environment
Activate the virtual environment:

```source venv/bin/activate```

### 4. Install Dependencies
Install the required dependencies from the requirements.txt file:

```pip install -r requirements.txt```

### 5. Set Up the Database
Run the following commands to set up the database:

```python manage.py makemigrations```
```python manage.py migrate```

### 6. Run the Development Server
Start the Django development server:

```python manage.py runserver 0.0.0.0:8000```

### 7. Access the Application
Open your web browser and navigate to http://localhost:8000 to access the application.