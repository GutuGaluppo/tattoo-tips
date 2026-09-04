import type { Guide } from '../types';

export const aftercareGuide: Guide = {
  slug: '/cliente/cuidados-depois',
  audience: 'cliente',
  title: 'Cuidados posteriores al tatuaje',
  navTitle: 'Cuidados posteriores',
  description:
    'El objetivo del cuidado posterior es restaurar la barrera de la piel, evitar la infección y preservar el resultado. Los principios son estables; los productos varían.',
  intro:
    'No existe un único protocolo válido para todos los tatuajes. Hay principios que no cambian: manos limpias, lavado suave, capa fina, nada de arrancar costras y vigilancia sobre lo que se sale de lo esperado.',
  jurisdiction: 'BR',
  lastReviewed: '2026-07-26',
  image: 'aftercare',
  sections: [
    {
      id: 'filme-ou-tradicional',
      title: 'Film o cuidado tradicional',
      summary:
        'Existen dos caminos razonables para el vendaje inicial. Quien decide cuál seguir es el tatuador que hizo el trabajo — sigue la indicación que te dio.',
      blocks: [
        {
          type: 'table',
          title: 'Comparación de los dos caminos',
          caption:
            'Ambos son aceptables. El error no es elegir uno de los dos — es mezclar los dos a medias.',
          columns: [
            { key: 'aspecto', label: 'Aspecto', sortable: true },
            { key: 'filme', label: 'Film / segunda piel' },
            { key: 'tradicional', label: 'Cuidado tradicional' },
          ],
          cardTitleKey: 'aspecto',
          rows: [
            {
              aspecto: 'Duración del vendaje',
              filme:
                'Puede permanecer de 24 horas a varios días, si está cómodo y sin filtración.',
              tradicional:
                'Vendaje inicial por pocas horas, según indicación; después la piel queda expuesta entre los lavados.',
            },
            {
              aspecto: 'Cuándo cambiarlo',
              filme: 'Si hay filtración de exudado, el film debe cambiarse.',
              tradicional: 'No aplica — la rutina pasa a ser lavar e hidratar.',
            },
            {
              aspecto: 'Rutina diaria',
              filme: 'Menos manipulación de la zona mientras el film esté íntegro.',
              tradicional:
                'Lavado suave y capa fina de emoliente o pomada hipoalergénica, 2 a 3 veces al día, por 2 a 3 días; después emoliente simple.',
            },
            {
              aspecto: 'Riesgo más común',
              filme: 'Mantener un film con filtración o mal adherido.',
              tradicional: 'Exagerar en la cantidad de producto y asfixiar la zona.',
            },
          ],
          sources: ['eadv-aftercare'],
        },
        {
          type: 'alert',
          level: 'atencao',
          title: 'Antibiótico y antiséptico no son rutina',
          text: 'Los desinfectantes y las cremas antibióticas no son necesarios de rutina durante la cicatrización. Solo deben usarse si hay infección y evaluación médica.',
          sources: ['eadv-aftercare'],
        },
      ],
    },
    {
      id: 'como-lavar',
      title: 'Cómo lavarlo',
      blocks: [
        {
          type: 'steps',
          steps: [
            {
              title: 'Lávate las manos primero',
              text: 'Siempre, antes de cualquier contacto con el tatuaje. Manos visiblemente sucias piden agua y jabón durante 40 a 60 segundos.',
              level: 'atencao',
            },
            {
              title: 'Agua corriente tibia y poco jabón suave',
              text: 'Sin frotar, sin esponja vegetal, sin esponja. La mano limpia es suficiente.',
            },
            {
              title: 'Seca sin fricción',
              text: 'Papel de cocina limpio, dando toques, o deja secar al aire. Una toalla de tela de uso común no entra aquí.',
            },
            {
              title: 'Capa fina de emoliente',
              text: 'Fina de verdad: la piel debe quedar levemente húmeda, no brillante ni pegajosa. El exceso de producto entorpece la cicatrización.',
            },
          ],
          sources: ['eadv-aftercare', 'who-handrub-poster', 'aad-tattoo-care'],
        },
        {
          type: 'video',
          youtubeId: '3PmVJQUCm4E',
          title: 'Cómo lavarse las manos con agua y jabón',
          description:
            'Técnica oficial de la OMS, en 40 a 60 segundos. Es el paso que más protege tu tatuaje en las primeras semanas.',
          sourceId: 'who-handwash-video',
        },
        {
          type: 'alert',
          level: 'urgencia',
          title: 'No uses peróxido de hidrógeno, alcohol o yodo en la zona',
          text: 'Sobre tejido en cicatrización, esos productos resecan e irritan, y entorpecen en vez de ayudar. Agua, jabón suave y un emoliente simple son suficientes.',
          sources: ['aad-wound-care', 'eadv-aftercare'],
        },
      ],
    },
    {
      id: 'rotina',
      title: 'Tu rutina, día a día',
      blocks: [
        {
          type: 'checklist',
          id: 'cliente-aftercare',
          title: 'Lista de verificación de cuidado posterior',
          description:
            'Guardado en tu navegador — puedes cerrar la página y volver después. También se puede imprimir y dejar en el baño.',
          items: [
            {
              id: 'maos',
              label: 'Me lavé las manos antes de tocar el tatuaje.',
              sources: ['eadv-aftercare', 'who-hand-hygiene'],
            },
            {
              id: 'filme',
              label: 'Si estoy usando film, sigue íntegro y sin filtración.',
              detail: 'Una filtración importante de exudado pide cambio.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'lavagem',
              label: 'Lavé suavemente y sequé sin frotar.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'camada-fina',
              label: 'Apliqué una capa fina de emoliente, no una capa gruesa.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
            {
              id: 'nao-cocei',
              label: 'No me rasqué, no arranqué costras ni froté la zona.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sem-imersao',
              label: 'Evité piscina, bañera, sauna, mar y cualquier inmersión.',
              detail: 'Ducharse está bien; quedarse en remojo, no — hasta la cicatrización completa.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'roupa',
              label: 'Usé ropa limpia y holgada sobre la zona.',
              sources: ['eadv-aftercare'],
            },
            {
              id: 'sol',
              label: 'Mantuve la zona fuera del sol.',
              detail:
                'Protector solar de FPS alto solo después de la cicatrización completa — no sobre piel en cicatrización.',
              sources: ['eadv-aftercare', 'aad-tattoo-care'],
            },
          ],
        },
      ],
    },
    {
      id: 'sol-e-longo-prazo',
      title: 'Sol y largo plazo',
      blocks: [
        {
          type: 'paragraph',
          text: 'Mientras cicatriza, la zona se mantiene fuera del sol — cubierta con ropa, no con protector. Una vez completamente cicatrizada, la protección solar de FPS alto pasa a ser la principal medida para preservar el color y el contraste a lo largo de los años.',
          sources: ['eadv-aftercare', 'aad-tattoo-care'],
        },
        {
          type: 'alert',
          level: 'info',
          title: 'La piel tatuada sigue siendo piel',
          text: 'Un cambio en un lunar, un bulto, una zona que pica de forma persistente o cualquier alteración dentro del tatuaje merece una evaluación dermatológica — la tinta no impide, y puede dificultar, la observación de la piel.',
          sources: ['aad-tattoo-care', 'aad-tattoo-reactions'],
        },
      ],
    },
  ],
  sources: [
    'eadv-aftercare',
    'aad-wound-care',
    'aad-tattoo-care',
    'aad-tattoo-reactions',
    'who-hand-hygiene',
    'who-handrub-poster',
    'who-handwash-video',
    'cleveland-aftercare',
  ],
};
