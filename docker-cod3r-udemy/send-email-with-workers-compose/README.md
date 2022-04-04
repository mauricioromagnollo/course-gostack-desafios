

## Listando os Bancos de Dados Dentro do Container

```bash
docker-compose exec db psql -U postgres -c '\l'
```