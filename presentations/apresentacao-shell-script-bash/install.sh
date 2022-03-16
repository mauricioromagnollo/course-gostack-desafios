#!/bin/bash

chmod +x install.sh

# Criar um diretório (opt/)
sudo mkdir /opt/brmodelo

# Mover o arquivo
sudo cp brModelo.jar /opt/brmodelo

# Criar script
cat > brmodelo.sh <<EOF
#!/bin/bash

cd /opt/brmodelo
java -jar brModelo.jar

EOF

# Tornar esse script um comando
sudo cp brmodelo.sh /usr/local/bin/brmodelo

# Dar permissão de execução
sudo chmod +x /usr/local/bin/brmodelo