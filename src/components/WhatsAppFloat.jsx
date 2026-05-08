// TODO: replace placeholder with real WhatsApp Business number
const WHATSAPP_NUMBER = '5491100000000'
const WHATSAPP_MESSAGE = encodeURIComponent('Hola ROMAbeauty! Tengo una consulta sobre un producto.')

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chatear con nosotros por WhatsApp"
      title="Chatear con nosotros por WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden>
        <path
          fill="currentColor"
          d="M16 0C7.2 0 0 7.2 0 16c0 2.8.8 5.5 2.2 7.9L0 32l8.4-2.2C10.7 31 13.3 32 16 32c8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29.3c-2.4 0-4.8-.7-6.9-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.4 20.8 2.7 18.4 2.7 16 2.7 8.7 8.7 2.7 16 2.7s13.3 6 13.3 13.3-6 13.3-13.3 13.3zm7.6-9.9c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-.9.2s-1.1 1.4-1.3 1.6c-.2.2-.5.2-.9 0s-1.7-.6-3.3-2c-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.3-3-.3-.7-.7-.6-.9-.6h-.8c-.2 0-.6.1-1 .5-.3.4-1.3 1.3-1.3 3.1s1.3 3.6 1.5 3.9c.2.2 2.6 4 6.4 5.7.9.4 1.6.6 2.1.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.7.3-.9.3-1.6.2-1.7-.1-.2-.4-.3-.7-.5z"
        />
      </svg>
    </a>
  )
}
