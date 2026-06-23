function createExplosion() {
  for (let i = 0; i < 40; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");

    let x = (Math.random() - 0.5) * 600 + "px";
    let y = (Math.random() - 0.5) * 600 + "px";

    particle.style.left = "50%";
    particle.style.top = "50%";

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}

/* explosion automatique */
setInterval(createExplosion, 1500);
