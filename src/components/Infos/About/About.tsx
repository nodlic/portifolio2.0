import { TechsList } from "@/components/Infos/About/TechsList";

export function About() {

    return (
        <div>
            <h1 className="text-4xl font-semibold ">
                Érick Henrique
            </h1>
            <span className="block text-blue-600 text-xl mb-3">
                Programador Front-End
            </span>

            <strong className="text-blue-700 font-semibold">
                Sobre
            </strong>
            <p className="mb-3">
                Eu tenho 18 anos. Sou formado no curso de técnico em informática pelo IFMA, iniciei meus estudos de programação web em julho de 2021 e desde então sigo estudando.
            </p>

            <strong className="text-blue-700 font-semibold">
                Linguagens e Tecnologias
            </strong>
            <TechsList />
        </div>
    )
}