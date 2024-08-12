# tripvisor/urls.py

from django.urls import path

from tripvisor.views import TravelAdvisorView

urlpatterns = [
    path('api/travel-advisor/', TravelAdvisorView.as_view(), name='travel-advisor'),
]