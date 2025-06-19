# 3DVP_CEDRIC

# DevOps Ninja App

Application web Node.js pour CloudNinja Corp

## Fonctionnalités

- API REST avec Express
  - GET `/api/services` - Liste tous les services
  - GET `/api/services/:id` - Détail d'un service
  - GET `/api/status` - Statut du serveur
- Interface web interactive
- Middleware de logging

## Installation

1. Clonez le dépôt
2. Installez les dépendances: `npm install`
3. Lancez l'application: `npm start`

## Utilisation

- Accédez à l'interface web: `http://localhost:3000`
- API endpoints:
  - `GET /api/services`
  - `GET /api/status`

## Dépendances

- Express
- Helmet (sécurité)
- Morgan (logging)

[![CI Status](https://github.com/matuidi1234/devops-ninja-app/workflows/CI%20Pipeline/badge.svg)](https://github.com/matuidi1234/3DVP_CEDRIC/actions)

![ESLint](https://github.com/matuidi1234/3DVP_CEDRIC/workflows/Quality%20Check/badge.svg)
![Vulnerabilities](https://img.shields.io/badge/vulnerabilities-none-brightgreen)