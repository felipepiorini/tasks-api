## Tasks APIs

## Docker Dev Environment

- Primeiro gerar as imagens que são usadas pelos containers

```
$ sudo docker-compose -f docker-compose-dev-images.yaml build tasks-img-api
```

- Depois, rodar os containers de desenvolvimento

```
$ sudo docker-compose up
```

## Criar base de dados

- Pelo workbench acessar com o host 0.0.0.0:33061 (username e pass estão na .env)

```
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date_end` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB

CREATE TABLE `tasks`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `tasks`.`users` (`id`, `name`) VALUES ('1', 'Felipe');
INSERT INTO `tasks`.`users` (`id`, `name`) VALUES ('2', 'João');
INSERT INTO `tasks`.`users` (`id`, `name`) VALUES ('3', 'Maria');
```

## Executar os endpoints

- Abrir o seu programa de requisições favorito (postman/insomnia)
- A API esta na porta 4020

```
http://localhost:4020/api/v1/user/insert-task

Body type json
{
	"userId": 2,
	"description": "Teste para inserir conteudo ",
	"dateEnd": "2021-09-01 19:24:00",
	"status": 1
}

http://localhost:4020/api/v1/user/list-tasks
```
## Executar os testes automatizados

- Os testes estão separados entre unitarios e de integração
- Os testes unitarios estao nos arquivos .spec e podem ser acessados via comando npm run test:unit
- Os testes de integração estao nos arquivos .test e podem ser acessados via comando npm run test:integration
- Tambem é possivel rodar todos os testes com o comando npm run tes:all