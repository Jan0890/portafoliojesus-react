import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setResult("Enviando...");

    emailjs.sendForm(
      'service_pjdw59t',   
      'template_m8x70rl',  
      form.current,        
      'MyX2lX-jzFOJ6hvYy'  
    )
    .then(() => {
      setResult("¡Mensaje enviado con éxito! ✅");
      alert('¡Gracias! Nos pondremos en contacto pronto.');
      form.current.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      setResult("Error al enviar el mensaje ❌");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20">
      
      <h4 className="text-center mb-2 text-lg font-semibold text-[#2563eb]">
        Contáctame
      </h4>
      <h2 className="text-center text-4xl md:text-5xl mb-5 font-semibold">
        Ponte en contacto
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-[#1f2937]/80 dark:text-gray-300">
        ¡Me encantaría saber de ti! Si tienes alguna pregunta, comentario o sugerencia, utiliza el formulario a continuación.
      </p>

      {/* Agregamos la referencia 'ref={form}' */}
      <form ref={form} onSubmit={onSubmit} className="max-w-2xl mx-auto">
        
        {/* Input para el asunto que pide EmailJS */}
        <input type="hidden" name="subject" value="Nuevo contacto desde la Web DHO" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input 
            type="text" 
            placeholder="Ingresa tu nombre" 
            className="w-full px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
            required 
            name="name" 
          />
          <input 
            type="email" 
            placeholder="Ingresa tu correo electrónico" 
            className="w-full px-3 py-2 focus:ring-1 focus:ring-blue-500 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" 
            required 
            name="email" 
          />
        </div>

        <textarea 
          rows="6" 
          placeholder="Escribe tu mensaje" 
          className="w-full px-4 py-2 focus:ring-1 focus:ring-blue-500 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" 
          required 
          name="message"
        ></textarea>

        <button 
          type='submit' 
          disabled={isSending}
          className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-blue-600 text-white rounded-full mx-auto hover:bg-blue-700 duration-500 disabled:bg-gray-400"
        >
          {isSending ? 'Enviando...' : 'Enviar ahora'}
          <i className="fas fa-paper-plane"></i>
        </button>

        {/* Mensaje de estado debajo del botón */}
        <p className={`text-center mt-4 font-medium ${result.includes('Error') ? 'text-red-500' : 'text-green-600'}`}>
          {result}
        </p>
      </form>
    </div>
  );
}
