# agent-floor

CRM marketing agent team pro Claude Code — 7 AI agentů s 30 lety zkušeností.

## Instalace

```bash
npm i -g @marecek132/agent-floor
```

Nebo přímo z GitHubu:

```bash
npm i -g github:MarekNovak132/agent-floor
```

## Použití

```bash
# V adresáři projektu — dry run (ukáže co by se zapsalo)
agent-floor setup claude

# Zapsat konfiguraci do .claude/
agent-floor setup claude --write
```

## Co se nainstaluje

Do `.claude/` v aktuálním adresáři:

```
.claude/
├── CLAUDE.md              # hlavní konfigurace týmu
├── learnings.md           # poučení z korekcí
├── prompts/               # prompty pro každého agenta
│   ├── head-of-marketing.md
│   ├── strateg.md
│   ├── crm-specialist.md
│   ├── crm-critic.md
│   ├── crm-technical.md
│   ├── ux-ui.md
│   ├── jinja-specialist.md
│   └── qa-compliance.md
├── skills/
│   ├── bloomreach-jinja2.skill
│   └── crm-technical.skill
└── templates/
    └── qa-table-template.md
```

## Tým agentů

| Agent | Role |
|-------|------|
| Head of Marketing | Koordinace, konsensus loop |
| Strateg | Positioning, messaging (Seth Godin + Hormozi) |
| CRM specialista | Bloomreach scénáře a analytika |
| CRM Critic | User advocacy — "klikl by na to normální člověk?" |
| CRM Technical | Technická implementace v Bloomreach |
| UX/UI specialista | Konverzní design, CTA |
| Jinja specialista | Personalizace a dynamická data |
| QA / Compliance | Poslední brána, QA tabulka |
