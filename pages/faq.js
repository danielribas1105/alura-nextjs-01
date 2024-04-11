import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

export async function getStaticProps(context){
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });
    return {
        props: {
            qualquerCoisaQue: 'eu passar aqui',
            faq,
        },
    };
}

export default function FaqPage({faq}){
    console.log(faq);
   /*  useEffect(() => {
        const [faq, setFaq] = useState([]);
    }, []); */

    return(
        <div>
            <h1>FAQ</h1>
            <Link href="/">Voltar</Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>  
    )
}