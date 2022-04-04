## Gerando o nosso container

```bash
docker image build -t ex-simple-build .
```

## Executando o nosso container

```bash
docker container run -p 80:80 ex-simple-build
```