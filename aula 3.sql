create database mercado;
use mercado;

create table produtos(
codigo int,
nome varchar(100),
preco int,
estoque int
);

insert into produtos (codigo, nome, preco, estoque)
values (1,"leite", "15", "300");

insert into produtos (codigo, nome, preco, estoque)
values (2,"tomate", "5", "400");

insert into produtos (codigo, nome, preco, estoque)
values (3,"carne", "40", "1000");

insert into produtos (codigo, nome, preco, estoque)
values (4,"feijao", "25", "500");

insert into produtos (codigo, nome, preco, estoque)
values (5,"arroz", "15", "300");

select * from produtos;

create table clientes(
codigo int,
nome varchar(60),
cpf varchar(12),
celular int(12),
endereco varchar (100)
);



insert into clientes (codigo, nome, cpf, celular, endereco)
values(001, "Rogerio", "1234567891", 99088763245, "rua sla");

insert into clientes (codigo, nome, cpf, celular, endereco)
values(002, "Claudio", "1245565591", 9905676245, "rua 2");

insert into clientes (codigo, nome, cpf, celular, endereco)
values(003, "Jose", "9876543211", 978896245, "rua 3");
sss
insert into clientes (codigo, nome, cpf, celular, endereco)
values(004, "Felipe", "12121213443", 9922876333, "rua 4");

insert into clientes (codigo, nome, cpf, celular, endereco)
values(005, "Ruan", "12899545651", 99088763245, "rua 5");

select * from clientes;
