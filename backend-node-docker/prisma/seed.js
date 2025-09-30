const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');

  // Crear usuarios
  const usuarios = [];
  for (let i = 1; i <= 10; i++) {
    const usuario = await prisma.usuario.create({
      data: {
        email: `usuario${i}@ejemplo.com`,
        password: `password${i}`,
        rol: i <= 3 ? 'admin' : 'usuario'
      }
    });
    usuarios.push(usuario);
    console.log(`Usuario ${i} creado: ${usuario.email}`);
  }

  // Crear tareas para cada usuario
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    for (let j = 1; j <= 10; j++) {
      await prisma.tarea.create({
        data: {
          titulo: `Tarea ${j} de ${usuario.email}`,
          descripcion: `Descripción de la tarea ${j} para el usuario ${usuario.email}`,
          completada: Math.random() > 0.5,
          usuarioId: usuario.id
        }
      });
    }
    console.log(`10 tareas creadas para ${usuario.email}`);
  }

  console.log('Seed completado exitosamente!');
}

main()
  .catch((e) => {
    console.error('Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

