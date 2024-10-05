/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
              primary: "#0F4B7E",       // Azul Principal
              secondary: "#FF6B6B",     // Vermelho Secundário
              accent: "#FFD93D",        // Amarelo de Destaque
              background: "#F5F5F5",    // Cor de Fundo
              surface: "#FFFFFF",       // Superfície (Cards, Modais, etc.)
              error: "#FF3B30",         // Erro
              success: "#34C759",       // Sucesso
              warning: "#FFCC00",       // Aviso
              info: "#1E90FF",          // Informação
              
              // Tons de Cinza
              gray: {
                50: "#F9FAFB",
                100: "#F3F4F6",
                200: "#E5E7EB",
                300: "#D1D5DB",
                400: "#9CA3AF",
                500: "#6B7280",
                600: "#4B5563",
                700: "#374151",
                800: "#1F2937",
                900: "#111827",
              },
            },
            
            // Tipografia Personalizada
            fontFamily: {
              sans: ["Inter", "sans-serif"],
              serif: ["Merriweather", "serif"],
              mono: ["Fira Code", "monospace"],
            },
        },
    },
    plugins: [],
}

