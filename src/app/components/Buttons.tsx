import { useTranslation } from "react-i18next";


interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className, onClick } : ButtonProps) {
  const _className = `font-bold	border-2 rounded-3xl px-8 py-2 ${className}`

  return <button className={_className} onClick={onClick}>{children}</button>
}

interface LangProps {
  lang: string;
  children: React.ReactNode;
  className?: string;
}

export function LangButton({ lang, children, className }: LangProps) {
  const { i18n } = useTranslation()
  const selected = lang === i18n.resolvedLanguage
  const _className = `${className} ${selected ? "bg-white text-black" : ""}`

  const handleLanguage = () => {
    i18n.changeLanguage(lang)
    //onChange && onChange(lang)
    window.location.reload()
  }

  return (
    <Button onClick={handleLanguage} className={_className}>{children}</Button>
  )
}
