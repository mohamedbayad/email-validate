from rest_framework.response import Response
from rest_framework.views import APIView
import requests

# Create your views here.

class EmailView(APIView):

    def post(self, request, *args, **kwargs):
        req = requests
        email = request.data["email"]
        rep = req.get(f"https://mail.google.com/mail/gxlu?email={email}")

        if rep.headers.get("Set-Cookie"):
            return Response({
                "exist" : True,
                "message" : "Valid email, with no high-risk factors detected: safe to send mail."
            })
        else : 
            return Response({
                "exist" : False,
                "message" : "Invalid email address: the mailbox for the email address does not exist."
            })