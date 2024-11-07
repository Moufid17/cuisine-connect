import * as React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

import { Box, Sheet } from '@mui/joy'

import Header from '@/app/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cuisine-connect',
  description: "Ce site propose une expérience de recherche avancée pour les recettes, grâce à l'intégration de l'intelligence artificielle. Les utilisateurs peuvent trouver des recettes en fonction de mots-clés, chaque recette étant accompagnée d'une description, de la liste des ingrédients, de suggestions d'accompagnements générés par IA, et parfois de recettes similaires. Un chatbot est disponible pour répondre aux questions sur les recettes, et les utilisateurs connectés peuvent personnaliser leur expérience en ajoutant leurs allergies et en notant les recettes.",
} 

export default async function RootLayout({ children,}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
          <nav><Header /></nav>
          <main>
            <Box
              sx={{
                bgcolor: 'white',
                gridTemplateRows: '52px 0px 1fr',
                minHeight: '90dvh',
              }}
            >
              <Sheet>
                  {children}
              </Sheet>
            </Box>
          </main>
      </body>
    </html>
  )
}
