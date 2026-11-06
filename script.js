const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const resumeDownload = document.querySelector(".resume-download");

if (resumeDownload) {
  resumeDownload.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(resumeDownload.href, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Resume request failed with status ${response.status}`);
      }

      const resumeBlob = await response.blob();
      const downloadUrl = URL.createObjectURL(
        new Blob([resumeBlob], { type: "text/html;charset=utf-8" }),
      );
      const downloadLink = document.createElement("a");
      downloadLink.href = downloadUrl;
      downloadLink.download = "Muhammad-Hamza-Shah-Resume.html";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Unable to download resume:", error);
      window.location.assign(resumeDownload.href);
    }
  });
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      primaryNav.classList.remove("is-open");
    });
  });
}
