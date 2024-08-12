# tripvisor/serializers.py

from rest_framework import serializers

class TravelInputSerializer(serializers.Serializer):
    destination = serializers.CharField(max_length=100, required=False)
    start_date = serializers.DateField(required=False)
    end_date = serializers.DateField(required=False)
    budget = serializers.FloatField(required=False)
    interests = serializers.ListField(
        child=serializers.CharField(max_length=50),
        required=False
    )
    travelers = serializers.IntegerField(required=False)
    prompt = serializers.CharField(required=False)
    from_param = serializers.CharField(required=False)