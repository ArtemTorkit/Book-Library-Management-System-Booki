from django.db import models

class Author(models.Model):
    AuthorName = models.CharField(max_length=255, unique=True)  

    def __str__(self):
        return self.AuthorName 


class Book(models.Model):
    bookName = models.CharField(max_length=255, unique=True) 
    date_added = models.DateField(auto_now_add=True)
    bookAuthor = models.ForeignKey(Author, on_delete=models.CASCADE)

    def __str__(self):
        return self.bookName
