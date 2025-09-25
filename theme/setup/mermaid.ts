import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: { 'nodeSpacing': 2, 'rankSpacing': 4 },
    themeCSS: `
    .neoblock > rect{
      stroke: #000 !important;
      stroke-width: 2px !important;
      filter: drop-shadow(4px 4px 0px #000) !important;
    }
    .edgeLabel > p{
      padding: 4px 8px;
      background-color: #F9F5F2 !important;
    }
    .actor {
      stroke: #000;
      stroke-width: 2px;
      fill: #F48487;
    }
    .actor-box > tspan {
      fill: #000 !important;
    }
    .note {
      stroke: #000;
      stroke-width: 2px;
      fill: #00B6B1;
      filter: drop-shadow(4px 4px 0px #000);
    }
    .actor-line, line {
      stroke: #000 !important;
    }
    .actor.actor-top, .actor.actor-bottom {
      filter: drop-shadow(4px 4px 0px #000);
      rx: 0;
      ry: 0;
    }
    .edgeLabel > p, .messageText {
      padding: 4px 8px;
      background-color: #F9F5F2 !important;
    }
      .messageText {
      fill: #000 !important;
    }
    `
  }
})