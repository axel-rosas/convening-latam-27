# Pendientes de Home — Convening LATAM 2027

Inventario de la versión actual. No se han completado datos ni destinos por inferencia.

## Bloqueantes para publicación

| Área | Pendiente | Ubicación |
| --- | --- | --- |
| Tarifas | Confirmar todos los importes, incluidos los doce valores `$000`, y la fecha límite `00 del mes`. Los seis campos `date: "Fecha"` son provisionales y actualmente no se muestran. | `src/components/Pricing/pricingData.ts`, `Pricing.tsx` |
| Categorías | Confirmar las dos columnas tituladas `Next Gen**` en No Socios PCMA. Ya tienen IDs distintos; no se ha cambiado su significado. Aclarar las notas `**` y los requisitos de acceso para las categorías. | `src/components/Pricing/pricingData.ts` |
| Edición del evento | Resolver la mención a `Convening LATAM 2026` frente a la identidad 2027. Confirmar también las fechas y lugar impresos en los logos existentes. | `src/components/SustainabilityPillars/SustainabilityPillars.tsx`, `src/assets/images/branding/` |
| Ponentes | Completar los 16 espacios de la composición 5–3–5–3: nombres, cargos, biografías, fotografías y textos alternativos. Son espacios de diseño, no personas confirmadas. | `src/components/Speakers/speakersData.ts` |
| Fotografía educativa | Incorporar la fotografía de jinetes y su descripción mediante `imageSrc` e `imageAlt`. | `src/components/EducationalPillars/EducationalPillars.tsx` |
| Emblemas | Reemplazar cuatro placeholders: emblema del título y tres iconos de sustentabilidad. | `src/components/SustainabilityPillars/` |
| Registro | Proporcionar los destinos de «Regístrate aquí» y «¿Qué incluye el registro?». Los botones están deshabilitados hasta recibir `registrationHref` y `registrationDetailsHref`. | `src/pages/Home.tsx`, `src/components/SustainabilityPillars/SustainabilityPillars.tsx` |
| Membresía | Confirmar el destino de «Hazte socio aquí»; actualmente conduce a `#pricing`. | `src/components/MembershipBanner/MembershipBanner.tsx` |
| Navegación | Confirmar destinos para Asiste y Lima. Actualmente son texto no interactivo. Los otros cuatro destinos internos están conectados. | `src/components/Header/Header.tsx` |
| Agenda | Confirmar fechas de los tres días, horarios y actividades transcritos de la referencia; sedes de Speed Dating y Welcome Cocktail; detalles de Tour 1 y Tour 2. Revisar `1:30 min` en Lunch, sin asumir una duración definitiva. | `src/components/Agenda/agendaData.ts` |
| Agenda completa | Proporcionar el archivo o URL real mediante `fullAgendaHref`. El botón permanece deshabilitado. | `src/pages/Home.tsx`, `src/components/Agenda/Agenda.tsx` |
| Footer | Sustituir los 30 destinos relativos provisionales `a`–`n` del directorio institucional. Confirmar los cinco enlaces sociales y los tres enlaces Help, Privacy Policy y Terms of Use, actualmente vacíos. | `src/components/Footer/footerLinks.ts`, `Footer.tsx` |
| Revisión editorial | Confirmar la redacción «Crear la inspiración construye conectando», conservada de la referencia porque cambiarla requiere una decisión editorial. Validar contacto, dirección y teléfonos antes de publicar. | `src/components/EducationalPillars/educationalPillarsData.ts`, `src/components/Footer/Footer.tsx`, `src/components/Pricing/Pricing.tsx` |

Los mensajes «pendiente» y los avisos de programa provisional deben mantenerse hasta completar cada dato. Las alternativas de «Fecha pendiente», «Horario pendiente» y «Actividad pendiente» son fallbacks intencionales, aunque los datos actuales contienen valores de referencia.

## Mejoras opcionales

- Preparar un favicon cuadrado optimizado para tamaños pequeños; actualmente se reutiliza el logo PNG existente, compatible con el navegador y con el build.
- Afinar geometría de patrones y tamaños ópticos de logos si se proporcionan originales vectoriales o lineamientos de marca.
- Revisar encuadres y alturas de tarjetas después de incorporar imágenes y textos reales.
- Optimizar peso y formatos de imágenes existentes sin cambiar su identidad visual.
- Ampliar la comprobación manual en dispositivos táctiles y otros navegadores, con teclado y zoom al 200 %.

## Verificación de esta limpieza

- Categorías con IDs explícitos y estables; nombres y precios conservados.
- Erratas evidentes corregidas, sin resolver fechas, precios o redacciones ambiguas por inferencia.
- Título del documento: `PCMA Convening LATAM 2027`.
- Favicon inexistente sustituido por `src/assets/images/branding/logo-1.png`.
- Lint, build y `git diff --check` correctos.
- Consola de Chrome en localhost sin mensajes tras limpiar y recargar; no reaparece la advertencia de claves duplicadas.
