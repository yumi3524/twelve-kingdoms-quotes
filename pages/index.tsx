import Head from 'next/head';
import QuoteCard from '../components/QuoteCard';
import quotesData from '../data/quotes.json';

interface Quote {
  id: string;
  quote: string;
  source: string;
  character: string;
}

interface HomeProps {
  quotes: Quote[];
}

export async function getStaticProps() {
  const quotes: Quote[] = quotesData;
  return {
    props: {
      quotes,
    },
  };
}

export default function Home({ quotes }: HomeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>十二国記 名言集</title>
        <meta name="description" content="A simple web application that displays quotes from The Twelve Kingdoms." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center w-full max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-koku-dark mb-12 text-center leading-tight">
          十二国記 <span className="text-koku-accent">名言集</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote.quote}
              source={quote.source}
              character={quote.character}
            />
          ))}
        </div>
      </main>

      <footer className="mt-16 text-koku-gray text-sm text-center">
        <p>&copy; 2023 The Twelve Kingdoms Quotes. All rights reserved.</p>
        <p>Quotes from the novel series "The Twelve Kingdoms" by Fuyumi Ono.</p>
      </footer>
    </div>
  );
}
