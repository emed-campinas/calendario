/* Dados do calendário EMED 2027 (protótipo).
   Na versão final, os eventos passam a vir da Planilha Google; as constantes abaixo permanecem. */
/* =========================== DADOS =========================== */
const MESES=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const DSEM=['SEG','TER','QUA','QUI','SEX','SÁB','DOM'];
const DSEM_L=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
const TIPOS={manha:'EMED Manhã',tarde:'EMED Tarde',ambos:'Manhã + Tarde',pa:'Projeto do Ano',fer:'Feriado / Férias',inst:'Institucional',prof:'Professores'};
const TURMAS={manha:['1A INF','1B IAR','2A INF','2B IAR','3A INF','3B IAR'],
              tarde:['1A ADM','1B ADM','2A MKT','2B MKT','3A MKT','3B MKT']};
const BIM=[{n:1,s:'2027-01-26',e:'2027-04-16'},{n:2,s:'2027-04-19',e:'2027-06-30'},{n:3,s:'2027-07-30',e:'2027-10-01'},{n:4,s:'2027-10-04',e:'2027-12-10'}];
const GL={manha:'☀',tarde:'☾',ambos:'◐'};
const VIEWNAME={inicio:'Início',mes:'Mês',agenda:'Lista',ano:'Ano',esc:'Sábados e reuniões',hor:'Horários',res:'Reservas'};

let seq=0; const ITEMS=[];
const Y='2027-';
function I(a,b,title,kind,extra){ITEMS.push(Object.assign({id:'i'+(++seq),start:Y+a,end:Y+(b||a),title,kind,locked:true},extra||{}))}
/* --- Calendário oficial 2027 (convertido da planilha da coordenação) --- */
I('01-01',0,'Confraternização Universal','fer');
I('01-01','01-23','Recesso Escolar – Estudantes','fer');
I('01-02','01-15','Recesso Escolar – Professores','fer');
I('01-04',0,'Envio de novo link aos estudantes sem pré-rematrícula e aos reprovados','inst');
I('01-08',0,'Término do prazo da rematrícula','inst');
I('01-15',0,'Expurgo de rematrícula','inst');
I('01-18','01-22','Planejamento Coletivo','prof',{turmas:'Professores'});
I('01-22',0,'Reunião de Alinhamento','prof',{turmas:'Professores'});
I('01-26',0,'Início das Aulas','inst',{turmas:'Todas as turmas'});
I('01-27',0,'Início da matrícula fora do prazo','inst');
I('02-08','02-10','Carnaval e Emenda','fer');
I('02-12',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('02-20',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('02-26',0,'Fala aí docente','prof',{turmas:'Professores'});
I('02-26',0,'Término das matrículas fora do prazo','inst');
I('02-26',0,'Início das transferências externas (1º ano)','inst');
I('03-12',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('03-19',0,'Fala aí docente','prof',{turmas:'Professores'});
I('03-20',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('03-26',0,'Paixão de Cristo','fer');
I('04-09',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('04-12','04-16','Encerramento do 1º Bimestre','prof',{turmas:'Professores'});
I('04-16',0,'Reunião de Fechamento – 1º Bimestre','prof',{turmas:'Professores'});
I('04-21',0,'Tiradentes','fer');
I('04-30',0,'Reunião de Alinhamento','prof',{turmas:'Professores'});
I('05-01',0,'Dia do Trabalho','fer');
I('05-14',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('05-14',0,'Reunião de Responsáveis – 1º bimestre','inst');
I('05-15',0,'Simulado ENEM · Sábado Letivo','inst',{turmas:'1º e 2º (tarde) · ENEM 3º ano',hora:'Manhã'});
I('05-21',0,'Fala aí docente','prof',{turmas:'Professores'});
I('05-21',0,'Reunião de Responsáveis – 1º bimestre','inst');
I('05-22',0,'Simulado ENEM · Sábado Letivo','inst',{turmas:'1º e 2º (tarde) · ENEM 3º ano',hora:'Manhã'});
I('05-27','05-28','Corpus Christi e Emenda','fer');
I('05-28',0,'Término das transferências externas e internas de títulos diferentes (2º ano)','inst');
I('06-11',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('06-18',0,'Reunião de Fechamento – 2º Bimestre','prof',{turmas:'Professores'});
I('06-24','06-30','Encerramento do 2º Bimestre','prof',{turmas:'Professores'});
I('07-01','07-30','Férias dos Estudantes','fer');
I('07-01','07-30','Férias dos Professores (acordo coletivo)','fer');
I('07-05','07-08','Criação das Ofertas','prof',{turmas:'Professores'});
I('08-02',0,'Retorno às aulas','inst',{turmas:'Todas as turmas'});
I('08-02',0,'Início das matrículas 1º ano (bolsistas)','inst');
I('08-06',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('08-06',0,'Reunião de Responsáveis – 2º bimestre','inst');
I('08-09',0,'Início das matrículas 1º ano (dependente de funcionário)','inst');
I('08-14',0,'Término das transferências externas e internas de títulos diferentes (1º ano)','inst');
I('08-16',0,'Início das matrículas 1º ano (pagantes)','inst');
I('08-17',0,'Início das ofertas QP EAD (estudantes transferidos do 2º ano)','inst');
I('08-20',0,'Reunião de Responsáveis – 2º bimestre','inst');
I('08-21',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('08-27',0,'Fala aí docente','prof',{turmas:'Professores'});
I('08-27',0,'Prazo final de renovação da bolsa exceção (via chamado)','inst');
I('09-01',0,'Oficina de Redação','inst',{turmas:'3º ano'});
I('09-01',0,'Progressão e retenção','inst');
I('09-06','09-07','Independência do Brasil e Emenda','fer');
I('09-10',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('09-18',0,'Simulado ENEM · Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Tarde'});
I('09-24',0,'Reunião de Alinhamento','prof',{turmas:'Professores'});
I('09-25',0,'Simulado ENEM · Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Tarde'});
I('09-27','10-01','Encerramento do 3º Bimestre','prof',{turmas:'Professores'});
I('09-28',0,'Data limite para aplicação de bolsa exceção','inst');
I('10-01',0,'Reunião de Fechamento – 3º Bimestre','prof',{turmas:'Professores'});
I('10-04',0,'Envio do link da pré-rematrícula','inst');
I('10-06',0,'Início da pré-rematrícula (a partir das 8h)','inst');
I('10-06',0,'Início do remanejamento dos alunos (entre salas)','inst');
I('10-08',0,'Reunião Pedagógica','prof',{turmas:'Professores'});
I('10-11','10-12','Nossa Senhora Aparecida e Emenda','fer');
I('10-15',0,'Reunião de Responsáveis – 3º bimestre','inst');
I('10-22',0,'Reunião de Responsáveis – 3º bimestre','inst');
I('10-23',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('10-29',0,'Fala aí docente','prof',{turmas:'Professores'});
I('10-31',0,'Término do desconto de matrícula antecipada','inst');
I('11-02',0,'Finados','fer');
I('11-06',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('11-13',0,'Sábado Letivo','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('11-15',0,'Proclamação da República','fer');
I('11-20',0,'Consciência Negra','fer');
I('11-26',0,'Reunião de Fechamento – 4º Bimestre','prof',{turmas:'Professores'});
I('12-04',0,'Sábado Letivo (sugestão de data)','inst',{turmas:'1º, 2º e 3º anos',hora:'Manhã'});
I('12-06','12-10','Encerramento do 4º Bimestre','prof',{turmas:'Professores'});
I('12-10',0,'Data limite para término das aulas e fechamento dos registros escolares','inst');
I('12-10',0,'Término da pré-rematrícula e do remanejamento','inst');
I('12-10',0,'Início do prazo para pedido de revisão de notas','inst');
I('12-13','12-15','Eventuais ajustes nos registros escolares','prof',{turmas:'Professores'});
I('12-16','12-31','Recesso Escolar – Professores e Estudantes','fer');
I('12-17','12-23','Processamento da rematrícula','inst');

/* --- Eventos de exemplo (professores) --- */
function E(a,title,kind,turno,turmas,local,hora,prof,extra){ITEMS.push(Object.assign({id:'i'+(++seq),start:Y+a,end:Y+a,title,kind,turno,turmas,local,hora,prof,demo:true,by:'Demonstração'},extra||{}))}
E('03-09','Visita SESC – Inteligência Artificial','ev','manha','2B IAR','Externo','08:00 – 12:00','Silas');
E('03-10','Integração EMED – Aprendizagem','ev','tarde','1º e 2º anos','Pátio e Jardim','14:40 – 17:30','Coordenação');
E('03-16','Visita SESC – Inteligência Artificial','ev','manha','3B IAR','Externo','08:00 – 12:00','Silas');
E('03-17','Oficina de Xadrez','ev','ambos','Todas as turmas','Biblioteca','13:00 – 13:50','Lais');
E('03-18','Feira de Profissões','ev','tarde','3A e 3B MKT','Pátio','14:40 – 18:15','Adriane');
E('03-23','Visita ao MACC','ev','tarde','2A MKT','Externo','14:00 – 17:30','Linguagens');
E('03-24','1ª Banca de Projetos','ev','ambos','Todas as turmas','Salas de aula','','Orientadores');
E('03-30','Roda de conversa – “Isso não é uma Roda”','pa','ambos','2º e 3º anos','Sala de aula','','Miriã e Mariana');
E('04-07','E-sports','ev','tarde','1A e 1B ADM','Auditório','14:40 – 17:30','Silas e Rapha');
E('04-13','Estudo do Meio','ev','manha','2A INF e 2B IAR','Externo','08:00 – 12:00','Área de Ciências');
E('04-14','Oficina de Colagem (PA)','pa','tarde','2A MKT','Sala 132','13:00 – 14:00','Silas');
E('04-28','Olimpíada OBAPO','ev','manha','3A INF e 3B IAR','Lab 132','09:00 – 11:00','Física');
E('05-12','Feira Modernista','ev','tarde','3A e 3B MKT','Jardim','14:40 – 18:15','Bárbara e Carol');
E('05-18','Ciência Aberta','ev','ambos','3º anos','Externo','','Ciências');
E('06-08','Seminário de Linguagens','ev','tarde','2A e 2B MKT','Auditório','14:40 – 17:30','Linguagens');
['03-11','03-25','04-08','04-22','05-06','05-20','06-03','06-17'].forEach(d=>E(d,'Clube do Livro (projeto de leitura)','ev','ambos','Todas as turmas','Biblioteca','','Lais',{g:'clube'}));
/* datas importantes (a coordenação pode tirar o destaque) */
const IMP=/^(Início das Aulas|Retorno às aulas|Encerramento do|Reunião de Fechamento|Reunião de Responsáveis|Simulado ENEM|Data limite para término das aulas|1ª Banca)/;
ITEMS.forEach(i=>{if(IMP.test(i.title))i.imp=true});

/* ---- Pessoas: NOMES FICTÍCIOS neste protótipo público. Os nomes reais ficam na Planilha Google, atrás de senha. ---- */
const GRUPOS=['Coordenação','EMED Manhã','EMED Tarde'];
const PESSOAS=[
 {id:'p1',nome:'Carla Menezes',grupo:'Coordenação',funcao:'Coordenadora',area:'',ativo:true},
 {id:'p2',nome:'Paulo Reis',grupo:'Coordenação',funcao:'Apoio à coordenação',area:'',ativo:true},
 {id:'p3',nome:'Marta Souza',grupo:'Coordenação',funcao:'Tutora de aprendizagem',area:'',ativo:true},
 {id:'p4',nome:'Rui Lopes',grupo:'Coordenação',funcao:'Inspetor',area:'',ativo:true},
 {id:'p5',nome:'Léo Prado',grupo:'Coordenação',funcao:'Auxiliar de sala (manhã)',area:'',ativo:true},
 {id:'p6',nome:'Ana Martins',grupo:'EMED Manhã',funcao:'Professora',area:'LGG',ativo:true},
 {id:'p7',nome:'Bruno Alves',grupo:'EMED Manhã',funcao:'Professor',area:'MAT',ativo:true},
 {id:'p8',nome:'Clara Dias',grupo:'EMED Manhã',funcao:'Professora',area:'FTP',ativo:true},
 {id:'p9',nome:'Diego Rocha',grupo:'EMED Manhã',funcao:'Professor',area:'CNT',ativo:true},
 {id:'p10',nome:'Elisa Nunes',grupo:'EMED Manhã',funcao:'Professora',area:'CHS',ativo:true},
 {id:'p11',nome:'Fábio Cunha',grupo:'EMED Manhã',funcao:'Professor',area:'LGG',ativo:true},
 {id:'p12',nome:'Gabi Torres',grupo:'EMED Tarde',funcao:'Professora',area:'LGG',ativo:true},
 {id:'p13',nome:'Hugo Pires',grupo:'EMED Tarde',funcao:'Professor',area:'MAT',ativo:true},
 {id:'p14',nome:'Íris Campos',grupo:'EMED Tarde',funcao:'Professora',area:'FTP',ativo:true},
 {id:'p15',nome:'Jonas Leal',grupo:'EMED Tarde',funcao:'Professor',area:'CNT',ativo:true},
 {id:'p16',nome:'Kátia Moraes',grupo:'EMED Tarde',funcao:'Professora',area:'CHS',ativo:true},
 {id:'p17',nome:'Lucas Brito',grupo:'EMED Tarde',funcao:'Professor',area:'CHS',ativo:true},
 {id:'p18',nome:'Nando Silva',grupo:'EMED Manhã',funcao:'Professor',area:'MAT',ativo:true},
 {id:'p19',nome:'Olívia Ramos',grupo:'EMED Manhã',funcao:'Professora',area:'LGG',ativo:true},
 {id:'p20',nome:'Paula Vieira',grupo:'EMED Tarde',funcao:'Professora',area:'MAT',ativo:true},
 {id:'p21',nome:'Renato Costa',grupo:'EMED Tarde',funcao:'Professor',area:'CNT',ativo:true}
];
let pseq=100,bseq=0,aseq=100;
/* ---- Escalas de exemplo. "atividade" vazia = ainda a definir. ---- */
const B=(titulo,hora,local,equipe,obs,notas)=>{const [a,c]=hora.split(' – ');return {id:'b'+(++bseq),titulo,hora,_h1:a||'',_h2:c||'',local,obs:obs||'',equipe,notas:notas||{}}};
function defEscala(a,pre,o){const it=ITEMS.find(i=>i.start===Y+a&&i.title.startsWith(pre));if(it)it.escala=o;return it}
defEscala('02-20','Sábado Letivo',{atividade:'',blocos:[B('Professores da manhã','07:30 – 12:00','Salas de aula',['p6','p7','p8','p9','p10','p11']),B('Coordenação','07:30 – 12:00','',['p1','p2'])]});
const _s=defEscala('03-20','Sábado Letivo',{atividade:'Oficinas sobre nomofobia',blocos:[B('Professores da manhã','08:00 – 12:00','Auditório e salas',['p6','p8','p10'],'',{p6:'1A INF',p8:'2B IAR',p10:'3A INF'}),B('Professores da tarde','08:00 – 12:00','Salas de aula',['p12','p14','p16'],'',{p12:'1A ADM',p14:'2A MKT',p16:'3B MKT'}),B('Tutoras, auxiliares e inspetoras','07:30 – 12:30','',['p3','p4','p5']),B('Coordenação','07:30 – 12:30','',['p1'])]});
defEscala('05-15','Simulado ENEM',{atividade:'Simulado ENEM do 3º ano (tarde); 1º e 2º anos com aula na manhã',blocos:[B('Aplicadores do ENEM','13:00 – 18:00','Salas 241 a 246',['p12','p13','p15','p17']),B('Professores com aula na manhã','07:30 – 12:00','Salas de aula',['p6','p7','p9']),B('Coordenação','07:30 – 18:00','',['p1','p2'])]});
defEscala('02-26','Fala aí docente',{atividade:'',blocos:[B('Sessão 1','13:30 – 14:30','Sala 241',['p6','p7','p8','p9','p10','p11']),B('Sessão 2','15:00 – 16:00','Sala 241',['p12','p13','p14','p15','p16','p17'])]});
/* ---- Avisos de mudança de escala (um exemplo, para a Ana Martins) ---- */
const AVISOS=[{id:'a1',pid:'p6',texto:'Você foi incluída na escala do Sábado Letivo (20/03): Professores da manhã, 08:00 – 12:00, Auditório e salas.',evid:_s&&_s.id,quando:'2026-10-30'}];

/* ---- Horários das aulas: DADOS FICTÍCIOS. A estrutura segue a planilha "Cronograma geral" (6 aulas por turno + intervalo). ---- */
const DIAS=['Segunda','Terça','Quarta','Quinta','Sexta'];
const SLOTS={manha:[['07:30','08:20'],['08:20','09:10'],['09:10','10:00'],['10:15','11:05'],['11:05','11:55'],['11:55','12:45']],
             tarde:[['13:00','13:50'],['13:50','14:40'],['14:40','15:30'],['15:45','16:35'],['16:35','17:25'],['17:25','18:15']]};
const INTERVALO={manha:['10:00','10:15'],tarde:['15:30','15:45']};
const AREAS={LGG:'Linguagens',MAT:'Matemática',CNT:'Ciências da Natureza',CHS:'Ciências Humanas',FTP:'Formação Técnica'};
const DISC={'Português':'LGG','Inglês':'LGG','Educação Física':'LGG','Artes':'LGG','Matemática':'MAT','Física':'CNT','Química':'CNT','Biologia':'CNT','História':'CHS','Geografia':'CHS','Sociologia':'CHS','Filosofia':'CHS','Informática':'FTP','Administração':'FTP','Marketing':'FTP','Projeto de vida':'','Projeto Ano Letivo':''};
const TURMAS_H=[
 {id:'t1',nome:'1A INF',turno:'manha',sala:'Sala 201'},{id:'t2',nome:'1B IAR',turno:'manha',sala:'Sala 202'},
 {id:'t3',nome:'2A INF',turno:'manha',sala:'Sala 203'},{id:'t4',nome:'2B IAR',turno:'manha',sala:'Sala 204'},
 {id:'t5',nome:'3A INF',turno:'manha',sala:'Sala 205'},{id:'t6',nome:'3B IAR',turno:'manha',sala:'Sala 206'},
 {id:'t7',nome:'1A ADM',turno:'tarde',sala:'Sala 201'},{id:'t8',nome:'1B ADM',turno:'tarde',sala:'Sala 202'},
 {id:'t9',nome:'2A MKT',turno:'tarde',sala:'Sala 203'},{id:'t10',nome:'2B MKT',turno:'tarde',sala:'Sala 204'},
 {id:'t11',nome:'3A MKT',turno:'tarde',sala:'Sala 205'},{id:'t12',nome:'3B MKT',turno:'tarde',sala:'Sala 206'}
];
const HOR={aulas:{},planInd:{},planArea:[]};
(function(){
  const POOL={
    manha:[['p6',['Português']],['p11',['Português','Inglês']],['p19',['Inglês','Educação Física','Artes']],['p7',['Matemática']],['p18',['Matemática']],['p8',['Informática']],['p9',['Física','Química','Biologia']],['p10',['História','Geografia','Sociologia','Filosofia']]],
    tarde:[['p12',['Português','Inglês','Artes']],['p17',['Sociologia','Filosofia']],['p13',['Matemática']],['p20',['Matemática']],['p14',['Administração','Marketing']],['p15',['Física','Química']],['p21',['Biologia','Química']],['p16',['História','Geografia']]]
  };
  ['manha','tarde'].forEach(turno=>{
    const T=POOL[turno],ts=TURMAS_H.filter(t=>t.turno===turno),plan={};
    T.forEach(([pid],i)=>{HOR.planInd[pid]=HOR.planInd[pid]||[];for(let k=0;k<3;k++){const ci=i*3+k,d=Math.floor(ci/6),s=ci%6;HOR.planInd[pid].push({turno,dia:d,slot:s});(plan[d+'|'+s]=plan[d+'|'+s]||[]).push(pid)}});
    for(let d=0;d<5;d++)for(let s=0;s<6;s++){
      if(d===4&&s>=2){ts.forEach(t=>{HOR.aulas[t.id+'|'+d+'|'+s]={disc:s===2?'Projeto de vida':'Projeto Ano Letivo',pid:'',ftp:false}});continue}
      const free=T.filter(([pid])=>!(plan[d+'|'+s]||[]).includes(pid)),off=(d*7+s*3)%free.length;
      ts.forEach((t,ti)=>{const [pid,discs]=free[(off+ti)%free.length];HOR.aulas[t.id+'|'+d+'|'+s]={disc:discs[(ti+d+s)%discs.length],pid,ftp:false}});
    }
  });
  HOR.planInd.p6.push({turno:'tarde',dia:1,slot:0},{turno:'tarde',dia:1,slot:1});   /* planejamento no contraturno */
  HOR.planInd.p12.push({turno:'manha',dia:3,slot:4},{turno:'manha',dia:3,slot:5});
  ['manha','tarde'].forEach(turno=>[['LGG',2,3],['MAT',4,5],['CNT',2,3],['CHS',4,5],['FTP',2,3]].forEach(([area,a,b])=>HOR.planArea.push({area,turno,dia:4,slots:[a,b]})));
})();
/* ---- Ed. Física na quadra: cada turma tem um dia e horário fixos e uma lista de datas ---- */
const QUADRA=[];
function syncQuadra(){} /* as datas da Ed. Física ficam só na aba Horários > Ed. Física; não entram no calendário */
(function(){
  const dows=[4,4,3,3,2,2,4,4,3,3,2,2],horas=['08:20 – 09:10','07:30 – 08:20','08:20 – 09:10','07:30 – 08:20','08:20 – 09:10','07:30 – 08:20','13:00 – 13:50','13:50 – 14:40','13:50 – 14:40','13:00 – 13:50','13:50 – 14:40','13:00 – 13:50'];
  const p2=n=>String(n).padStart(2,'0');
  TURMAS_H.forEach((t,i)=>{
    const datas=[];
    [1,2,3,4,5,7,8,9,10].forEach(m=>{let d=new Date(2027,m+1,0);while(d.getDay()!==dows[i]+1)d.setDate(d.getDate()-1);datas.push(`2027-${p2(m+1)}-${p2(d.getDate())}`)});
    QUADRA.push({turma:t.id,dia:dows[i],hora:horas[i],datas});
  });
  syncQuadra();
})();

/* ---- Laboratório 124: dias de funcionamento, indisponibilidades e reservas (EXEMPLOS) ---- */
const LAB={dias:{manha:[1,4],tarde:[0,3,4]},bloqueios:[],reservas:[]};
LAB.bloqueios.push({id:'b1',ini:'2027-02-12',fim:'',turnos:['tarde'],motivo:'Manutenção do laboratório',rep:'quinz',ate:'2027-06-30'});
LAB.bloqueios.push({id:'b2',ini:'2027-05-14',fim:'',turnos:['manha','tarde'],motivo:'Reunião de responsáveis',rep:'nao',ate:''});
let _rs=0;
const _rv=(data,turno,slots,pids,turma,obs)=>{const grp=slots.length>1?'g'+(++_rs):'';slots.forEach(slot=>LAB.reservas.push({id:'r'+(++_rs),data,turno,slot,pids,turma:turma||'',obs:obs||'',grp}))};
_rv('2027-01-26','manha',[0],['p8'],'1A INF');
_rv('2027-01-26','manha',[3,4],['p9','p10'],'2A INF','Aula em equipe');
_rv('2027-01-28','tarde',[1,2],['p14'],'1A ADM');
_rv('2027-01-29','manha',[0,1,2,3,4,5],['p9'],'','Período todo');
_rv('2027-01-29','tarde',[4],['p12','p15']);
_rv('2027-03-09','manha',[0,1],['p8'],'2A INF');
_rv('2027-03-11','tarde',[3],['p15'],'3A MKT');
_rv('2027-03-19','tarde',[0,1,2,3,4,5],['p14','p13'],'2B MKT','Projeto do ano');
let rseq=_rs+100;