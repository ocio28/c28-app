import { Game } from "@/lib/Api";
import Button from "./Buttons";
import { AndroidIcon, AppStoreIcon, PlatformIcon } from "./Icons";
import { useTranslation } from "react-i18next";
import moment from "moment";


interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface GameCardProps {
  game: Game;
}

function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-black m-4 p-6 ${className}`}>
      {children}
    </div>
  )
}

export default function GameCard({ game }: GameCardProps) {
  const { t } = useTranslation()
  const defaultUrl = game.url[0]

  const handlePlay = () => window.open(defaultUrl.link, "_blank")?.focus()

  return (
    <Card className="max-w-sm m-4 flex flex-col justify-between">
      <div>
        <img src={game.thumbnail} alt="thumbnail" className="rounded-3xl" />
        <div className="pt-4 text-xl"><strong>{game.titulo}</strong></div>
        <div className="py-4 text-sm">
          <p>
            {game.descripcion}
          </p>
        </div>
      </div>
      <div>
        <strong>Publicado: {moment(game.fecha_publicacion).format("DD/MM/YYYY")}</strong>
        <div className="flex my-4">
          {game.url.map((value) =>
            <a key={value.link} className="mr-4" href={value.link}><PlatformIcon tipo={value.tipo} /></a>
            )}
        </div>
            {game.externo && <strong><small>*{t("colaboracion")}</small></strong>}
        <Button className="w-full" onClick={handlePlay}>{t("jugar")}</Button>
      </div>
    </Card>
  )
}