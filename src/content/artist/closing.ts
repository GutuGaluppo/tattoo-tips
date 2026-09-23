import type { Guide } from '../types';

export const closingGuide: Guide = {
  slug: '/tatuador/encerramento',
  audience: 'tatuador',
  title: 'Encerramento e descarte',
  navTitle: 'Encerramento e descarte',
  description:
    'A sessão não termina quando a máquina desliga. O que fazer, na ordem certa, entre o último passe de agulha e a bancada pronta para o próximo cliente.',
  jurisdiction: 'BR',
  lastReviewed: '2026-09-22',
  technical: true,
  image: 'sharpsDisposal',
  sections: [
    {
      id: 'ordem-do-encerramento',
      title: 'A ordem importa',
      summary: 'Cada etapa depende da anterior ter sido feita corretamente.',
      blocks: [
        {
          type: 'steps',
          title: 'Do último passe à bancada limpa',
          steps: [
            {
              title: 'Descarte o perfurocortante imediatamente',
              text: 'Cartucho ou agulha vai direto ao coletor rígido assim que o uso termina — sem pousar na bancada, sem esperar o fim do atendimento.',
              level: 'atencao',
            },
            {
              title: 'Aplique o curativo',
              text: 'Conforme o produto e o protocolo do seu estúdio, com as mãos ainda enluvadas.',
            },
            {
              title: 'Descarte os consumíveis contaminados',
              text: 'Gaze, papel-toalha, ink caps e demais descartáveis de uso único vão para o resíduo contaminado, conforme a legislação do seu município.',
            },
            {
              title: 'Remova as barreiras sem contaminar a área limpa',
              text: 'Retire filme e papel de barreira de dentro para fora, sem deixar a parte suja tocar o que ainda está limpo.',
            },
            {
              title: 'Separe os equipamentos reutilizáveis',
              text: 'O que precisa de limpeza, desinfecção ou esterilização vai para o fluxo correspondente — nunca junto com o descartável.',
            },
            {
              title: 'Limpe antes de desinfetar ou esterilizar',
              text: 'Sujidade visível reduz a eficácia de qualquer desinfetante ou ciclo de autoclave. A ordem é sempre limpar primeiro.',
            },
            {
              title: 'Documente o ciclo de autoclave',
              text: 'Registre data, carga e indicador biológico/químico quando aplicável — é o que comprova que a esterilização aconteceu.',
            },
            {
              title: 'Limpe e desinfete a estação',
              text: 'Bancada, braço de apoio e cadeira, mesmo que tenham tido barreira.',
            },
            {
              title: 'Higienize as mãos',
              text: 'Depois de retirar as luvas, higienize imediatamente ou assim que possível.',
            },
            {
              title: 'Guarde a máquina limpa e seca',
              text: 'Nunca guarde úmida — favorece proliferação e corrosão de peças metálicas.',
            },
          ],
          sources: ['cieh-toolkit', 'osha-tattoo-2002', 'who-hand-hygiene'],
        },
      ],
    },
    {
      id: 'maquina-nunca-inteira',
      title: 'A máquina inteira nunca vai para imersão, autoclave ou ultrassom',
      blocks: [
        {
          type: 'alert',
          level: 'atencao',
          title: 'Não existe instrução universal de limpeza de máquina',
          text: 'Cada fabricante define o que pode e o que não pode ir ao ultrassom ou à autoclave, e qual componente aceita qual produto químico. Trate o manual do fabricante da sua máquina como a fonte final — não um tutorial genérico.',
          sources: ['cheyenne-sol-nova-manual'],
        },
        {
          type: 'list',
          title: 'Princípio geral, antes de checar o manual específico',
          items: [
            'A máquina inteira não é imersa em líquido, nem vai para autoclave ou ultrassom.',
            'A parte que entra em contato com o cliente recebe barreira (sleeve) durante o uso e é trocada a cada procedimento.',
            'Componentes desmontáveis compatíveis podem ir à autoclave — confirme no manual quais são.',
            'Superfícies externas recebem limpeza e desinfecção compatíveis com o material, conforme o fabricante.',
          ],
          sources: ['cheyenne-sol-nova-manual'],
        },
      ],
    },
    {
      id: 'checklist-encerramento',
      title: 'Checklist de encerramento',
      blocks: [
        {
          type: 'checklist',
          id: 'tatuador-encerramento',
          title: 'Antes de considerar a sessão encerrada',
          description: 'Progresso salvo no navegador.',
          items: [
            {
              id: 'perfurocortante-descartado',
              label: 'Cartucho/agulha descartado no coletor rígido imediatamente após o uso.',
              sources: ['osha-tattoo-2002'],
            },
            {
              id: 'curativo-aplicado',
              label: 'Curativo aplicado conforme o produto e o protocolo do estúdio.',
            },
            {
              id: 'descartaveis-separados',
              label: 'Consumíveis contaminados descartados conforme a legislação local — separados do lixo comum.',
              sources: ['cieh-toolkit'],
            },
            {
              id: 'barreiras-removidas',
              label: 'Barreiras removidas sem contaminar a área limpa.',
              sources: ['cieh-toolkit'],
            },
            {
              id: 'reutilizaveis-separados',
              label: 'Equipamento reutilizável separado no fluxo correto de limpeza/desinfecção/esterilização.',
            },
            {
              id: 'autoclave-documentado',
              label: 'Ciclo de autoclave documentado, quando aplicável.',
            },
            {
              id: 'estacao-limpa',
              label: 'Bancada, braço de apoio e cadeira limpos e desinfetados.',
              sources: ['cieh-toolkit'],
            },
            {
              id: 'maquina-guardada',
              label: 'Máquina limpa e seca antes de guardar — nunca úmida.',
              sources: ['cheyenne-sol-nova-manual'],
            },
          ],
        },
      ],
    },
  ],
  sources: ['cieh-toolkit', 'osha-tattoo-2002', 'who-hand-hygiene', 'cheyenne-sol-nova-manual'],
};
