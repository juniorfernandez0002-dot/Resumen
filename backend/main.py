from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="ADHD Math App Backend")

# Habilitar CORS para conectar con el frontend de Vue
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, usar el dominio específico
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Bienvenido al Backend de la App de Matemáticas para TDAH"}

@app.get("/api/health")
def health_check():
    return {"status": "ok"}

# Endpoints futuros para módulos específicos irán aquí
