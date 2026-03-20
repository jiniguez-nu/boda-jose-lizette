# 💍 Invitación de Boda / Wedding Invitation Website

Un sitio web elegante y moderno para tu invitación de boda, construido con Next.js 14, React y TypeScript. Completamente personalizable y listo para desplegar.

**An elegant and modern wedding invitation website built with Next.js 14, React, and TypeScript. Fully customizable and ready to deploy.**

---

## ✨ Características / Features

- ✅ **Diseño Responsivo** — Funciona perfectamente en móviles, tablets y computadoras  
- ✅ **Tema Personalizado** — Colores pastel nogal elegantes  
- ✅ **Ubicación e Integración de Calendario** — Botones para agregar a Google Calendar y Apple Calendar  
- ✅ **Galería de Fotos** — Grid responsivo con modal interactivo  
- ✅ **Formulario RSVP** — Confirmación con validación y notificaciones por email  
- ✅ **Sección "Nuestra Historia"** — Con efecto parallax elegante  
- ✅ **Sección de Regalos** — Descripción y enlaces opcionales  
- ✅ **Todo en Español** — Interfaz completamente en español (Latinoamérica)  
- ✅ **Sin Dependencias CSS** — SCSS personalizado, sin Tailwind  
- ✅ **Privada** — Sin SEO ni indexación  
- ✅ **Gratis para Desplegar** — Compatible con Vercel y plataformas gratuitas

---

## 🚀 Inicio Rápido / Quick Start

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
```bash
cp .env.local.example .env.local
# Edita .env.local e ingresa tus credenciales de email
```

### 3. Ejecutar en Desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) 🎉

---

## 🧪 Pruebas / Testing

Para probar el formulario RSVP:
1. Navega a `http://localhost:3000`
2. Desplázate a "Confirmar Asistencia"
3. Completa el formulario
4. Si no configuraste email, verifica el enlace de vista previa de Ethereal en la consola

---

## 🎨 Personalización / Customization

### Cambiar Detalles de la Boda
Edita `src/components/LocationSection.tsx` (línea ~13):
- `eventDate` = fecha de la boda
- `eventTime` = hora
- `eventLocation` = ubicación
- `googleMapsUrl` = enlace de Google Maps

### Cambiar Textos en Español
Edita `src/lib/translations.ts`

### Cambiar Colores
Edita `src/styles/variables.scss`

### Agregar Fotos
Edita `src/components/Gallery.tsx` y reemplaza las URLs de imagen

---

## 📦 Compilar para Producción
```bash
npm run build
npm run start
```

---

## 🌐 Desplegar en Vercel

1. Sube tu proyecto a GitHub
2. Ve a [Vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Configura variables de entorno:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `COUPLE_EMAIL`
5. Deploy ✅

---

## 🛠️ Solución de Problemas

**"El formulario RSVP no envía email"**
- Verifica `.env.local` tiene valores válidos
- Si usas Gmail, confirma que usas "contraseña de aplicación" (no tu contraseña regular)
- Para pruebas sin email: omite EMAIL_USER y EMAIL_PASS

**"Error de compilación"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## 📞 Para Más Ayuda

- Documentación Next.js: https://nextjs.org/docs
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org/docs

---

## 💕 ¡Feliz Boda!

Esperamos que tu día especial sea perfecto. ¡Que disfrutes compartiendo estos momentos con tus invitados! 🎊
