# Personal portfolio

Portfolio estático pensado para mostrar trabajo de backend, sistemas de datos y productos propios. No necesita dependencias ni un proceso de build.

## Actualizar el contenido

Todo el contenido que cambia vive en [`content.js`](./content.js). Para sumar un proyecto, experiencia, curso o certificación, duplicá uno de los objetos de su lista, editá los campos y refrescá el navegador. No hace falta tocar `index.html`, `styles.css` ni `app.js`.

- **Proyectos:** agregá un objeto en `projects`. `featured: true` usa la ilustración grande; agregá una URL de GitHub o demo en `url` si existe.
- **Experiencia:** agregá un objeto en `experience` con período, rol, organización, descripción y tecnologías.
- **Cursos y certificaciones:** copiá los ejemplos comentados dentro de `courses` o `certifications`. Las secciones aparecen automáticamente al tener contenido.
- **Contacto y CV:** completá `contact.email`, `contact.github`, `contact.linkedin`. Para el CV, copiá el archivo PDF a `assets/cv.pdf`. La página mostrará los enlaces **View CV** y **Download PDF**.

Los textos se agregan al DOM como texto plano y los enlaces sólo aceptan URLs web/`mailto:`, para que editar `content.js` no habilite HTML ejecutable por accidente.

## Vista local

Abrí `index.html` en el navegador o ejecutá:

```bash
python3 -m http.server 4173
```

Luego navegá a `http://localhost:4173/`.

## Antes de publicar

Completá los valores marcados con `TODO` en `content.js`, agregá el CV y comprobá los enlaces. Después podés subir la carpeta completa a un repositorio y publicarla en Vercel, Netlify o GitHub Pages.
