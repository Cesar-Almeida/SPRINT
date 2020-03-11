-- Cria Banco
create database Sprint;

-- Usa banco
use Sprint;

-- Cria tabela
create table Sensor(
Idsensor varchar(5) primary key,
Idgeladeira int,
Idproduto int);

-- Adiciona Dados 
insert into Sensor values
('S1V', 01, 0009),
('S1M', 01, 0009),
('S1C', 01, 0009),
('S1T', 01, 0009),
('S2V', 01, 0018),
('S2M', 01, 0018),
('S2C', 01, 0018),
('S2T', 01, 0018),
('S3V', 01, 0027),
('S3M', 01, 0027),
('S3C', 01, 0027),
('S3T', 01, 0027),
('S4V', 01, 0073),
('S4M', 01, 0073),
('S4C', 01, 0073),
('S4T', 01, 0073);

-- Mostra todas as colunas
select * from Sensor;

-- Modifica/Atualiza dados
update Sensor set Idgeladeira = 2 where IdSensor in ('S4V', 'S4M', 'S4C', 'S4T');

-- Adiciona Dados 
insert into Sensor values
('S5V', null, 0037),
('S5M', null, 0037),
('S5C', null, 0037);

-- Descreve tabela
desc Sensor;

-- Exclui registro
delete from Sensor where Idsensor = 'S1T';

-- Exclui a tabela
drop table Sensor;

-- Cria nova tabela
create table Geladeira(
Idgeladeira int primary key,
NomeEmpresa varchar(40),
Endereço varchar(50)
);

-- Coloca novas geladeiras
insert into Geladeira values
(891, 'SoulFit',' R.Haddock Lobo'),
(892,' SoulFit','R.Haddock Lobo'),
(893, 'SoulFit','R.Haddock Lobo'),
(894, 'SoulFit','R.Haddock Lobo'),
(895, 'SoulFit','R.Haddock Lobo');

-- Seleciona totas as colunas
select * from Geladeira;

-- Atualiza Geladeira
update Geladeira set NomeEmpresa = 'Select' where Idgeladeira = 894;

-- Coloca novas geladeiras
insert into Geladeira values
(1, 'SoulFit',' R.Haddock Lobo'),
(2,'SoulFit','R.Haddock Lobo');

-- Exclui a geladeira
delete from Geladeira where Idgeladeira in (1,2);

-- Descrição da Tabela
desc Geladeira;

-- Seleciona totas as colunas
select * from Geladeira;

-- Apaga a geladeira
drop table Geladeira;

-- Cria nova tabela
create table Produtos(
Idproduto int primary key auto_increment,
Produto varchar(30)
);

-- Coloca novos produtos
insert into Produtos (Produto) values
('Coca Cola'),
('Warp Frango'),
('Marmita'),
('Suco Abacaxi');

-- Seleciona totas as colunas
select * from Produtos;

-- Descrição da Tabela
desc Produtos;