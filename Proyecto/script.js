const langSwitchBtn = document.getElementById("lang-switch");

langSwitchBtn.addEventListener("click", () => {
    if (document.documentElement.lang === "es") {
        document.documentElement.lang = "en";
        langSwitchBtn.textContent = "Switch to Spanish";
        translateToEnglish();
    } else {
        document.documentElement.lang = "es";
        langSwitchBtn.textContent = "Cambiar a Inglés";
        translateToSpanish();
    }
});

function translateToEnglish() {
    document.querySelector("#inicio h1").textContent = "Transforming data into intelligence";
    document.querySelector("#inicio h3").textContent = "Data analyst";
    document.querySelector("#perfil h2").textContent = "Professional profile";
    document.querySelector("#perfil p").textContent = "Data Analyst with experience in managing performance indicators and applying business rules to financial information. Proficient in automation tools (SQL, Power BI, R, database administration), data mining, and programming languages (Java, C#, Python).";
    document.querySelector("#proyectos h2").textContent = "Projects";   
    document.querySelector("#proyectos p").textContent = "Here you can see some of my featured projects.";
    document.querySelector("#contacto h2").textContent = "Contact";
    document.querySelector("#contacto label[for='nombre']").textContent = "Name:";
    document.querySelector("#contacto label[for='correo']").textContent = "Email:";
    document.querySelector("#contacto label[for='telefono']").textContent = "Phone:";
    document.querySelector("#contacto button").textContent = "Submit";
    document.querySelector("footer p").textContent = " 2024 Carl Levey Rìos. Professional profile.";
    document.querySelector("footer p:nth-child(2)").textContent = "Email: cleveyr@ucenfotec.ac.cr";
    document.querySelector("footer p:nth-child(3)").textContent = "Phone: +506 87 57 12 94";
    document.querySelector("footer a").textContent = "Download Resume";
 
}

function translateToSpanish() {
    document.querySelector("#inicio h1").textContent = "Transformando datos en inteligencia";
    document.querySelector("#inicio h3").textContent = "Analista de datos";
    document.querySelector("#perfil h2").textContent = "Perfil profesional";
    document.querySelector("#perfil p").textContent = "Analista de datos, con  manejo de  indicadores de gestión, aplicando reglas de negocio a información financiera. Además cuento con el conocimiento  de herramientas de automatización,  (sql, PowerBi, R, administración de bases de datos),  minería de datos y  lenguajes de programación ( java, C#  y Python).";
    document.querySelector("#proyectos h2").textContent = "Proyectos";
    document.querySelector("#proyectos p").textContent = "Aquí puedes ver algunos de mis proyectos destacados.";
    document.querySelector("#contacto h2").textContent = "Contacto";
    document.querySelector("#contacto label[for='nombre']").textContent = "Nombre:";
    document.querySelector("#contacto label[for='correo']").textContent = "Correo Electrónico:";
    document.querySelector("#contacto label[for='telefono']").textContent = "Teléfono:";
    document.querySelector("#contacto button").textContent = "Enviar";
    document.querySelector("footer p").textContent = "2024 Carl Levey Rìos. Perfil Profesional.";
    document.querySelector("footer p:nth-child(2)").textContent = "Correo: cleveyr@ucenfotec.ac.cr";
    document.querySelector("footer p:nth-child(3)").textContent = "Teléfono: +506 87 57 12 94";
    document.querySelector("footer a").textContent = "Descargar Currículum";
   
}
let currentSlide = 0;

function moveSlide(direction) {
    const container = document.querySelector('.carousel-container');
    const slides = container.querySelectorAll('a');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slideWidth = slides[0].clientWidth;
    container.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
