import Link from "next/link"

export type SetCard = {
    id: string
    title: string
    description: string
    item: string
    pieces: number
    releaseYear: number
    link: string
    imageLink: string
}

export const setCard = (input: SetCard ): JSX.Element => {

    return(
        <>
        <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href={input.link}
              target="_blank"
            >
              <h3 className="text-2xl font-bold">{input.title}</h3>
              <div className="text-lg">
                {input.description}
              </div>
              <img 
                className="coverImg" 
                src= {input.imageLink} 
                alt= {input.title}
                />
            </Link>
        </>
    )

}