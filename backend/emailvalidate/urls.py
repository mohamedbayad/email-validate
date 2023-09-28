from django.urls import path
from .views import (EmailView)



urlpatterns = [
    path("email-validation/", EmailView.as_view())
]
