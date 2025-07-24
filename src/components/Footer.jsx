import { SOCIAL_MEDIA_LINKS } from "../constants"

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
             </div>
            <p className="mt-8 text-sm text-center tracking-tighter text-neutral-500">
                &copy;Rai. All right reserved.
            </p>
    </footer>
  )
}

export default Footer