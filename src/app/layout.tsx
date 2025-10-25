import type { Metadata } from 'next'
import { Ubuntu, Montserrat } from 'next/font/google'
import './globals.css'

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Escuderia Pódium - Mentoria em Grupo | Do Zero ao Primeiro Contrato',
  description: 'Transforme-se em um piloto de vendas de alta performance. 6 semanas intensivas + 4 encontros mensais para estruturar seu processo comercial e fechar seu primeiro contrato.',
  keywords: 'mentoria vendas, processo comercial, cold call, fechamento vendas, método pódium',
  authors: [{ name: 'Rômulo Freitas' }],
  openGraph: {
    title: 'Escuderia Pódium - Mentoria em Grupo',
    description: 'Do Zero ao Primeiro Contrato Fechado - Juntos no Pódium',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Escuderia Pódium - Mentoria em Grupo',
    description: 'Do Zero ao Primeiro Contrato Fechado - Juntos no Pódium',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${ubuntu.variable} ${montserrat.variable} font-body`}>{children}</body>
    </html>
  )
}
