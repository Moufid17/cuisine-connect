## Cuisine-connect
![app home](/public/app.png)
- Ce projet est définit en 4 fonctionnalités principales:
    - Une recherche dans ma base de données par le biais de l'IA . La ou les recette(s) disponbiles en fonctions des mots clés fournies.
    - Chaque recette propose une description, des ingrédients, de recette similaire ou pas et des accompagnements (générer directement par l'IA).
    - Un chatbot qui ne répond qu'à des question sur des recettes.
    - Un utilisateur connecté pourra ajouter ses allergies et noté
    
# Requirement :
- Create and fill : `.env` & `cuisine-connect/.env` & `cuisine-connect/.env.local`
    > Check Makefile for more

# Lancement projet

```bash
make up
make install
make dpm
make seed
make dev
```

## Ressources
- [Prisma/postgres](https://www.prisma.io/docs/concepts/database-connectors/postgresql)
- [Prisma/NextJs](https://www.prisma.io/nextjs)

- [Google sso configuration]
    - Authorized URL            : `http://localhost:3000`
    - Authorized redirect URL   : `http://localhost:3000/api/auth/callback/google`