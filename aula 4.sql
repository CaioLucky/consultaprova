set sql_safe_updates=0;


use empresa_xpto;


update funcionarios set salario= 50000

where cpf= "19018197299";

select * from funcionarios where cpf="19018197229";

select * from funcionarios;

update funcionarios set cargo = "programador BackEnd"
where cpf= "19018197229";

update funcionarios set salario = 7000
where cargo= "Gerente de Projetos"; 

select * from funcionarios where cargo="Gerente de Projetos";

update funcionarios set nome = "Roberto"
where cpf= "19018197229"


