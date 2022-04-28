const app = require('../index')
const request = require('supertest');

describe('GET /instituciones-educativas', () => {
    test('Status 200', async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        expect(response.statusCode).toBe(200);
    })

    test("Lista de instituciones", async () => {
        const response = await request(app).get('/api/instituciones-educativas').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})

describe("GET /actores", () => {
    test("Lista de actores", async () => {
        const response = await request(app).get('/api/actor').send();
        expect(response.body).toBeInstanceOf(Array);
    })
    test("Listar actory por su id", async () => {
        const user =[{
            documento: "1017203184",
            tipo_documento: "TI",
            nombres: "Carlos",
            apellidos: "Meneses",
            id: 34,
            contrasena: "1234567890poiuytrewq",
            correo: "fulanito@gmail.com",
            telefono_celular: "1234567890",
            numero_expediente: "TYU-1234-BR",
            genero: "hombre",
            fecha_nacimiento: "3333-03-03T04:00:00.000Z",
            estado_actor_id: 1,
            institucion_id: 1,
            tipo_actor_id: 1,
            fecha_creacion: "2022-04-27T06:12:23.000Z",
            fecha_actualizacion: null
        }]
        const response = await request(app).get('/api/actor/34').send();
        expect(response.body).toEqual(user);
    })
})