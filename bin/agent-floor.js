#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];
const subcommand = args[1];
const write = args.includes('--write');

const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log('  wrote', path.relative(process.cwd(), destPath));
    }
  }
}

function listDir(src, base) {
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const rel = path.join(base, entry.name);
    if (entry.isDirectory()) {
      listDir(path.join(src, entry.name), rel);
    } else {
      console.log('  would write', rel);
    }
  }
}

if (command === 'setup' && subcommand === 'claude') {
  const templateSrc = path.join(TEMPLATES_DIR, 'claude');
  const targetDir = path.join(process.cwd(), '.claude');

  if (!fs.existsSync(templateSrc)) {
    console.error('Templates not found:', templateSrc);
    process.exit(1);
  }

  if (write) {
    console.log('Setting up agent-floor in', targetDir);
    copyDir(templateSrc, targetDir);
    console.log('\nDone. CRM agent team is ready in .claude/');
    console.log('Open Claude Code in this directory to activate the team.');
  } else {
    console.log('Dry run — files that would be written to .claude/:');
    listDir(templateSrc, '.claude');
    console.log('\nRun with --write to apply.');
  }

} else if (command === 'help' || command === '--help' || command === '-h' || !command) {
  console.log(`
agent-floor — CRM marketing agent team for Claude Code

Commands:
  setup claude           Dry run: show files that would be written
  setup claude --write   Write agent team config to .claude/ in current dir

Options:
  --help    Show this help
`);
} else {
  console.error('Unknown command:', command, subcommand || '');
  console.error('Run agent-floor --help for usage.');
  process.exit(1);
}
