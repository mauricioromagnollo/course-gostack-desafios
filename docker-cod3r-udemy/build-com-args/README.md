## Passando a variável de ambiente para o container
docker image build --build-arg S3_BUCKET=myapp -t ex-build-args

## Imprimir a variável de Ambiente
docker container run ex-build-args bash -c 'echo $S3_BUCKET'

## Buscar a informação de quem é o mantenedor da Imagem
docker image inspect --format="{{index .Config.Labels \"maintainer\"}}" ex-build-args