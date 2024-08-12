from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from tripvisor.nlp import NLP
from tripvisor.serializers import TravelInputSerializer

class TravelAdvisorView(APIView):
    def post(self, request):
        serializer = TravelInputSerializer(data=request.data)
        if serializer.is_valid():
            input_data = serializer.validated_data
            print(f"request data: {input_data}")
            nlp = NLP()
            nlp.set_prompt(input_data)
            response = nlp.process()
            return Response(response, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)