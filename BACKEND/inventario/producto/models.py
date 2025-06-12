from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()  # ✅ Corregido
    descripcion = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nombre
