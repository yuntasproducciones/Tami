import React from 'react';
import { useChatbotConfig } from 'src/hooks/useChatbotConfig';
import robotIcon from "../../../assets/icons/Icono-para--oficialpng.png";


interface ChatbotIconProps {
  className?: string; // Permite inyectar clases de Tailwind o CSS personalizado
  default?: boolean;
}

const ChatbotIcon: React.FC<ChatbotIconProps> = ({ className = "w-12 h-12" }) => {
  const { iconUrl, isLoading } = useChatbotConfig();

  // Ícono por defecto por si falla la API o aún no hay nada configurado
  const defaultIcon = robotIcon.src;

  if (isLoading) {
    // Puedes mostrar un skeleton o un spinner mientras carga
    //return <div className={`animate-pulse bg-gray-200 rounded-full ${className}`} />;
    return (
      <img
        className={`object-cover rounded-full shadow-sm ${className}`}
        alt="Chatbot Icon"
        src={iconUrl || defaultIcon}
        width={128}   // cercano al tamaño real de visualización, para retina 2x
        height={128}
        decoding="async"
      />
    );
  }

  return (
    <img
      src={iconUrl || defaultIcon}
      alt="Chatbot Icon"
      width={128}
      height={128}
      decoding="async"
      className={`object-cover rounded-full shadow-sm ${className}`}
    />
  );
};

export default ChatbotIcon;