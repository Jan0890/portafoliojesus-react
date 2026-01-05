import { Youtube, Facebook, Instagram, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 text-[#1f2937] dark:text-white font-sans">
      {/* Logo */}
      <div className="text-center">
      

        {/* Email */}
        <div className="w-max flex items-center gap-2 mx-auto mb-4">
          <img src="./assets/mail_icon.png" alt="Correo" className="w-5 dark:hidden" />
          <img src="./assets/mail_icon_dark.png" alt="Correo" className="w-5 hidden dark:block" />
          <a href="mailto:arroyojan46@gmail.com" className="hover:underline">
            arroyojan46@gmail.com
          </a>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com/Jan0890" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-[#FF0000] transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/jancarlos-jesus-arroyo-7b340033b/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-[#1877F2] transition-colors" />
          </a>
        </div>
      </div>

      {/* Pie de página */}
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
        <p>
          © {new Date().getFullYear()} <a href="#" className="hover:underline">JanCarlos Jesús Arroyo Vargas</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
